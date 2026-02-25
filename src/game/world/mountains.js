import * as THREE from "three";
import { WORLD_UP } from "../config.js";
import { createRng, distanceToTrack, surfaceNormal } from "../levels.js";
export function buildMountainField(game, level) {
    const field = level.mountainField;
    if (!field?.belts?.length) return;

    const rng = createRng(level.seed ^ (field.seedOffset ?? 0x51f2));
    const minX = level.bounds.minX + (field.boundsInset ?? 12);
    const maxX = level.bounds.maxX - (field.boundsInset ?? 12);
    const minZ = level.bounds.minZ + (field.boundsInset ?? 12);
    const maxZ = level.bounds.maxZ - (field.boundsInset ?? 12);
    const centerX = (level.bounds.minX + level.bounds.maxX) * 0.5;
    const centerZ = (level.bounds.minZ + level.bounds.maxZ) * 0.5;
    const placements = [];
    const warm = level.id === "serpent";

    for (const belt of field.belts) {
      const count = belt.count ?? 0;
      for (let i = 0; i < count; i += 1) {
        const attempts = belt.maxAttempts ?? field.maxAttempts ?? 28;
        for (let attempt = 0; attempt < attempts; attempt += 1) {
          const point = sampleMountainPoint(level, belt, rng, centerX, centerZ, minX, maxX, minZ, maxZ);
          if (!point) continue;
          const x = point.x;
          const z = point.z;
          if (x < minX || x > maxX || z < minZ || z > maxZ) continue;

          const minScale = belt.minScale ?? field.minScale ?? 8;
          const maxScale = belt.maxScale ?? field.maxScale ?? 18;
          const scalePow = belt.scaleBias ?? 1.15;
          const scale = THREE.MathUtils.lerp(minScale, maxScale, Math.pow(rng(), scalePow));
          const footprintScale = belt.footprintScale ?? field.footprintScale ?? 1.62;
          const footprint = scale * footprintScale;
          const minTrackDist = belt.minTrackDist ?? field.defaultMinTrackDist ?? (level.routeHalfWidth + 12);
          const viewClearance = scale * (belt.viewClearanceScale ?? field.viewClearanceScale ?? 0.72);
          const sightlineClearance = scale * (belt.sightlineScale ?? field.sightlineScale ?? 0.5);
          if (distanceToTrack(level, x, z) < minTrackDist + footprint + viewClearance + sightlineClearance) continue;
          const sampleRadius = footprint * (belt.reliefSampleScale ?? field.reliefSampleScale ?? 0.66);
          const minNormalY = belt.minNormalY ?? field.minNormalY ?? 0.56;
          const maxRelief = belt.maxRelief ?? field.maxRelief ?? scale * 0.95;
          if (!isMountainPlacementStable(level, x, z, sampleRadius, minNormalY, maxRelief)) continue;

          let overlaps = false;
          const spacingScale = belt.minSpacingScale ?? field.minSpacingScale ?? 1.1;
          for (const placed of placements) {
            const dx = x - placed.x;
            const dz = z - placed.z;
            const distSq = dx * dx + dz * dz;
            const keep = (footprint + placed.radius) * spacingScale;
            if (distSq < keep * keep) {
              overlaps = true;
              break;
            }
          }
          if (overlaps) continue;

          const mountain = createMountainMass(scale, rng, warm);
          const baseY = level.heightFn(x, z);
          mountain.group.position.set(x, baseY - scale * 0.11, z);
          mountain.group.rotation.y = rng() * Math.PI * 2;
          game.decorRoot.add(mountain.group);
          pushMountainColliders(game, mountain, mountain.group.position, mountain.group.rotation.y);
          placements.push({ x, z, radius: mountain.footprintRadius ?? footprint * 0.92 });
          break;
        }
      }
    }
  }
  function sampleMountainPoint(level, belt, rng, centerX, centerZ, minX, maxX, minZ, maxZ) {
    if (belt.mode === "ring") {
      const angle = rng() * Math.PI * 2;
      const radius = (belt.radius ?? 120) + (rng() - 0.5) * (belt.spread ?? 20);
      return { x: centerX + Math.cos(angle) * radius, z: centerZ + Math.sin(angle) * radius };
    }

    if (belt.mode === "line") {
      const z = THREE.MathUtils.lerp(belt.zMin ?? minZ, belt.zMax ?? maxZ, rng()) + (rng() - 0.5) * (belt.jitterZ ?? 0);
      const x = (belt.x ?? centerX) + (rng() - 0.5) * (belt.jitterX ?? 0);
      return { x, z };
    }

    if (belt.mode === "edge") {
      const inset = belt.inset ?? 0;
      const band = belt.band ?? 68;
      const side = Math.floor(rng() * 4);
      if (side === 0) {
        return {
          x: THREE.MathUtils.lerp(minX + inset, Math.min(maxX, minX + inset + band), rng()),
          z: THREE.MathUtils.lerp(minZ, maxZ, rng()),
        };
      }
      if (side === 1) {
        return {
          x: THREE.MathUtils.lerp(Math.max(minX, maxX - inset - band), maxX - inset, rng()),
          z: THREE.MathUtils.lerp(minZ, maxZ, rng()),
        };
      }
      if (side === 2) {
        return {
          x: THREE.MathUtils.lerp(minX, maxX, rng()),
          z: THREE.MathUtils.lerp(minZ + inset, Math.min(maxZ, minZ + inset + band), rng()),
        };
      }
      return {
        x: THREE.MathUtils.lerp(minX, maxX, rng()),
        z: THREE.MathUtils.lerp(Math.max(minZ, maxZ - inset - band), maxZ - inset, rng()),
      };
    }

    return {
      x: THREE.MathUtils.lerp(minX, maxX, rng()),
      z: THREE.MathUtils.lerp(minZ, maxZ, rng()),
    };
  }
  function isMountainPlacementStable(level, x, z, sampleRadius, minNormalY, maxRelief) {
    const centerNormal = surfaceNormal(level, x, z);
    if (centerNormal.y < minNormalY) return false;

    let minH = level.heightFn(x, z);
    let maxH = minH;
    const sampleCount = 8;
    for (let i = 0; i < sampleCount; i += 1) {
      const angle = (i / sampleCount) * Math.PI * 2;
      const px = x + Math.cos(angle) * sampleRadius;
      const pz = z + Math.sin(angle) * sampleRadius;
      const h = level.heightFn(px, pz);
      if (h < minH) minH = h;
      if (h > maxH) maxH = h;
      if (surfaceNormal(level, px, pz).y < minNormalY * 0.88) return false;
    }
    return maxH - minH <= maxRelief;
  }
  function pushMountainColliders(game, mountain, basePosition, rotationY) {
    // [MARKER] Mountain collider authoring: 调整碰撞体积只改这里。
    const offset = new THREE.Vector3();
    const right = new THREE.Vector3();
    const forward = new THREE.Vector3();
    for (const collider of mountain.colliders) {
      offset.copy(collider.offset);
      offset.applyAxisAngle(WORLD_UP, rotationY);
      const baseX = basePosition.x + offset.x;
      const baseY = basePosition.y + offset.y;
      const baseZ = basePosition.z + offset.z;

      if (collider.shape === "box") {
        const yaw = rotationY + (collider.localYaw ?? 0);
        right.set(1, 0, 0).applyAxisAngle(WORLD_UP, yaw);
        forward.set(0, 0, 1).applyAxisAngle(WORLD_UP, yaw);
        game.obstacles.push({
          shape: "box",
          x: baseX,
          y: baseY,
          z: baseZ,
          right: right.clone(),
          forward: forward.clone(),
          halfWidth: collider.halfWidth,
          halfLength: collider.halfLength,
          halfHeight: collider.halfHeight,
          crashWeight: collider.crashWeight ?? 1.72,
          type: "mountain",
        });
        continue;
      }

      game.obstacles.push({
        shape: "sphere",
        x: baseX,
        y: baseY,
        z: baseZ,
        radius: collider.radius,
        height: collider.height,
        crashWeight: collider.crashWeight ?? 1.72,
        type: "mountain",
      });
    }
  }
