import * as THREE from "three";
import { WORLD_UP } from "../../config.js";
import { samplePath, surfaceNormal, distanceToTrack } from "../../levels.js";
import { buildOrthonormalFrame } from "../math.js";
import { pushBoxObstacle } from "../obstacles.js";

export function createUrbanEnvironmentBuilder({ modelLibrary, tempVec3A, tempVec3B, tempVec3C, tempMat4 }) {
  function buildUrbanEnvironment(game, level, rng) {
    const roofMat = new THREE.MeshStandardMaterial({ color: 0x1a1c20, roughness: 0.92 });
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x444b55, roughness: 0.88 });
    const retainingMat = new THREE.MeshStandardMaterial({ color: 0x3b424c, roughness: 0.8 });
    const bridgeRailMat = new THREE.MeshStandardMaterial({ color: 0xa8afb8, roughness: 0.62, metalness: 0.34 });
    const lineMat = new THREE.MeshStandardMaterial({ color: 0xeebc22, roughness: 0.4 });
    const lightPoleMat = new THREE.MeshStandardMaterial({ color: 0x2c3340, roughness: 0.6, metalness: 0.42 });
    const lightGlowMat = new THREE.MeshStandardMaterial({ color: 0xffeebb, emissive: 0xffaa00, emissiveIntensity: 1.0 });
    const signMat = new THREE.MeshStandardMaterial({ color: 0x1b405f, roughness: 0.5, metalness: 0.2 });
    const signArrowMat = new THREE.MeshStandardMaterial({ color: 0xe7f4ff, roughness: 0.34, metalness: 0.18 });

    const placeBuilding = (x, z, w, d, h, styleIndex) => {
      const dist = distanceToTrack(level, x, z);
      if (dist < level.routeHalfWidth + Math.max(w, d) * 0.6 + 4.0) return;

      // Density reduction far from the track to optimize performance
      if (dist > 150 && rng() > 0.4) return;
      if (dist > 250 && rng() > 0.15) return;

      let group;
      if (modelLibrary && modelLibrary.createDetailedBuildingModel) {
        group = modelLibrary.createDetailedBuildingModel(w, d, h, styleIndex, rng);
      } else {
        // Fallback if modelLibrary doesn't have it
        group = new THREE.Group();
        const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), pillarMat);
        body.position.y = h * 0.5;
        group.add(body);
      }

      const baseY = level.heightFn(x, z);
      group.position.set(x, baseY, z);
      game.decorRoot.add(group);

      pushBoxObstacle(game, {
        x, y: baseY + h * 0.5, z,
        right: tempVec3A.set(1, 0, 0),
        forward: tempVec3B.set(0, 0, 1),
        halfWidth: w * 0.5,
        halfLength: d * 0.5,
        halfHeight: h * 0.5,
        crashWeight: 2.0,
        type: "decor",
      });
    };

    // 1. Build continuous dense city blocks
    for (let x = level.bounds.minX + 25; x < level.bounds.maxX - 25; x += 40) {
      for (let z = level.bounds.minZ + 25; z < level.bounds.maxZ - 25; z += 40) {
        if (rng() > 0.9) continue; // occasional open plaza
        const isCore = Math.abs(x) < 200 && Math.abs(z) < 200;
        const w = 24 + rng() * 12;
        const d = 24 + rng() * 12;
        const h = 20 + rng() * (isCore ? 90 : 40); // Skyscraper core
        placeBuilding(x + (rng() - 0.5) * 6, z + (rng() - 0.5) * 6, w, d, h, Math.floor(rng() * 8));
      }
    }

    // 2. Procedural Engineering Structures strictly following the path
    const stepSize = 10;
    for (let s = 0; s < level.totalLength; s += stepSize) {
      const sampled = samplePath(level, s);
      const y = sampled.point.y;

      const forward = tempVec3A.copy(sampled.forward);
      const right = tempVec3B;
      const up = tempVec3C;
      buildOrthonormalFrame(forward, surfaceNormal(level, sampled.point.x, sampled.point.z), right, up, forward);

      // Elevated Highway Structures
      if (y > 22) {
        const deckThickness = 1.2;
        const deckW = level.routeHalfWidth * 2 + 5.0;
        const deck = new THREE.Mesh(new THREE.BoxGeometry(deckW, deckThickness, stepSize + 0.2), retainingMat);
        deck.position.copy(sampled.point).addScaledVector(WORLD_UP, -deckThickness * 0.5 - 0.1);
        tempMat4.makeBasis(right, WORLD_UP, forward);
        deck.quaternion.setFromRotationMatrix(tempMat4);
        deck.receiveShadow = true;
        game.decorRoot.add(deck);

        // Guardrails
        for (const side of [-1, 1]) {
          const railOffset = level.routeHalfWidth + 1.2;
          const rail = new THREE.Mesh(new THREE.BoxGeometry(0.8, 1.4, stepSize + 0.2), bridgeRailMat);
          rail.position.copy(sampled.point).addScaledVector(right, railOffset * side).addScaledVector(WORLD_UP, 0.7);
          rail.quaternion.setFromRotationMatrix(tempMat4);
          rail.castShadow = true;
          rail.receiveShadow = true;
          game.decorRoot.add(rail);

          pushBoxObstacle(game, {
            x: rail.position.x, y: rail.position.y, z: rail.position.z,
            right: right.clone(), forward: forward.clone(),
            halfWidth: 0.4, halfLength: stepSize * 0.5, halfHeight: 0.7,
            crashWeight: 1.5, type: "edge"
          });
        }

        // Massive Pillars
        if (s % 40 < stepSize) {
          const pierH = y + 15; // Extends deep into ground
          const pier = new THREE.Mesh(new THREE.BoxGeometry(deckW * 0.5, pierH, 4.5), pillarMat);
          pier.position.copy(sampled.point).addScaledVector(WORLD_UP, -pierH * 0.5 - deckThickness);
          pier.quaternion.setFromRotationMatrix(tempMat4);
          pier.castShadow = true;
          pier.receiveShadow = true;
          game.decorRoot.add(pier);
        }
      }

      // Sunken Tunnels / Trenches (Underpass)
      if (y < 8) {
        for (const side of [-1, 1]) {
          const wallOffset = level.routeHalfWidth + 2.5;
          const wallH = 20 - y; // Reaches up to street level
          const wall = new THREE.Mesh(new THREE.BoxGeometry(1.5, wallH, stepSize + 0.2), retainingMat);
          wall.position.copy(sampled.point).addScaledVector(right, wallOffset * side).addScaledVector(WORLD_UP, wallH * 0.5 - 0.5);
          tempMat4.makeBasis(right, WORLD_UP, forward);
          wall.quaternion.setFromRotationMatrix(tempMat4);
          wall.castShadow = true;
          wall.receiveShadow = true;
          game.decorRoot.add(wall);

          pushBoxObstacle(game, {
            x: wall.position.x, y: wall.position.y, z: wall.position.z,
            right: right.clone(), forward: forward.clone(),
            halfWidth: 0.75, halfLength: stepSize * 0.5, halfHeight: wallH * 0.5,
            crashWeight: 1.8, type: "edge"
          });
        }
      }

      // Overhead signs with clearance expression (net clearance)
      if (s % 180 < stepSize) {
        const signH = 7.5;
        const poleOffset = level.routeHalfWidth + 3.0;

        // Archway pillars
        for (const side of [-1, 1]) {
          const signPole = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, signH, 8), lightPoleMat);
          signPole.position.copy(sampled.point).addScaledVector(right, poleOffset * side).addScaledVector(WORLD_UP, signH * 0.5);
          game.decorRoot.add(signPole);
        }

        // Archway crossbeam
        const span = poleOffset * 2;
        const beam = new THREE.Mesh(new THREE.BoxGeometry(span, 0.4, 0.4), lightPoleMat);
        beam.position.copy(sampled.point).addScaledVector(WORLD_UP, signH - 0.2);
        tempMat4.makeBasis(right, WORLD_UP, forward);
        beam.quaternion.setFromRotationMatrix(tempMat4);
        game.decorRoot.add(beam);

        // Sign panel
        const panel = new THREE.Mesh(new THREE.BoxGeometry(span * 0.4, 1.8, 0.2), signMat);
        panel.position.copy(sampled.point).addScaledVector(WORLD_UP, signH - 1.2);
        panel.quaternion.setFromRotationMatrix(tempMat4);
        game.decorRoot.add(panel);

        const arrow = new THREE.Mesh(new THREE.BoxGeometry(span * 0.2, 0.4, 0.3), signArrowMat);
        arrow.position.copy(sampled.point).addScaledVector(WORLD_UP, signH - 1.2).addScaledVector(forward, 0.1);
        arrow.quaternion.setFromRotationMatrix(tempMat4);
        game.decorRoot.add(arrow);
      }

      // Street Lights (Rhythm)
      if (s % 40 < stepSize) {
        for (const side of [-1, 1]) {
          const poleOffset = level.routeHalfWidth + 1.2;
          if (y < 8) continue; // Don't place tall lights inside the trench wall
          const pBase = sampled.point.clone().addScaledVector(right, poleOffset * side);
          const poleH = 9.0;
          const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, poleH, 8), lightPoleMat);
          pole.position.copy(pBase).addScaledVector(WORLD_UP, poleH * 0.5);
          game.decorRoot.add(pole);

          const glow = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.15, 0.4), lightGlowMat);
          glow.position.copy(pBase).addScaledVector(WORLD_UP, poleH).addScaledVector(right, -0.6 * side);
          tempMat4.makeBasis(right, WORLD_UP, forward);
          glow.quaternion.setFromRotationMatrix(tempMat4);
          game.decorRoot.add(glow);
        }
      }

      // Intersection Vocabulary: Road Markings
      if (s % 12 < stepSize) {
        const mark = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.05, 4.0), lineMat);
        mark.position.copy(sampled.point).addScaledVector(WORLD_UP, 0.05);
        tempMat4.makeBasis(right, WORLD_UP, forward);
        mark.quaternion.setFromRotationMatrix(tempMat4);
        game.decorRoot.add(mark);
      }
    }

    // 3. Scatter the City/Urban thematic props onto the sidewalks and side streets
    const cityModels = modelLibrary ? modelLibrary.getCityModels() : [];
    if (cityModels.length > 0) {
      for (let i = 0; i < level.propCount * 1.5; i++) {
        let placed = false;
        for (let attempt = 0; attempt < 20 && !placed; attempt++) {
          const x = THREE.MathUtils.lerp(level.bounds.minX + 10, level.bounds.maxX - 10, rng());
          const z = THREE.MathUtils.lerp(level.bounds.minZ + 10, level.bounds.maxZ - 10, rng());

          // Don't spawn props on the high overpasses or deep in the sunken highways
          const dist = distanceToTrack(level, x, z);
          if (dist < level.routeHalfWidth + 2.5) continue;

          const y = level.heightFn(x, z);
          if (y < 8 || y > 15) continue;

          const scale = 0.85 + rng() * 1.5;
          const propIndex = Math.floor(rng() * cityModels.length);
          const item = cityModels[propIndex](scale, rng);
          item.position.set(x, y, z);
          item.rotation.y = rng() * Math.PI * 2;
          game.decorRoot.add(item);

          pushBoxObstacle(game, {
            x, z, y: y + (item.userData.obstacleHeight || 2.0) * 0.5,
            right: tempVec3A.set(1, 0, 0),
            forward: tempVec3B.set(0, 0, 1),
            halfWidth: item.userData.obstacleRadius || 1.4,
            halfLength: item.userData.obstacleRadius || 1.4,
            halfHeight: (item.userData.obstacleHeight || 2.0) * 0.5,
            crashWeight: item.userData.crashWeight || 1.5,
            type: "decor"
          });
          placed = true;
        }
      }
    }
  }

  return { buildUrbanEnvironment };
}
