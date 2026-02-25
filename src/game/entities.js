import * as THREE from "three";
import { AI_PROFILES, BIKE_CLEARANCE, BOT_NAMES, FIXED_DT, PLAYER_NAME, PUNCH_ANIM_TIME, PHYSICS } from "./config.js";
import { surfaceNormal, projectProgress, forwardFromHeading, horizontalSpeed, damp } from "./levels.js";
import { AnimationStateMachine } from "./gameplay/anim-state-machine.js";
import { solveTwoBoneIK } from "./gameplay/ik.js";

// [MODULE] entities: 实体定义（玩家/AI 载具）+ 可视动画。


export function createEntitiesSystem({ modelLibrary }) {
  const tempVec3A = new THREE.Vector3();
  const tempVec3B = new THREE.Vector3();
  const tempMat4 = new THREE.Matrix4();
  const tempQuat = new THREE.Quaternion();
  const tempEuler = new THREE.Euler();
  const tempYawQuat = new THREE.Quaternion();
  const WHEEL_RADIUS = 0.49;

  function pickUniqueBotNames(requestedCount) {
    const pool = [...BOT_NAMES];
    for (let i = pool.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, Math.max(0, Math.min(requestedCount, pool.length)));
  }

  function spawnRacers(game, count, allAi) {
    game.racers = [];
    game.racerRoot.clear();

    const includePlayer = !allAi;
    const requestedTotal = Math.max(1, Math.floor(count));
    const requestedBotCount = Math.max(0, requestedTotal - (includePlayer ? 1 : 0));
    const botNames = pickUniqueBotNames(requestedBotCount);
    const totalCount = (includePlayer ? 1 : 0) + botNames.length;

    const start = game.activeLevel.pathPoints[0];
    const next = game.activeLevel.pathPoints[1] ?? game.activeLevel.pathPoints[0];
    const heading = Math.atan2(next.x - start.x, next.z - start.z);
    const forward = forwardFromHeading(heading);
    const normal = surfaceNormal(game.activeLevel, start.x, start.z);
    const right = tempVec3A.crossVectors(normal, forward).normalize();
    const checkpointCount = Math.max(1, game.checkpointMeshes?.length ?? game.activeLevel.pathPoints.length);

    let aiLaneIndex = 0;

    for (let i = 0; i < totalCount; i += 1) {
      const isPlayer = includePlayer && i === 0;
      const botName = isPlayer ? null : botNames[includePlayer ? i - 1 : i];
      const color = isPlayer ? 0xf7c64a : new THREE.Color().setHSL((i * 0.15 + 0.1) % 1, 0.68, 0.52).getHex();
      const profile = isPlayer ? null : AI_PROFILES[Math.floor(Math.random() * AI_PROFILES.length)];
      const racer = createRacer(i, isPlayer, color, profile, botName);

      let lane;
      let rowOffset;
      if (isPlayer) {
        lane = 0;
        rowOffset = -5.2;
      } else {
        const slot = aiLaneIndex + 1;
        const side = slot % 2 === 0 ? 1 : -1;
        const ring = Math.ceil(slot / 2);
        lane = side * ring * 1.75;
        rowOffset = -1.2 - ring * 1.15 + (slot % 3 === 0 ? -0.35 : 0.18);
        aiLaneIndex += 1;
      }

      const pos = start.clone().addScaledVector(right, lane).addScaledVector(forward, rowOffset);
      racer.position.copy(pos);
      racer.position.y = game.activeLevel.heightFn(pos.x, pos.z) + BIKE_CLEARANCE;
      racer.heading = heading;
      racer.startHeading = heading;
      racer.startGridPosition.copy(racer.position);
      racer.velocity.set(0, 0, 0);
      racer.checkpoint = 0;
      racer.nextCheckpoint = checkpointCount > 1 ? 1 : 0;
      racer.progress = projectProgress(game.activeLevel, pos.x, pos.z).s;
      racer.prevProgress = racer.progress;
      racer.globalProgress = racer.progress;
      racer.trackDist = 0;
      racer.prevPosition.copy(racer.position);
      racer.routeLayer = isPlayer ? 0 : game.activeLevel.routeLayers[Math.floor(Math.random() * game.activeLevel.routeLayers.length)];
      racer.routeChangeTimer = 1.2 + Math.random() * 1.8;
      racer.baseTopSpeed = 44 + Math.random() * 2.2;

      updateRacerVisual(game, racer, FIXED_DT);
      game.racerRoot.add(racer.group);
      game.racers.push(racer);
    }

    game.player = game.racers.find((entry) => entry.isPlayer) ?? game.racers[0] ?? null;
  }

  function createRacer(index, isPlayer, color, profile, botName = null) {
    const model = modelLibrary.createRacerModel({ color, isPlayer });
    const racer = {
      id: index,
      name: isPlayer ? PLAYER_NAME : botName ?? "机器人",
      profile,
      isPlayer,
      group: model.group,
      alignRoot: model.alignRoot,
      bikeRoot: model.bikeRoot,
      riderRoot: model.riderRoot,
      handleBarRoot: model.handleBarRoot,
      forkPivot: model.forkPivot,
      rearSwingPivot: model.rearSwingPivot,
      shockPivot: model.shockPivot,
      rearWheel: model.rearWheelSpin ?? model.rearWheel,
      frontWheel: model.frontWheelSpin ?? model.frontWheel,
      shieldOrbs: model.shieldOrbs,
      crankRoot: model.crankRoot,
      gripL: model.gripL,
      gripR: model.gripR,
      rig: model.rig,
      position: new THREE.Vector3(),
      velocity: new THREE.Vector3(),
      heading: 0,
      startHeading: 0,
      startGridPosition: new THREE.Vector3(),
      targetSteer: 0,
      steer: 0,
      throttle: 0,
      reverseThrottle: 0,
      brake: 0,
      driveMode: "forward",
      reverseHoldTimer: 0,
      signedForwardSpeed: 0,
      grounded: true,
      checkpoint: 0,
      nextCheckpoint: 0,
      pendingRespawnCheckpoint: null,
      checkpointMissWarned: false,
      lap: 0,
      finished: false,
      finishTime: null,
      progress: 0,
      globalProgress: 0,
      routeLayer: 0,
      routeChangeTimer: 0,
      paceBoostTimer: 0,
      punchCooldown: Math.random() * 1,
      punchTimer: 0,
      itemType: null,
      itemCooldown: 0,
      boostTimer: 0,
      shieldTimer: 0,
      shieldHits: 0,
      stunTimer: 0,
      knockdownTimer: 0,
      recoverTimer: 0,
      downSide: Math.random() < 0.5 ? -1 : 1,
      itemHitCooldown: 0,
      respawnTimer: 0,
      respawnBlink: 0,
      airPitch: 0,
      airRoll: 0,
      wheelSpin: 0,
      pedalPhase: Math.random() * Math.PI * 2,
      topSpeedReached: 0,
      hits: 0,
      baseTopSpeed: 42,
      lastBoostAt: -99,
      prevProgress: 0,
      trackDist: 0,
      prevPosition: new THREE.Vector3(),
      lastRampAt: -99,
      lastRampId: -1,
      rampLaunchGrace: 0,
      stealthTeleportCooldown: 0,
      stealthTeleportCount: 0,
      stealthBehindTimer: 0,
      aiStuckTimer: 0,
      aiLastProgress: 0,
      aiEscapePhase: 0,
      trailTimer: 0,
      mudFxTimer: 0,
      // --- NEW SUSPENSION STATE ---
      suspension: {
        frontCompression: 0,
        rearCompression: 0,
        frontVelocity: 0,
        rearVelocity: 0
      }
    };
    racer.animState = new AnimationStateMachine(racer);

    // Defer ragdoll instantiation to game loop because it needs 'game'/'scene' context, 
    // or just attach null for now. We'll init it in physics.js.
    racer.ragdoll = null;

    return racer;
  }

  function updateRacerVisual(game, racer, dt = FIXED_DT) {
    racer.group.position.copy(racer.position);
    const speed = horizontalSpeed(racer.velocity);
    const wheelForward = forwardFromHeading(racer.heading);
    const signedWheelSpeed = Number.isFinite(racer.signedForwardSpeed)
      ? racer.signedForwardSpeed
      : racer.velocity.x * wheelForward.x + racer.velocity.z * wheelForward.z;
    const wheelDelta = (signedWheelSpeed / WHEEL_RADIUS) * dt;
    racer.wheelSpin = THREE.MathUtils.euclideanModulo(racer.wheelSpin + wheelDelta + Math.PI, Math.PI * 2) - Math.PI;
    racer.pedalPhase += (0.9 + speed * 0.38 + racer.throttle * 2.2) * dt;
    if (racer.frontWheel) racer.frontWheel.rotation.set(racer.wheelSpin, 0, 0);
    if (racer.rearWheel) racer.rearWheel.rotation.set(racer.wheelSpin, 0, 0);

    const steerAmount = THREE.MathUtils.clamp(racer.steer * 0.56, -0.54, 0.54);
    racer.handleBarRoot.rotation.y = steerAmount;
    racer.forkPivot.rotation.y = steerAmount;
    racer.crankRoot.rotation.x = racer.pedalPhase;
    racer.rearSwingPivot.rotation.x = THREE.MathUtils.clamp(Math.sin(racer.pedalPhase * 0.5) * 0.08 + racer.brake * 0.05, -0.22, 0.25);
    racer.shockPivot.scale.y = THREE.MathUtils.lerp(racer.shockPivot.scale.y, 0.92 + Math.abs(Math.sin(racer.pedalPhase)) * 0.12, 1 - Math.exp(-dt * 8));
    if (racer.shieldOrbs) {
      const active = racer.shieldTimer > 0 && racer.shieldHits > 0;
      racer.shieldOrbs.visible = active;
      if (active) {
        const orbitSpeed = game.simTime * 3;
        const children = racer.shieldOrbs.children;
        for (let si = 0; si < children.length; si++) {
          const orb = children[si];
          if (si < racer.shieldHits) {
            orb.visible = true;
            const angle = orbitSpeed + (si * Math.PI * 2) / 3;
            const radius = 1.0;
            orb.position.set(Math.cos(angle) * radius, 1.2, Math.sin(angle) * radius);
            orb.rotation.y = -angle;
            const pulse = 0.7 + Math.sin(game.simTime * 6 + si * 2) * 0.15;
            orb.material.opacity = pulse;
            orb.material.emissiveIntensity = 0.6 + pulse * 0.4;
          } else {
            orb.visible = false;
          }
        }
      }
    }

    const isDown = racer.knockdownTimer > 0;
    const recovering = racer.recoverTimer > 0;

    const normal = surfaceNormal(game.activeLevel, racer.position.x, racer.position.z);
    const forward = forwardFromHeading(racer.heading);

    if (racer.grounded) {
      const projectedForward = tempVec3A.copy(forward).addScaledVector(normal, -forward.dot(normal));
      if (projectedForward.lengthSq() < 0.0001) projectedForward.copy(forward);
      projectedForward.normalize();
      const right = tempVec3B.crossVectors(normal, projectedForward).normalize();
      tempMat4.makeBasis(right, normal, projectedForward);
      tempQuat.setFromRotationMatrix(tempMat4);
      const lean = (isDown || recovering) ? 0 : THREE.MathUtils.clamp(-racer.steer * speed * 0.017, -0.58, 0.58);
      const accelPitch = (isDown || recovering) ? 0 : THREE.MathUtils.clamp((racer.boostTimer > 0 ? 0.1 : 0) - racer.brake * 0.18, -0.24, 0.14);
      tempEuler.set(accelPitch, 0, lean);
      tempQuat.multiply(tempYawQuat.setFromEuler(tempEuler));
      racer.alignRoot.quaternion.slerp(tempQuat, 1 - Math.exp(-dt * 9));
      racer.airPitch = damp(racer.airPitch, 0, 5, dt);
      racer.airRoll = damp(racer.airRoll, 0, 5, dt);
    } else {
      tempQuat.setFromAxisAngle(new THREE.Vector3(0, 1, 0), racer.heading);
      tempQuat.multiply(tempYawQuat.setFromEuler(new THREE.Euler(racer.airPitch, 0, racer.airRoll)));
      racer.alignRoot.quaternion.slerp(tempQuat, 1 - Math.exp(-dt * 5.2));
    }

    const isRagdoll = racer.ragdoll && racer.ragdoll.active;

    // --- PROCEDURAL SUSPENSION & TERRAIN IK ABSORPTION ---
    // Instead of simple bouncing, actively measure the terrain under front and rear wheels
    const BIKE_WHEELBASE = 1.05; // Distance from center to front/rear wheels
    const forwardVec = forwardFromHeading(racer.heading);

    // Calculate global position of front and rear wheels
    const frontPos = {
      x: racer.position.x + forwardVec.x * BIKE_WHEELBASE,
      z: racer.position.z + forwardVec.z * BIKE_WHEELBASE
    };
    const rearPos = {
      x: racer.position.x - forwardVec.x * BIKE_WHEELBASE,
      z: racer.position.z - forwardVec.z * BIKE_WHEELBASE
    };

    const frontGroundHeight = game.activeLevel.heightFn(frontPos.x, frontPos.z) + BIKE_CLEARANCE;
    const rearGroundHeight = game.activeLevel.heightFn(rearPos.x, rearPos.z) + BIKE_CLEARANCE;

    // Calculate compression amount (how much the wheel is pushed into the bike chassis)
    // Positive means chassis is pressed heavily down. 
    // Wheel base y offset roughly 0
    let targetFrontComp = racer.grounded ? THREE.MathUtils.clamp((frontGroundHeight - racer.position.y) * 2.5, -0.4, 0.4) : -0.2;
    let targetRearComp = racer.grounded ? THREE.MathUtils.clamp((rearGroundHeight - racer.position.y) * 2.5, -0.4, 0.4) : -0.2;

    // Spring physics for suspension dampening
    const springStiffness = 60.0;
    const springDamp = 12.0;

    const fSpringForce = (targetFrontComp - racer.suspension.frontCompression) * springStiffness;
    const fDampForce = racer.suspension.frontVelocity * springDamp;
    racer.suspension.frontVelocity += (fSpringForce - fDampForce) * dt;
    racer.suspension.frontCompression += racer.suspension.frontVelocity * dt;

    const rSpringForce = (targetRearComp - racer.suspension.rearCompression) * springStiffness;
    const rDampForce = racer.suspension.rearVelocity * springDamp;
    racer.suspension.rearVelocity += (rSpringForce - rDampForce) * dt;
    racer.suspension.rearCompression += racer.suspension.rearVelocity * dt;

    // 1. Map compression to bike structural parts
    // Front fork slides up and down on the Y axis
    racer.frontWheel.position.y = racer.suspension.frontCompression * 0.5;

    // Rear swing arm rotates up slightly
    // Original static logic: racer.rearSwingPivot.rotation.x = THREE.MathUtils.clamp(Math.sin(racer.pedalPhase * 0.5) * 0.08 + racer.brake * 0.05, -0.22, 0.25);
    const pedalingBob = THREE.MathUtils.clamp(Math.sin(racer.pedalPhase * 0.5) * 0.05, -0.1, 0.1);
    racer.rearSwingPivot.rotation.x = -racer.suspension.rearCompression * 0.8 + pedalingBob;

    // Shock scaling (rear shock cylinder compresses)
    racer.shockPivot.scale.y = THREE.MathUtils.clamp(1.0 - racer.suspension.rearCompression * 1.5, 0.5, 1.2);

    // Update the state machine
    racer.animState.update(dt, speed, racer.grounded, racer.steer, racer.throttle, racer.brake, isDown, recovering);
    const pose = racer.animState.pose;

    const shieldPose = racer.shieldTimer > 0 ? 0.12 : 0;

    // Apply State Machine Outputs to bones
    // Modulate overall rider position by rear suspension (hip drop)
    const riderSuspDrop = -Math.max(0, racer.suspension.rearCompression * 0.6);

    // IK Absorption: As body drops, elbows/knees need to bend more to absorb the bump
    const armAbsorb = racer.suspension.frontCompression * 0.8;
    const baseArm = 0.2 + pose.armBasePitch + shieldPose + armAbsorb; // ~ -0.8 rad, pointing 45deg down-forward
    const baseElbow = -0.4 - armAbsorb * 1.2; // Bend elbows down softly

    if (!isRagdoll) {
      racer.riderRoot.position.x = damp(racer.riderRoot.position.x, 0, 8, dt);
      // Move 0.15 units forward to grip the newly offset handlebars
      racer.riderRoot.position.z = damp(racer.riderRoot.position.z, 0.15, 8, dt);
      racer.riderRoot.position.y = 1.12 + pose.pelvisYOffset + riderSuspDrop;

      racer.rig.spinePivot.rotation.x = pose.spinePitch;
      racer.rig.neckPivot.rotation.x = pose.neckPitch;
      racer.rig.headPivot.rotation.y = pose.headYaw;
      racer.rig.headPivot.rotation.z = pose.headRoll;

      racer.rig.leftShoulder.rotation.set(baseArm, 0.05, 0.15 + armAbsorb * 0.2); // Point inward
      racer.rig.leftElbow.rotation.set(baseElbow, 0.1, -0.05);
      racer.rig.leftWrist.rotation.set(-0.2, 0, -0.2); // Hook onto bars

      racer.rig.rightShoulder.rotation.set(baseArm, -0.05, -0.15 - armAbsorb * 0.2); // Point inward
      racer.rig.rightElbow.rotation.set(baseElbow, -0.1, 0.05);
      racer.rig.rightWrist.rotation.set(-0.2, 0, 0.2); // Hook onto bars

      // Apply micro jitter to handlebar and arms if high speed
      if (racer.animState.microSteerJitter !== 0) {
        racer.handleBarRoot.rotation.y += racer.animState.microSteerJitter;
        racer.rig.leftShoulder.rotation.x += racer.animState.microSteerJitter * 0.5;
        racer.rig.rightShoulder.rotation.x -= racer.animState.microSteerJitter * 0.5;
      }

      const punchAmount = racer.punchTimer > 0 ? Math.sin((1 - racer.punchTimer / PUNCH_ANIM_TIME) * Math.PI) : 0;
      if (punchAmount > 0) {
        racer.rig.spinePivot.rotation.y = punchAmount * 0.3;
        racer.rig.rightShoulder.rotation.x = baseArm + punchAmount * 1.62;
        racer.rig.rightShoulder.rotation.z = -0.24 - punchAmount * 0.58;
        racer.rig.rightElbow.rotation.x = -0.74 + punchAmount * 1.66;
        racer.rig.rightWrist.rotation.x = 0.16 + punchAmount * 0.48;
        racer.rig.leftShoulder.rotation.x = baseArm + punchAmount * 0.42;
        racer.rig.leftShoulder.rotation.z = 0.24 + punchAmount * 0.2;
      } else {
        racer.rig.spinePivot.rotation.y = 0;
      }

      // Late update: Two-Bone IK for arms.
      // IMPORTANT: Only run IK when NOT punching. The punch animation sets
      // shoulder/elbow/wrist rotations and the IK would silently overwrite them.
      if (punchAmount === 0 && racer.gripL && racer.gripR) {
        // Grip points are children of the handlebar which may have moved this
        // frame, so we need up-to-date world matrices before sampling positions.
        racer.gripL.parent.updateWorldMatrix(true, false);

        const leftTarget = new THREE.Vector3();
        const rightTarget = new THREE.Vector3();
        racer.gripL.getWorldPosition(leftTarget);
        racer.gripR.getWorldPosition(rightTarget);

        // Nudge target points slightly back/up to grip naturally
        leftTarget.y += 0.05; leftTarget.z += 0.05; leftTarget.x -= 0.02;
        rightTarget.y += 0.05; rightTarget.z += 0.05; rightTarget.x += 0.02;

        solveTwoBoneIK(racer.rig.leftShoulder, racer.rig.leftElbow, racer.rig.leftWrist, leftTarget, 0.38, 0.38, -1);
        solveTwoBoneIK(racer.rig.rightShoulder, racer.rig.rightElbow, racer.rig.rightWrist, rightTarget, 0.38, 0.38, 1);

        // Lock wrists forward onto grips
        racer.rig.leftWrist.rotation.set(-0.2, 0, -0.2);
        racer.rig.rightWrist.rotation.set(-0.2, 0, 0.2);
      }
    }

    if (!isRagdoll) {
      // Leg IK Absorption: Knees bend more when rear suspension compresses (hips drop)
      const legAbsorb = Math.max(0, racer.suspension.rearCompression * 1.2);

      const legPower = pose.legPower;
      const cadence = racer.pedalPhase;
      // Base pedal cycle
      let leftHip = Math.sin(cadence) * 0.76 * legPower + 0.16;
      let rightHip = Math.sin(cadence + Math.PI) * 0.76 * legPower + 0.16;

      let leftKnee = Math.max(0, -Math.sin(cadence + 0.2)) * 1.04 * legPower + 0.24;
      let rightKnee = Math.max(0, -Math.sin(cadence + Math.PI + 0.2)) * 1.04 * legPower + 0.24;

      // Apply absorption overrides
      leftHip -= legAbsorb * 0.8;
      rightHip -= legAbsorb * 0.8;
      leftKnee += legAbsorb * 1.5;
      rightKnee += legAbsorb * 1.5;

      racer.rig.leftHip.rotation.x = leftHip;
      racer.rig.rightHip.rotation.x = rightHip;
      racer.rig.leftKnee.rotation.x = leftKnee;
      racer.rig.rightKnee.rotation.x = rightKnee;

      // Ankles compensate to keep feet flat on pedals
      racer.rig.leftAnkle.rotation.x = THREE.MathUtils.lerp(racer.rig.leftAnkle.rotation.x, -leftHip * 0.54 + 0.18 + legAbsorb * 0.4, 1 - Math.exp(-dt * 12));
      racer.rig.rightAnkle.rotation.x = THREE.MathUtils.lerp(racer.rig.rightAnkle.rotation.x, -rightHip * 0.54 + 0.18 + legAbsorb * 0.4, 1 - Math.exp(-dt * 12));
    }

    if (isDown) {
      // Fast snap toward full tilt on knockdown
      const tiltFactor = 1 - Math.exp(-dt * 18);
      racer.bikeRoot.rotation.z = THREE.MathUtils.lerp(racer.bikeRoot.rotation.z, racer.downSide * 1.05, tiltFactor);
      racer.bikeRoot.rotation.x = THREE.MathUtils.lerp(racer.bikeRoot.rotation.x, -0.85, tiltFactor);
      if (!isRagdoll) {
        racer.riderRoot.rotation.z = THREE.MathUtils.lerp(racer.riderRoot.rotation.z, racer.downSide * 0.9, tiltFactor);
        racer.riderRoot.rotation.x = THREE.MathUtils.lerp(racer.riderRoot.rotation.x, -0.75, tiltFactor);
      }
    } else if (recovering) {
      // Animate back toward upright during recover phase
      // Use fast damp so it snaps from wherever the bike currently is back to 0
      const recoverSpeed = 5.5;
      racer.bikeRoot.rotation.x = damp(racer.bikeRoot.rotation.x, 0, recoverSpeed, dt);
      racer.bikeRoot.rotation.z = damp(racer.bikeRoot.rotation.z, 0, recoverSpeed, dt);
      if (!isRagdoll) {
        racer.riderRoot.rotation.x = damp(racer.riderRoot.rotation.x, 0, recoverSpeed, dt);
        racer.riderRoot.rotation.z = damp(racer.riderRoot.rotation.z, 0, recoverSpeed, dt);
      }
    } else {
      // Normal upright — gently damp any residual rotation to zero
      if (!isRagdoll) {
        racer.riderRoot.rotation.x = damp(racer.riderRoot.rotation.x, 0, 7, dt);
        racer.riderRoot.rotation.z = damp(racer.riderRoot.rotation.z, 0, 7, dt);
      }
      racer.bikeRoot.rotation.x = damp(racer.bikeRoot.rotation.x, 0, 7, dt);
      racer.bikeRoot.rotation.z = damp(racer.bikeRoot.rotation.z, 0, 7, dt);
    }


    racer.group.visible = racer.respawnTimer > 0 ? Math.floor(racer.respawnBlink) % 2 === 0 : true;
  }

  return {
    spawnRacers,
    updateRacerVisual,
  };
}
