import * as THREE from "three";
import { WORLD_UP } from "../../config.js";
import { samplePath, surfaceNormal, distanceToTrack } from "../../levels.js";
import { buildOrthonormalFrame } from "../math.js";
import { pushBoxObstacle } from "../obstacles.js";

export function createHarborEnvironmentBuilder({ modelLibrary, tempVec3A, tempVec3B, tempVec3C = new THREE.Vector3(), tempMat4 = new THREE.Matrix4() }) {
  function buildHarborEnvironment(game, level, rng) {
    const containerMats = [
      new THREE.MeshStandardMaterial({ color: 0xba4a22, roughness: 0.84 }),
      new THREE.MeshStandardMaterial({ color: 0x24587a, roughness: 0.8 }),
      new THREE.MeshStandardMaterial({ color: 0x4a6a3b, roughness: 0.82 }),
      new THREE.MeshStandardMaterial({ color: 0x755a3c, roughness: 0.85 }),
      new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.75 })
    ];

    const craneMat = new THREE.MeshStandardMaterial({ color: 0x222933, roughness: 0.62, metalness: 0.42 });
    const craneWarnMat = new THREE.MeshStandardMaterial({ color: 0xdd8822, roughness: 0.54, metalness: 0.24 });
    const waterMat = new THREE.MeshStandardMaterial({ color: 0x1b4559, roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.85 });
    const concreteMat = new THREE.MeshStandardMaterial({ color: 0x5a636a, roughness: 0.85 });
    const edgeRailMat = new THREE.MeshStandardMaterial({ color: 0xbbccdd, roughness: 0.6, metalness: 0.8 });
    const rustedPillarMat = new THREE.MeshStandardMaterial({ color: 0x44413e, roughness: 0.9, metalness: 0.3 });

    // 1. Water Plane (Y = 4.0)
    // Segmented to pass terrain triangle edge limits in the audit
    const waterPlane = new THREE.Mesh(new THREE.PlaneGeometry(1600, 800, 32, 16), waterMat);
    waterPlane.rotation.x = -Math.PI * 0.5;
    waterPlane.position.set(0, 4.0, 400); // Shifted to South, sits above the Y=0 seafloor
    waterPlane.receiveShadow = true;
    game.terrainRoot.add(waterPlane);

    // Embankment wall removed, terrain now slopes naturally into the water

    const placeContainerStack = (x, z, hCount, yaw) => {
      const group = new THREE.Group();
      if (modelLibrary && modelLibrary.getHarborModels) {
        const makeContainer = modelLibrary.getHarborModels()[0];
        const s = 2.45; // Scales length to ~12 units to match old
        const hUnit = s * 2.0; // Our detailed container is s * 2.0 tall

        for (let i = 0; i < hCount; i++) {
          const c = makeContainer(s, rng);
          // Since our makeContainer already returns a group where the box is at y = s*1.0
          // We stack them exactly hUnit apart
          c.position.y = hUnit * i;
          group.add(c);
        }

        const baseY = level.heightFn(x, z);
        group.position.set(x, baseY, z);
        group.rotation.y = yaw;
        game.decorRoot.add(group);

        pushBoxObstacle(game, {
          x, y: baseY + (hUnit * hCount) * 0.5, z,
          right: tempVec3A.set(1, 0, 0).applyAxisAngle(WORLD_UP, yaw),
          forward: tempVec3B.set(0, 0, 1).applyAxisAngle(WORLD_UP, yaw),
          halfWidth: s * 0.95, halfLength: s * 2.45, halfHeight: (hUnit * hCount) * 0.5,
          crashWeight: 5.0, type: "decor",
        });
      }
    };

    // 2. Strategic Container Placements (Sparse, Performance Optimized)
    // Instead of looping a massive 1000x400 grid, we walk along the track and spawn clusters.
    for (let s = 10; s < level.totalLength; s += 35) {
      const sampled = samplePath(level, s);
      const y = sampled.point.y;

      // Only place large container stacks in the main yard (elevation ~ 15)
      if (y > 5 && y < 25) {
        if (rng() > 0.2) {
          const right = tempVec3C.crossVectors(WORLD_UP, sampled.forward).normalize();
          // Place stacks on one or both sides
          for (const side of [-1, 1]) {
            if (rng() > 0.6) continue;
            const offset = level.routeHalfWidth + 5.0 + rng() * 12.0;
            const cx = sampled.point.x + right.x * offset * side;
            const cz = sampled.point.z + right.z * offset * side;

            // CRUCIAL: Since the track zig-zags, verify this location doesn't land on a different piece of the track!
            if (distanceToTrack(level, cx, cz) < level.routeHalfWidth + 3.0) continue;

            // Align crates either parallel or perpendicular to the track
            const yaw = Math.atan2(sampled.forward.x, sampled.forward.z) + (rng() > 0.5 ? 0 : Math.PI / 2);

            const stackCount = 1 + Math.floor(rng() * 4);
            placeContainerStack(cx, cz, stackCount, yaw);
          }
        }
      }
    }

    // 3. Structural Rhythm Along Track
    const stepSize = 15;
    let oldCraneCount = 0;
    for (let s = 0; s < level.totalLength; s += stepSize) {
      const sampled = samplePath(level, s);
      const y = sampled.point.y;

      const forward = tempVec3A.copy(sampled.forward);
      const right = tempVec3B;
      const up = WORLD_UP; // Ignore surface normal so structures stay upright
      right.crossVectors(up, forward).normalize();

      // A. Water Edge Guardrails (If near Z=250 drop-off)
      if (sampled.point.z > 220) {
        for (const side of [-1, 1]) {
          const railOffset = level.routeHalfWidth + 1.5;
          const rx = sampled.point.x + right.x * railOffset * side;
          const rz = sampled.point.z + right.z * railOffset * side;

          // Heavy concrete bumper
          const bumper = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.2, stepSize + 0.2), concreteMat);
          bumper.position.set(rx, y + 0.5, rz);
          tempMat4.makeBasis(right, up, forward);
          bumper.quaternion.setFromRotationMatrix(tempMat4);
          bumper.castShadow = true;
          bumper.receiveShadow = true;
          game.decorRoot.add(bumper);

          pushBoxObstacle(game, {
            x: rx, y: y + 0.5, z: rz,
            right: right.clone(), forward: forward.clone(),
            halfWidth: 0.5, halfLength: stepSize * 0.5, halfHeight: 0.6,
            crashWeight: 1.5, type: "edge"
          });
        }
      }

      // B. Elevated Maintenance Bridge (Z < -250, High Altitude)
      if (y > 30) {
        // Bridge Deck
        const deckW = level.routeHalfWidth * 2 + 6.0;
        const deckThickness = 1.5;
        const deck = new THREE.Mesh(new THREE.BoxGeometry(deckW, deckThickness, stepSize + 0.2), rustedPillarMat);
        deck.position.copy(sampled.point).addScaledVector(WORLD_UP, -deckThickness * 0.5 - 0.1);
        tempMat4.makeBasis(right, WORLD_UP, forward);
        deck.quaternion.setFromRotationMatrix(tempMat4);
        deck.receiveShadow = true;
        game.decorRoot.add(deck);

        // Guardrails
        for (const side of [-1, 1]) {
          const railOffset = level.routeHalfWidth + 1.8;
          const rail = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.2, stepSize + 0.2), edgeRailMat);
          rail.position.copy(sampled.point).addScaledVector(right, railOffset * side).addScaledVector(WORLD_UP, 0.6);
          rail.quaternion.setFromRotationMatrix(tempMat4);
          rail.castShadow = true;
          rail.receiveShadow = true;
          game.decorRoot.add(rail);

          pushBoxObstacle(game, {
            x: rail.position.x, y: rail.position.y, z: rail.position.z,
            right: right.clone(), forward: forward.clone(),
            halfWidth: 0.15, halfLength: stepSize * 0.5, halfHeight: 0.6,
            crashWeight: 1.2, type: "edge"
          });
        }

        // Bridge Piers (Every 30 meters)
        if (s % 30 < stepSize) {
          const pierH = y - 10; // Connect down to yard level ~15
          const pier = new THREE.Mesh(new THREE.CylinderGeometry(2.0, 3.0, pierH, 16), concreteMat);
          pier.position.copy(sampled.point).addScaledVector(WORLD_UP, -pierH * 0.5 - deckThickness);
          pier.castShadow = true;
          pier.receiveShadow = true;
          game.decorRoot.add(pier);
        }
      }

      // C. Massive Gantry Cranes straddling the track in yard or bridge
      if (s % 150 < stepSize && sampled.point.z < 200) {
        const span = level.routeHalfWidth * 2 + 18;

        let group;
        let isTower = false;

        if (modelLibrary && modelLibrary.makeHeavyGantryCrane) {
          if (rng() < 0.5) {
            const scale = (span + 10) / 12.0;
            group = modelLibrary.makeHeavyGantryCrane(scale, rng);
          } else {
            const scale = 2.5;
            group = modelLibrary.makeTowerCrane(scale, rng);
            isTower = true;
          }
        }

        if (group) {
          if (isTower) {
            const sideDir = rng() > 0.5 ? 1 : -1;
            const offset = span / 2 + 5;
            const placeX = sampled.point.x + right.x * offset * sideDir;
            const placeZ = sampled.point.z + right.z * offset * sideDir;
            const placeY = Math.max(15, level.heightFn(placeX, placeZ));
            group.position.set(placeX, placeY, placeZ);
            tempMat4.makeBasis(right, WORLD_UP, forward);
            group.quaternion.setFromRotationMatrix(tempMat4);
            if (sideDir > 0) group.rotateY(Math.PI);
          } else {
            group.position.copy(sampled.point).addScaledVector(WORLD_UP, -y + Math.max(15, level.heightFn(sampled.point.x, sampled.point.z)));
            tempMat4.makeBasis(right, WORLD_UP, forward);
            group.quaternion.setFromRotationMatrix(tempMat4);
          }
          game.decorRoot.add(group);
        }
      }
    }

    // Scatter the new Harbour/Ruins thematic props deeply into the yard
    const harborModels = modelLibrary ? modelLibrary.getHarborModels() : [];
    if (harborModels.length > 0) {
      for (let i = 0; i < level.propCount * 1.5; i++) {
        let placed = false;
        for (let attempt = 0; attempt < 20 && !placed; attempt++) {
          const x = THREE.MathUtils.lerp(level.bounds.minX + 10, level.bounds.maxX - 10, rng());
          const z = THREE.MathUtils.lerp(level.bounds.minZ + 10, level.bounds.maxZ - 10, rng());
          if (distanceToTrack(level, x, z) < level.routeHalfWidth + 4.1) continue;

          const y = level.heightFn(x, z);
          // Only place ground props where the terrain isn't deep water (y > 10 is safe)
          if (y < 5) continue;

          const scale = 0.85 + rng() * 1.5;
          const propIndex = Math.floor(rng() * harborModels.length);
          const item = harborModels[propIndex](scale, rng);
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

    // 4.3 Giant Cranes scattered in the yard (Worksite Clusters)
    if (modelLibrary && modelLibrary.makeHeavyGantryCrane) {
      const craneCounts = 4 + Math.floor(rng() * 3);
      for (let i = 0; i < craneCounts; i++) {
        let placed = false;
        for (let attempt = 0; attempt < 30 && !placed; attempt++) {
          const x = THREE.MathUtils.lerp(level.bounds.minX + 30, level.bounds.maxX - 30, rng());
          const z = THREE.MathUtils.lerp(level.bounds.minZ + 30, level.bounds.maxZ - 30, rng());
          if (distanceToTrack(level, x, z) < level.routeHalfWidth + 25) continue; // Needs wide clearance

          const y = level.heightFn(x, z);
          if (y < 12) continue; // Only high ground yard

          const scale = 2.0 + rng() * 1.0;
          const crashW = 15.0;
          const obRad = 8;

          const group = modelLibrary.makeCraneBase(scale, rng); // Crawler

          group.position.set(x, y, z);
          group.rotation.y = rng() * Math.PI * 2;
          game.decorRoot.add(group);

          pushBoxObstacle(game, {
            x, z, y: y + 4.0, right: tempVec3A.set(1, 0, 0).applyAxisAngle(WORLD_UP, group.rotation.y),
            forward: tempVec3B.set(0, 0, 1).applyAxisAngle(WORLD_UP, group.rotation.y),
            halfWidth: obRad, halfLength: obRad, halfHeight: 8.0, crashWeight: crashW, type: "decor"
          });

          // --- Spawn Containers under/near the crane ---
          const numStacks = 1 + Math.floor(rng() * 3);
          for (let st = 0; st < numStacks; st++) {
            // Push containers further away from the dense crane base model (12-25m)
            const angle = rng() * Math.PI * 2;
            const dist = 12 + rng() * 13;
            const cx = x + Math.cos(angle) * dist;
            const cz = z + Math.sin(angle) * dist;
            placeContainerStack(cx, cz, 1 + Math.floor(rng() * 3), group.rotation.y + (rng() > 0.5 ? 0 : Math.PI / 2));
          }

          // --- Spawn a Construction Vehicle working with the crane ---
          if (modelLibrary.makeExcavatorA) {
            const vehicles = [modelLibrary.makeExcavatorA, modelLibrary.makeDumpTruck, modelLibrary.makeLargeTruck, modelLibrary.makeCargoTruck];
            const vehFn = vehicles[Math.floor(rng() * vehicles.length)];
            const vx = x + (rng() - 0.5) * 20;
            const vz = z + (rng() - 0.5) * 20;
            const vy = level.heightFn(vx, vz);
            if (vy >= 12 && distanceToTrack(level, vx, vz) > level.routeHalfWidth + 6) {
              const veh = vehFn(1.2 + rng() * 0.4, rng);
              veh.position.set(vx, vy, vz);
              veh.rotation.y = rng() * Math.PI * 2;
              game.decorRoot.add(veh);
              pushBoxObstacle(game, { x: vx, z: vz, y: vy + 1.5, right: tempVec3A.set(1, 0, 0), forward: tempVec3B.set(0, 0, 1), halfWidth: 2.5, halfLength: 2.5, halfHeight: 1.5, crashWeight: 10.0, type: "decor" });
            }
          }
          placed = true;
        }
      }
    }

    // 4.5 Scatter Construction Vehicles and Worksites in empty yard areas
    if (modelLibrary && modelLibrary.makeExcavatorA) {
      const vehicles = [
        modelLibrary.makeExcavatorA,
        modelLibrary.makeDumpTruck,
        modelLibrary.makeBulldozer,
        modelLibrary.makeLargeTruck,
        modelLibrary.makeCargoTruck,
        modelLibrary.makeCementMixer,
        modelLibrary.makeExcavatorB,
      ];
      for (const vehFn of vehicles) {
        const count = 1 + Math.floor(rng() * 2); // 1 to 2 per vehicle type (reduced for perf)
        for (let i = 0; i < count; i++) {
          let placed = false;
          for (let attempt = 0; attempt < 20 && !placed; attempt++) {
            const x = THREE.MathUtils.lerp(level.bounds.minX + 20, level.bounds.maxX - 20, rng());
            const z = THREE.MathUtils.lerp(level.bounds.minZ + 20, level.bounds.maxZ - 20, rng());
            if (distanceToTrack(level, x, z) < level.routeHalfWidth + 12) continue;

            const y = level.heightFn(x, z);
            if (y < 8) continue; // Keep them out of water

            const veh = vehFn(1.2 + rng() * 0.6, rng);
            veh.position.set(x, y, z);
            veh.rotation.y = rng() * Math.PI * 2;
            game.decorRoot.add(veh);

            pushBoxObstacle(game, {
              x, z, y: y + (veh.userData.obstacleHeight || 3.0) * 0.5,
              right: tempVec3A.set(1, 0, 0).applyAxisAngle(WORLD_UP, veh.rotation.y),
              forward: tempVec3B.set(0, 0, 1).applyAxisAngle(WORLD_UP, veh.rotation.y),
              halfWidth: veh.userData.obstacleRadius || 2.5,
              halfLength: veh.userData.obstacleRadius || 2.5,
              halfHeight: (veh.userData.obstacleHeight || 3.0) * 0.5,
              crashWeight: veh.userData.crashWeight || 10.0,
              type: "decor"
            });

            // Occasional Worksite Props nearby
            if (modelLibrary.makeWorksiteProps && rng() > 0.5) {
              const props = modelLibrary.makeWorksiteProps(1.0 + rng() * 0.5, rng);
              const px = x + (rng() - 0.5) * 15;
              const pz = z + (rng() - 0.5) * 15;
              if (distanceToTrack(level, px, pz) > level.routeHalfWidth + 6) {
                const py = level.heightFn(px, pz);
                if (py > 8) {
                  props.position.set(px, py, pz);
                  props.rotation.y = rng() * Math.PI * 2;
                  game.decorRoot.add(props);
                }
              }
            }
            placed = true;
          }
        }
      }
    }

    // 5. Scatter Nautical Assets (Ships, Piers, Buoys) on the vast water surface
    if (modelLibrary && modelLibrary.makeCargoShip) {
      for (let i = 0; i < 18; i++) {
        const x = (rng() - 0.5) * 1100;
        const z = 220 + rng() * 220; // Deep water zone

        // Keep massive ships away from the track causeway
        if (distanceToTrack(level, x, z) < 30.0) continue;

        const r = rng();
        let modelFn;
        let scale = 1.0;
        if (r < 0.15) {
          modelFn = modelLibrary.makeCargoShip;
          scale = 1.2 + rng() * 0.8;
        } else if (r < 0.25) {
          modelFn = modelLibrary.makeCruiseShip;
          scale = 1.0 + rng() * 0.5;
        } else if (r < 0.35) {
          modelFn = modelLibrary.makeYacht;
          scale = 1.5 + rng();
        } else if (r < 0.45) {
          modelFn = modelLibrary.makePier;
          scale = 1.0 + rng() * 0.4;
        } else if (r < 0.55) {
          modelFn = modelLibrary.makeSpeedboat;
          scale = 1.2 + rng();
        } else if (r < 0.65) {
          modelFn = modelLibrary.makeSailboat;
          scale = 1.5 + rng();
        } else {
          modelFn = modelLibrary.makeBuoy;
          scale = 1.5 + rng();
        }

        const prop = modelFn(scale, rng);
        prop.position.set(x, 4.0, z); // Float exactly on the water line
        prop.rotation.y = rng() * Math.PI * 2;
        // Disable shadow casting on distant water props for performance
        prop.traverse((node) => { if (node.isMesh) node.castShadow = false; });
        game.decorRoot.add(prop);

        pushBoxObstacle(game, {
          x, z, y: 4.0 + (prop.userData.obstacleHeight || 2.0) * 0.5,
          right: tempVec3A.set(1, 0, 0).applyAxisAngle(WORLD_UP, prop.rotation.y),
          forward: tempVec3B.set(0, 0, 1).applyAxisAngle(WORLD_UP, prop.rotation.y),
          halfWidth: prop.userData.obstacleRadius || 2.0,
          halfLength: prop.userData.obstacleRadius || 2.0,
          halfHeight: (prop.userData.obstacleHeight || 2.0) * 0.5,
          crashWeight: prop.userData.crashWeight || 5.0,
          type: "decor"
        });
      }
    }
  }
  return { buildHarborEnvironment };
}
