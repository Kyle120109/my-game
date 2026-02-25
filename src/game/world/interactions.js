import * as THREE from "three";
import { ITEM_TYPES, PHYSICS } from "../config.js";
import { samplePath, surfaceNormal, distanceToTrack } from "../levels.js";
import { buildOrthonormalFrame } from "./math.js";
export function createInteractionBuilder({ modelLibrary, tempVec3A, tempVec3B, tempVec3C, tempMat4 }) {
  function getLevelPhysicsValue(baseValue, byLevel, levelId) {
    if (Number.isFinite(byLevel?.[levelId])) return byLevel[levelId];
    if (Number.isFinite(byLevel?.default)) return byLevel.default;
    return baseValue;
  }
  function normalizeItemDefs(level) {
    if (!Array.isArray(level.items)) return [];
    return level.items
      .map((def) => {
        const rawT = Number(def?.t);
        return {
          t: Number.isFinite(rawT) ? THREE.MathUtils.euclideanModulo(rawT, 1) : 0,
          lane: Number.isFinite(def?.lane) ? def.lane : 0,
          generated: false,
        };
      })
      .sort((a, b) => a.t - b.t);
  }
  function buildDenseItemDefs(level) {
    const baseDefs = normalizeItemDefs(level);
    if (baseDefs.length === 0) return [];

    const minWaveCount = 5;
    const maxWaveCount = Math.max(
      minWaveCount,
      Math.floor(getLevelPhysicsValue(PHYSICS.itemWaveMaxWaveCount, PHYSICS.itemWaveMaxWaveCountByLevel, level.id))
    );
    if (baseDefs.length >= minWaveCount && baseDefs.length <= maxWaveCount) {
      return baseDefs.map((def) => ({ t: def.t, lane: def.lane }));
    }

    if (baseDefs.length > maxWaveCount) {
      const picked = [];
      for (let i = 0; i < maxWaveCount; i += 1) {
        const index = Math.floor((i * baseDefs.length) / maxWaveCount);
        const def = baseDefs[Math.min(index, baseDefs.length - 1)];
        picked.push({ t: def.t, lane: def.lane });
      }
      return picked;
    }

    // If fewer than 5 anchors are configured, up-sample to keep wave cadence stable.
    const generated = [];
    for (let i = 0; i < minWaveCount; i += 1) {
      const index = Math.floor((i * baseDefs.length) / minWaveCount);
      const def = baseDefs[Math.min(index, baseDefs.length - 1)];
      generated.push({
        t: def.t,
        lane: def.lane,
      });
    }
    return generated;
  }
  function inspectRampGroundContact(level, center, right, up, forward, width, length, slopeDeg, halfHeight = 0.46) {
    const slopeRad = THREE.MathUtils.degToRad(slopeDeg);
    const cos = Math.cos(slopeRad);
    const sin = Math.sin(slopeRad);
    const lateralSamples = [-0.46, 0, 0.46];
    const longitudinalSamples = [-0.58, -0.28, 0, 0.28, 0.58];
    let minClearance = Number.POSITIVE_INFINITY;
    let maxPenetration = 0;

    for (const lateral of lateralSamples) {
      for (const longitudinal of longitudinalSamples) {
        const localX = width * 0.5 * lateral;
        const localZ = length * 0.5 * longitudinal;
        const rotatedY = -halfHeight * cos + localZ * sin;
        const rotatedZ = halfHeight * sin + localZ * cos;
        const sampleX = center.x + right.x * localX + up.x * rotatedY + forward.x * rotatedZ;
        const sampleY = center.y + right.y * localX + up.y * rotatedY + forward.y * rotatedZ;
        const sampleZ = center.z + right.z * localX + up.z * rotatedY + forward.z * rotatedZ;
        const terrainY = level.heightFn(sampleX, sampleZ);
        const penetration = terrainY - sampleY;
        if (penetration > maxPenetration) maxPenetration = penetration;
        const clearance = sampleY - terrainY;
        if (clearance < minClearance) minClearance = clearance;
      }
    }

    return {
      maxPenetration,
      minClearance: Number.isFinite(minClearance) ? minClearance : 0,
    };
  }
  function buildInteractionZones(game, level) {
    const rampMat = modelLibrary.createRoadMarkerMaterial(level.palette.ramp);
    const boostMat = modelLibrary.createRoadMarkerMaterial(level.palette.boost);

    game.ramps = [];
    game.boostPads = [];
    game.itemCrates = [];
    level.rampAudit = [];

    const safeLaneLimit = level.routeHalfWidth * 0.82;
    for (let i = 0; i < level.ramps.length; i += 1) {
      const def = level.ramps[i];
      const issues = [];

      const tRaw = def.t ?? 0;
      const t = THREE.MathUtils.clamp(tRaw, 0, 1);
      if (Math.abs(t - tRaw) > 0.0001) issues.push(`t ${Number(tRaw.toFixed(3))} -> ${Number(t.toFixed(3))}`);

      const laneRaw = def.lane ?? 0;
      const lane = THREE.MathUtils.clamp(laneRaw, -safeLaneLimit, safeLaneLimit);
      if (Math.abs(lane - laneRaw) > 0.01) issues.push(`lane ${Number(laneRaw.toFixed(2))} -> ${Number(lane.toFixed(2))}`);

      const slopeRaw = def.slope ?? 14;
      const slope = Math.max(14, slopeRaw);
      if (Math.abs(slope - slopeRaw) > 0.01) issues.push(`slope ${Number(slopeRaw.toFixed(1))} -> ${Number(slope.toFixed(1))}`);

      const launchRaw = def.launch ?? PHYSICS.rampMinLaunchVelocity;
      const launch = Math.max(PHYSICS.rampMinLaunchVelocity, launchRaw);
      if (Math.abs(launch - launchRaw) > 0.01) issues.push(`launch ${Number(launchRaw.toFixed(2))} -> ${Number(launch.toFixed(2))}`);

      const boostRaw = def.boost ?? 0;
      const boost = Math.max(3.6, boostRaw);
      if (Math.abs(boost - boostRaw) > 0.01) issues.push(`boost ${Number(boostRaw.toFixed(2))} -> ${Number(boost.toFixed(2))}`);

      const sampled = samplePath(level, t * level.totalLength);
      const right = tempVec3A;
      const up = tempVec3B;
      const forward = tempVec3C.copy(sampled.forward);
      buildOrthonormalFrame(forward, surfaceNormal(level, sampled.point.x, sampled.point.z), right, up, forward);
      const pos = sampled.point.clone().addScaledVector(right, lane).addScaledVector(up, 0.46);
      const trackDistance = distanceToTrack(level, pos.x, pos.z);
      if (trackDistance > level.routeHalfWidth * 1.08) issues.push(`offTrack=${Number(trackDistance.toFixed(2))}`);
      const preContact = inspectRampGroundContact(level, pos, right, up, forward, def.width, def.length, slope);
      let terrainLift = 0;
      if (preContact.maxPenetration > 0.01) {
        terrainLift = preContact.maxPenetration + 0.14;
        pos.addScaledVector(up, terrainLift);
        issues.push(`lift +${Number(terrainLift.toFixed(2))}`);
      }
      const postContact = inspectRampGroundContact(level, pos, right, up, forward, def.width, def.length, slope);
      if (postContact.maxPenetration > 0.08) issues.push(`embed=${Number(postContact.maxPenetration.toFixed(2))}`);

      const mesh = new THREE.Mesh(new THREE.BoxGeometry(def.width, 0.92, def.length), rampMat.clone());
      tempMat4.makeBasis(right, up, forward);
      mesh.quaternion.setFromRotationMatrix(tempMat4);
      mesh.rotateX(-THREE.MathUtils.degToRad(slope));
      mesh.position.copy(pos);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      game.routeRoot.add(mesh);

      game.ramps.push({
        id: i,
        x: pos.x,
        y: pos.y,
        z: pos.z,
        forward: forward.clone(),
        right: right.clone(),
        width: def.width,
        length: def.length,
        launch,
        boost,
        slope,
        lane,
        trackDistance,
        terrainLift,
        minGroundClearance: postContact.minClearance,
      });

      if (issues.length > 0) {
        level.rampAudit.push({
          map: level.id,
          index: i,
          x: pos.x,
          z: pos.z,
          issues,
          corrected: true,
          critical: trackDistance > level.routeHalfWidth * 1.28 || postContact.maxPenetration > 0.08,
        });
      }
    }

    for (const def of level.boosts) {
      const sampled = samplePath(level, def.t * level.totalLength);
      const right = tempVec3A;
      const up = tempVec3B;
      const forward = tempVec3C.copy(sampled.forward);
      buildOrthonormalFrame(forward, surfaceNormal(level, sampled.point.x, sampled.point.z), right, up, forward);
      const pos = sampled.point.clone().addScaledVector(right, def.lane).addScaledVector(up, 0.22);

      const mesh = new THREE.Mesh(new THREE.BoxGeometry(def.width, 0.2, def.length), boostMat.clone());
      tempMat4.makeBasis(right, up, forward);
      mesh.quaternion.setFromRotationMatrix(tempMat4);
      mesh.position.copy(pos);
      mesh.receiveShadow = true;
      game.routeRoot.add(mesh);

      game.boostPads.push({
        x: pos.x,
        y: pos.y,
        z: pos.z,
        forward: forward.clone(),
        right: right.clone(),
        width: def.width,
        length: def.length,
        power: def.power,
      });
    }

    // Increased lane spread by ~40% (multiplier 1.4) to accommodate 25% larger item crate models
    const laneSpread = Math.min(level.routeHalfWidth * PHYSICS.itemWaveLaneFactor * 1.4, 4.8);
    const laneOffsets = [-laneSpread, 0, laneSpread];
    const itemDefs = buildDenseItemDefs(level);

    for (let i = 0; i < itemDefs.length; i += 1) {
      const def = itemDefs[i];
      const sampled = samplePath(level, def.t * level.totalLength);
      const normal = surfaceNormal(level, sampled.point.x, sampled.point.z);
      const right = tempVec3A.crossVectors(normal, sampled.forward).normalize();
      const wave = {
        index: i,
        crates: [],
        remaining: 0,
        active: false,
        respawnTimer: 0,
      };

      for (let laneSlot = 0; laneSlot < laneOffsets.length; laneSlot += 1) {
        const laneBase = (def.lane ?? 0) + laneOffsets[laneSlot];
        const lane = THREE.MathUtils.clamp(laneBase, -level.routeHalfWidth * 0.86, level.routeHalfWidth * 0.86);
        const pos = sampled.point.clone().addScaledVector(right, lane).addScaledVector(normal, 2.6);
        const itemType = ITEM_TYPES[(i + laneSlot) % ITEM_TYPES.length];
        const pickup = modelLibrary.createPickupModel(itemType);
        pickup.position.copy(pos);
        pickup.visible = false;
        game.routeRoot.add(pickup);

        const crate = {
          mesh: pickup,
          core: pickup.userData.core,
          halo: pickup.userData.halo,
          type: itemType,
          basePos: pos.clone(),
          radius: 1.24,
          spin: Math.random() * Math.PI * 2,
          anim: pickup.userData.anim,
          itemIndex: i * laneOffsets.length + laneSlot,
          waveIndex: i,
          laneSlot,
          active: false,
          collected: false,
        };
        crate.syncVisualType = (nextType) => {
          if (!crate.mesh || !nextType) return;
          if (crate.mesh.userData?.pickupType === nextType) return;
          modelLibrary.applyPickupModelType(crate.mesh, nextType);
          crate.core = crate.mesh.userData.core;
          crate.halo = crate.mesh.userData.halo;
          crate.anim = crate.mesh.userData.anim;
        };
        wave.crates.push(crate);
        game.itemCrates.push(crate);
      }

      game.itemWaves.push(wave);
    }

    if (game.itemWaves.length > 0) {
      game.itemWavesInitialized = false;
      game.activeItemWave = -1;
      game.itemWaveCooldown = 0;
      game.itemWaveAdvanceDelay = PHYSICS.itemWaveAdvanceDelay;
    }
  }
  return {
    buildInteractionZones,
  };
}

