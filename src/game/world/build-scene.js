import * as THREE from "three";
export function createSceneBuilder({ settings }) {
  function buildLights(game, level) {
    if (game.scene.userData.lights) {
      for (const light of game.scene.userData.lights) game.scene.remove(light);
    }

    game.scene.background = new THREE.Color(level.clearColor);
    game.scene.fog = new THREE.Fog(level.fogColor, 80, settings.quality === "low" ? 520 : 760);

    const hemi = new THREE.HemisphereLight(level.ambient, 0x212831, 0.8);
    hemi.position.set(0, 260, 0);

    const sun = new THREE.DirectionalLight(level.sun, 1.08);
    sun.position.set(140, 220, 90);
    sun.castShadow = game.renderer.shadowMap.enabled;

    const map = settings.quality === "high" ? 2048 : settings.quality === "medium" ? 1536 : 1024;
    sun.shadow.mapSize.set(map, map);
    sun.shadow.camera.left = -360;
    sun.shadow.camera.right = 360;
    sun.shadow.camera.top = 360;
    sun.shadow.camera.bottom = -360;

    game.scene.add(hemi, sun);
    game.scene.userData.lights = [hemi, sun];
    game.scene.userData.sun = sun;
  }
  function buildTerrain(game, level) {
    const width = level.bounds.maxX - level.bounds.minX;
    const depth = level.bounds.maxZ - level.bounds.minZ;
    const centerX = (level.bounds.maxX + level.bounds.minX) * 0.5;
    const centerZ = (level.bounds.maxZ + level.bounds.minZ) * 0.5;
    const totalSegments = settings.quality === "high" ? 360 : settings.quality === "medium" ? 270 : 190;
    const maxChunkSegments = settings.quality === "high" ? 120 : settings.quality === "medium" ? 102 : 95;
    const chunkCountX = Math.max(1, Math.ceil(totalSegments / maxChunkSegments));
    const chunkCountZ = Math.max(1, Math.ceil(totalSegments / maxChunkSegments));
    const segX = splitSegments(totalSegments, chunkCountX);
    const segZ = splitSegments(totalSegments, chunkCountZ);
    const terrainMaterial = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.95, metalness: 0.05 });

    let startX = -width * 0.5;
    for (let ix = 0; ix < chunkCountX; ix += 1) {
      const chunkSegX = segX[ix];
      const chunkWidth = (width * chunkSegX) / totalSegments;
      const chunkCenterX = startX + chunkWidth * 0.5;
      let startZ = -depth * 0.5;

      for (let iz = 0; iz < chunkCountZ; iz += 1) {
        const chunkSegZ = segZ[iz];
        const chunkDepth = (depth * chunkSegZ) / totalSegments;
        const chunkCenterZ = startZ + chunkDepth * 0.5;
        const geometry = new THREE.PlaneGeometry(chunkWidth, chunkDepth, chunkSegX, chunkSegZ);
        geometry.rotateX(-Math.PI / 2);
        const pos = geometry.attributes.position;
        const colors = new Float32Array(pos.count * 3);

        for (let i = 0; i < pos.count; i += 1) {
          const wx = pos.getX(i) + chunkCenterX + centerX;
          const wz = pos.getZ(i) + chunkCenterZ + centerZ;
          const y = level.heightFn(wx, wz);
          pos.setY(i, y);

          const nx = level.heightFn(wx + 1.2, wz) - level.heightFn(wx - 1.2, wz);
          const nz = level.heightFn(wx, wz + 1.2) - level.heightFn(wx, wz - 1.2);
          const slope = Math.min(Math.hypot(nx, nz) * 0.065, 1);
          const color = level.palette.low.clone().lerp(level.palette.high, THREE.MathUtils.clamp((y - 20) / 160, 0, 1));
          color.lerp(level.palette.accent, 0.18 + slope * 0.38);
          colors[i * 3] = color.r;
          colors[i * 3 + 1] = color.g;
          colors[i * 3 + 2] = color.b;
        }

        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
        geometry.computeVertexNormals();

        const mesh = new THREE.Mesh(geometry, terrainMaterial);
        mesh.position.set(centerX + chunkCenterX, 0, centerZ + chunkCenterZ);
        mesh.receiveShadow = true;
        game.terrainRoot.add(mesh);
        startZ += chunkDepth;
      }

      startX += chunkWidth;
    }
  }
  function splitSegments(total, parts) {
    const base = Math.floor(total / parts);
    const remainder = total % parts;
    const out = new Array(parts);
    for (let i = 0; i < parts; i += 1) {
      out[i] = base + (i < remainder ? 1 : 0);
    }
    return out;
  }
  return {
    buildLights,
    buildTerrain,
  };
}

