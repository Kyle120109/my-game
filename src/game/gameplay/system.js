import * as THREE from "three";
import { STATE, BIKE_CLEARANCE, PHYSICS } from "../config.js";
import { projectProgress, shortestAngle, damp } from "../levels.js";
import { createCombatSystem } from "./combat.js";
import { createItemSystem } from "./items.js";
import { createCheckpointSystem } from "./checkpoints.js";
import { createControlSystem } from "./controls.js";
import { createPhysicsSystem } from "./physics.js";

export function createGameplaySystem({ input, settings, ui, fx, updateRacerVisual, setRaceMessage }) {
  const tempVec3A = new THREE.Vector3();
  const tempVec3B = new THREE.Vector3();
  const tempVec3C = new THREE.Vector3();
  const tempVec3D = new THREE.Vector3();
  const tempVec3E = new THREE.Vector3();

  const combat = createCombatSystem({ settings, fx, setRaceMessage, tempVec3A });
  const checkpoints = createCheckpointSystem({ ui, fx, setRaceMessage, tempVec3A, tempVec3B });
  const items = createItemSystem({
    fx,
    setRaceMessage,
    tempVec3A,
    tempVec3B,
    tempVec3C,
    tempVec3D,
    applyKnockdown: combat.applyKnockdown,
    isCheckpointTriggered: checkpoints.isCheckpointTriggered,
  });
  const controls = createControlSystem({ input, settings, tempVec3A, tempVec3B, tempVec3C });
  const physics = createPhysicsSystem({
    input,
    fx,
    setRaceMessage,
    tempVec3A,
    tempVec3B,
    tempVec3C,
    tempVec3D,
    tempVec3E,
    applyKnockdown: combat.applyKnockdown,
    triggerRespawn: checkpoints.triggerRespawn,
    tryCollectItem: items.tryCollectItem,
    getProjectionSegmentRadius: checkpoints.getProjectionSegmentRadius,
  });

  function lockRacerAtStart(game, racer, dt) {
    racer.throttle = 0;
    racer.reverseThrottle = 0;
    racer.brake = 0;
    racer.driveMode = "forward";
    racer.reverseHoldTimer = 0;
    racer.signedForwardSpeed = 0;
    racer.pendingRespawnCheckpoint = null;
    racer.checkpointMissWarned = false;
    racer.lastRampAt = -99;
    racer.lastRampId = -1;
    racer.rampLaunchGrace = 0;
    racer.targetSteer = 0;
    racer.steer = damp(racer.steer, 0, 8, dt);
    racer.velocity.multiplyScalar(Math.exp(-dt * 10));
    racer.heading += shortestAngle(racer.heading, racer.startHeading) * (1 - Math.exp(-dt * 12));
    racer.position.lerp(racer.startGridPosition, 1 - Math.exp(-dt * 16));
    racer.position.y = game.activeLevel.heightFn(racer.position.x, racer.position.z) + BIKE_CLEARANCE;
    racer.grounded = true;
    racer.airPitch = 0;
    racer.airRoll = 0;
    racer.prevPosition.copy(racer.position);
    const proj = projectProgress(game.activeLevel, racer.position.x, racer.position.z);
    racer.progress = proj.s;
    racer.prevProgress = proj.s;
    racer.trackDist = Math.sqrt(proj.distSq);
    racer.globalProgress = game.activeLevel.loop ? racer.lap * game.activeLevel.totalLength + racer.progress : racer.progress;
  }

  function updateRacers(game, dt, isMenu) {
    for (const racer of game.racers) {
      if (racer.punchCooldown > 0) racer.punchCooldown -= dt;
      if (racer.itemCooldown > 0) racer.itemCooldown -= dt;
      if (racer.punchTimer > 0) racer.punchTimer -= dt;
      if (racer.boostTimer > 0) racer.boostTimer -= dt;
      if (racer.shieldTimer > 0) {
        racer.shieldTimer -= dt;
        if (racer.shieldTimer <= 0) racer.shieldHits = 0;
      }
      if (racer.stunTimer > 0) racer.stunTimer -= dt;
      if (racer.itemHitCooldown > 0) racer.itemHitCooldown -= dt;
      if (racer.rampLaunchGrace > 0) racer.rampLaunchGrace -= dt;
      if (racer.paceBoostTimer > 0) racer.paceBoostTimer -= dt;
      if (racer.stealthTeleportCooldown > 0) racer.stealthTeleportCooldown -= dt;

      if (racer.respawnTimer > 0) {
        racer.respawnTimer -= dt;
        racer.respawnBlink += dt * 18;
        if (racer.respawnTimer <= 0) checkpoints.doRespawn(game, racer);
        updateRacerVisual(game, racer, dt);
        continue;
      }

      if (racer.knockdownTimer > 0) {
        racer.knockdownTimer -= dt;
        if (racer.knockdownTimer <= 0) racer.recoverTimer = PHYSICS.knockdownRecoverDuration;
      } else if (racer.recoverTimer > 0) {
        racer.recoverTimer -= dt;
      }

      if (game.state === STATE.READY && !isMenu) {
        lockRacerAtStart(game, racer, dt);
        updateRacerVisual(game, racer, dt);
        continue;
      }

      if (isMenu || !racer.isPlayer || game.state === STATE.FINISHED) {
        if (!racer.debugFrozen) {
          controls.updateAiControls(game, racer, dt, isMenu, { tryPunch: combat.tryPunch, useItem: items.useItem, findBestPunchTarget: combat.findBestPunchTarget });
        }
      } else {
        controls.updatePlayerControls(game, racer, dt);

        if (input.punchQueued) {
          input.punchQueued = false;
          // 3-second attack ban after countdown ends (uses racingStartTime)
          if (game.state !== STATE.RACING || (game.raceElapsed - game.racingStartTime) >= 3.0) {
            combat.tryPunch(game, racer);
          }
        }
        if (input.itemQueued) {
          input.itemQueued = false;
          if (game.state !== STATE.RACING || (game.raceElapsed - game.racingStartTime) >= 3.0) {
            items.useItem(game, racer);
          }
        }
        if (input.respawnQueued) {
          input.respawnQueued = false;
          checkpoints.triggerRespawn(game, racer, "主动复位");
        }

        // Debug hotkeys — ISOLATED to debug level only
        if (game.activeLevel.id === "debug") {
          if (input.debug1) {
            input.debug1 = false;
            combat.applyKnockdown(game, racer, new THREE.Vector3(1, 0, 0), 1.0, false);
          }
          if (input.debug2) {
            input.debug2 = false;
            const target = combat.findBestPunchTarget(game, racer, 100);
            if (target) combat.applyKnockdown(game, target, new THREE.Vector3(1, 0, 0), 1.0, false);
          }
          if (input.debug3) {
            input.debug3 = false;
            racer.punchCooldown = 0;
            combat.tryPunch(game, racer);
          }
          if (input.debug4) {
            input.debug4 = false;
            racer.itemCooldown = 0;
            if (!racer.itemType) racer.itemType = "bomb";
            items.useItem(game, racer);
          }
          if (input.debug5) {
            input.debug5 = false;
            racer.boostTimer = Math.max(racer.boostTimer, 3.0);
            racer.velocity.addScaledVector(
              new THREE.Vector3(Math.sin(racer.heading), 0, Math.cos(racer.heading)), 12
            );
            fx.spawnBurst(game, racer.position, 0x44eeff, 28, 1.2, 9.0);
            fx.playBoostSound(game);
          }
          if (input.debug6) {
            input.debug6 = false;
            fx.spawnBurst(game, racer.position, 0xff4400, 20, 2.0, 8.0);
            fx.spawnBurst(game, racer.position, 0xffcc00, 14, 1.4, 6.0);
            fx.playHitSound(game);
            if (settings.shake) game.cameraShake = Math.max(game.cameraShake, 1.0);
          }
          // Per-item debug keys: give item to player and immediately use it
          if (input.debug7) {
            input.debug7 = false;
            racer.itemType = "bomb";
            racer.itemCooldown = 0;
            items.useItem(game, racer);
          }
          if (input.debug8) {
            input.debug8 = false;
            racer.itemType = "banana";
            racer.itemCooldown = 0;
            items.useItem(game, racer);
          }
          if (input.debug9) {
            input.debug9 = false;
            racer.itemType = "shield";
            racer.itemCooldown = 0;
            items.useItem(game, racer);
          }
          if (input.debug0) {
            input.debug0 = false;
            // Cycle through all remaining item types: turbo, bash, shock, trap
            const cycleItems = ["turbo", "bash", "shock", "trap"];
            racer._debugItemCycle = ((racer._debugItemCycle ?? -1) + 1) % cycleItems.length;
            racer.itemType = cycleItems[racer._debugItemCycle];
            racer.itemCooldown = 0;
            items.useItem(game, racer);
          }
          // Receive-hit debug keys: simulate being HIT by attack items
          if (input.debugT) {
            input.debugT = false;
            // Bomb explodes ON the player
            racer.itemHitCooldown = 0;
            const bombPos = racer.position.clone();
            bombPos.y += 0.5;
            // triggerBombExplosion is not exported; directly apply knockdown + VFX
            fx.spawnBurst(game, bombPos, 0xffe8c0, 35, 2.4, 12);
            fx.spawnBurst(game, bombPos, 0xff8833, 28, 3.0, 9);
            fx.spawnBurst(game, bombPos, 0xff4400, 22, 4.5, 7);
            fx.spawnBurst(game, bombPos, 0x555555, 16, 2.8, 4);
            fx.spawnBurst(game, bombPos, 0xffee44, 12, 1.6, 14);
            fx.playExplosionSound(game);
            if (settings.shake) game.cameraShake = Math.max(game.cameraShake, 1.2);
            combat.applyKnockdown(game, racer, new THREE.Vector3(1, 0.5, 0).normalize(), 1.3, true);
          }
          if (input.debugY) {
            input.debugY = false;
            // Banana hit ON the player
            racer.itemHitCooldown = 0;
            fx.spawnBurst(game, racer.position, 0xffea86, 18, 1.2, 5.6);
            fx.playHitSound(game);
            combat.applyKnockdown(game, racer, new THREE.Vector3(-1, 0, 0), 0.9, true);
          }
          if (input.debugU) {
            input.debugU = false;
            // Shock hit ON the player — knockdown + stun + VFX
            racer.itemHitCooldown = 0;
            racer.stunTimer = Math.max(racer.stunTimer, 1.35);
            const knockDir = new THREE.Vector3(
              Math.sin(game.simTime), 0, Math.cos(game.simTime)
            ).normalize();
            racer.velocity.addScaledVector(knockDir, 7.4);
            combat.applyKnockdown(game, racer, knockDir, 0.72, false);
            fx.spawnBurst(game, racer.position, 0x91ddff, 26, 1.8, 7.8);
            fx.spawnBurst(game, racer.position, 0x44ccff, 14, 1.2, 5.5);
            fx.playShockSound(game);
            if (settings.shake) game.cameraShake = Math.max(game.cameraShake, 0.5);
          }
        }

      }

      if (racer.stunTimer > 0) {
        racer.targetSteer += Math.sin(game.simTime * 14 + racer.id) * 0.16;
        racer.throttle *= 0.45;
        racer.reverseThrottle *= 0.45;
        racer.brake *= 0.45;
      }
      if (racer.knockdownTimer > 0 || racer.recoverTimer > 0) {
        racer.throttle = 0;
        racer.reverseThrottle = 0;
        racer.brake = 0.8;
        racer.driveMode = "forward";
        racer.reverseHoldTimer = 0;
        racer.targetSteer *= 0.1;
        racer.velocity.x *= 0.9;
        racer.velocity.z *= 0.9;
      }

      physics.updateRacerPhysics(game, racer, dt, isMenu);
      updateRacerVisual(game, racer, dt);
      if (!isMenu) {
        checkpoints.checkCheckpointsAndFinish(game, racer);
        if (racer.isPlayer) checkpoints.enforceCheckpointRecovery(game, racer);

        // === AI STUCK DETECTION + ESCAPE MANEUVERS ===
        if (!racer.isPlayer && !racer.finished && game.state === STATE.RACING && game.raceElapsed > 6) {
          const progressDelta = Math.abs(racer.globalProgress - racer.aiLastProgress);
          const speedCheck = Math.hypot(racer.velocity.x, racer.velocity.z);
          if (progressDelta < 0.3 && speedCheck < 2.0 && racer.knockdownTimer <= 0 && racer.respawnTimer <= 0) {
            racer.aiStuckTimer += dt;

            // ESCAPE MANEUVER SYSTEM — try ASD before respawning
            if (racer.aiStuckTimer > 1.5 && racer.aiStuckTimer <= 2.5) {
              // Phase 1: Reverse + steer left
              racer.aiEscapePhase = 1;
              racer.throttle = 0;
              racer.reverseThrottle = 1;
              racer.driveMode = "reverse";
              racer.targetSteer = -1.0;
              racer.brake = 0;
            } else if (racer.aiStuckTimer > 2.5 && racer.aiStuckTimer <= 3.5) {
              // Phase 2: Reverse + steer right
              racer.aiEscapePhase = 2;
              racer.throttle = 0;
              racer.reverseThrottle = 1;
              racer.driveMode = "reverse";
              racer.targetSteer = 1.0;
              racer.brake = 0;
            } else if (racer.aiStuckTimer > 3.5 && racer.aiStuckTimer <= 4.5) {
              // Phase 3: Forward + hard steer toward track center
              racer.aiEscapePhase = 3;
              racer.throttle = 1;
              racer.reverseThrottle = 0;
              racer.driveMode = "forward";
              racer.targetSteer = Math.random() < 0.5 ? -1.3 : 1.3;
              racer.brake = 0;
            }
          } else {
            racer.aiStuckTimer = 0;
            racer.aiEscapePhase = 0;
          }
          racer.aiLastProgress = racer.globalProgress;
          if (racer.aiStuckTimer > 4.5) {
            // All escape maneuvers failed — respawn
            racer.aiStuckTimer = 0;
            racer.aiEscapePhase = 0;
            checkpoints.triggerRespawn(game, racer, "卡住重置");
          }
        }
      }
    }

    combat.resolveRacerContacts(game);
    items.updateItemEffects(game, dt);
    game.racers.sort(compareRaceOrder);

    if (game.player && game.state === STATE.RACING && game.player.finished) {
      game.state = STATE.FINISHED;
      game.raceFinishedAt = game.raceElapsed;
      game.resultDelay = 1.2;
      ui.countdown.textContent = "FINISH";
      setRaceMessage(game, "冲线完成", 2.2);
      fx.playFinishSound(game);
    }
  }

  function getRaceOrder(game) {
    return [...game.racers].sort(compareRaceOrder);
  }

  return {
    animateCheckpointAndItems: items.animateCheckpointAndItems,
    updateReady: checkpoints.updateReady,
    updateRacers,
    updateStealthCatchup: checkpoints.updateStealthCatchup,
    getRaceOrder,
    compareRaceOrder,
  };
}

export function compareRaceOrder(a, b) {
  if (a.finishTime != null && b.finishTime != null) return a.finishTime - b.finishTime;
  if (a.finishTime != null) return -1;
  if (b.finishTime != null) return 1;
  return b.globalProgress - a.globalProgress;
}

