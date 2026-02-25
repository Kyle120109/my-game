import * as THREE from "three";
import { ITEM_TYPES, itemName, PHYSICS, STATE } from "../config.js";
import { forwardFromHeading, distance2DSq } from "../levels.js";
export function createItemSystem({ fx, setRaceMessage, tempVec3A, tempVec3B, tempVec3C, tempVec3D, applyKnockdown, isCheckpointTriggered }) {
  const itemTypePool = Array.from(new Set(ITEM_TYPES));
  const itemTypeCycleRepeats = 3;
  const itemTypeCyclePool = [];
  for (let i = 0; i < itemTypeCycleRepeats; i += 1) {
    itemTypeCyclePool.push(...itemTypePool);
  }
  const itemTypeCycleLength = itemTypeCyclePool.length;
  function refillItemTypeBag(game) {
    if (itemTypeCycleLength === 0) {
      game.itemTypeBag = [];
      game.itemTypeBagCursor = 0;
      return;
    }
    const rng = typeof game.itemTypeRng === "function" ? game.itemTypeRng : Math.random;
    const bag = itemTypeCyclePool.slice();
    for (let i = bag.length - 1; i > 0; i -= 1) {
      const j = Math.floor(rng() * (i + 1));
      [bag[i], bag[j]] = [bag[j], bag[i]];
    }
    game.itemTypeBag = bag;
    game.itemTypeBagCursor = 0;
  }
  function drawNextWaveItemType(game, usedInWave) {
    if (itemTypePool.length === 0) return "turbo";
    if (!Array.isArray(game.itemTypeBag) || game.itemTypeBag.length !== itemTypeCycleLength) {
      refillItemTypeBag(game);
    }

    let cursor = Math.max(0, Math.floor(game.itemTypeBagCursor ?? 0));
    if (cursor >= game.itemTypeBag.length) {
      refillItemTypeBag(game);
      cursor = 0;
    }

    let pickIndex = cursor;
    while (pickIndex < game.itemTypeBag.length && usedInWave.has(game.itemTypeBag[pickIndex])) {
      pickIndex += 1;
    }
    if (pickIndex >= game.itemTypeBag.length) {
      refillItemTypeBag(game);
      cursor = 0;
      pickIndex = 0;
      while (pickIndex < game.itemTypeBag.length && usedInWave.has(game.itemTypeBag[pickIndex])) {
        pickIndex += 1;
      }
      if (pickIndex >= game.itemTypeBag.length) pickIndex = 0;
    }

    if (pickIndex !== cursor) {
      const swap = game.itemTypeBag[cursor];
      game.itemTypeBag[cursor] = game.itemTypeBag[pickIndex];
      game.itemTypeBag[pickIndex] = swap;
    }

    const type = game.itemTypeBag[cursor] ?? itemTypePool[cursor % itemTypePool.length];
    game.itemTypeBagCursor = cursor + 1;
    return type;
  }
  function assignWaveTypes(game, wave) {
    const slotCount = wave?.crates?.length ?? 0;
    if (slotCount <= 0) return [];
    const usedInWave = new Set();
    const assigned = [];
    for (let i = 0; i < slotCount; i += 1) {
      const type = drawNextWaveItemType(game, usedInWave);
      usedInWave.add(type);
      assigned.push(type);
    }
    return assigned;
  }
  function animateCheckpointAndItems(game, dt) {
    const player = game.player;
    const nextCheckpoint = player && !player.finished ? player.nextCheckpoint : -1;

    for (const cp of game.checkpointMeshes) {
      const isNext = cp.index === nextCheckpoint;
      const isTriggered = player ? isCheckpointTriggered(game, player, cp.index) : false;
      cp.pulse += dt * (isNext ? 7.2 : 2.1);

      let coreColor = 0x8ec6ff;
      let auraColor = 0x4f93de;
      let coreOpacity = 0.52;
      let auraOpacity = 0.16;
      let pulse = 1 + Math.sin(cp.pulse * 0.4) * 0.03;
      let coreSpin = 0.5;
      let auraSpin = -0.36;

      if (isTriggered) {
        coreColor = 0x3f4c5f;
        auraColor = 0x2a3442;
        coreOpacity = 0.24;
        auraOpacity = 0.1;
        pulse = 0.98;
        coreSpin = 0.22;
        auraSpin = -0.16;
      } else if (isNext) {
        const blink = 0.74 + (Math.sin(cp.pulse) * 0.5 + 0.5) * 0.36;
        coreColor = 0x7fffe8;
        auraColor = 0x56cfff;
        coreOpacity = 0.72 * blink;
        auraOpacity = 0.28 * blink;
        pulse = 1 + Math.sin(cp.pulse) * 0.12;
        coreSpin = 1.12;
        auraSpin = -0.82;
      }

      cp.core.material.color.setHex(coreColor);
      cp.aura.material.color.setHex(auraColor);
      cp.core.material.opacity = coreOpacity;
      cp.aura.material.opacity = auraOpacity;
      cp.core.scale.setScalar(pulse);
      cp.aura.scale.setScalar(1.04 + (pulse - 1) * 0.65);
      cp.core.rotation.z += dt * coreSpin;
      cp.aura.rotation.z += dt * auraSpin;
    }

    updateItemWaveState(game, dt);

    for (const crate of game.itemCrates) {
      crate.spin += dt * (crate.anim?.spinSpeed ?? 1.8);
      if (!crate.active || crate.collected) {
        crate.mesh.visible = false;
        continue;
      }

      crate.mesh.visible = true;
      crate.mesh.rotation.y = crate.spin;
      const bob = Math.sin(game.simTime * (crate.anim?.pulseSpeed ?? 3.2) + crate.spin) * (crate.anim?.floatAmp ?? 0.18);
      crate.mesh.position.y = crate.basePos.y + bob;
      if (crate.core) {
        crate.core.rotation.x += dt * 0.75;
        crate.core.rotation.y += dt * ((crate.anim?.spinSpeed ?? 1.8) * 0.7);
      }
      if (crate.halo) {
        crate.halo.rotation.z += dt * (crate.anim?.ringSpeed ?? 0.9);
        const pulse = 1 + Math.sin(game.simTime * 3.8 + crate.spin) * 0.08;
        crate.halo.scale.setScalar(pulse);
      }
    }
  }
  function activateItemWave(game, wave) {
    if (!wave?.crates?.length) return;
    const assigned = assignWaveTypes(game, wave);
    wave.remaining = wave.crates.length;
    wave.active = true;
    wave.respawnTimer = 0;
    game.activeItemWave = wave.index;
    for (const crate of wave.crates) {
      crate.active = true;
      crate.collected = false;
      crate.type = assigned?.[crate.laneSlot] ?? crate.type ?? ITEM_TYPES[crate.itemIndex % ITEM_TYPES.length];
      crate.syncVisualType?.(crate.type);
      crate.mesh.visible = true;
    }
  }
  function updateItemWaveState(game, dt) {
    if (!game.itemWaves?.length) return;
    const respawnDelay = game.itemWaveAdvanceDelay ?? PHYSICS.itemWaveAdvanceDelay;

    if (!game.itemWavesInitialized) {
      for (const wave of game.itemWaves) {
        activateItemWave(game, wave);
      }
      game.itemWavesInitialized = true;
      return;
    }

    for (const wave of game.itemWaves) {
      if (!wave) continue;
      if (wave.active) {
        if ((wave.remaining ?? wave.crates.length) <= 0) {
          wave.active = false;
          wave.respawnTimer = respawnDelay;
          for (const crate of wave.crates) {
            crate.active = false;
            crate.mesh.visible = false;
          }
        }
        continue;
      }

      if ((wave.respawnTimer ?? 0) > 0) {
        wave.respawnTimer = Math.max(0, wave.respawnTimer - dt);
        if (wave.respawnTimer <= 0) {
          activateItemWave(game, wave);
        }
      }
    }
  }
  function createProjectileMesh(type) {
    const group = new THREE.Group();
    if (type === "banana") {
      const peel = new THREE.Mesh(
        new THREE.TorusGeometry(0.22, 0.06, 10, 22, Math.PI * 1.24),
        new THREE.MeshStandardMaterial({ color: 0xf7e160, emissive: 0x806d16, emissiveIntensity: 0.62, roughness: 0.42, metalness: 0.08 })
      );
      peel.rotation.z = Math.PI * 0.52;
      const tip = new THREE.Mesh(new THREE.ConeGeometry(0.05, 0.12, 8), new THREE.MeshStandardMaterial({ color: 0xfff3b8, roughness: 0.38, metalness: 0.06 }));
      tip.position.set(0.16, 0.16, 0);
      group.add(peel, tip);
    } else {
      const shell = new THREE.Mesh(
        new THREE.SphereGeometry(0.24, 14, 14),
        new THREE.MeshStandardMaterial({ color: 0x3f4652, emissive: 0x1f2530, emissiveIntensity: 0.55, roughness: 0.34, metalness: 0.5 })
      );
      const fuse = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.02, 0.14, 8),
        new THREE.MeshStandardMaterial({ color: 0xffb77b, emissive: 0x7f3c1f, emissiveIntensity: 0.62, roughness: 0.3, metalness: 0.18 })
      );
      fuse.position.y = 0.18;
      group.add(shell, fuse);
    }
    group.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = true;
      node.receiveShadow = true;
    });
    return group;
  }
  function createGroundHazardMesh(type) {
    const group = new THREE.Group();
    if (type === "banana") {
      const peel = new THREE.Mesh(
        new THREE.TorusGeometry(0.32, 0.07, 10, 24, Math.PI * 1.2),
        new THREE.MeshStandardMaterial({ color: 0xfbe569, emissive: 0x8b7420, emissiveIntensity: 0.65, roughness: 0.46, metalness: 0.06 })
      );
      peel.rotation.z = Math.PI * 0.5;
      peel.rotation.x = -0.35;
      const warning = new THREE.Mesh(
        new THREE.RingGeometry(0.4, 0.54, 24),
        new THREE.MeshBasicMaterial({ color: 0xffe78f, transparent: true, opacity: 0.5, side: THREE.DoubleSide })
      );
      warning.rotation.x = -Math.PI / 2;
      warning.position.y = 0.02;
      group.add(peel, warning);
      group.userData.warning = warning;
    } else if (type === "bomb") {
      const shell = new THREE.Mesh(
        new THREE.SphereGeometry(0.28, 16, 16),
        new THREE.MeshStandardMaterial({ color: 0x434d59, emissive: 0x242c36, emissiveIntensity: 0.6, roughness: 0.3, metalness: 0.52 })
      );
      shell.position.y = 0.2;
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.5, 0.68, 28),
        new THREE.MeshBasicMaterial({ color: 0xff9e6c, transparent: true, opacity: 0.56, side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.03;
      group.add(shell, ring);
      group.userData.warning = ring;
    } else {
      const mine = new THREE.Mesh(
        new THREE.CylinderGeometry(0.24, 0.26, 0.18, 12),
        new THREE.MeshStandardMaterial({ color: 0xae8e79, roughness: 0.55, metalness: 0.15 })
      );
      mine.position.y = 0.1;
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(0.36, 0.5, 22),
        new THREE.MeshBasicMaterial({ color: 0xffa377, transparent: true, opacity: 0.45, side: THREE.DoubleSide })
      );
      ring.rotation.x = -Math.PI / 2;
      ring.position.y = 0.02;
      group.add(mine, ring);
      group.userData.warning = ring;
    }
    group.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = true;
      node.receiveShadow = true;
    });
    return group;
  }
  function findFrontItemTarget(game, attacker) {
    let best = null;
    let bestScore = Number.POSITIVE_INFINITY;
    const headingForward = forwardFromHeading(attacker.heading);
    for (const target of game.racers) {
      if (target === attacker || target.finished || target.respawnTimer > 0) continue;
      if (target.knockdownTimer > 0) continue;
      tempVec3A.copy(target.position).sub(attacker.position).setY(0);
      const dist = tempVec3A.length();
      if (dist < 0.4 || dist > 60) continue;
      tempVec3A.multiplyScalar(1 / dist);
      const dot = tempVec3A.dot(headingForward);
      // Must be within ~120° forward cone (dot > 0.0 means in front)
      if (dot < 0.0) continue;
      // Score: prefer targets more aligned and closer
      const anglePenalty = 1 - dot; // 0 = perfectly ahead, 1 = 90° off
      const score = anglePenalty * 20 + dist;
      if (score < bestScore) {
        bestScore = score;
        best = target;
      }
    }
    return best;
  }
  function removeItemEffect(game, collection, index) {
    const item = collection[index];
    if (item?.mesh) game.fxRoot.remove(item.mesh);
    collection.splice(index, 1);
  }
  function spawnGroundHazard(game, type, position, ownerId, fromTracking = false) {
    const mesh = createGroundHazardMesh(type);
    const ground = game.activeLevel.heightFn(position.x, position.z) + 0.01;
    mesh.position.set(position.x, ground, position.z);
    game.fxRoot.add(mesh);
    const life = type === "banana"
      ? PHYSICS.bananaHazardLife
      : type === "bomb"
        ? PHYSICS.bombHazardLife
        : PHYSICS.trapHazardLife;
    const radius = type === "banana"
      ? PHYSICS.bananaHazardRadius
      : type === "bomb"
        ? PHYSICS.bombBlastRadius * 0.55
        : PHYSICS.trapHazardRadius;
    game.groundHazards.push({
      type,
      mesh,
      ownerId,
      life,
      radius,
      armTimer: fromTracking ? 0.22 : 0.36,
      ownerSafeTimer: fromTracking ? 0.28 : 0.9,
      spin: Math.random() * Math.PI * 2,
      fromTracking,
    });
  }
  function spawnTrackingProjectile(game, owner, type, target) {
    const mesh = createProjectileMesh(type);
    const start = owner.position.clone().add(new THREE.Vector3(0, 1.18, 0));
    mesh.position.copy(start);
    game.fxRoot.add(mesh);
    const initialDir = target
      ? tempVec3A.copy(target.position).sub(start).setY(0.4).normalize()
      : forwardFromHeading(owner.heading).clone().setY(0.1).normalize();
    const speed = PHYSICS.itemProjectileSpeed * (type === "banana" ? 0.92 : 1.04);
    game.itemProjectiles.push({
      type,
      ownerId: owner.id,
      targetId: target?.id ?? null,
      mesh,
      position: start,
      velocity: initialDir.multiplyScalar(speed),
      speed,
      turnRate: PHYSICS.itemProjectileTurnRate * (type === "banana" ? 0.86 : 1.06),
      life: type === "banana" ? PHYSICS.bananaProjectileLife : PHYSICS.bombProjectileLife,
      hitRadius: type === "banana" ? 1.0 : 1.25,
      trailTimer: 0,
    });
  }
  function triggerBombExplosion(game, position, ownerId) {
    // --- Multi-layer explosion VFX ---
    // Core fireball (bright orange-white)
    fx.spawnBurst(game, position, 0xffe8c0, 35, 2.4, 12);
    // Inner fire ring (deep orange)
    fx.spawnBurst(game, position, 0xff8833, 28, 3.0, 9);
    // Outer shockwave (red-orange expanding)
    fx.spawnBurst(game, position, 0xff4400, 22, 4.5, 7);
    // Smoke (dark grey rising)
    fx.spawnBurst(game, position, 0x555555, 16, 2.8, 4);
    // Sparks (bright yellow flung outward)
    fx.spawnBurst(game, position, 0xffee44, 12, 1.6, 14);

    // Sound: use the new multi-layered explosion
    fx.playExplosionSound(game);

    // Camera shake for any nearby player
    if (game.player) {
      const playerDist = Math.sqrt(distance2DSq(position.x, position.z, game.player.position.x, game.player.position.z));
      if (playerDist < PHYSICS.bombBlastRadius * 2) {
        const shakeAmount = THREE.MathUtils.clamp(1.2 * (1 - playerDist / (PHYSICS.bombBlastRadius * 2)), 0.2, 1.2);
        game.cameraShake = Math.max(game.cameraShake, shakeAmount);
      }
    }

    const owner = game.racers.find((entry) => entry.id === ownerId) ?? null;
    let hits = 0;
    for (const target of game.racers) {
      if (target.respawnTimer > 0 || target.knockdownTimer > 0) continue;
      const dist = Math.sqrt(distance2DSq(position.x, position.z, target.position.x, target.position.z));
      if (dist > PHYSICS.bombBlastRadius) continue;
      // Bombs have friendly fire — owner can be hit too
      if (target.itemHitCooldown > 0) continue;
      const ratio = 1 - dist / PHYSICS.bombBlastRadius;
      const knockPower = THREE.MathUtils.clamp(0.72 + ratio * 0.92, 0.72, 1.46);
      tempVec3B.copy(target.position).sub(position).setY(0);
      if (tempVec3B.lengthSq() < 0.0001) tempVec3B.set(0.0001, 0, 1);
      tempVec3B.normalize();
      target.itemHitCooldown = PHYSICS.itemHitImmunity;
      applyKnockdown(game, target, tempVec3B, knockPower, true);
      if (owner && target !== owner) hits += 1;
    }
    if (owner && hits > 0) owner.hits += hits;

  }
  function updateItemEffects(game, dt) {
    if (game.itemProjectiles?.length) {
      for (let i = game.itemProjectiles.length - 1; i >= 0; i -= 1) {
        const projectile = game.itemProjectiles[i];
        projectile.life -= dt;
        projectile.trailTimer -= dt;

        const target = projectile.targetId != null
          ? game.racers.find((entry) => entry.id === projectile.targetId && entry.respawnTimer <= 0 && !entry.finished)
          : null;

        if (target) {
          tempVec3A.copy(target.position).sub(projectile.position).setY(0.1);
          if (tempVec3A.lengthSq() > 0.0001) {
            tempVec3A.normalize();
            tempVec3B.copy(projectile.velocity).normalize().lerp(tempVec3A, THREE.MathUtils.clamp(projectile.turnRate * dt, 0, 1)).normalize();
            projectile.velocity.copy(tempVec3B.multiplyScalar(projectile.speed));
          }
        } else if (projectile.velocity.lengthSq() > 0.0001) {
          tempVec3B.copy(projectile.velocity).normalize().multiplyScalar(projectile.speed);
          projectile.velocity.copy(tempVec3B);
        }

        // Bomb gravity is now 2.5 (stronger than before, but less than banana's 6.5)
        projectile.velocity.y -= (projectile.type === "banana" ? 6.5 : 2.5) * dt;
        projectile.position.addScaledVector(projectile.velocity, dt);
        projectile.mesh.position.copy(projectile.position);
        projectile.mesh.rotation.y += dt * (projectile.type === "banana" ? 7.2 : 5.4);
        projectile.mesh.rotation.z += dt * (projectile.type === "banana" ? 3.8 : 2.8);

        if (projectile.trailTimer <= 0) {
          projectile.trailTimer = projectile.type === "banana" ? 0.1 : 0.08;
          fx.spawnBurst(game, projectile.position, projectile.type === "banana" ? 0xffe883 : 0xff9b6f, projectile.type === "banana" ? 3 : 4, 0.3, 1.8);
        }

        if (target) {
          const hitDist = Math.sqrt(distance2DSq(projectile.position.x, projectile.position.z, target.position.x, target.position.z));
          if (hitDist <= projectile.hitRadius && target.itemHitCooldown <= 0) {
            if (projectile.type === "banana") {
              tempVec3C.copy(target.position).sub(projectile.position).setY(0);
              if (tempVec3C.lengthSq() < 0.0001) tempVec3C.set(0.0001, 0, 1);
              tempVec3C.normalize();
              target.itemHitCooldown = PHYSICS.itemHitImmunity;
              applyKnockdown(game, target, tempVec3C, 0.9, true);
              const owner = game.racers.find((entry) => entry.id === projectile.ownerId);
              if (owner && owner !== target) owner.hits += 1;
              fx.spawnBurst(game, target.position, 0xffea86, 16, 1.1, 5.6);
              fx.playHitSound(game);
              removeItemEffect(game, game.itemProjectiles, i);
              continue;
            }
            triggerBombExplosion(game, projectile.position, projectile.ownerId);
            removeItemEffect(game, game.itemProjectiles, i);
            continue;
          }
        }

        const groundY = game.activeLevel.heightFn(projectile.position.x, projectile.position.z) + 0.05;
        if (projectile.position.y <= groundY || projectile.life <= 0) {
          if (projectile.type === "bomb") {
            // Bomb explodes on contact with ground/obstacle
            projectile.position.y = groundY;
            triggerBombExplosion(game, projectile.position, projectile.ownerId);
          } else {
            // Banana still becomes a ground hazard
            spawnGroundHazard(game, "banana", projectile.position, projectile.ownerId, true);
          }
          removeItemEffect(game, game.itemProjectiles, i);
        }
      }
    }

    if (!game.groundHazards?.length) return;
    for (let i = game.groundHazards.length - 1; i >= 0; i -= 1) {
      const hazard = game.groundHazards[i];
      hazard.life -= dt;
      hazard.armTimer -= dt;
      hazard.ownerSafeTimer -= dt;
      hazard.spin += dt * (hazard.type === "banana" ? 1.3 : 2.2);
      hazard.mesh.rotation.y = hazard.spin;
      if (hazard.mesh.userData.warning) {
        const blink = 0.34 + (Math.sin(game.simTime * (hazard.type === "bomb" ? 12 : 7)) * 0.5 + 0.5) * 0.46;
        hazard.mesh.userData.warning.material.opacity = blink;
      }

      if (hazard.life <= 0) {
        if (hazard.type === "bomb") triggerBombExplosion(game, hazard.mesh.position, hazard.ownerId);
        removeItemEffect(game, game.groundHazards, i);
        continue;
      }
      if (hazard.armTimer > 0) continue;

      let triggered = false;
      for (const target of game.racers) {
        if (target.respawnTimer > 0 || target.knockdownTimer > 0) continue;
        if (target.id === hazard.ownerId && hazard.ownerSafeTimer > 0) continue;
        if (target.itemHitCooldown > 0) continue;
        const dist = Math.sqrt(distance2DSq(hazard.mesh.position.x, hazard.mesh.position.z, target.position.x, target.position.z));
        if (dist > hazard.radius) continue;
        target.itemHitCooldown = PHYSICS.itemHitImmunity;
        tempVec3D.copy(target.position).sub(hazard.mesh.position).setY(0);
        if (tempVec3D.lengthSq() < 0.0001) tempVec3D.set(0.0001, 0, 1);
        tempVec3D.normalize();
        if (hazard.type === "bomb") {
          triggerBombExplosion(game, hazard.mesh.position, hazard.ownerId);
        } else if (hazard.type === "banana") {
          applyKnockdown(game, target, tempVec3D, 0.82, true);
          const owner = game.racers.find((entry) => entry.id === hazard.ownerId);
          if (owner && owner !== target) owner.hits += 1;
          fx.spawnBurst(game, target.position, 0xffec94, 14, 1, 4.8);
          fx.playHitSound(game);
        } else {
          applyKnockdown(game, target, tempVec3D, 0.92, true);
          const owner = game.racers.find((entry) => entry.id === hazard.ownerId);
          if (owner && owner !== target) owner.hits += 1;
          fx.spawnBurst(game, target.position, 0xffba8c, 14, 1, 4.8);
          fx.playHitSound(game);
        }
        triggered = true;
        break;
      }
      if (triggered) removeItemEffect(game, game.groundHazards, i);
    }
  }
  function tryCollectItem(game, racer) {
    for (const crate of game.itemCrates) {
      if (!crate.active || crate.collected || racer.itemType) continue;
      const distSq = distance2DSq(racer.position.x, racer.position.z, crate.mesh.position.x, crate.mesh.position.z);
      if (distSq > crate.radius * crate.radius) continue;
      racer.itemType = crate.type ?? ITEM_TYPES[crate.itemIndex % ITEM_TYPES.length];
      crate.collected = true;
      crate.active = false;
      crate.mesh.visible = false;
      const wave = game.itemWaves?.[crate.waveIndex];
      if (wave) {
        wave.remaining = Math.max(0, (wave.remaining ?? wave.crates.length) - 1);
        if (wave.remaining <= 0 && wave.active) {
          wave.active = false;
          wave.respawnTimer = game.itemWaveAdvanceDelay ?? PHYSICS.itemWaveAdvanceDelay;
          for (const waveCrate of wave.crates) {
            waveCrate.active = false;
            waveCrate.mesh.visible = false;
          }
        }
      }
      if (racer.isPlayer && game.state === STATE.RACING) {
        const pickupColor = racer.itemType === "shield"
          ? 0xffd77a
          : racer.itemType === "banana"
            ? 0xffeb92
            : racer.itemType === "bomb"
              ? 0xffa87a
              : racer.itemType === "trap"
                ? 0xffbd8e
                : 0x8ff8ff;
        setRaceMessage(game, `获得道具: ${itemName(racer.itemType)}`, 0.9);
        fx.playPickupSound(game);
        fx.spawnBurst(game, crate.mesh.position, pickupColor, 14, 0.9, 4.6);
      }
    }
  }
  function useItem(game, racer) {
    if (!racer.itemType || racer.itemCooldown > 0 || racer.respawnTimer > 0) return false;
    const type = racer.itemType;
    racer.itemType = null;
    racer.itemCooldown = 1.0;
    const forward = forwardFromHeading(racer.heading);

    if (type === "turbo") {
      racer.velocity.addScaledVector(forward, 14.5);
      racer.boostTimer = Math.max(racer.boostTimer, 1.35);
      fx.spawnBurst(game, racer.position, 0x8ffcff, 16, 1.2, 6.6);
      fx.playBoostSound(game);
    } else if (type === "bash") {
      let hits = 0;
      for (const target of game.racers) {
        if (target === racer || target.respawnTimer > 0 || target.knockdownTimer > 0) continue;
        tempVec3A.copy(target.position).sub(racer.position);
        tempVec3A.y = 0;
        const dist = tempVec3A.length();
        if (dist > 4.6 || dist < 0.2) continue;
        tempVec3A.normalize();
        if (tempVec3A.dot(forward) < 0.02) continue;
        target.velocity.addScaledVector(tempVec3A, 10.5);
        target.velocity.y += 3.4;
        applyKnockdown(game, target, tempVec3A, 1.15, true);
        hits += 1;
      }
      if (hits > 0) racer.hits += hits;
      fx.spawnBurst(game, racer.position, 0xffb08f, 18, 1.3, 6.8);
      fx.playHitSound(game);
    } else if (type === "shock") {
      let hits = 0;
      for (const target of game.racers) {
        if (target === racer || target.respawnTimer > 0 || target.knockdownTimer > 0) continue;
        const dist = Math.sqrt(distance2DSq(racer.position.x, racer.position.z, target.position.x, target.position.z));
        if (dist > 6.2) continue;
        tempVec3A.copy(target.position).sub(racer.position).setY(0).normalize();
        target.velocity.addScaledVector(tempVec3A, 7.4);
        target.stunTimer = Math.max(target.stunTimer, 1.35);
        applyKnockdown(game, target, tempVec3A, 0.72, false);
        hits += 1;
      }
      if (hits > 0) racer.hits += hits;
      fx.spawnBurst(game, racer.position, 0x91ddff, 24, 1.6, 7.8);
      fx.playShockSound(game);
      // Per-target shock flash VFX
      for (const target of game.racers) {
        if (target === racer || target.respawnTimer > 0 || target.knockdownTimer > 0) continue;
        const d = Math.sqrt(distance2DSq(racer.position.x, racer.position.z, target.position.x, target.position.z));
        if (d <= 6.2) {
          fx.spawnBurst(game, target.position, 0x44ccff, 14, 1.2, 5.5);
        }
      }
    } else if (type === "shield") {
      racer.shieldTimer = 10;
      racer.shieldHits = 3;
      racer.boostTimer = Math.max(racer.boostTimer, 0.7);
      fx.spawnBurst(game, racer.position, 0xffd97b, 26, 1.5, 5.4);
      fx.playPickupSound(game);
    } else if (type === "trap") {
      const dropPos = racer.position.clone().addScaledVector(forward, -2.7);
      spawnGroundHazard(game, "trap", dropPos, racer.id, false);
      fx.spawnBurst(game, dropPos, 0xffb688, 14, 0.9, 3.8);
      fx.playPickupSound(game);
    } else if (type === "banana") {
      const target = findFrontItemTarget(game, racer);
      spawnTrackingProjectile(game, racer, "banana", target);
      fx.spawnBurst(game, racer.position.clone().addScaledVector(forward, 1.1), 0xffea8a, 8, 0.7, 3.1);
      fx.playPickupSound(game);
    } else if (type === "bomb") {
      const target = findFrontItemTarget(game, racer);
      spawnTrackingProjectile(game, racer, "bomb", target);
      fx.spawnBurst(game, racer.position.clone().addScaledVector(forward, 1.1), 0xffa47a, 10, 0.8, 3.6);
      fx.playHitSound(game);
    }
    if (racer.isPlayer && game.state === STATE.RACING) setRaceMessage(game, `使用道具: ${itemName(type)}`, 0.72);
    return true;
  }
  return {
    animateCheckpointAndItems,
    tryCollectItem,
    useItem,
    updateItemEffects,
  };
}
