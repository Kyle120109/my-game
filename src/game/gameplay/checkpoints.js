import * as THREE from "three";
import { STATE, BIKE_CLEARANCE, PHYSICS } from "../config.js";
import { samplePath, projectProgress, surfaceNormal, signedProgressDelta, distance2DSq, forwardFromHeading } from "../levels.js";
export function createCheckpointSystem({ ui, fx, setRaceMessage, tempVec3A, tempVec3B }) {
  function isCheckpointTriggered(game, racer, checkpointIndex) {
    if (!racer) return false;
    if (game.activeLevel.loop) {
      const next = racer.nextCheckpoint ?? 0;
      if (next === 0) return false;
      return checkpointIndex < next;
    }
    return checkpointIndex <= racer.checkpoint;
  }
  function showCheckpointAlert(game, text, duration = 1.2) {
    if (!ui.countdown) return;
    ui.countdown.textContent = text;
    game.checkpointAlertTimer = Math.max(game.checkpointAlertTimer ?? 0, duration);
  }
  function getCheckpointMissThresholds(levelId) {
    const scales = PHYSICS.checkpointMissDistanceScaleByLevel ?? {};
    const scale = Number.isFinite(scales[levelId]) ? scales[levelId] : Number.isFinite(scales.default) ? scales.default : 1;
    return {
      warn: PHYSICS.checkpointMissWarnDistance * scale,
      respawn: PHYSICS.checkpointMissRespawnDistance * scale,
      reset: PHYSICS.checkpointMissResetDistance * scale,
    };
  }
  function getProjectionSegmentRadius(levelId) {
    const radiusByLevel = PHYSICS.checkpointProjectionSegmentRadiusByLevel ?? {};
    const fallback = PHYSICS.checkpointProjectionSegmentRadius ?? 6;
    const radius = Number.isFinite(radiusByLevel[levelId]) ? radiusByLevel[levelId] : Number.isFinite(radiusByLevel.default) ? radiusByLevel.default : fallback;
    return Math.max(1, Math.floor(radius));
  }
  function getCheckpointCount(game) {
    return Array.isArray(game.checkpointMeshes) ? game.checkpointMeshes.length : 0;
  }
  function updateReady(game, dt) {
    game.countdownTimer -= dt;
    if (game.countdownTimer > 0) {
      ui.countdown.textContent = String(Math.ceil(game.countdownTimer));
      return;
    }

    if (game.countdownTimer > -0.85) {
      ui.countdown.textContent = "GO!";
      if (!game.readyGoPlayed) {
        game.readyGoPlayed = true;
        setRaceMessage(game, "比赛开始！", 1.2);
        fx.playStartSound(game);
      }
      return;
    }

    game.state = STATE.RACING;
    game.racingStartTime = game.raceElapsed; // mark the exact moment racing begins
    ui.countdown.textContent = "";
  }
  function checkCheckpointsAndFinish(game, racer) {
    if (racer.finished) return;
    const checkpointCount = getCheckpointCount(game);
    if (checkpointCount <= 0) return;
    const checkpoint = game.checkpointMeshes[racer.nextCheckpoint];
    if (!checkpoint) return;

    const prevS = racer.prevProgress ?? racer.progress;
    const stepForward = signedProgressDelta(game.activeLevel, prevS, racer.progress);
    if (stepForward < -2 || stepForward > 65) return;
    if (racer.trackDist > game.activeLevel.routeHalfWidth * 1.62) return;

    const prevToCp = signedProgressDelta(game.activeLevel, prevS, checkpoint.s);
    const currToCp = signedProgressDelta(game.activeLevel, racer.progress, checkpoint.s);
    const crossedByProgress = prevToCp > 0 && currToCp <= 0 && stepForward >= -0.2;

    tempVec3A.copy(racer.prevPosition).sub(checkpoint.point);
    tempVec3B.copy(racer.position).sub(checkpoint.point);
    const prevDepth = tempVec3A.dot(checkpoint.forward);
    const currDepth = tempVec3B.dot(checkpoint.forward);
    const prevSide = tempVec3A.dot(checkpoint.right);
    const currSide = tempVec3B.dot(checkpoint.right);
    const span = currDepth - prevDepth;
    let sideAtPlane = currSide;
    if (Math.abs(span) > 0.0001) {
      const hitT = THREE.MathUtils.clamp((0 - prevDepth) / span, 0, 1);
      sideAtPlane = THREE.MathUtils.lerp(prevSide, currSide, hitT);
    }
    const crossedPlane = prevDepth <= 0.9 && currDepth >= -0.9 && Math.abs(sideAtPlane) <= checkpoint.gateHalfWidth;
    const insideCapture =
      Math.abs(currSide) <= checkpoint.gateHalfWidth * 1.08 &&
      Math.abs(currDepth) <= checkpoint.captureDepth &&
      distance2DSq(racer.position.x, racer.position.z, checkpoint.point.x, checkpoint.point.z) <= checkpoint.captureRadiusSq;
    const nearTrack = racer.trackDist <= game.activeLevel.routeHalfWidth * 2.1;
    const progressPass = crossedByProgress && nearTrack;
    if (!(progressPass || crossedPlane || insideCapture)) return;

    racer.checkpoint = racer.nextCheckpoint;
    racer.pendingRespawnCheckpoint = null;
    racer.checkpointMissWarned = false;
    if (game.activeLevel.loop) {
      racer.nextCheckpoint = (racer.nextCheckpoint + 1) % checkpointCount;
      if (racer.nextCheckpoint === 0) racer.lap += 1;
      if (racer.lap >= 1) {
        racer.finished = true;
        racer.finishTime = game.raceElapsed;
        racer.globalProgress = game.activeLevel.totalLength * racer.lap;
      }
    } else {
      racer.nextCheckpoint += 1;
      if (racer.nextCheckpoint >= checkpointCount) {
        racer.finished = true;
        racer.finishTime = game.raceElapsed;
        racer.nextCheckpoint = checkpointCount - 1;
        racer.globalProgress = game.activeLevel.totalLength;
      }
    }

    if (racer.isPlayer && game.state === STATE.RACING) {
      ui.countdown.textContent = "";
      game.checkpointAlertTimer = 0;
      setRaceMessage(game, "CHECKPOINT!", 0.68);
      fx.playCheckpointSound(game);
      fx.spawnBurst(game, racer.position, 0xa4fff1, 14, 1, 4.8);
    }
  }
  function enforceCheckpointRecovery(game, racer) {
    if (game.state !== STATE.RACING || racer.finished || racer.respawnTimer > 0) return;
    const checkpoint = game.checkpointMeshes[racer.nextCheckpoint];
    if (!checkpoint) return;

    const missedDistance = Math.max(0, signedProgressDelta(game.activeLevel, checkpoint.s, racer.progress));
    const nearCheckpoint = distance2DSq(racer.position.x, racer.position.z, checkpoint.point.x, checkpoint.point.z) <= checkpoint.captureRadiusSq * 1.6;
    if (nearCheckpoint) {
      racer.checkpointMissWarned = false;
      return;
    }

    const missThresholds = getCheckpointMissThresholds(game.activeLevel.id);

    if (missedDistance >= missThresholds.warn && !racer.checkpointMissWarned) {
      racer.checkpointMissWarned = true;
      showCheckpointAlert(game, "错过检查点！", 1.1);
      setRaceMessage(game, "请返回上一个检查点", 1.2);
    }

    if (missedDistance >= missThresholds.respawn) {
      racer.checkpointMissWarned = false;
      showCheckpointAlert(game, "强制回拉", 1.2);
      triggerRespawn(game, racer, "checkpoint_missed", racer.checkpoint);
      return;
    }

    if (missedDistance <= missThresholds.reset) racer.checkpointMissWarned = false;
  }
  function triggerRespawn(game, racer, reason, forcedCheckpointIndex = null) {
    if (racer.respawnTimer > 0) return;
    racer.respawnTimer = 1.08;
    racer.pendingRespawnCheckpoint =
      Number.isInteger(forcedCheckpointIndex) && forcedCheckpointIndex >= 0 ? forcedCheckpointIndex : null;
    racer.velocity.set(0, 0, 0);
    racer.knockdownTimer = 0;
    racer.recoverTimer = 0;
    racer.stunTimer = 0;
    racer.itemHitCooldown = 0;
    racer.mudFxTimer = 0;
    racer.checkpointMissWarned = false;
    if (racer.isPlayer && game.state !== STATE.MENU) {
      setRaceMessage(game, `${reason}，正在复位`, 1.05);
      fx.playRespawnSound(game);
    }
  }
  function doRespawn(game, racer) {
    const checkpointCount = Math.max(1, getCheckpointCount(game));
    const maxIndex = checkpointCount - 1;
    const forcedIdx =
      Number.isInteger(racer.pendingRespawnCheckpoint) && racer.pendingRespawnCheckpoint >= 0
        ? THREE.MathUtils.clamp(racer.pendingRespawnCheckpoint, 0, maxIndex)
        : null;
    const idx = forcedIdx ?? nearestCheckpointIndex(game, racer);
    racer.pendingRespawnCheckpoint = null;
    racer.checkpointMissWarned = false;
    racer.checkpoint = idx;
    racer.nextCheckpoint = game.activeLevel.loop
      ? (idx + 1) % checkpointCount
      : Math.min(idx + 1, checkpointCount - 1);
    const cpData = game.checkpointMeshes[idx];
    const cp = cpData?.point ?? game.activeLevel.pathPoints[0];
    const forward = cpData?.forward?.clone() ?? forwardFromHeading(racer.heading);
    if (forward.lengthSq() < 0.0001) forward.set(0, 0, 1);
    const heading = Math.atan2(forward.x, forward.z);
    const right = cpData?.right?.clone() ?? tempVec3A.set(forward.z, 0, -forward.x);
    const side = racer.isPlayer ? 0 : THREE.MathUtils.randFloatSpread(2.3);
    racer.position.copy(cp).addScaledVector(right, side);
    racer.position.y = game.activeLevel.heightFn(racer.position.x, racer.position.z) + BIKE_CLEARANCE;
    racer.heading = heading;
    racer.velocity.set(forward.x * 1.2, 0, forward.z * 1.2);
    racer.grounded = true;
    const proj = projectProgress(game.activeLevel, racer.position.x, racer.position.z);
    racer.progress = proj.s;
    racer.prevProgress = proj.s;
    racer.trackDist = Math.sqrt(proj.distSq);
    racer.globalProgress = game.activeLevel.loop ? racer.lap * game.activeLevel.totalLength + racer.progress : racer.progress;
    racer.prevPosition.copy(racer.position);
    racer.airPitch = 0;
    racer.airRoll = 0;
    racer.lastRampAt = -99;
    racer.lastRampId = -1;
    racer.rampLaunchGrace = 0;
    racer.itemHitCooldown = 0;
    racer.mudFxTimer = 0;
    racer.respawnTimer = 0;
    racer.group.visible = true;
  }
  function nearestCheckpointIndex(game, racer) {
    const checkpointCount = getCheckpointCount(game);
    if (checkpointCount <= 0) return 0;
    const proj = projectProgress(game.activeLevel, racer.position.x, racer.position.z).s;
    let best = racer.checkpoint;
    let bestScore = Number.POSITIVE_INFINITY;
    for (let i = 0; i < checkpointCount; i += 1) {
      const cpData = game.checkpointMeshes[i];
      if (!cpData) continue;
      const cp = cpData.point;
      const cpS = cpData.s ?? 0;
      const along = Math.abs(signedProgressDelta(game.activeLevel, proj, cpS));
      const d = distance2DSq(racer.position.x, racer.position.z, cp.x, cp.z);
      const score = along * along + d * 0.014;
      if (score < bestScore) {
        bestScore = score;
        best = i;
      }
    }
    return best;
  }
  function updateStealthCatchup(game, dt) {
    if (!game.player || game.state !== STATE.RACING) return;
    if (game.raceElapsed < 15) return;
    game.packPressureTimer += dt;
    if (game.packPressureTimer < 3.0) return;
    game.packPressureTimer = 0;

    const playerFwd = forwardFromHeading(game.player.heading);

    for (const racer of game.racers) {
      if (racer.isPlayer || racer.respawnTimer > 0 || racer.finished) continue;
      // Pause teleportation during knockdown/recovery
      if (racer.knockdownTimer > 0 || racer.recoverTimer > 0) continue;
      if (racer.stealthTeleportCooldown > 0) {
        racer.stealthTeleportCooldown -= 3.0;
        continue;
      }

      const diff = racer.globalProgress - game.player.globalProgress;
      // Only teleport AI that is significantly behind
      if (diff > -300) {
        racer.stealthBehindTimer = 0;
        continue;
      }

      // Must be behind for at least 8 seconds accumulated
      racer.stealthBehindTimer += 3.0;
      if (racer.stealthBehindTimer < 8) continue;

      // NO count limit — unlimited stealth teleports allowed

      // Random chance gate — higher gap = more likely
      const absDiff = Math.abs(diff);
      const chance = THREE.MathUtils.clamp((absDiff - 300) / 250, 0.20, 0.65);
      if (Math.random() > chance) continue;

      // Teleport position: 50-100 units BEHIND the player (negative offset)
      const behindOffset = -THREE.MathUtils.randFloat(50, 100);
      const sampled = samplePath(game.activeLevel, game.player.globalProgress + behindOffset);

      // === VISIBILITY CHECK ===
      // Ensure the teleport point is in the player's rear blind zone (160° arc)
      const toTeleport = tempVec3A.set(
        sampled.point.x - game.player.position.x,
        0,
        sampled.point.z - game.player.position.z
      );
      if (toTeleport.lengthSq() < 1) continue;
      toTeleport.normalize();
      const dotProduct = playerFwd.x * toTeleport.x + playerFwd.z * toTeleport.z;
      // dotProduct < -0.17 means roughly behind the player (>100° from forward)
      if (dotProduct > -0.17) continue;

      // Execute stealth teleport
      const normal = surfaceNormal(game.activeLevel, sampled.point.x, sampled.point.z);
      racer.position.copy(sampled.point).addScaledVector(normal, 0.1);
      racer.position.y = game.activeLevel.heightFn(racer.position.x, racer.position.z) + BIKE_CLEARANCE;
      racer.heading = Math.atan2(sampled.forward.x, sampled.forward.z);
      racer.velocity.set(sampled.forward.x * 14, 0, sampled.forward.z * 14);
      const proj = projectProgress(game.activeLevel, racer.position.x, racer.position.z);
      racer.progress = proj.s;
      racer.prevProgress = proj.s;
      racer.trackDist = Math.sqrt(proj.distSq);
      racer.globalProgress = game.activeLevel.loop ? racer.lap * game.activeLevel.totalLength + racer.progress : racer.progress;
      racer.prevPosition.copy(racer.position);
      const idx = nearestCheckpointIndex(game, racer);
      const checkpointCount = Math.max(1, getCheckpointCount(game));
      racer.checkpoint = idx;
      racer.nextCheckpoint = game.activeLevel.loop ? (idx + 1) % checkpointCount : Math.min(idx + 1, checkpointCount - 1);
      racer.stealthTeleportCooldown = 18;
      racer.stealthBehindTimer = 0;
      racer.stealthTeleportCount += 1;
    }
  }
  return {
    isCheckpointTriggered,
    updateReady,
    showCheckpointAlert,
    getCheckpointMissThresholds,
    getProjectionSegmentRadius,
    getCheckpointCount,
    checkCheckpointsAndFinish,
    enforceCheckpointRecovery,
    triggerRespawn,
    doRespawn,
    nearestCheckpointIndex,
    updateStealthCatchup,
  };
}
