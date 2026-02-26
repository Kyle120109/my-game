import * as THREE from "three";
import { STATE, GRAVITY, BIKE_CLEARANCE, PHYSICS } from "../config.js";
import { samplePath, projectProgressNear, surfaceNormal, horizontalSpeed, forwardFromHeading, shortestAngle, damp } from "../levels.js";
import { RagdollSystem } from "./ragdoll.js";
export function createPhysicsSystem({ input, fx, setRaceMessage, tempVec3A, tempVec3B, tempVec3C, tempVec3D, tempVec3E, applyKnockdown, triggerRespawn, tryCollectItem, getProjectionSegmentRadius }) {
  function updateRacerPhysics(game, racer, dt, isMenu) {
    if (!racer.ragdoll) {
      racer.ragdoll = new RagdollSystem(racer, game.scene);
    }

    // Ragdoll takes over visual positioning if active
    if (racer.ragdoll && racer.ragdoll.active) {
      racer.ragdoll.update(dt, game.activeLevel);
    }

    racer.prevPosition.copy(racer.position);
    const speed = horizontalSpeed(racer.velocity);
    racer.steer = damp(racer.steer, racer.targetSteer, racer.grounded ? 12 : 4.5, dt);
    if (Math.abs(racer.targetSteer) < 0.03) racer.steer = damp(racer.steer, 0, racer.grounded ? 18 : 7, dt);

    const steerAuthority = THREE.MathUtils.clamp(1.12 - speed * 0.02, 0.26, 1.08);
    racer.heading += racer.steer * steerAuthority * (racer.grounded ? 2.6 : 1.12) * dt;

    const headingForward = forwardFromHeading(racer.heading);
    const forward = headingForward.clone();
    let right = tempVec3A.set(forward.z, 0, -forward.x);
    const accel = tempVec3B.set(0, 0, 0);

    if (racer.grounded) {
      const normal = surfaceNormal(game.activeLevel, racer.position.x, racer.position.z);
      forward.copy(headingForward).addScaledVector(normal, -headingForward.dot(normal));
      if (forward.lengthSq() < 0.0001) forward.copy(headingForward);
      forward.normalize();
      tempVec3D.set(forward.x, 0, forward.z);
      if (tempVec3D.lengthSq() < 0.0001) tempVec3D.copy(headingForward);
      tempVec3D.normalize();
      forward.copy(tempVec3D);
      right = tempVec3A.set(forward.z, 0, -forward.x);

      const sampleDist = 2.4;
      const aheadH = game.activeLevel.heightFn(racer.position.x + forward.x * sampleDist, racer.position.z + forward.z * sampleDist);
      const behindH = game.activeLevel.heightFn(racer.position.x - forward.x * sampleDist, racer.position.z - forward.z * sampleDist);
      const grade = (aheadH - behindH) / (sampleDist * 2);

      const uphillPenalty = THREE.MathUtils.clamp(1 - Math.max(0, grade) * 1.05, 0.56, 1.14);
      const downhillBonus = THREE.MathUtils.clamp(1 + Math.max(0, -grade) * 0.58, 1, 1.42);
      const boostFactor = racer.boostTimer > 0 ? 1.36 : 1;
      const shieldDrive = racer.shieldTimer > 0 ? 1.08 : 1;
      const downStateFactor = (racer.knockdownTimer > 0 || racer.recoverTimer > 0) ? 0 : 1;
      const driveForce = (racer.isPlayer ? PHYSICS.playerDriveForce : PHYSICS.aiDriveForce) * uphillPenalty * downhillBonus * boostFactor * shieldDrive * downStateFactor;
      accel.addScaledVector(forward, racer.throttle * driveForce);
      if (racer.reverseThrottle > 0) {
        accel.addScaledVector(forward, -racer.reverseThrottle * driveForce * PHYSICS.reverseDriveScale);
      }

      if (racer.brake > 0) {
        tempVec3D.set(racer.velocity.x, 0, racer.velocity.z);
        const len = tempVec3D.length();
        if (len > 0.001) {
          tempVec3D.multiplyScalar(1 / len);
          accel.addScaledVector(tempVec3D, -racer.brake * PHYSICS.brakeForce);
        }
      }
      if (racer.reverseThrottle <= 0) {
        const forwardSpeed = racer.velocity.dot(forward);
        if (forwardSpeed < -PHYSICS.reverseEntrySpeed) {
          const recovery = Math.min(PHYSICS.brakeForce * 0.9, -forwardSpeed * 6.2);
          accel.addScaledVector(forward, recovery);
        }
      }

      tempVec3D.set(0, -GRAVITY, 0);
      const projected = tempVec3E.copy(normal).multiplyScalar(tempVec3D.dot(normal));
      tempVec3D.sub(projected);
      accel.addScaledVector(tempVec3D, 1.02);

      const lateral = racer.velocity.dot(right);
      const grip = THREE.MathUtils.clamp(10.5 - speed * 0.08, 4.8, 10.5);
      accel.addScaledVector(right, -lateral * grip);

      tempVec3D.set(racer.velocity.x, 0, racer.velocity.z);
      accel.addScaledVector(tempVec3D, -(PHYSICS.baseDrag + speed * PHYSICS.speedDragFactor));

      const proj = projectProgressNear(
        game.activeLevel,
        racer.position.x,
        racer.position.z,
        racer.prevProgress ?? racer.progress,
        getProjectionSegmentRadius(game.activeLevel.id)
      );
      const dist = Math.sqrt(proj.distSq);
      if (dist > game.activeLevel.routeHalfWidth * 0.72) {
        const sidePenalty = THREE.MathUtils.clamp(
          (dist - game.activeLevel.routeHalfWidth * 0.72) / (game.activeLevel.routeHalfWidth * 1.02),
          0,
          1.0
        );
        const sampled = samplePath(game.activeLevel, proj.s);
        tempVec3D.copy(sampled.point).sub(racer.position).setY(0);
        if (tempVec3D.lengthSq() > 0.0001) {
          tempVec3D.normalize();
          accel.addScaledVector(tempVec3D, PHYSICS.sideForce * sidePenalty);
        }
        accel.addScaledVector(tempVec3E.set(racer.velocity.x, 0, racer.velocity.z), -PHYSICS.sideDamping * sidePenalty);
        if (!isMenu && dist > game.activeLevel.routeHalfWidth * 0.9) {
          const mudRatio = THREE.MathUtils.clamp(
            (dist - game.activeLevel.routeHalfWidth * 0.9) / (game.activeLevel.routeHalfWidth * 0.9),
            0,
            1
          );
          // AI gets 50% less mud slowdown to help them escape faster
          const mudSlowFactor = racer.isPlayer ? PHYSICS.mudSlowdown : PHYSICS.mudSlowdown * 0.5;
          const mudSlow = 1 - mudRatio * mudSlowFactor;
          racer.velocity.x *= mudSlow;
          racer.velocity.z *= mudSlow;
          racer.mudFxTimer -= dt;
          if (racer.mudFxTimer <= 0 && racer.grounded) {
            racer.mudFxTimer = PHYSICS.mudDustInterval;
            fx.spawnBurst(game, racer.position, 0xb9956e, 4, 0.36, 1.8 + mudRatio * 1.2);
          }
        }
        if (dist > game.activeLevel.routeHalfWidth * PHYSICS.offTrackRespawnFactor && !isMenu) triggerRespawn(game, racer, "偏离赛道");
      } else {
        racer.mudFxTimer = 0;
      }
    } else {
      accel.set(0, -GRAVITY, 0);
      tempVec3D.set(racer.velocity.x, 0, racer.velocity.z);
      accel.addScaledVector(tempVec3D, -0.08);
      if (racer.isPlayer && game.state === STATE.RACING) {
        const pitchInput = (input.forward ? 1 : 0) - (input.brake ? 1 : 0);
        const rollInput = (input.right ? 1 : 0) - (input.left ? 1 : 0);
        racer.airPitch = THREE.MathUtils.clamp(racer.airPitch + pitchInput * dt * 1.9, -0.9, 0.9);
        racer.airRoll = THREE.MathUtils.clamp(racer.airRoll + rollInput * dt * 2.1, -1.15, 1.15);
      }
      racer.airPitch *= Math.exp(-dt * 1.8);
      racer.airRoll *= Math.exp(-dt * 1.5);
      racer.heading += racer.steer * 0.26 * dt;
    }

    racer.velocity.addScaledVector(accel, dt);
    if (racer.grounded) {
      const forwardSpeed = racer.velocity.dot(forward);
      const sideSpeed = racer.velocity.dot(right);
      const keepSide = sideSpeed * Math.exp(-dt * (racer.isPlayer ? 16 : 13));
      const keepForward = Math.max(-PHYSICS.reverseMaxSpeed, forwardSpeed);
      racer.velocity.x = forward.x * keepForward + right.x * keepSide;
      racer.velocity.z = forward.z * keepForward + right.z * keepSide;

      const planarSpeed = Math.hypot(racer.velocity.x, racer.velocity.z);
      if (planarSpeed > 3) {
        const velHeading = Math.atan2(racer.velocity.x, racer.velocity.z);
        const alignStrength = THREE.MathUtils.clamp(0.95 - Math.abs(racer.steer) * 0.5, 0.2, 0.95);
        racer.heading += shortestAngle(racer.heading, velHeading) * alignStrength * dt;
      }
    }

    const horiz = tempVec3C.set(racer.velocity.x, 0, racer.velocity.z);
    const maxSpeed = (racer.grounded ? racer.baseTopSpeed : racer.baseTopSpeed + PHYSICS.airTopSpeedBonus) * (racer.boostTimer > 0 ? PHYSICS.boostTopSpeedScale : 1);
    if (horiz.length() > maxSpeed) {
      horiz.setLength(maxSpeed);
      racer.velocity.x = horiz.x;
      racer.velocity.z = horiz.z;
    }

    racer.position.addScaledVector(racer.velocity, dt);
    maybeLaunchFromRamp(game, racer);
    maybeApplyBoostPad(game, racer);
    tryCollectItem(game, racer);
    handleObstacleCollisions(game, racer);
    checkOutBoundsAndFalls(game, racer, isMenu);

    const ground = game.activeLevel.heightFn(racer.position.x, racer.position.z) + BIKE_CLEARANCE;
    const groundGap = racer.position.y - ground;
    const stickRange = racer.grounded ? 1.1 : 0.52;
    const skipGroundSnap = racer.rampLaunchGrace > 0 && racer.velocity.y > 0.35 && groundGap > -0.08;
    if (!skipGroundSnap && groundGap <= stickRange) {
      const impact = Math.max(0, -racer.velocity.y);
      const follow = groundGap <= 0 ? 1 : 1 - Math.exp(-dt * 16);
      racer.position.y = THREE.MathUtils.lerp(racer.position.y, ground, follow);
      racer.grounded = true;
      if (racer.velocity.y < 0) racer.velocity.y = 0;
      else racer.velocity.y *= 0.2;
      if (impact > 16 && game.state !== STATE.MENU) {
        racer.stunTimer = Math.max(racer.stunTimer, 0.22);
        racer.velocity.x *= 0.96;
        racer.velocity.z *= 0.96;
      } else if (impact > 8 && game.state !== STATE.MENU) {
        racer.stunTimer = Math.max(racer.stunTimer, 0.16);
      }
    } else {
      racer.grounded = false;
    }

    racer.prevProgress = racer.progress;
    const finalProj = projectProgressNear(
      game.activeLevel,
      racer.position.x,
      racer.position.z,
      racer.prevProgress ?? racer.progress,
      getProjectionSegmentRadius(game.activeLevel.id)
    );
    racer.progress = finalProj.s;
    racer.trackDist = Math.sqrt(finalProj.distSq);
    racer.globalProgress = game.activeLevel.loop ? racer.lap * game.activeLevel.totalLength + racer.progress : racer.progress;
    racer.topSpeedReached = Math.max(racer.topSpeedReached, horizontalSpeed(racer.velocity) * 3.6);
  }
  function maybeLaunchFromRamp(game, racer) {
    if (!racer.grounded || racer.knockdownTimer > 0) return;
    const speed = horizontalSpeed(racer.velocity);
    if (speed < PHYSICS.rampMinApproachSpeed) return;

    for (const ramp of game.ramps) {
      if (game.simTime - racer.lastRampAt < PHYSICS.rampTriggerCooldown && racer.lastRampId === ramp.id) continue;
      const dx = racer.position.x - ramp.x;
      const dz = racer.position.z - ramp.z;
      const lx = dx * ramp.right.x + dz * ramp.right.z;
      const lz = dx * ramp.forward.x + dz * ramp.forward.z;
      if (Math.abs(lx) > ramp.width * 0.58 || Math.abs(lz) > ramp.length * 0.6) continue;
      const approachSpeed = racer.velocity.x * ramp.forward.x + racer.velocity.z * ramp.forward.z;
      if (approachSpeed < PHYSICS.rampMinApproachSpeed) continue;
      racer.velocity.y = Math.max(racer.velocity.y, PHYSICS.rampMinLaunchVelocity, ramp.launch + approachSpeed * 0.11);
      racer.velocity.addScaledVector(ramp.forward, ramp.boost + Math.max(0, approachSpeed - PHYSICS.rampMinApproachSpeed) * 0.03);
      racer.grounded = false;
      racer.lastRampAt = game.simTime;
      racer.lastRampId = ramp.id;
      racer.rampLaunchGrace = Math.max(racer.rampLaunchGrace, PHYSICS.rampLaunchGraceDuration);
      if (racer.isPlayer && game.state === STATE.RACING) {
        setRaceMessage(game, "BIG AIR", 0.7);
        if (game.simTime - game.lastBigAirSoundAt > PHYSICS.rampSoundCooldown) {
          fx.playBoostSound(game);
          game.lastBigAirSoundAt = game.simTime;
        }
        fx.spawnBurst(game, racer.position, 0xfff4bd, 16, 1.2, 6.8);
      }
      break;
    }
  }
  function maybeApplyBoostPad(game, racer) {
    if (!racer.grounded) return;
    for (const pad of game.boostPads) {
      const dx = racer.position.x - pad.x;
      const dz = racer.position.z - pad.z;
      const lx = dx * pad.right.x + dz * pad.right.z;
      const lz = dx * pad.forward.x + dz * pad.forward.z;
      if (Math.abs(lx) > pad.width * 0.5 || Math.abs(lz) > pad.length * 0.54) continue;
      if (game.simTime - racer.lastBoostAt < 0.75) continue;
      racer.lastBoostAt = game.simTime;
      racer.velocity.addScaledVector(pad.forward, pad.power);
      racer.boostTimer = Math.max(racer.boostTimer, 1.05);
      if (racer.isPlayer && game.state === STATE.RACING) {
        setRaceMessage(game, "BOOST!", 0.6);
        fx.playBoostSound(game);
        fx.spawnBurst(game, racer.position, 0x66fffa, 14, 1, 5.4);
      }
    }
  }
  function handleObstacleCollisions(game, racer) {
    for (const obstacle of game.obstacles) {
      const isSoft = obstacle.type === "tree" || obstacle.type === "prop" || obstacle.type === "decor";
      const isEdge = obstacle.type === "edge";
      const riderRadius = isSoft ? 0.64 : isEdge ? 0.7 : 0.82;
      const riderHalfHeight = 0.95;

      let nx = 0;
      let nz = 0;
      let overlap = 0;
      let colliding = false;

      if (obstacle.shape === "box") {
        const halfHeight = obstacle.halfHeight ?? obstacle.height ?? 1;
        if (Math.abs(racer.position.y - obstacle.y) > halfHeight + riderHalfHeight) continue;
        const dx = racer.position.x - obstacle.x;
        const dz = racer.position.z - obstacle.z;
        const lx = dx * obstacle.right.x + dz * obstacle.right.z;
        const lz = dx * obstacle.forward.x + dz * obstacle.forward.z;
        const boundX = obstacle.halfWidth + riderRadius;
        const boundZ = obstacle.halfLength + riderRadius;
        if (Math.abs(lx) > boundX || Math.abs(lz) > boundZ) continue;

        const penX = boundX - Math.abs(lx);
        const penZ = boundZ - Math.abs(lz);
        if (penX < penZ) {
          const sign = lx >= 0 ? 1 : -1;
          nx = obstacle.right.x * sign;
          nz = obstacle.right.z * sign;
          overlap = penX;
        } else {
          const sign = lz >= 0 ? 1 : -1;
          nx = obstacle.forward.x * sign;
          nz = obstacle.forward.z * sign;
          overlap = penZ;
        }
        colliding = overlap > 0;
      } else {
        const halfHeight = obstacle.height ?? 1;
        if (Math.abs(racer.position.y - obstacle.y) > halfHeight + riderHalfHeight) continue;
        const dx = racer.position.x - obstacle.x;
        const dz = racer.position.z - obstacle.z;
        const distSq = dx * dx + dz * dz;
        const minDist = (obstacle.radius ?? 1) + riderRadius;
        if (distSq >= minDist * minDist) continue;
        const dist = Math.sqrt(Math.max(0.0001, distSq));
        nx = dx / dist;
        nz = dz / dist;
        overlap = minDist - dist;
        colliding = true;
      }

      if (!colliding) continue;
      if (isEdge) overlap = Math.min(overlap, 0.28);
      racer.position.x += nx * overlap;
      racer.position.z += nz * overlap;
      const hitSpeed = racer.velocity.x * nx + racer.velocity.z * nz;
      if (hitSpeed < 0) {
        const shieldScale = racer.shieldTimer > 0 ? 0.52 : 1;
        const bounce = isSoft ? 0.8 : isEdge ? 0.58 : 0.98;
        const slow = isSoft ? 0.95 : isEdge ? 0.985 : 0.86;
        racer.velocity.x -= hitSpeed * nx * bounce * shieldScale;
        racer.velocity.z -= hitSpeed * nz * bounce * shieldScale;
        racer.velocity.multiplyScalar(slow);
        if (isEdge) continue;
        const impactPower = Math.abs(hitSpeed) * (obstacle.crashWeight ?? 1.1) * shieldScale;
        const knockdownThreshold = isSoft ? 19 : 15.5;
        if (impactPower > knockdownThreshold && game.state !== STATE.MENU) {
          applyKnockdown(game, racer, tempVec3A.set(nx, 0, nz), THREE.MathUtils.clamp(impactPower / 20, 0.6, 1.2), false);
        }
      }
    }
  }
  function checkOutBoundsAndFalls(game, racer, isMenu) {
    const bounds = game.activeLevel.bounds;
    const out =
      racer.position.x < bounds.minX - 4 ||
      racer.position.x > bounds.maxX + 4 ||
      racer.position.z < bounds.minZ - 4 ||
      racer.position.z > bounds.maxZ + 4;
    if (out && !isMenu) {
      triggerRespawn(game, racer, "越界");
      return;
    }
    const terrain = game.activeLevel.heightFn(racer.position.x, racer.position.z);
    if (racer.position.y < terrain - 64 && !isMenu) triggerRespawn(game, racer, "坠落");
  }
  return {
    updateRacerPhysics,
  };
}
