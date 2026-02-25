import * as THREE from "three";
import { STATE, PUNCH_ANIM_TIME, PHYSICS } from "../config.js";
import { forwardFromHeading, horizontalSpeed } from "../levels.js";
export function createCombatSystem({ settings, fx, setRaceMessage, tempVec3A }) {
  function findBestPunchTarget(game, attacker, maxDist) {
    let best = null;
    let bestScore = -1;
    const forward = forwardFromHeading(attacker.heading);
    for (const target of game.racers) {
      if (target === attacker || target.respawnTimer > 0) continue;
      tempVec3A.copy(target.position).sub(attacker.position);
      tempVec3A.y = 0;
      const dist = tempVec3A.length();
      if (dist > maxDist || dist < 0.2) continue;
      tempVec3A.normalize();
      const facing = tempVec3A.dot(forward);
      if (facing < -0.2) continue;
      const score = (1 - dist / maxDist) * 0.8 + (facing + 1) * 0.2;
      if (score > bestScore) {
        bestScore = score;
        best = target;
      }
    }
    return best;
  }
  function tryPunch(game, attacker) {
    // === UNIVERSAL 3-SECOND ATTACK BAN (uses racingStartTime for accurate timing) ===
    if (game.state === STATE.RACING && (game.raceElapsed - game.racingStartTime) < 3.0) return false;
    if (attacker.punchCooldown > 0 || attacker.respawnTimer > 0 || attacker.knockdownTimer > 0) return false;
    attacker.punchCooldown = 1.25;
    attacker.punchTimer = PUNCH_ANIM_TIME;
    const forward = forwardFromHeading(attacker.heading);
    let hits = 0;
    for (const target of game.racers) {
      if (target === attacker || target.respawnTimer > 0 || target.knockdownTimer > 0) continue;
      tempVec3A.copy(target.position).sub(attacker.position);
      tempVec3A.y = 0;
      const dist = tempVec3A.length();
      if (dist < 0.2 || dist > 2.2) continue;
      tempVec3A.normalize();
      if (tempVec3A.dot(forward) < -0.28) continue;
      const impulse = 5.2 + horizontalSpeed(attacker.velocity) * 0.16;
      target.velocity.addScaledVector(tempVec3A, impulse);
      target.velocity.y += 2.7;
      applyKnockdown(game, target, tempVec3A, 0.62, true);
      hits += 1;
      fx.spawnBurst(game, target.position, 0xff9f8f, 11, 0.9, 5.2);
    }
    fx.playPunchSound(game, hits > 0);
    if (attacker.isPlayer && game.state === STATE.RACING) setRaceMessage(game, hits > 0 ? `拳击命中 x${hits}` : "挥空", hits > 0 ? 0.72 : 0.42);
    if (hits > 0) {
      attacker.hits += hits;
      attacker.paceBoostTimer = 1.2;
      if (attacker.isPlayer && settings.shake) game.cameraShake = Math.max(game.cameraShake, 0.42);
    }
    return hits > 0;
  }
  function applyKnockdown(game, target, direction, power = 1, fromHit = false) {
    if (target.finished || target.respawnTimer > 0) return;

    // Activate ragdoll physics if available and not already knocked down
    if (target.ragdoll && target.knockdownTimer <= 0) {
      target.ragdoll.activate(target.velocity);
    }

    // Crash VFX: burst + hit sound
    fx.spawnBurst(game, target.position, 0xff6633, 14, 1.0, 5.5);
    fx.playHitSound(game);

    if (target.shieldTimer > 0 && target.shieldHits > 0) {
      target.shieldHits -= 1;
      target.stunTimer = Math.max(target.stunTimer, 0.22 * power);
      target.itemHitCooldown = Math.max(target.itemHitCooldown, PHYSICS.itemHitImmunity * 0.6);
      target.grounded = false;
      target.velocity.addScaledVector(direction, 2.2 * power);
      target.velocity.y = Math.max(target.velocity.y, 1.1 + power * 0.9);
      // Gold burst for shield absorb
      fx.spawnBurst(game, target.position, 0xffd54f, 12, 1.0, 4.5);
      fx.playHitSound(game);
      if (target.isPlayer && settings.shake) game.cameraShake = Math.max(game.cameraShake, 0.18 * power);
      // If all shields broken, clear shield
      if (target.shieldHits <= 0) {
        target.shieldTimer = 0;
        fx.spawnBurst(game, target.position, 0xff6633, 18, 1.4, 6.0);
      }
      return;
    }

    const downDuration = PHYSICS.knockdownDuration * THREE.MathUtils.clamp(power, 0.75, 1.35);
    target.knockdownTimer = Math.max(target.knockdownTimer, downDuration);
    target.recoverTimer = Math.max(target.recoverTimer, PHYSICS.knockdownRecoverDuration);
    target.stunTimer = Math.max(target.stunTimer, 0.65);
    target.itemHitCooldown = Math.max(target.itemHitCooldown, PHYSICS.itemHitImmunity);
    target.downSide = direction.x >= 0 ? 1 : -1;
    target.grounded = false;
    target.velocity.addScaledVector(direction, 4.8 * power);
    target.velocity.y = Math.max(target.velocity.y, 2.5 + power * 1.6);
    fx.spawnBurst(game, target.position, 0xffaa96, 18, 1.2, 5.8);
    if (target.isPlayer && game.state === STATE.RACING) setRaceMessage(game, "被击倒!", 1.15);
    if (target.isPlayer && settings.shake) game.cameraShake = Math.max(game.cameraShake, 0.7 * power);
    if (fromHit) target.hits = Math.max(0, target.hits - 0);
  }

  function resolveRacerContacts(game) {
    for (let i = 0; i < game.racers.length; i += 1) {
      const a = game.racers[i];
      if (a.respawnTimer > 0) continue;
      for (let j = i + 1; j < game.racers.length; j += 1) {
        const b = game.racers[j];
        if (b.respawnTimer > 0) continue;
        const dx = a.position.x - b.position.x;
        const dz = a.position.z - b.position.z;
        const distSq = dx * dx + dz * dz;
        const minDist = 1.08;
        if (distSq >= minDist * minDist) continue;
        const dist = Math.sqrt(Math.max(0.0001, distSq));
        const nx = dx / dist;
        const nz = dz / dist;
        const overlap = minDist - dist;
        a.position.x += nx * overlap * 0.5;
        a.position.z += nz * overlap * 0.5;
        b.position.x -= nx * overlap * 0.5;
        b.position.z -= nz * overlap * 0.5;
        const rel = (a.velocity.x - b.velocity.x) * nx + (a.velocity.z - b.velocity.z) * nz;
        if (rel < 0) {
          const impulse = -rel * 0.12;
          a.velocity.x += nx * impulse;
          a.velocity.z += nz * impulse;
          b.velocity.x -= nx * impulse;
          b.velocity.z -= nz * impulse;
        }
      }
    }
  }
  return {
    applyKnockdown,
    findBestPunchTarget,
    tryPunch,
    resolveRacerContacts,
  };
}
