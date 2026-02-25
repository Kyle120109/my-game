import * as THREE from "three";
import { createRng, samplePath, surfaceNormal, distanceToTrack } from "../levels.js";
export function createEnvironmentBuilder({ modelLibrary, tempVec3A, buildHarborEnvironment, buildUrbanEnvironment }) {
  function buildEnvironment(game, level) {
    const rng = createRng(level.seed ^ 0x2048);
    if (level.id === "harbor") {
      buildHarborEnvironment(game, level, rng);
      return;
    }

    if (level.id === "urban8") {
      buildUrbanEnvironment(game, level, rng);
      return;
    }

    const minX = level.bounds.minX + 10;
    const maxX = level.bounds.maxX - 10;
    const minZ = level.bounds.minZ + 10;
    const maxZ = level.bounds.maxZ - 10;

    const scatter = (count, minTrackDist, creator, pushObstacle = true) => {
      for (let i = 0; i < count; i += 1) {
        let placed = false;
        for (let attempt = 0; attempt < 22 && !placed; attempt += 1) {
          const x = THREE.MathUtils.lerp(minX, maxX, rng());
          const z = THREE.MathUtils.lerp(minZ, maxZ, rng());
          if (distanceToTrack(level, x, z) < minTrackDist) continue;

          const y = level.heightFn(x, z);
          const scale = 0.85 + rng() * 1.65;
          const item = creator(scale, rng, level.id === "serpent");
          item.position.set(x, y, z);
          item.rotation.y = rng() * Math.PI * 2;
          game.decorRoot.add(item);

          if (pushObstacle) {
            const radius = item.userData.obstacleRadius ?? 1.4;
            const height = item.userData.obstacleHeight ?? 3.0;
            game.obstacles.push({
              x,
              z,
              y: y + height * 0.5,
              radius,
              height,
              crashWeight: item.userData.crashWeight ?? 1.2,
              type: item.userData.type ?? "decor",
            });
          }

          placed = true;
        }
      }
    };

    const trackPadding = level.environmentTrackPadding ?? 0;

    // Theme-based model assignment
    let treeCreator, rockCreator, propCreator;

    if (level.id === "alpine") {
      const models = modelLibrary.getAlpineModels();
      treeCreator = (scale, rngLocal) => models[Math.floor(rngLocal() * 5)](scale, rngLocal); // Crystals
      rockCreator = (scale, rngLocal) => models[5 + Math.floor(rngLocal() * 5)](scale, rngLocal); // Mountains
      propCreator = (scale, rngLocal) => models[10 + Math.floor(rngLocal() * 10)](scale, rngLocal); // Alpine Flora/Props
    } else if (level.id === "lava") {
      const models = modelLibrary.getLavaModels();
      treeCreator = (scale, rngLocal) => models[Math.floor(rngLocal() * 5)](scale, rngLocal); // Magma
      rockCreator = (scale, rngLocal) => models[5 + Math.floor(rngLocal() * 5)](scale, rngLocal); // Rocks
      propCreator = (scale, rngLocal) => models[10 + Math.floor(rngLocal() * 10)](scale, rngLocal); // Smoke/Props
    } else if (level.id === "neon") {
      const models = modelLibrary.getNeonModels();
      treeCreator = (scale, rngLocal) => models[Math.floor(rngLocal() * 5)](scale, rngLocal); // Structures
      rockCreator = (scale, rngLocal) => models[5 + Math.floor(rngLocal() * 5)](scale, rngLocal); // Ground/Decals
      propCreator = (scale, rngLocal) => models[10 + Math.floor(rngLocal() * 10)](scale, rngLocal); // Syntax/Props
    } else if (level.id === "ruins") {
      const models = modelLibrary.getHarborModels();
      treeCreator = (scale, rngLocal) => models[10 + Math.floor(rngLocal() * 5)](scale, rngLocal); // Ruin Pillars/Faces
      rockCreator = (scale, rngLocal) => models[15 + Math.floor(rngLocal() * 3)](scale, rngLocal); // Giant Fern/Vines/Steps
      propCreator = (scale, rngLocal) => models[18 + Math.floor(rngLocal() * 2)](scale, rngLocal); // Statue/Shrine
    } else if (level.id === "desert") {
      const models = modelLibrary.getDesertModels();
      treeCreator = (scale, rngLocal) => models[Math.floor(rngLocal() * 5)](scale, rngLocal); // Cacti
      rockCreator = (scale, rngLocal) => models[5 + Math.floor(rngLocal() * 5)](scale, rngLocal); // Rocks
      propCreator = (scale, rngLocal) => models[10 + Math.floor(rngLocal() * 10)](scale, rngLocal); // Ruins/Props
    } else if (level.id === "snow") {
      const models = modelLibrary.getSnowModels();
      treeCreator = (scale, rngLocal) => models[5 + Math.floor(rngLocal() * 5)](scale, rngLocal); // Trees
      rockCreator = (scale, rngLocal) => models[10 + Math.floor(rngLocal() * 5)](scale, rngLocal); // Ice/Rocks
      propCreator = (scale, rngLocal) => models[Math.floor(rngLocal() * 5)](scale, rngLocal); // Ice shards/pond (props slot)
      const pCreator = propCreator; // mix props
      propCreator = (sc, rl) => rl() > 0.5 ? pCreator(sc, rl) : models[15 + Math.floor(rl() * 5)](sc, rl);
    } else {
      // Default Forest map
      const models = modelLibrary.getForestModels();
      treeCreator = (scale, rngLocal) => models[Math.floor(rngLocal() * 5)](scale, rngLocal); // Trees
      rockCreator = (scale, rngLocal) => models[5 + Math.floor(rngLocal() * 5)](scale, rngLocal); // Rocks
      propCreator = (scale, rngLocal) => models[10 + Math.floor(rngLocal() * 10)](scale, rngLocal); // Flora/Props
    }

    scatter(level.treeCount, level.routeHalfWidth + 7.6 + trackPadding, treeCreator, true);
    scatter(level.rockCount, level.routeHalfWidth + 6.2 + trackPadding, rockCreator, true);
    scatter(level.propCount, level.routeHalfWidth + 4.1 + trackPadding, propCreator, true);

    for (let i = 0; i < level.hazardCount; i += 1) {
      for (let attempt = 0; attempt < 18; attempt += 1) {
        const sampled = samplePath(level, rng() * (level.totalLength - 8) + 4);
        const normal = surfaceNormal(level, sampled.point.x, sampled.point.z);
        const right = tempVec3A.crossVectors(normal, sampled.forward).normalize();
        const side = rng() < 0.5 ? -1 : 1;
        const lane = THREE.MathUtils.lerp(level.routeHalfWidth * 1.18, level.routeHalfWidth * 1.9, rng());
        const x = sampled.point.x + right.x * lane * side;
        const z = sampled.point.z + right.z * lane * side;
        const y = level.heightFn(x, z);

        let mesh;
        let radius;
        let height;
        const t = rng();
        if (t < 0.33) {
          const logLen = 2.4 + rng() * 2.8;
          mesh = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.42, logLen, 16), new THREE.MeshStandardMaterial({ color: 0x62492f, roughness: 0.88 }));
          mesh.rotation.z = Math.PI / 2;
          mesh.rotation.y = rng() * Math.PI;
          radius = 1.15;
          height = 1.2;
        } else if (t < 0.66) {
          const scale = 1 + rng() * 1.4;
          mesh = rockCreator(scale, rng, level.id === "serpent" || level.id === "lava");
          radius = mesh.userData.obstacleRadius ?? (1.4 * scale);
          height = mesh.userData.obstacleHeight ?? (2.4 * scale);
        } else {
          mesh = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.5 + rng() * 1.6, 1.6), new THREE.MeshStandardMaterial({ color: 0x7b4f32, roughness: 0.8 }));
          radius = 1.25;
          height = 2.4;
        }

        if (distanceToTrack(level, x, z) < level.routeHalfWidth + radius * 1.2 + 0.4) continue;
        mesh.position.set(x, y + height * 0.5, z);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        game.decorRoot.add(mesh);
        game.obstacles.push({ shape: "sphere", x, z, y: mesh.position.y, radius: radius * 0.9, height: height * 0.54, crashWeight: 1.45, type: "hazard" });
        break;
      }
    }
  }
  return {
    buildEnvironment,
  };
}

