import * as THREE from "three";
import { STATE, PHYSICS } from "../config.js";
import { samplePath, surfaceNormal, forwardFromHeading, horizontalSpeed, shortestAngle } from "../levels.js";
export function createControlSystem({ input, settings, tempVec3A, tempVec3B, tempVec3C }) {
  function updatePlayerControls(game, racer, dt) {
    const wantsForward = input.forward;
    const wantsBrake = input.brake;
    const headingForward = forwardFromHeading(racer.heading);
    const signedSpeed = racer.velocity.x * headingForward.x + racer.velocity.z * headingForward.z;
    racer.signedForwardSpeed = signedSpeed;

    if (racer.driveMode === "reverse") {
      if (!wantsBrake || wantsForward || signedSpeed > PHYSICS.reverseExitSpeed) {
        racer.driveMode = "forward";
        racer.reverseHoldTimer = 0;
      }
    } else if (wantsBrake && !wantsForward) {
      if (signedSpeed <= PHYSICS.reverseEntrySpeed) {
        racer.reverseHoldTimer += dt;
        if (racer.reverseHoldTimer >= PHYSICS.reverseEngageDelay) racer.driveMode = "reverse";
      } else {
        racer.reverseHoldTimer = 0;
      }
    } else {
      racer.driveMode = "forward";
      racer.reverseHoldTimer = 0;
    }

    racer.throttle = wantsForward && !wantsBrake ? 1 : 0;
    racer.reverseThrottle = racer.driveMode === "reverse" ? 1 : 0;
    racer.brake = wantsBrake && racer.driveMode !== "reverse" ? 1 : 0;
    if (racer.reverseThrottle > 0) racer.throttle = 0;

    if (racer.knockdownTimer > 0 || racer.recoverTimer > 0) {
      racer.throttle = 0;
      racer.reverseThrottle = 0;
      racer.brake = 0;
    }

    const steerRaw = (input.right ? 1 : 0) - (input.left ? 1 : 0);
    racer.targetSteer = steerRaw * settings.sensitivity;
    const speed = horizontalSpeed(racer.velocity);
    const look = samplePath(game.activeLevel, racer.progress + 10 + Math.min(speed * 0.42, 16));
    const pathHeading = Math.atan2(look.forward.x, look.forward.z);
    const assistDelta = shortestAngle(racer.heading, pathHeading);
    const assistStrength = Math.abs(steerRaw) > 0.01 ? 0.16 : 0.34;
    racer.targetSteer += THREE.MathUtils.clamp(assistDelta * 1.15, -0.42, 0.42) * assistStrength;
    racer.targetSteer = THREE.MathUtils.clamp(racer.targetSteer, -1.25, 1.25);
    if (racer.knockdownTimer > 0 || racer.recoverTimer > 0) {
      racer.targetSteer = 0;
    }
  }
  function updateAiControls(game, racer, dt, isMenu, { tryPunch, useItem, findBestPunchTarget }) {

    if (!racer.profile) return;
    if (racer.finished && !isMenu) {
      racer.throttle = 0;
      racer.reverseThrottle = 0;
      racer.brake = 0.45;
      racer.driveMode = "forward";
      racer.reverseHoldTimer = 0;
      racer.targetSteer = 0;
      return;
    }

    const level = game.activeLevel;
    const speed = horizontalSpeed(racer.velocity);
    const headingFwd = forwardFromHeading(racer.heading);

    // === ESCAPE MANEUVER ACTIVE — system.js is handling controls, skip normal AI ===
    if (racer.aiEscapePhase > 0) return;

    // --- Route lane — prefer inner lanes for speed ---
    racer.routeChangeTimer -= dt;
    if (racer.routeChangeTimer <= 0) {
      racer.routeChangeTimer = 0.35 + Math.random() * 0.7;
      const layers = level.routeLayers;
      racer.routeLayer = layers[Math.floor(Math.random() * Math.min(2, layers.length))] ?? 0;
    }

    // =====================================================================
    // 4-POINT PRECISE LOOK-AHEAD STEERING
    // =====================================================================
    const nearDist = 4 + Math.min(speed, 24) * 0.22;
    const midDist = 14 + Math.min(speed, 38) * 0.55;
    const farDist = 35 + Math.min(speed, 42) * 0.80;
    const ultraDist = 65 + Math.min(speed, 46) * 1.0;

    const nearSample = samplePath(level, racer.progress + nearDist);
    const midSample = samplePath(level, racer.progress + midDist);
    const farSample = samplePath(level, racer.progress + farDist);
    const ultraSample = samplePath(level, racer.progress + ultraDist);

    const nearNormal = surfaceNormal(level, nearSample.point.x, nearSample.point.z);
    const nearRight = tempVec3A.crossVectors(nearNormal, nearSample.forward).normalize();
    const nearTarget = tempVec3B.copy(nearSample.point).addScaledVector(nearRight, racer.routeLayer);

    const midNormal = surfaceNormal(level, midSample.point.x, midSample.point.z);
    const midRight = tempVec3A.crossVectors(midNormal, midSample.forward).normalize();
    const midTarget = tempVec3C.copy(midSample.point).addScaledVector(midRight, racer.routeLayer * 0.5);

    const blendedX = nearTarget.x * 0.48 + midTarget.x * 0.28 + farSample.point.x * 0.16 + ultraSample.point.x * 0.08;
    const blendedZ = nearTarget.z * 0.48 + midTarget.z * 0.28 + farSample.point.z * 0.16 + ultraSample.point.z * 0.08;

    // =====================================================================
    // OBSTACLE AVOIDANCE (25m)
    // =====================================================================
    let avoid = 0;
    for (const obstacle of game.obstacles) {
      const dx = obstacle.x - racer.position.x;
      const dz = obstacle.z - racer.position.z;
      const distSq = dx * dx + dz * dz;
      if (distSq > 25 * 25) continue;
      tempVec3A.set(dx, 0, dz);
      const dist = Math.sqrt(distSq);
      if (dist <= 0.01) continue;
      tempVec3A.multiplyScalar(1 / dist);
      const dotFwd = tempVec3A.dot(headingFwd);
      if (dotFwd < 0.25) continue;
      const side = headingFwd.x * tempVec3A.z - headingFwd.z * tempVec3A.x;
      const lateral = Math.abs(side) * dist;
      const obR = obstacle.radius ?? obstacle.halfWidth ?? 1.2;
      if (lateral > obR + 3.2) continue;
      avoid += (side > 0 ? -1 : 1) * (1 - dist / 25) * dotFwd * racer.profile.dodge * 1.6;
    }

    // HAZARD AVOIDANCE (bananas, traps, bombs)
    if (game.hazards) {
      for (const h of game.hazards) {
        const dx = h.position.x - racer.position.x;
        const dz = h.position.z - racer.position.z;
        const dSq = dx * dx + dz * dz;
        if (dSq > 18 * 18) continue;
        tempVec3A.set(dx, 0, dz);
        const d = Math.sqrt(dSq);
        if (d <= 0.01) continue;
        tempVec3A.multiplyScalar(1 / d);
        const dot = tempVec3A.dot(headingFwd);
        if (dot < 0.3) continue;
        const s = headingFwd.x * tempVec3A.z - headingFwd.z * tempVec3A.x;
        if (Math.abs(s) * d > 3.5) continue;
        avoid += (s > 0 ? -1 : 1) * (1 - d / 18) * dot * 2.0 * racer.profile.dodge;
      }
    }

    // =====================================================================
    // ULTRA-PRECISE TRACK BOUNDARY AWARENESS
    // Triggers very early (0.40 of halfWidth) with aggressive correction
    // =====================================================================
    let boundarySteer = 0;
    if (racer.trackDist > level.routeHalfWidth * 0.40 && !racer.isPlayer) {
      const sampled = samplePath(level, racer.progress);
      const toCenter = tempVec3A.set(
        sampled.point.x - racer.position.x, 0,
        sampled.point.z - racer.position.z
      );
      if (toCenter.lengthSq() > 0.01) {
        toCenter.normalize();
        const cHeading = Math.atan2(toCenter.x, toCenter.z);
        const cDelta = shortestAngle(racer.heading, cHeading);
        const edgeRatio = THREE.MathUtils.clamp(
          (racer.trackDist - level.routeHalfWidth * 0.40) / (level.routeHalfWidth * 0.40),
          0, 1
        );
        // Very aggressive correction — overwhelm other steering when near edge
        boundarySteer = THREE.MathUtils.clamp(cDelta * 4.0, -1.8, 1.8) * edgeRatio * edgeRatio;
      }
    }

    // PREDICTIVE BOUNDARY — also check where we'll be in 0.5 seconds
    if (!racer.isPlayer && speed > 5) {
      const futureX = racer.position.x + racer.velocity.x * 0.5;
      const futureZ = racer.position.z + racer.velocity.z * 0.5;
      const futureSample = samplePath(level, racer.progress + speed * 0.5);
      const futureDx = futureX - futureSample.point.x;
      const futureDz = futureZ - futureSample.point.z;
      const futureDist = Math.sqrt(futureDx * futureDx + futureDz * futureDz);
      if (futureDist > level.routeHalfWidth * 0.60) {
        // We're heading off-track — pre-emptive correction
        const corrX = futureSample.point.x - racer.position.x;
        const corrZ = futureSample.point.z - racer.position.z;
        const corrHeading = Math.atan2(corrX, corrZ);
        const corrDelta = shortestAngle(racer.heading, corrHeading);
        const corrRatio = THREE.MathUtils.clamp(
          (futureDist - level.routeHalfWidth * 0.60) / (level.routeHalfWidth * 0.40),
          0, 1
        );
        boundarySteer += THREE.MathUtils.clamp(corrDelta * 3.0, -1.2, 1.2) * corrRatio;
      }
    }

    // CLUSTER AVOIDANCE — prevent AI from getting stuck together (8m range)
    let racerAvoid = 0;
    for (const other of game.racers) {
      if (other === racer || other.respawnTimer > 0 || other.finished) continue;
      const rx = other.position.x - racer.position.x;
      const rz = other.position.z - racer.position.z;
      const rDistSq = rx * rx + rz * rz;
      if (rDistSq > 8 * 8 || rDistSq < 0.01) continue;
      const rDist = Math.sqrt(rDistSq);
      const rDirX = rx / rDist, rDirZ = rz / rDist;
      const rDot = rDirX * headingFwd.x + rDirZ * headingFwd.z;
      const rSide = headingFwd.x * rDirZ - headingFwd.z * rDirX;
      // Avoid racers ahead AND beside (wider detection)
      if (rDot > -0.2) {
        const avoidStrength = (1 - rDist / 8) * 0.7;
        racerAvoid += (rSide > 0 ? -1 : 1) * avoidStrength;
      }
      // Extra push when very close (anti-stuck)
      if (rDistSq < 2.5 * 2.5) {
        racerAvoid += (rSide > 0 ? -1 : 1) * 0.8;
      }
    }

    // --- Final steering: high gain (2.4) for snappy track following ---
    const desiredDx = blendedX - racer.position.x;
    const desiredDz = blendedZ - racer.position.z;
    const desiredHeading = Math.atan2(desiredDx, desiredDz);
    const delta = shortestAngle(racer.heading, desiredHeading);

    racer.targetSteer = THREE.MathUtils.clamp(
      delta * 2.4 + avoid * 1.0 + boundarySteer + racerAvoid,
      -1.40, 1.40
    );

    // =====================================================================
    // CURVATURE + TERRAIN SPEED — MAXIMUM AGGRESSION
    // =====================================================================
    const nearHeading = Math.atan2(nearSample.forward.x, nearSample.forward.z);
    const midHeading = Math.atan2(midSample.forward.x, midSample.forward.z);
    const farHeading = Math.atan2(farSample.forward.x, farSample.forward.z);
    const ultraHeading = Math.atan2(ultraSample.forward.x, ultraSample.forward.z);

    const nearCurv = Math.abs(shortestAngle(nearHeading, midHeading));
    const farCurv = Math.abs(shortestAngle(midHeading, farHeading));
    const ultraCurv = Math.abs(shortestAngle(farHeading, ultraHeading));
    const maxCurv = Math.max(nearCurv, farCurv * 0.65, ultraCurv * 0.35);

    // Apex cutting — tighten line in curves
    if (maxCurv > 0.15 && !isMenu) {
      const curveSign = shortestAngle(nearHeading, farHeading) > 0 ? -1 : 1;
      racer.targetSteer += curveSign * maxCurv * 0.45;
    }

    // =====================================================================
    // PREDICTIVE SHARP TURN PRE-STEER — anticipate upcoming sharp curves
    // =====================================================================
    if (farCurv > 0.25 && speed > 15) {
      // Sharp turn coming at far distance — apply extra pre-steer now
      const turnSign = shortestAngle(midHeading, farHeading) > 0 ? -1 : 1;
      racer.targetSteer += turnSign * (farCurv - 0.25) * 1.2;
    }
    if (ultraCurv > 0.20 && speed > 20) {
      // Ultra-far sharp turn warning — gentle early preparation
      const uTurnSign = shortestAngle(farHeading, ultraHeading) > 0 ? -1 : 1;
      racer.targetSteer += uTurnSign * (ultraCurv - 0.20) * 0.6;
    }

    // Slope detection
    const aheadH = level.heightFn(
      racer.position.x + headingFwd.x * 3, racer.position.z + headingFwd.z * 3
    );
    const behindH = level.heightFn(
      racer.position.x - headingFwd.x * 3, racer.position.z - headingFwd.z * 3
    );
    const downhillBonus = Math.max(0, -(aheadH - behindH) / 6) * 4.0;

    // DRAFTING
    let draftBonus = 0;
    for (const other of game.racers) {
      if (other === racer || other.respawnTimer > 0) continue;
      const dx = other.position.x - racer.position.x;
      const dz = other.position.z - racer.position.z;
      const distSq = dx * dx + dz * dz;
      if (distSq > 10 * 10 || distSq < 0.5) continue;
      const dist = Math.sqrt(distSq);
      tempVec3A.set(dx / dist, 0, dz / dist);
      if (tempVec3A.dot(headingFwd) > 0.7) {
        draftBonus = Math.max(draftBonus, (1 - dist / 10) * 2.8);
      }
    }

    const playerProgress = game.player ? game.player.globalProgress : racer.globalProgress;
    const diff = racer.globalProgress - playerProgress;

    let desiredSpeed = level.baseAiSpeed * racer.profile.speedBias;
    desiredSpeed += THREE.MathUtils.clamp(-diff * 0.10, -2.0, 12.0);
    desiredSpeed += racer.paceBoostTimer > 0 ? 4.0 : 0;
    desiredSpeed += downhillBonus + draftBonus;
    desiredSpeed -= maxCurv * 6.0;
    desiredSpeed -= Math.abs(delta) * 2.5;
    if (racer.profile.key === "Sprinter" && maxCurv < 0.12) desiredSpeed += 5.0;
    if (racer.profile.key === "Racer" && nearCurv < 0.08 && farCurv > 0.15) desiredSpeed += 2.5;

    // OFF-TRACK SPEED REDUCTION — slow down when near edge to prevent flying off
    if (racer.trackDist > level.routeHalfWidth * 0.60) {
      const edgePenalty = THREE.MathUtils.clamp(
        (racer.trackDist - level.routeHalfWidth * 0.60) / (level.routeHalfWidth * 0.30),
        0, 1
      );
      desiredSpeed -= edgePenalty * 8.0;
    }

    // LATE-RACE URGENCY
    if (!isMenu && level.totalLength > 0) {
      const completion = racer.globalProgress / level.totalLength;
      if (completion > 0.70 && diff < 0) {
        desiredSpeed += THREE.MathUtils.clamp((completion - 0.70) * 14, 0, 4.0);
      }
    }

    desiredSpeed = THREE.MathUtils.clamp(desiredSpeed, 15, 55);

    // =====================================================================
    // HUMAN-LIKE THROTTLE + BRAKE — brake into sharp turns, steer, re-accelerate
    // =====================================================================
    racer.reverseThrottle = 0;
    racer.driveMode = "forward";
    racer.reverseHoldTimer = 0;

    // How well is the AI's heading aligned with the track?
    const headingError = Math.abs(delta);
    // Is a sharp turn coming up?
    const sharpTurnAhead = farCurv > 0.25 || maxCurv > 0.30;

    if (sharpTurnAhead && speed > desiredSpeed * 0.7) {
      // SHARP TURN — brake + steer simultaneously (human-like)
      const brakePower = THREE.MathUtils.clamp(maxCurv * 1.5 - 0.2, 0.1, 0.55);
      racer.brake = brakePower;
      racer.throttle = headingError < 0.3 ? 0.8 : 0.3; // partial throttle while braking
    } else if (headingError > 0.5 && speed > 20) {
      // HEADING MISALIGNED — reduce throttle until aligned
      racer.throttle = THREE.MathUtils.clamp(1.0 - (headingError - 0.5) * 1.5, 0.4, 1.0);
      racer.brake = headingError > 0.8 ? 0.2 : 0;
    } else {
      // ALIGNED + STRAIGHT — full throttle, no brake
      racer.throttle = 1;
      racer.brake = 0;
    }

    // After correcting angle and heading is now aligned → re-accelerate
    if (headingError < 0.15 && !sharpTurnAhead) {
      racer.throttle = 1;
      racer.brake = 0;
    }

    // RECOVERY BOOST — full throttle + align to track
    if (racer.recoverTimer > 0 && racer.recoverTimer < 0.4) {
      racer.throttle = 1;
      racer.brake = 0;
      const recSample = samplePath(level, racer.progress + 8);
      const recHeading = Math.atan2(recSample.forward.x, recSample.forward.z);
      racer.targetSteer = THREE.MathUtils.clamp(shortestAngle(racer.heading, recHeading) * 3.0, -1.3, 1.3);
    }

    // Knocked down — only zero in first half; steer in second half for pre-recovery
    if (racer.knockdownTimer > 0) {
      if (racer.knockdownTimer > 0.3) {
        racer.throttle = 0;
        racer.reverseThrottle = 0;
        racer.brake = 0;
        racer.targetSteer = 0;
      } else {
        // Late knockdown — pre-align heading toward track
        const preRecSample = samplePath(level, racer.progress + 6);
        const preRecHeading = Math.atan2(preRecSample.forward.x, preRecSample.forward.z);
        racer.targetSteer = THREE.MathUtils.clamp(
          shortestAngle(racer.heading, preRecHeading) * 2.0, -1.0, 1.0
        );
        racer.throttle = 0.3;
        racer.reverseThrottle = 0;
        racer.brake = 0;
      }
    }

    // === AIR CONTROL — steer even when airborne ===
    if (!racer.grounded && racer.knockdownTimer <= 0 && speed > 3) {
      // Maintain steering toward track during jumps/air time
      const airSample = samplePath(level, racer.progress + speed * 0.6);
      const airHeading = Math.atan2(airSample.forward.x, airSample.forward.z);
      const airDelta = shortestAngle(racer.heading, airHeading);
      racer.targetSteer = THREE.MathUtils.clamp(airDelta * 2.0, -1.2, 1.2);
      racer.throttle = 1;
    }

    // =====================================================================
    // TACTICAL COMBAT & ITEM USAGE
    // =====================================================================
    if (!isMenu && game.state === STATE.RACING) {
      // 3-SECOND ATTACK BAN (correct timing via racingStartTime)
      if ((game.raceElapsed - game.racingStartTime) < 3.0) return;

      const isBehind = diff < 0;

      // SPEED-BASED ATTACK SUPPRESSION — don't punch when nearly stationary
      const attackSpeedMult = speed < 5 ? 0.05 : speed < 12 ? 0.4 : 1.0;

      // PLAYER-FOCUSED PUNCHING
      const rival = findBestPunchTarget(game, racer, 3.2);
      if (rival) {
        let punchChance;
        if (rival.isPlayer) {
          punchChance = 0.010 + racer.profile.aggression * 0.020 + (isBehind ? 0.012 : 0);
        } else {
          punchChance = (0.001 + racer.profile.aggression * 0.002) * 0.12;
        }
        punchChance *= attackSpeedMult;
        punchChance += racer.punchCooldown <= 0 ? 0.004 * attackSpeedMult : 0;
        if (Math.random() < punchChance) {
          if (tryPunch(game, racer)) racer.paceBoostTimer = 1.5;
        }
      }

      // TACTICAL ITEM USAGE
      if (racer.itemType && racer.itemCooldown <= 0) {
        const item = racer.itemType;
        const playerNearby = game.player && !game.player.finished &&
          ((racer.position.x - game.player.position.x) ** 2 +
            (racer.position.z - game.player.position.z) ** 2) < 30 * 30;

        let useChance;
        if (isBehind) {
          if (item === "turbo" || item === "bash") useChance = 0.055;
          else if (item === "shock" || item === "bomb") useChance = playerNearby ? 0.045 : 0.025;
          else useChance = 0.025;
        } else {
          if (item === "trap" || item === "banana") useChance = 0.042;
          else if (item === "shield") useChance = 0.040;
          else if (item === "shock" || item === "bomb") useChance = playerNearby ? 0.038 : 0.018;
          else useChance = 0.015;
        }

        if (racer.profile.key === "Trickster") useChance *= 1.8;
        if (racer.profile.key === "Defender") useChance *= 0.5;

        if (Math.random() < useChance) useItem(game, racer);
      }
    }
  }

  return {
    updatePlayerControls,
    updateAiControls,
  };
}