function createMountainMass(scale, rng, warm) {
  const group = new THREE.Group();
  const baseColor = warm ? new THREE.Color(0x8f6c4b) : new THREE.Color(0x687064);
  const lightColor = warm ? new THREE.Color(0xc49a6e) : new THREE.Color(0x8f988d);
  const darkColor = warm ? new THREE.Color(0x60442f) : new THREE.Color(0x4f5851);
  const bodyColor = baseColor.clone().lerp(lightColor, 0.2 + rng() * 0.2);
  const shoulderColor = bodyColor.clone().lerp(lightColor, 0.08 + rng() * 0.08);
  const ridgeColor = bodyColor.clone().lerp(darkColor, 0.22 + rng() * 0.18);
  const skirtColor = bodyColor.clone().lerp(darkColor, 0.32 + rng() * 0.14);

  const baseRadius = scale * (1.34 + rng() * 0.24);
  const height = scale * (2.08 + rng() * 0.56);
  const talusRadius = baseRadius * (1.12 + rng() * 0.1);
  const talusHeight = Math.max(scale * 1.12, height * 0.42);

  const body = new THREE.Mesh(
    createMountainShellGeometry(baseRadius, height, rng, 1.2),
    new THREE.MeshStandardMaterial({ color: bodyColor, roughness: 0.96, metalness: 0.01 })
  );
  body.position.y = height * 0.5;
  group.add(body);

  const shoulder = new THREE.Mesh(
    createMountainShellGeometry(baseRadius * (0.66 + rng() * 0.08), height * (0.56 + rng() * 0.12), rng, 1.04),
    new THREE.MeshStandardMaterial({ color: shoulderColor, roughness: 0.95, metalness: 0.01 })
  );
  shoulder.position.y = height * (0.56 + rng() * 0.06);
  shoulder.rotation.y = rng() * Math.PI * 2;
  group.add(shoulder);

  const ridge = new THREE.Mesh(
    createMountainShellGeometry(baseRadius * (0.42 + rng() * 0.08), height * (0.42 + rng() * 0.1), rng, 0.96),
    new THREE.MeshStandardMaterial({ color: ridgeColor, roughness: 0.94, metalness: 0.02 })
  );
  ridge.position.y = height * (0.83 + rng() * 0.06);
  ridge.rotation.y = rng() * Math.PI * 2;
  group.add(ridge);

  const skirt = new THREE.Mesh(
    createMountainTalusGeometry(talusRadius, talusHeight, rng),
    new THREE.MeshStandardMaterial({ color: skirtColor, roughness: 0.98, metalness: 0.01 })
  );
  skirt.position.y = talusHeight * 0.44;
  group.add(skirt);

  const flankCount = 3 + Math.floor(rng() * 2);
  const flanks = [];
  for (let i = 0; i < flankCount; i += 1) {
    const flankRadius = baseRadius * (0.24 + rng() * 0.1);
    const flankHeight = height * (0.3 + rng() * 0.12);
    const flankGeo = createMountainShellGeometry(flankRadius, flankHeight, rng, 0.9);
    const flank = new THREE.Mesh(flankGeo, new THREE.MeshStandardMaterial({ color: ridgeColor, roughness: 0.95, metalness: 0.01 }));
    const angle = (i / flankCount) * Math.PI * 2 + rng() * 0.65;
    const offsetRadius = baseRadius * (0.56 + rng() * 0.12);
    flank.position.set(Math.cos(angle) * offsetRadius, flankHeight * 0.42, Math.sin(angle) * offsetRadius);
    flank.rotation.y = rng() * Math.PI * 2;
    group.add(flank);
    flanks.push({
      offset: flank.position.clone(),
      radius: flankRadius,
      height: flankHeight,
    });
  }

  group.traverse((node) => {
    if (!node.isMesh) return;
    node.castShadow = true;
    node.receiveShadow = true;
    node.userData.decorType = "mountain";
  });

  return {
    group,
    footprintRadius: talusRadius * 1.02,
    colliders: buildMountainColliderVolume(baseRadius, height, flanks, { radius: talusRadius, height: talusHeight }),
  };
}
function createMountainShellGeometry(baseRadius, height, rng, detailScale = 1) {
  // 统一三角网避免圆柱顶盖造成的“扇形片状山”。
  const detail = THREE.MathUtils.clamp(Math.round(3 + detailScale + rng() * 0.9), 3, 5);
  const geometry = new THREE.IcosahedronGeometry(1, detail);
  const pos = geometry.attributes.position;
  const phaseA = rng() * Math.PI * 2;
  const phaseB = rng() * Math.PI * 2;
  const phaseC = rng() * Math.PI * 2;
  const phaseD = rng() * Math.PI * 2;
  const phaseE = rng() * Math.PI * 2;
  const ampA = 0.18 + rng() * 0.08;
  const ampB = 0.12 + rng() * 0.06;
  const ampC = 0.06 + rng() * 0.04;
  const ampD = 0.05 + rng() * 0.03;
  const ampE = 0.08 + rng() * 0.05;
  const ridgeFreqA = 3.2 + rng() * 2.1;
  const ridgeFreqB = 5.1 + rng() * 2.4;

  for (let i = 0; i < pos.count; i += 1) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);
    const length = Math.hypot(x, y, z) || 1;
    x /= length;
    y /= length;
    z /= length;

    const t = THREE.MathUtils.clamp((y + 1) * 0.5, 0, 1);
    const angle = Math.atan2(z, x);
    const baseWeight = 1 - Math.pow(t, 0.8);
    const ridgeWave =
      Math.sin(angle * ridgeFreqA + phaseA + t * 2.4) * ampA +
      Math.cos(angle * ridgeFreqB + phaseB - t * 2.1) * ampB;
    const grain = Math.sin((x + z) * 4.3 + phaseC) * ampC + Math.cos((x - z) * 5.6 + phaseD) * ampD;
    const buttress = Math.sin(angle * (1.6 + baseWeight * 1.8) + phaseE + t * 1.2) * ampE * (0.32 + baseWeight * 0.68);
    const profile = THREE.MathUtils.lerp(1.16, 0.32, Math.pow(t, 0.86));
    const shoulder = Math.exp(-Math.pow((t - 0.44) / 0.2, 2)) * 0.14;
    const radiusScale = THREE.MathUtils.clamp(
      profile + shoulder + ridgeWave * 0.34 + grain * 0.22 + buttress * 0.2,
      0.24,
      1.52
    );
    const targetRadius = baseRadius * radiusScale;

    const lift = (ridgeWave * 0.24 + grain * 0.15 + buttress * 0.2) * height * (0.76 - t * 0.5);
    const worldYBase = (t - 0.5) * height;
    const peak = t > 0.74 ? Math.pow((t - 0.74) / 0.26, 1.16) * height * (0.1 + ampA * 0.38) : 0;
    const foot = t < 0.14 ? Math.pow((0.14 - t) / 0.14, 1.08) * height * 0.16 : 0;
    pos.setXYZ(i, x * targetRadius, worldYBase + lift + peak - foot, z * targetRadius);
  }

  geometry.computeVertexNormals();
  return geometry;
}
function createMountainTalusGeometry(radius, height, rng) {
  const radialSegments = 38 + Math.floor(rng() * 10);
  const heightSegments = 13 + Math.floor(rng() * 5);
  // 去掉顶/底盖，避免出现大面积扇形三角片；实体碰撞由 colliders 提供。
  const geometry = new THREE.CylinderGeometry(radius * 0.76, radius, height, radialSegments, heightSegments, true);
  const pos = geometry.attributes.position;
  const phaseA = rng() * Math.PI * 2;
  const phaseB = rng() * Math.PI * 2;
  const phaseC = rng() * Math.PI * 2;
  const ampA = 0.05 + rng() * 0.026;
  const ampB = 0.034 + rng() * 0.024;
  const ampC = 0.02 + rng() * 0.016;

  for (let i = 0; i < pos.count; i += 1) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);
    const t = THREE.MathUtils.clamp((y + height * 0.5) / height, 0, 1);
    const radial = Math.max(0.0001, Math.hypot(x, z));
    const angle = Math.atan2(z, x);
    const apron = 1 - Math.abs(t - 0.44) * 1.65;
    const wave = Math.sin(angle * 5 + phaseA + t * 1.6) * ampA + Math.cos(angle * 3 + phaseB - t * 1.2) * ampB;
    const noise =
      Math.sin((x + z) * 0.14 + phaseA) * 0.014 +
      Math.cos((x - z) * 0.11 + phaseB) * 0.012 +
      Math.sin(angle * 9 + phaseC + t * 1.7) * ampC;
    const scale = THREE.MathUtils.clamp(1 + wave * Math.max(0.18, apron) + noise, 0.86, 1.24);
    x = (x / radial) * radial * scale;
    z = (z / radial) * radial * scale;
    y += (wave * 0.2 + noise * 0.45) * height;
    if (t < 0.22) y -= Math.pow((0.22 - t) / 0.22, 1.05) * height * 0.1;
    if (t > 0.84) y += Math.pow((t - 0.84) / 0.16, 1.05) * height * 0.08;
    pos.setXYZ(i, x, y, z);
  }

  geometry.computeVertexNormals();
  return geometry;
}
function buildMountainColliderVolume(baseRadius, height, flanks, talus = null) {
  const colliders = [];

  if (talus) {
    colliders.push({
      offset: new THREE.Vector3(0, talus.height * 0.22, 0),
      radius: talus.radius * 0.54,
      height: talus.height * 0.34,
      crashWeight: 1.8,
    });

    const talusRing = 8;
    for (let i = 0; i < talusRing; i += 1) {
      const angle = (i / talusRing) * Math.PI * 2;
      colliders.push({
        offset: new THREE.Vector3(Math.cos(angle) * talus.radius * 0.5, talus.height * 0.2, Math.sin(angle) * talus.radius * 0.5),
        radius: talus.radius * 0.2,
        height: talus.height * 0.22,
        crashWeight: 1.76,
      });
    }
  }

  const coreLayers = [
    { y: height * 0.16, radius: baseRadius * 0.86, h: height * 0.22, crashWeight: 1.84 },
    { y: height * 0.34, radius: baseRadius * 0.76, h: height * 0.22, crashWeight: 1.82 },
    { y: height * 0.52, radius: baseRadius * 0.64, h: height * 0.21, crashWeight: 1.8 },
    { y: height * 0.7, radius: baseRadius * 0.5, h: height * 0.18, crashWeight: 1.78 },
    { y: height * 0.86, radius: baseRadius * 0.34, h: height * 0.16, crashWeight: 1.76 },
  ];
  for (const layer of coreLayers) {
    colliders.push({
      offset: new THREE.Vector3(0, layer.y, 0),
      radius: layer.radius,
      height: layer.h,
      crashWeight: layer.crashWeight,
    });
  }

  // 额外加入体块碰撞，让山体中心更“实”。
  colliders.push({
    shape: "box",
    offset: new THREE.Vector3(0, height * 0.28, 0),
    halfWidth: baseRadius * 0.56,
    halfLength: baseRadius * 0.62,
    halfHeight: height * 0.23,
    crashWeight: 1.84,
  });
  colliders.push({
    shape: "box",
    offset: new THREE.Vector3(0, height * 0.28, 0),
    halfWidth: baseRadius * 0.5,
    halfLength: baseRadius * 0.58,
    halfHeight: height * 0.2,
    localYaw: Math.PI * 0.25,
    crashWeight: 1.82,
  });
  colliders.push({
    shape: "box",
    offset: new THREE.Vector3(0, height * 0.54, 0),
    halfWidth: baseRadius * 0.34,
    halfLength: baseRadius * 0.42,
    halfHeight: height * 0.18,
    localYaw: Math.PI * 0.18,
    crashWeight: 1.78,
  });

  const lowerRingCount = 8;
  for (let i = 0; i < lowerRingCount; i += 1) {
    const angle = (i / lowerRingCount) * Math.PI * 2;
    colliders.push({
      offset: new THREE.Vector3(Math.cos(angle) * baseRadius * 0.56, height * 0.24, Math.sin(angle) * baseRadius * 0.56),
      radius: baseRadius * 0.24,
      height: height * 0.18,
      crashWeight: 1.74,
    });
  }

  const midRingCount = 7;
  for (let i = 0; i < midRingCount; i += 1) {
    const angle = (i / midRingCount) * Math.PI * 2 + Math.PI / midRingCount;
    colliders.push({
      offset: new THREE.Vector3(Math.cos(angle) * baseRadius * 0.43, height * 0.46, Math.sin(angle) * baseRadius * 0.43),
      radius: baseRadius * 0.2,
      height: height * 0.17,
      crashWeight: 1.72,
    });
  }

  const upperRingCount = 5;
  for (let i = 0; i < upperRingCount; i += 1) {
    const angle = (i / upperRingCount) * Math.PI * 2 + Math.PI / (upperRingCount * 2);
    colliders.push({
      offset: new THREE.Vector3(Math.cos(angle) * baseRadius * 0.3, height * 0.66, Math.sin(angle) * baseRadius * 0.3),
      radius: baseRadius * 0.14,
      height: height * 0.14,
      crashWeight: 1.7,
    });
  }

  for (const flank of flanks) {
    colliders.push({
      offset: flank.offset.clone().setY(flank.offset.y + flank.height * 0.12),
      radius: flank.radius * 0.72,
      height: flank.height * 0.44,
      crashWeight: 1.68,
    });
  }

  colliders.push({
    offset: new THREE.Vector3(0, height * 0.98, 0),
    radius: baseRadius * 0.16,
    height: height * 0.12,
    crashWeight: 1.66,
  });

  return colliders;
}

