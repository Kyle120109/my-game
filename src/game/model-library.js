import * as THREE from "three";

function createCanvasTexture(size, paint) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  paint(ctx, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  return texture;
}

function createRoadAlbedo(size = 1024) {
  return createCanvasTexture(size, (ctx, s) => {
    ctx.fillStyle = "#2e343b";
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 2500; i += 1) {
      const x = Math.random() * s;
      const y = Math.random() * s;
      const r = 0.4 + Math.random() * 1.8;
      const tone = 32 + Math.floor(Math.random() * 40);
      ctx.fillStyle = `rgba(${tone},${tone},${tone},${0.24 + Math.random() * 0.25})`;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    for (let y = 0; y < s; y += Math.max(2, Math.floor(s / 160))) {
      const alpha = 0.018 + Math.random() * 0.024;
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fillRect(0, y, s, 1);
    }
  });
}

function createRoadRoughness(size = 1024) {
  const texture = createCanvasTexture(size, (ctx, s) => {
    ctx.fillStyle = "#9a9a9a";
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 3200; i += 1) {
      const x = Math.random() * s;
      const y = Math.random() * s;
      const tone = 100 + Math.floor(Math.random() * 120);
      ctx.fillStyle = `rgba(${tone},${tone},${tone},${0.15 + Math.random() * 0.24})`;
      ctx.fillRect(x, y, 1 + Math.random() * 2, 1 + Math.random() * 2);
    }
  });
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

function createRoadNormal(size = 1024) {
  const texture = createCanvasTexture(size, (ctx, s) => {
    ctx.fillStyle = "rgb(128,128,255)";
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 3600; i += 1) {
      const x = Math.random() * s;
      const y = Math.random() * s;
      const nx = 118 + Math.floor(Math.random() * 20);
      const ny = 118 + Math.floor(Math.random() * 20);
      const nz = 230 + Math.floor(Math.random() * 24);
      ctx.fillStyle = `rgba(${nx},${ny},${nz},${0.18 + Math.random() * 0.2})`;
      ctx.fillRect(x, y, 1 + Math.random() * 2, 1 + Math.random() * 2);
    }
  });
  texture.colorSpace = THREE.NoColorSpace;
  return texture;
}

function createCrossHatchTexture(baseHex, linesHex, rough = false, size = 512) {
  const base = new THREE.Color(baseHex);
  const lines = new THREE.Color(linesHex);
  const texture = createCanvasTexture(size, (ctx, s) => {
    ctx.fillStyle = `#${base.getHexString()}`;
    ctx.fillRect(0, 0, s, s);
    ctx.strokeStyle = `rgba(${Math.floor(lines.r * 255)},${Math.floor(lines.g * 255)},${Math.floor(lines.b * 255)},0.34)`;
    ctx.lineWidth = Math.max(1, Math.floor(s / 180));
    const step = Math.max(8, Math.floor(s / 26));
    for (let i = -s; i < s * 2; i += step) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i - s, s);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(i, s);
      ctx.lineTo(i - s, 0);
      ctx.stroke();
    }
    if (rough) {
      for (let i = 0; i < 900; i += 1) {
        const x = Math.random() * s;
        const y = Math.random() * s;
        const alpha = 0.06 + Math.random() * 0.15;
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fillRect(x, y, 1, 1);
      }
    }
  });
  return texture;
}

function createMetalTexture(size = 512) {
  return createCanvasTexture(size, (ctx, s) => {
    const grad = ctx.createLinearGradient(0, 0, s, s);
    grad.addColorStop(0, "#d5dde6");
    grad.addColorStop(0.4, "#a9b5c1");
    grad.addColorStop(1, "#e1e6eb");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < s; i += 3) {
      const alpha = 0.04 + Math.random() * 0.05;
      ctx.fillStyle = `rgba(255,255,255,${alpha})`;
      ctx.fillRect(0, i, s, 1);
    }
  });
}

import { buildAdvancedMaterialSet, createDynamicDirtMask } from "./gameplay/dynamic-materials.js";

function addSpokes(parent, radius, width, count, material) {
  for (let i = 0; i < count; i += 1) {
    const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, radius * 1.9, 8), material);
    spoke.rotation.x = (i / count) * Math.PI;
    spoke.position.x = width;
    parent.add(spoke);
  }
}

function createPickupCore(type, materials) {
  if (type === "turbo") {
    const group = new THREE.Group();
    // A detailed thrust engine/rocket shape instead of simple cone
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.38, 0.86, 16), materials.turbo);
    body.rotation.x = Math.PI / 2;
    body.position.set(0, 0, 0.1);
    const nozzle = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.1, 0.3, 16), materials.turboAccent);
    nozzle.rotation.x = Math.PI / 2;
    nozzle.position.set(0, 0, -0.44);
    const fin1 = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.4, 0.3), materials.turboAccent);
    fin1.position.set(0, 0.2, -0.2);
    const fin2 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.06, 0.3), materials.turboAccent);
    fin2.position.set(0.2, 0, -0.2);
    const fin3 = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.06, 0.3), materials.turboAccent);
    fin3.position.set(-0.2, 0, -0.2);
    group.add(body, nozzle, fin1, fin2, fin3);
    return group;
  }

  if (type === "bash") {
    const core = new THREE.Group();
    // A spiked mace/boxing glove polyhedron
    const fist = new THREE.Mesh(new THREE.IcosahedronGeometry(0.38, 1), materials.bash);
    const knuckleGeo = new THREE.ConeGeometry(0.12, 0.28, 8);
    for (let i = 0; i < 5; i++) {
      const knuckle = new THREE.Mesh(knuckleGeo, materials.bashAccent);
      knuckle.position.set(Math.cos(i * Math.PI * 2 / 5) * 0.3, 0.2, Math.sin(i * Math.PI * 2 / 5) * 0.3);
      knuckle.lookAt(0, -0.5, 0);
      core.add(knuckle);
    }
    core.add(fist);
    return core;
  }

  if (type === "shock") {
    const core = new THREE.Group();
    // A detailed energy crystal surrounded by multiple spinning rings
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.28, 0), materials.shock);
    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.04, 8, 32), materials.shockAccent);
    ring1.rotation.x = Math.PI / 2;
    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(0.38, 0.03, 8, 32), materials.shockAccent);
    ring2.rotation.y = Math.PI / 3;
    ring2.rotation.x = Math.PI / 4;
    core.add(orb, ring1, ring2);
    return core;
  }

  if (type === "shield") {
    const core = new THREE.Group();
    // A highly detailed geometric golden relic
    const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.34, 0), materials.shield);
    const frameGeo = new THREE.WireframeGeometry(new THREE.DodecahedronGeometry(0.48, 0));
    const frameOpt = new THREE.LineSegments(frameGeo, new THREE.LineBasicMaterial({ color: 0x9ef1c1, linewidth: 2 }));
    core.add(gem, frameOpt);
    return core;
  }

  if (type === "banana") {
    const core = new THREE.Group();
    const peel = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.07, 12, 24, Math.PI * 1.25), materials.banana);
    peel.rotation.z = Math.PI * 0.52;
    peel.position.y = 0.02;
    const peelTipA = new THREE.Mesh(new THREE.ConeGeometry(0.06, 0.14, 10), materials.bananaAccent);
    peelTipA.position.set(0.18, 0.18, 0);
    peelTipA.rotation.z = -Math.PI * 0.08;
    const peelTipB = peelTipA.clone();
    peelTipB.position.set(-0.16, -0.14, 0);
    peelTipB.rotation.z = Math.PI * 0.84;
    core.add(peel, peelTipA, peelTipB);
    return core;
  }

  if (type === "bomb") {
    const core = new THREE.Group();
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.28, 18, 18), materials.bomb);
    const band = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.026, 10, 26), materials.bombAccent);
    band.rotation.x = Math.PI / 2;
    const fuse = new THREE.Mesh(new THREE.CylinderGeometry(0.024, 0.024, 0.18, 8), materials.bombAccent);
    fuse.position.set(0, 0.24, 0);
    const spark = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), materials.bombAccent);
    spark.position.set(0, 0.34, 0);
    core.add(shell, band, fuse, spark);
    return core;
  }

  const core = new THREE.Group();
  const mine = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.34, 0.24, 12), materials.trap);
  const spikeGeo = new THREE.ConeGeometry(0.06, 0.18, 8);
  for (let i = 0; i < 6; i += 1) {
    const spike = new THREE.Mesh(spikeGeo, materials.trapAccent);
    const angle = (i / 6) * Math.PI * 2;
    spike.position.set(Math.cos(angle) * 0.3, 0.02, Math.sin(angle) * 0.3);
    spike.rotation.x = Math.PI / 2;
    spike.rotation.z = angle;
    core.add(spike);
  }
  core.add(mine);
  return core;
}

const PICKUP_STYLE = {
  // Increased base scales by ~25%
  turbo: { scale: 2.02, spinMul: 1.22, floatMul: 1.08 },
  bash: { scale: 1.92, spinMul: 1.12, floatMul: 1.02 },
  shock: { scale: 2.05, spinMul: 1.28, floatMul: 1.08 },
  shield: { scale: 2.08, spinMul: 1.16, floatMul: 1.12 },
  trap: { scale: 1.88, spinMul: 1.08, floatMul: 1.0 },
  banana: { scale: 2.15, spinMul: 1.18, floatMul: 1.16 },
  bomb: { scale: 2.08, spinMul: 1.24, floatMul: 1.14 },
};

export function createModelLibrary() {
  const roadAlbedo = createRoadAlbedo();
  roadAlbedo.repeat.set(3.5, 28);
  const roadNormal = createRoadNormal();
  roadNormal.repeat.set(3.5, 28);
  const roadRoughness = createRoadRoughness();
  roadRoughness.repeat.set(3.5, 28);
  const clothTexture = createCrossHatchTexture(0x4c5a72, 0x2a3341, true);
  const frameTexture = createCrossHatchTexture(0x4d6d94, 0x8db0d8, false);
  const rubberTexture = createCrossHatchTexture(0x20252e, 0x0b0f14, true);
  const barkTexture = createCrossHatchTexture(0x6e5038, 0x3e2f22, true);
  const leafTexture = createCrossHatchTexture(0x3f7244, 0x25512c, true);
  const stoneTexture = createCrossHatchTexture(0x707982, 0x535c64, true);
  const metalTexture = createMetalTexture();

  const textureSet = {
    roadAlbedo,
    roadNormal,
    roadRoughness,
    cloth: clothTexture,
    frame: frameTexture,
    rubber: rubberTexture,
    bark: barkTexture,
    leaf: leafTexture,
    stone: stoneTexture,
    metal: metalTexture,
  };

  const pickupMaterials = {
    turbo: new THREE.MeshStandardMaterial({ color: 0xffc14d, emissive: 0x7c4f12, emissiveIntensity: 0.5, roughness: 0.38, metalness: 0.22 }),
    turboAccent: new THREE.MeshStandardMaterial({ color: 0xffe8b8, roughness: 0.26, metalness: 0.3 }),
    bash: new THREE.MeshStandardMaterial({ color: 0xff7a63, emissive: 0x7f2e22, emissiveIntensity: 0.55, roughness: 0.42, metalness: 0.2 }),
    bashAccent: new THREE.MeshStandardMaterial({ color: 0xffccb6, roughness: 0.38, metalness: 0.18 }),
    shock: new THREE.MeshStandardMaterial({ color: 0x6cc8ff, emissive: 0x246799, emissiveIntensity: 0.7, roughness: 0.3, metalness: 0.26 }),
    shockAccent: new THREE.MeshStandardMaterial({ color: 0xb4ecff, roughness: 0.28, metalness: 0.32 }),
    shield: new THREE.MeshStandardMaterial({ color: 0x89ffb7, emissive: 0x2d8f59, emissiveIntensity: 0.52, roughness: 0.34, metalness: 0.16 }),
    banana: new THREE.MeshStandardMaterial({ color: 0xf9df5c, emissive: 0x8f7916, emissiveIntensity: 0.52, roughness: 0.42, metalness: 0.12 }),
    bananaAccent: new THREE.MeshStandardMaterial({ color: 0xfff4ae, roughness: 0.34, metalness: 0.08 }),
    bomb: new THREE.MeshStandardMaterial({ color: 0x424a56, emissive: 0x202633, emissiveIntensity: 0.55, roughness: 0.32, metalness: 0.52 }),
    bombAccent: new THREE.MeshStandardMaterial({ color: 0xffb17a, emissive: 0x934922, emissiveIntensity: 0.62, roughness: 0.28, metalness: 0.26 }),
    trap: new THREE.MeshStandardMaterial({ color: 0xb08f79, roughness: 0.55, metalness: 0.16 }),
    trapAccent: new THREE.MeshStandardMaterial({ color: 0xff956d, emissive: 0x6f2a1a, emissiveIntensity: 0.44, roughness: 0.36, metalness: 0.18 }),
  };
  const sharedPickupMaterialSet = new Set(Object.values(pickupMaterials));

  const buildingFacadeStyles = [
    { body: new THREE.MeshStandardMaterial({ color: 0x58728f, roughness: 0.72, metalness: 0.22 }), trim: new THREE.MeshStandardMaterial({ color: 0xa7bfd6, roughness: 0.45, metalness: 0.25 }) },
    { body: new THREE.MeshStandardMaterial({ color: 0x7a6963, roughness: 0.84, metalness: 0.08 }), trim: new THREE.MeshStandardMaterial({ color: 0xd2b995, roughness: 0.56, metalness: 0.14 }) },
    { body: new THREE.MeshStandardMaterial({ color: 0x3d3f44, roughness: 0.6, metalness: 0.6 }), trim: new THREE.MeshStandardMaterial({ color: 0x8e96a8, roughness: 0.42, metalness: 0.58 }) },
    { body: new THREE.MeshStandardMaterial({ color: 0x223344, roughness: 0.4, metalness: 0.8 }), trim: new THREE.MeshStandardMaterial({ color: 0x556677, roughness: 0.3, metalness: 0.9 }) },
    { body: new THREE.MeshStandardMaterial({ color: 0x665555, roughness: 0.9, metalness: 0.1 }), trim: new THREE.MeshStandardMaterial({ color: 0x998888, roughness: 0.7, metalness: 0.2 }) },
    // A few more rich, modern styles to approach reality
    { body: new THREE.MeshStandardMaterial({ color: 0x2b2b2b, roughness: 0.3, metalness: 0.8, map: textureSet.metal }), trim: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.9 }) },
    { body: new THREE.MeshStandardMaterial({ color: 0xb5a397, roughness: 0.9, metalness: 0.1, map: textureSet.stone }), trim: new THREE.MeshStandardMaterial({ color: 0x5c4d44, roughness: 0.8, metalness: 0.2 }) },
    { body: new THREE.MeshStandardMaterial({ color: 0x1e3a5f, roughness: 0.5, metalness: 0.6 }), trim: new THREE.MeshStandardMaterial({ color: 0xc4d8e2, roughness: 0.3, metalness: 0.8 }) },
  ];
  const buildingGlassMat = new THREE.MeshStandardMaterial({ color: 0x112233, roughness: 0.1, metalness: 0.9, envMapIntensity: 1.0 });
  const buildingRoofMat = new THREE.MeshStandardMaterial({ color: 0x1a1c20, roughness: 0.92 });
  const buildingPillarMat = new THREE.MeshStandardMaterial({ color: 0x444b55, roughness: 0.88 });


  function disposePickupCore(core) {
    if (!core) return;
    core.traverse((node) => {
      if (!node.isMesh) return;
      if (node.geometry?.dispose) node.geometry.dispose();
      const materials = Array.isArray(node.material) ? node.material : [node.material];
      for (const mat of materials) {
        if (!mat || sharedPickupMaterialSet.has(mat)) continue;
        if (typeof mat.dispose === "function") mat.dispose();
      }
    });
  }

  function applyPickupModelType(group, type) {
    if (!group) return;
    const style = PICKUP_STYLE[type] ?? PICKUP_STYLE.trap;
    const previousCore = group.userData.core;
    if (previousCore) {
      group.remove(previousCore);
      disposePickupCore(previousCore);
    }

    const core = createPickupCore(type, pickupMaterials);
    group.add(core);
    group.scale.setScalar(style.scale);
    group.userData.anim = {
      floatAmp: (0.2 + Math.random() * 0.14) * style.floatMul,
      spinSpeed: (1.8 + Math.random() * 1.4) * style.spinMul,
      pulseSpeed: 2.2 + Math.random() * 1.5,
    };
    group.userData.halo = null;
    group.userData.core = core;
    group.userData.pickupType = type;
    group.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = true;
      node.receiveShadow = true;
    });
  }

  function createRoadSurfaceMaterial(color) {
    return new THREE.MeshStandardMaterial({
      color,
      map: textureSet.roadAlbedo,
      normalMap: textureSet.roadNormal,
      roughnessMap: textureSet.roadRoughness,
      normalScale: new THREE.Vector2(0.7, 0.7),
      roughness: 0.78,
      metalness: 0.04,
    });
  }

  function createRoadEdgeMaterial(color) {
    const mat = new THREE.MeshStandardMaterial({
      color,
      map: textureSet.bark,
      roughness: 0.84,
      metalness: 0.08,
    });
    mat.map.repeat.set(2, 12);
    return mat;
  }

  function createRoadMarkerMaterial(color) {
    return new THREE.MeshStandardMaterial({
      color,
      emissive: new THREE.Color(color).multiplyScalar(0.2),
      emissiveIntensity: 0.45,
      roughness: 0.32,
      metalness: 0.18,
    });
  }

  function createRacerModel({ color, isPlayer }) {
    const group = new THREE.Group();
    const alignRoot = new THREE.Group();
    const bikeRoot = new THREE.Group();
    const riderRoot = new THREE.Group();
    group.add(alignRoot);
    alignRoot.add(bikeRoot, riderRoot);

    const mats = buildAdvancedMaterialSet(color, isPlayer, textureSet);

    // Create the procedural dirt mask for this specific racer
    const dirtMaskData = createDynamicDirtMask(512);
    // Apply the dirt mask as an overlay (roughness or mix map, currently we just multiply color in a hacky way since it's MeshStandardMaterial)
    // For a true dirt mask in Three.js without custom shaders, we can use the canvas texture as a map or emissiveMap for testing.
    // For now, let's keep the reference so the physics system can splatter it.

    const addTube = (radius, length, pos, rot, mat = mats.frame, radial = 18) => {
      const tube = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, radial), mat);
      tube.position.copy(pos);
      tube.rotation.set(rot.x, rot.y, rot.z);
      bikeRoot.add(tube);
      return tube;
    };

    addTube(0.06, 2.05, new THREE.Vector3(0, 0.85, 0), new THREE.Vector3(Math.PI / 2, 0, 0));
    addTube(0.055, 1.15, new THREE.Vector3(0, 1.14, 0.3), new THREE.Vector3(Math.PI / 2, 0, 0));
    addTube(0.05, 1.08, new THREE.Vector3(0, 0.72, -0.5), new THREE.Vector3(1.02, 0, 0));
    addTube(0.05, 1.08, new THREE.Vector3(0, 0.72, 0.5), new THREE.Vector3(-1.02, 0, 0));
    addTube(0.044, 0.94, new THREE.Vector3(0, 1.03, -0.58), new THREE.Vector3(0.66, 0, 0));
    addTube(0.044, 0.94, new THREE.Vector3(0, 1.03, 0.58), new THREE.Vector3(-0.66, 0, 0));

    const rearSwingPivot = new THREE.Group();
    rearSwingPivot.position.set(0, 0.6, -0.36); // Lowered pivot to be on the frame
    bikeRoot.add(rearSwingPivot);
    addTube(0.036, 1.02, new THREE.Vector3(0, -0.12, -0.44), new THREE.Vector3(1.24, 0, 0), mats.darkRubber, 14);

    // Arm spans from (0,0,0) down to (0, -0.55, -0.95) mid = (0, -0.27, -0.47)
    const rearArm = addTube(0.038, 1.10, new THREE.Vector3(0, -0.27, -0.47), new THREE.Vector3(Math.PI / 2 + 0.52, 0, 0), mats.darkRubber, 14);
    rearSwingPivot.add(rearArm);

    const shockPivot = new THREE.Group();
    shockPivot.position.set(0, 0.95, -0.36);
    bikeRoot.add(shockPivot);
    const shock = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.42, 16), mats.chrome);
    shock.rotation.x = Math.PI / 2.5;
    shock.position.z = -0.06;
    shockPivot.add(shock);

    const handleBarRoot = new THREE.Group();
    handleBarRoot.position.set(0, 1.18, 0.9);
    bikeRoot.add(handleBarRoot);
    const stem = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.18), mats.chrome);
    stem.position.set(0, 0, 0.09);
    handleBarRoot.add(stem);
    const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.037, 0.037, 0.76, 20), mats.chrome);
    handle.rotation.z = Math.PI / 2;
    handle.position.z = 0.18;
    handleBarRoot.add(handle);
    const gripGeo = new THREE.CylinderGeometry(0.052, 0.052, 0.17, 16);
    const gripL = new THREE.Mesh(gripGeo, mats.darkRubber);
    gripL.rotation.z = Math.PI / 2;
    gripL.position.set(-0.33, 0, 0.18);
    const gripR = gripL.clone();
    gripR.position.set(0.33, 0, 0.18);
    handleBarRoot.add(gripL, gripR);

    const forkPivot = new THREE.Group();
    forkPivot.position.set(0, -0.2, 0.1); // Drop the fork below the handlebar
    handleBarRoot.add(forkPivot);
    const forkLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 1.1, 14), mats.chrome);
    forkLeft.position.set(-0.12, -0.45, 0.02); // Midpoint of fork
    const forkRight = forkLeft.clone();
    forkRight.position.x = 0.12;
    forkPivot.add(forkLeft, forkRight);

    const wheelMat = new THREE.MeshStandardMaterial({ color: 0x12161d, roughness: 0.9, metalness: 0.14, map: textureSet.rubber });
    const rimMat = new THREE.MeshStandardMaterial({ color: 0xb7c2ce, roughness: 0.22, metalness: 0.84, map: textureSet.metal });
    const tireGeo = new THREE.TorusGeometry(0.49, 0.065, 24, 72);
    const rimGeo = new THREE.TorusGeometry(0.44, 0.02, 16, 56);
    const hubMat = new THREE.MeshStandardMaterial({ color: 0xc7d1db, roughness: 0.24, metalness: 0.86, map: textureSet.metal });
    const hubGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.26, 20);
    const brakeDiscGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.018, 28);
    const brakeDiscMat = new THREE.MeshStandardMaterial({ color: 0x9ba4b0, roughness: 0.34, metalness: 0.72, map: textureSet.metal });
    const valveGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.085, 8);
    const rearWheelMount = new THREE.Group();
    rearWheelMount.position.set(0, -0.55, -0.95); // Reach the ground at global Y = 0.05
    rearSwingPivot.add(rearWheelMount);
    const rearWheelSpin = new THREE.Group();
    rearWheelMount.add(rearWheelSpin);
    const rearWheelVisual = new THREE.Group();
    rearWheelSpin.add(rearWheelVisual);
    const rearTire = new THREE.Mesh(tireGeo, wheelMat);
    rearTire.rotation.y = Math.PI / 2;
    const rearRim = new THREE.Mesh(rimGeo, rimMat);
    rearRim.rotation.y = Math.PI / 2;
    const rearHub = new THREE.Mesh(hubGeo, hubMat);
    rearHub.rotation.z = Math.PI / 2;
    const rearBrake = new THREE.Mesh(brakeDiscGeo, brakeDiscMat);
    rearBrake.rotation.z = Math.PI / 2;
    rearBrake.position.x = -0.095;
    const rearValve = new THREE.Mesh(valveGeo, hubMat);
    rearValve.position.set(0.06, 0.52, 0);
    rearWheelVisual.add(rearTire, rearRim, rearHub, rearBrake, rearValve);
    addSpokes(rearWheelVisual, 0.44, 0, 8, mats.chrome);

    const frontWheelMount = new THREE.Group();
    frontWheelMount.position.set(0, -0.93, 0.02); // Handlebar at 1.18, pivot at -0.2 -> 0.98. Minus 0.93 -> global 0.05
    forkPivot.add(frontWheelMount);
    const frontWheelSpin = new THREE.Group();
    frontWheelMount.add(frontWheelSpin);
    const frontWheelVisual = new THREE.Group();
    frontWheelSpin.add(frontWheelVisual);
    const frontTire = new THREE.Mesh(tireGeo, wheelMat);
    frontTire.rotation.y = Math.PI / 2;
    const frontRim = new THREE.Mesh(rimGeo, rimMat);
    frontRim.rotation.y = Math.PI / 2;
    const frontHub = new THREE.Mesh(hubGeo, hubMat);
    frontHub.rotation.z = Math.PI / 2;
    const frontBrake = new THREE.Mesh(brakeDiscGeo, brakeDiscMat);
    frontBrake.rotation.z = Math.PI / 2;
    frontBrake.position.x = 0.095;
    const frontValve = new THREE.Mesh(valveGeo, hubMat);
    frontValve.position.set(-0.06, -0.52, 0);
    frontWheelVisual.add(frontTire, frontRim, frontHub, frontBrake, frontValve);
    addSpokes(frontWheelVisual, 0.44, 0, 8, mats.chrome);

    const seatPost = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 0.32, 12), mats.chrome);
    seatPost.position.set(0, 1.2, -0.24);
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.08, 0.28), mats.darkRubber);
    seat.position.set(0, 1.34, -0.24);
    bikeRoot.add(seatPost, seat);

    const crankRoot = new THREE.Group();
    crankRoot.position.set(0, 0.7, -0.02);
    bikeRoot.add(crankRoot);
    const pedalArmA = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.32, 8), mats.chrome);
    pedalArmA.rotation.z = Math.PI / 2;
    pedalArmA.position.set(0.16, 0, 0.3);
    const pedalArmB = pedalArmA.clone();
    pedalArmB.position.set(-0.16, 0, -0.3);
    const pedalA = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.05, 0.1), mats.darkRubber);
    pedalA.position.set(0.22, 0, 0.3);
    const pedalB = pedalA.clone();
    pedalB.position.set(-0.22, 0, -0.3);
    crankRoot.add(pedalArmA, pedalArmB, pedalA, pedalB);

    // 3 orbiting golden shield meshes
    const shieldOrbs = new THREE.Group();
    shieldOrbs.visible = false;
    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0xffd54f,
      emissive: 0xb8860b,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.85,
      roughness: 0.15,
      metalness: 0.7,
      side: THREE.DoubleSide,
    });
    for (let i = 0; i < 3; i++) {
      // Shape it like a traditional knight's kite shield
      const shieldShape = new THREE.Shape();
      shieldShape.moveTo(0, 0.4);
      shieldShape.lineTo(0.3, 0.4);
      shieldShape.quadraticCurveTo(0.3, -0.2, 0, -0.5);
      shieldShape.quadraticCurveTo(-0.3, -0.2, -0.3, 0.4);
      shieldShape.lineTo(0, 0.4);

      const extrudeSettings = { depth: 0.08, bevelEnabled: true, bevelSegments: 2, steps: 2, bevelSize: 0.03, bevelThickness: 0.03 };
      const shieldGeo = new THREE.ExtrudeGeometry(shieldShape, extrudeSettings);
      shieldGeo.center();

      const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat.clone());
      shieldMesh.userData.orbitIndex = i;
      shieldOrbs.add(shieldMesh);
    }
    bikeRoot.add(shieldOrbs);

    riderRoot.position.set(0, 1.12, -0.02);
    const pelvis = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.18, 8, 18), mats.cloth);
    pelvis.position.set(0, 0.04, -0.06);
    riderRoot.add(pelvis);

    const spinePivot = new THREE.Group();
    spinePivot.position.set(0, 0.2, 0.04);
    riderRoot.add(spinePivot);
    const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.66, 10, 20), mats.cloth);
    torso.position.set(0, 0.43, 0.09);
    spinePivot.add(torso);

    const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.24, 0.14), mats.accent);
    chestPlate.position.set(0, 0.46, 0.24);
    chestPlate.rotation.x = -0.22;
    spinePivot.add(chestPlate);

    const neckPivot = new THREE.Group();
    neckPivot.position.set(0, 0.94, 0.23);
    spinePivot.add(neckPivot);
    const headPivot = new THREE.Group();
    headPivot.position.set(0, 0.06, 0);
    neckPivot.add(headPivot);
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 22, 22), mats.skin);
    const helmet = new THREE.Mesh(new THREE.SphereGeometry(0.225, 22, 22, 0, Math.PI * 2, 0, Math.PI * 0.66), mats.darkRubber);
    helmet.position.y = 0.02;
    headPivot.add(head, helmet);

    const eyeGeo = new THREE.SphereGeometry(0.03, 10, 10);
    const eyeWhite = new THREE.MeshStandardMaterial({ color: 0xf5f5f5, roughness: 0.3, metalness: 0.02 });
    const pupilMat = new THREE.MeshStandardMaterial({ color: 0x171717, roughness: 0.2, metalness: 0.05 });
    const eyeL = new THREE.Mesh(eyeGeo, eyeWhite);
    const eyeR = eyeL.clone();
    eyeL.position.set(-0.07, 0.02, 0.18);
    eyeR.position.set(0.07, 0.02, 0.18);
    const pupilL = new THREE.Mesh(new THREE.SphereGeometry(0.014, 8, 8), pupilMat);
    const pupilR = pupilL.clone();
    pupilL.position.set(-0.07, 0.02, 0.204);
    pupilR.position.set(0.07, 0.02, 0.204);
    const nose = new THREE.Mesh(new THREE.ConeGeometry(0.03, 0.08, 10), mats.skin);
    nose.position.set(0, -0.01, 0.205);
    nose.rotation.x = Math.PI / 2;
    const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.01, 8, 12, Math.PI), new THREE.MeshStandardMaterial({ color: 0x8f4e42, roughness: 0.6, metalness: 0.02 }));
    mouth.position.set(0, -0.08, 0.16);
    mouth.rotation.x = Math.PI;
    headPivot.add(eyeL, eyeR, pupilL, pupilR, nose, mouth);

    const makeArm = (side) => {
      const shoulder = new THREE.Group();
      shoulder.position.set(side * 0.32, 0.78, 0.35);
      spinePivot.add(shoulder);
      const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.34, 8, 16), mats.cloth);
      upper.position.set(0, -0.2, 0.03);
      shoulder.add(upper);
      const elbow = new THREE.Group();
      elbow.position.set(0, -0.38, 0.08);
      shoulder.add(elbow);
      const lower = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.34, 8, 16), mats.skin);
      lower.position.set(0, -0.18, 0.08);
      elbow.add(lower);
      const wrist = new THREE.Group();
      wrist.position.set(0, -0.34, 0.1);
      elbow.add(wrist);
      const hand = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 12), mats.skin);
      hand.position.set(0, -0.04, 0.04);
      wrist.add(hand);
      return { shoulder, elbow, wrist };
    };

    const makeLeg = (side) => {
      const hip = new THREE.Group();
      hip.position.set(side * 0.19, 0.03, -0.08);
      riderRoot.add(hip);
      const upper = new THREE.Mesh(new THREE.CapsuleGeometry(0.09, 0.44, 8, 16), mats.cloth);
      upper.position.set(0, -0.28, 0.04);
      hip.add(upper);
      const knee = new THREE.Group();
      knee.position.set(0, -0.52, 0.05);
      hip.add(knee);
      const lower = new THREE.Mesh(new THREE.CapsuleGeometry(0.075, 0.38, 8, 16), mats.cloth);
      lower.position.set(0, -0.22, 0.03);
      knee.add(lower);
      const ankle = new THREE.Group();
      ankle.position.set(0, -0.4, 0.05);
      knee.add(ankle);
      const foot = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.06, 0.22), mats.darkRubber);
      foot.position.set(0, -0.02, 0.11);
      ankle.add(foot);
      return { hip, knee, ankle };
    };

    const leftArm = makeArm(-1);
    const rightArm = makeArm(1);
    const leftLeg = makeLeg(-1);
    const rightLeg = makeLeg(1);

    group.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = true;
      node.receiveShadow = true;
    });

    return {
      group,
      alignRoot,
      bikeRoot,
      riderRoot,
      handleBarRoot,
      forkPivot,
      rearSwingPivot,
      shockPivot,
      frontWheel: frontWheelSpin,
      rearWheel: rearWheelSpin,
      frontWheelSpin,
      rearWheelSpin,
      shieldOrbs,
      crankRoot,
      rig: {
        spinePivot,
        neckPivot,
        headPivot,
        leftShoulder: leftArm.shoulder,
        leftElbow: leftArm.elbow,
        leftWrist: leftArm.wrist,
        rightShoulder: rightArm.shoulder,
        rightElbow: rightArm.elbow,
        rightWrist: rightArm.wrist,
        leftHip: leftLeg.hip,
        leftKnee: leftLeg.knee,
        leftAnkle: leftLeg.ankle,
        rightHip: rightLeg.hip,
        rightKnee: rightLeg.knee,
        rightAnkle: rightLeg.ankle,
      },
      gripL,
      gripR,
    };
  }

  function createTreeModel(scale, rng, dry) {
    const group = new THREE.Group();
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14 * scale, 0.25 * scale, 2.3 * scale, 18),
      new THREE.MeshStandardMaterial({
        color: dry ? 0x79593d : 0x6a5038,
        roughness: 0.9,
        map: textureSet.bark,
      })
    );
    trunk.position.y = 1.06 * scale;
    group.add(trunk);

    const leafMat = new THREE.MeshStandardMaterial({
      color: dry ? 0x92795a : 0x3b6e40,
      roughness: 0.9,
      map: textureSet.leaf,
    });
    const crownA = new THREE.Mesh(new THREE.ConeGeometry(1.04 * scale, 2.1 * scale, 16), leafMat);
    const crownB = new THREE.Mesh(new THREE.ConeGeometry(0.82 * scale, 1.8 * scale, 16), leafMat);
    const crownC = new THREE.Mesh(new THREE.SphereGeometry(0.66 * scale, 14, 14), leafMat);
    crownA.position.y = 2.34 * scale;
    crownB.position.y = 3.08 * scale;
    crownC.position.y = 3.95 * scale;
    group.add(crownA, crownB, crownC);
    group.rotation.y = rng() * Math.PI * 2;
    group.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = true;
      node.receiveShadow = true;
    });
    group.userData.obstacleRadius = 1.24 * scale;
    group.userData.obstacleHeight = 4.2 * scale;
    group.userData.crashWeight = 1.02;
    group.userData.type = "tree";
    return group;
  }

  const _rockGeometries = [];
  function initRockGeometries() {
    for (let t = 0; t < 4; t++) {
      // 5x complexity: detail level 5 (500 faces) vs level 2 (80 faces) originally
      const geo = new THREE.IcosahedronGeometry(1, 5);
      const pos = geo.attributes.position;
      const colors = [];
      for (let i = 0; i < pos.count; i++) {
        const vx = pos.getX(i), vy = pos.getY(i), vz = pos.getZ(i);
        let n = Math.sin(vx * 3.1 + t * 4) * Math.cos(vz * 3.1 - t) * 0.15;
        n += Math.sin(vy * 7.4 - t * 2) * Math.cos(vx * 7.4 + t) * 0.08;
        n += Math.sin(vz * 13.7 + t) * Math.cos(vy * 13.7 - t) * 0.04;

        let sx = 1, sy = 1, sz = 1;
        if (t === 0) { sx = 1.3; sy = 0.7; sz = 1.1; }
        else if (t === 1) { sx = 0.8; sy = 1.5; sz = 0.8; }
        else if (t === 2) { sx = 1.1; sy = 1.0; sz = 1.2; }
        else { sx = 1.2; sy = 0.9; sz = 1.0; }

        const finalX = vx * sx * (1 + n);
        const finalY = vy * sy * (1 + n);
        const finalZ = vz * sz * (1 + n);
        pos.setXYZ(i, finalX, finalY, finalZ);

        const brightness = 0.4 + (n + 0.15) * 2.5;
        const clampedB = Math.max(0.2, Math.min(1.0, brightness));

        const tintR = clampedB * (1.0 + Math.sin(vy * 5) * 0.05);
        const tintG = clampedB * (1.0 + Math.cos(vx * 4) * 0.05);
        const tintB = clampedB * (1.0 - Math.sin(vz * 6) * 0.05);

        colors.push(tintR, tintG, tintB);
      }
      geo.computeVertexNormals();
      geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      _rockGeometries.push(geo);
    }
  }

  function createRockModel(scale, warm, rng = Math.random) {
    if (_rockGeometries.length === 0) initRockGeometries();
    const typeIndex = Math.floor(rng() * 4);
    const geometry = _rockGeometries[typeIndex];

    const rock = new THREE.Mesh(
      geometry,
      new THREE.MeshStandardMaterial({
        color: warm ? 0x9a6a4a : 0x7a828a,
        roughness: 0.95,
        metalness: 0.05,
        map: textureSet.stone,
        vertexColors: true,
      })
    );
    rock.scale.setScalar(scale);
    const origSet = rock.scale.set.bind(rock.scale);
    rock.scale.set = function (x, y, z) {
      if (typeof y === "undefined") origSet(x * scale, x * scale, x * scale);
      else origSet(x * scale, y * scale, z * scale);
      return this;
    };

    rock.rotation.set(rng() * Math.PI, rng() * Math.PI, rng() * Math.PI);
    rock.castShadow = true;
    rock.receiveShadow = true;
    rock.userData.obstacleRadius = 1.36 * scale;
    rock.userData.obstacleHeight = 2.7 * scale;
    rock.userData.crashWeight = 1.44;
    rock.userData.type = "rock";
    return rock;
  }

  function createPropModel(scale, rng, warm) {
    const group = new THREE.Group();
    if (rng() < 0.5) {
      const pillar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.32 * scale, 0.38 * scale, 2.8 * scale, 12),
        new THREE.MeshStandardMaterial({ color: warm ? 0x926949 : 0x7d8b74, roughness: 0.88, map: textureSet.stone })
      );
      pillar.position.y = 1.4 * scale;
      const top = new THREE.Mesh(
        new THREE.BoxGeometry(0.92 * scale, 0.28 * scale, 0.92 * scale),
        new THREE.MeshStandardMaterial({ color: warm ? 0xb88b64 : 0x96a78b, roughness: 0.8, metalness: 0.05 })
      );
      top.position.y = 2.76 * scale;
      group.add(pillar, top);
    } else {
      const shrub = new THREE.Mesh(
        new THREE.DodecahedronGeometry(0.78 * scale, 1),
        new THREE.MeshStandardMaterial({ color: warm ? 0x8d7a58 : 0x51774d, roughness: 0.95, map: textureSet.leaf })
      );
      const stones = new THREE.Mesh(
        new THREE.CylinderGeometry(0.28 * scale, 0.36 * scale, 0.28 * scale, 10),
        new THREE.MeshStandardMaterial({ color: warm ? 0x8d6747 : 0x6f7784, roughness: 0.9, map: textureSet.stone })
      );
      shrub.position.y = 0.74 * scale;
      stones.position.y = 0.14 * scale;
      group.add(shrub, stones);
    }
    group.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = true;
      node.receiveShadow = true;
    });
    group.userData.obstacleRadius = 0.95 * scale;
    group.userData.obstacleHeight = 2.3 * scale;
    group.userData.crashWeight = 1.12;
    group.userData.type = "prop";
    return group;
  }

  function createIceCrystalModel(scale, rng) {
    const geo = new THREE.OctahedronGeometry(scale * 1.5, 0);
    geo.scale(1, 1.8 + rng() * 0.8, 1);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      pos.setY(i, pos.getY(i) + (rng() - 0.5) * 0.2);
    }
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(
      geo,
      new THREE.MeshStandardMaterial({
        color: 0x99ccff,
        transparent: true,
        opacity: 0.85,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0x224466,
        emissiveIntensity: 0.2
      })
    );
    mesh.position.y = 1.0 * scale;
    mesh.rotation.y = rng() * Math.PI;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.obstacleRadius = 1.0 * scale;
    mesh.userData.obstacleHeight = 3.0 * scale;
    mesh.userData.crashWeight = 1.6; // Heavy ice
    mesh.userData.type = "crystal";
    return mesh;
  }

  function createDetailedBuildingModel(w, d, h, styleIndex, rng) {
    const style = buildingFacadeStyles[styleIndex % buildingFacadeStyles.length];
    const group = new THREE.Group();

    // Base Floor (wider, commercial look)
    const baseH = 4 + rng() * 2;
    const baseW = w * 1.05;
    const baseD = d * 1.05;
    const base = new THREE.Mesh(new THREE.BoxGeometry(baseW, baseH, baseD), style.trim);
    base.position.y = baseH * 0.5;
    base.castShadow = true;
    base.receiveShadow = true;
    group.add(base);

    // Pillars / Shop windows on base
    const numPillarsX = Math.max(2, Math.floor(w / 4));
    for (let i = 0; i <= numPillarsX; i++) {
      const px = -baseW / 2 + (i / numPillarsX) * baseW;
      const pillar1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, baseH, baseD + 0.2), buildingPillarMat);
      pillar1.position.set(px, baseH * 0.5, 0);
      group.add(pillar1);
    }
    const numPillarsZ = Math.max(2, Math.floor(d / 4));
    for (let i = 0; i <= numPillarsZ; i++) {
      const pz = -baseD / 2 + (i / numPillarsZ) * baseD;
      const pillar2 = new THREE.Mesh(new THREE.BoxGeometry(baseW + 0.2, baseH, 0.8), buildingPillarMat);
      pillar2.position.set(0, baseH * 0.5, pz);
      group.add(pillar2);
    }

    // Setbacks (Tiers)
    const numTiers = h > 60 ? 3 : (h > 30 ? 2 : 1);
    let currentY = baseH;
    let currentW = w;
    let currentD = d;

    for (let t = 0; t < numTiers; t++) {
      const isLastTier = t === numTiers - 1;
      const tierH = isLastTier ? (h - currentY) : (h - baseH) / numTiers * (0.8 + rng() * 0.4);

      const tierBody = new THREE.Mesh(new THREE.BoxGeometry(currentW, tierH, currentD), style.body);
      tierBody.position.y = currentY + tierH * 0.5;
      tierBody.castShadow = true;
      tierBody.receiveShadow = true;
      group.add(tierBody);

      // Glass / Windows logic: Intersecting boxes for vertical or horizontal stripes
      const isGlassy = rng() > 0.3;
      if (isGlassy) {
        const isVertical = rng() > 0.5;
        if (isVertical) {
          // Vertical mullions
          const numMullions = Math.max(3, Math.floor(currentW / 3));
          const glassW = currentW * 0.8;
          const glassD = currentD * 0.8;
          const glassMargin = 0.5;

          const glassBlock1 = new THREE.Mesh(new THREE.BoxGeometry(currentW + 0.1, tierH - 1, glassD), buildingGlassMat);
          glassBlock1.position.y = currentY + tierH * 0.5;
          const glassBlock2 = new THREE.Mesh(new THREE.BoxGeometry(glassW, tierH - 1, currentD + 0.1), buildingGlassMat);
          glassBlock2.position.y = currentY + tierH * 0.5;
          group.add(glassBlock1, glassBlock2);

          for (let i = 0; i <= numMullions; i++) {
            const px = -currentW / 2 + (i / numMullions) * currentW;
            const mullion = new THREE.Mesh(new THREE.BoxGeometry(0.4, tierH, currentD + 0.2), style.trim);
            mullion.position.set(px, currentY + tierH * 0.5, 0);
            group.add(mullion);
          }
        } else {
          // Horizontal floors
          const floorH = 3.5;
          const numFloors = Math.floor(tierH / floorH);
          for (let i = 0; i < numFloors; i++) {
            const floorY = currentY + i * floorH;
            const glassBand = new THREE.Mesh(new THREE.BoxGeometry(currentW + 0.1, floorH * 0.6, currentD + 0.1), buildingGlassMat);
            glassBand.position.y = floorY + floorH * 0.5;
            group.add(glassBand);

            const spandrel = new THREE.Mesh(new THREE.BoxGeometry(currentW + 0.2, floorH * 0.4, currentD + 0.2), style.trim);
            spandrel.position.y = floorY + floorH * 0.8;
            group.add(spandrel);
          }
        }
      }

      // Roof for this tier
      const roofThickness = 0.6;
      const tierRoof = new THREE.Mesh(new THREE.BoxGeometry(currentW * 0.95, roofThickness, currentD * 0.95), buildingRoofMat);
      tierRoof.position.y = currentY + tierH + roofThickness * 0.5;
      group.add(tierRoof);

      currentY += tierH;
      currentW *= 0.75 + rng() * 0.15;
      currentD *= 0.75 + rng() * 0.15;

      // Add details to the roof of this tier
      if (rng() > 0.4 || isLastTier) {
        const acW = rng() * 4 + 2;
        const acD = rng() * 4 + 2;
        const acH = rng() * 2 + 1;
        const ac = new THREE.Mesh(new THREE.BoxGeometry(acW, acH, acD), style.trim);
        ac.position.set((rng() - 0.5) * (currentW / 2), currentY + acH * 0.5, (rng() - 0.5) * (currentD / 2));
        group.add(ac);

        if (isLastTier && h > 40) {
          const antennaH = h * 0.2 + rng() * 10;
          const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.4, antennaH, 8), buildingPillarMat);
          antenna.position.set(0, currentY + antennaH * 0.5, 0);
          group.add(antenna);

          // Helipad or secondary antenna
          if (rng() > 0.5 && currentW > 10 && currentD > 10) {
            const pad = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 0.5, 16), buildingPillarMat);
            pad.position.set(0, currentY + 0.25, 0);
            group.add(pad);
          }
        }
      }
    }

    return group;
  }

  function createNeonObeliskModel(scale, rng) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.8 * scale, 4.5 * scale, 0.8 * scale),
      new THREE.MeshStandardMaterial({
        color: 0x111111,
        emissive: rng() > 0.5 ? 0x00ffff : 0xff00ff,
        emissiveIntensity: 0.6 + rng() * 0.4,
        roughness: 0.2,
        metalness: 0.8,
      })
    );
    mesh.position.y = 2.25 * scale;
    mesh.rotation.y = rng() * Math.PI;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.userData.obstacleRadius = 0.6 * scale;
    mesh.userData.obstacleHeight = 4.5 * scale;
    mesh.userData.crashWeight = 1.2;
    mesh.userData.type = "neon_obelisk";
    return mesh;
  }

  function createRuinPillarModel(scale, rng) {
    const geo = new THREE.CylinderGeometry(scale * 0.8, scale * 1.0, scale * 4.5, 8);
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const y = pos.getY(i);
      const noise = (rng() - 0.5) * 0.3;
      pos.setX(i, pos.getX(i) * (1 + noise));
      pos.setZ(i, pos.getZ(i) * (1 + noise));
      if (y > scale * 1.0) pos.setY(i, y - (pos.getX(i) + pos.getZ(i)) * 0.4);
    }
    geo.computeVertexNormals();
    const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x5a6355, roughness: 0.95, map: textureSet.stone }));
    mesh.position.y = scale * 2.25;

    const runeGeo = new THREE.TorusGeometry(scale * 0.9, scale * 0.1, 4, 8);
    const runeMesh = new THREE.Mesh(runeGeo, new THREE.MeshStandardMaterial({ color: 0x44ffaa, emissive: 0x228855, emissiveIntensity: 0.8, roughness: 0.4 }));
    runeMesh.rotation.x = Math.PI / 2 + 0.2;
    runeMesh.position.y = scale * 2.5;

    const group = new THREE.Group();
    group.add(mesh, runeMesh);
    group.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });

    group.userData.obstacleRadius = scale * 1.2;
    group.userData.obstacleHeight = scale * 4.6;
    group.userData.crashWeight = 1.6;
    group.userData.type = "ruin";
    return group;
  }

  function createMagmaVentModel(scale, rng) {
    const group = new THREE.Group();
    const mound = new THREE.Mesh(
      new THREE.ConeGeometry(scale * 1.5, scale * 1.2, 12),
      new THREE.MeshStandardMaterial({
        color: 0x22110c,
        roughness: 0.95,
      })
    );
    mound.position.y = scale * 0.6;

    const lava = new THREE.Mesh(
      new THREE.SphereGeometry(scale * 0.5, 8, 8),
      new THREE.MeshStandardMaterial({
        color: 0xff3b00,
        emissive: 0xff3b00,
        emissiveIntensity: 0.8,
      })
    );
    lava.position.y = scale * 1.0;

    group.add(mound, lava);
    group.traverse((node) => {
      if (!node.isMesh) return;
      node.castShadow = true;
      node.receiveShadow = true;
    });
    group.userData.obstacleRadius = 1.2 * scale;
    group.userData.obstacleHeight = 1.2 * scale;
    group.userData.crashWeight = 1.8;
    group.userData.type = "magma_vent";
    return group;
  }

  function createPickupModel(type) {
    const group = new THREE.Group();
    applyPickupModelType(group, type);
    return group;
  }

  // --- EXPANSION: FOREST (Map 1) ---
  const makeBirch = (s, rng) => createTreeModel(s * 1.1, rng, false);
  const makeOak = (s, rng) => { const t = createTreeModel(s * 1.3, rng, false); t.scale.set(1.4, 0.9, 1.4); return t; };
  const makePine = (s, rng) => { const t = createTreeModel(s, rng, false); t.scale.set(0.7, 1.5, 0.7); return t; };
  const makeWillow = (s, rng) => { const t = createTreeModel(s, rng, false); t.scale.set(1.5, 0.8, 1.5); return t; };
  const makeStump = (s, rng) => { const t = createTreeModel(s, rng, true); t.scale.set(1, 0.2, 1); return t; };
  const makeMossyBoulder = (s, rng) => createRockModel(s * 1.2, false, rng);
  const makeSlateSheet = (s, rng) => { const r = createRockModel(s, false, rng); r.scale.set(2, 0.3, 2); return r; };
  const makePebbleCluster = (s, rng) => {
    const g = new THREE.Group();
    for (let i = 0; i < 3; i++) { const p = createRockModel(s * (0.3 + rng() * 0.3), false, rng); p.position.set((rng() - 0.5) * s, 0, (rng() - 0.5) * s); g.add(p); }
    g.userData = { obstacleRadius: s, obstacleHeight: s * 0.6, crashWeight: 0.5, type: "prop" };
    return g;
  };
  const makeOverhangRock = (s, rng) => { const r = createRockModel(s * 1.5, false, rng); r.scale.set(1, 2, 1); r.rotation.z = 0.5; return r; };
  const makeArchStone = (s, rng) => { const r = createRockModel(s * 2, false, rng); r.scale.set(1.5, 1, 0.5); r.position.y = s; return r; };
  const makeFern = (s, rng) => createPropModel(s * 0.8, rng, false);
  const makeBush = (s, rng) => { const p = createPropModel(s, rng, false); p.scale.set(1.5, 0.8, 1.5); return p; };
  const makeTallGrass = (s, rng) => { const p = createPropModel(s * 0.5, rng, false); p.scale.set(0.5, 2, 0.5); return p; };
  const makeMushroom = (s, rng) => {
    const g = new THREE.Group();
    const stem = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.3, s * 1.2), new THREE.MeshStandardMaterial({ color: 0xddddcc })); stem.position.y = s * 0.6;
    const cap = new THREE.Mesh(new THREE.SphereGeometry(s * 0.8, 12, 12, 0, Math.PI * 2, 0, Math.PI / 2), new THREE.MeshStandardMaterial({ color: 0xaa3333 })); cap.position.y = s * 1.2;
    g.add(stem, cap); g.userData = { obstacleRadius: s * 0.8, obstacleHeight: s * 1.5, crashWeight: 0.2, type: "prop" }; return g;
  };
  const makeBerryShrub = (s, rng) => createPropModel(s * 1.1, rng, false);
  const makeWoodenFence = (s, rng) => {
    const g = new THREE.Group();
    const p1 = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.1, s * 1.5), new THREE.MeshStandardMaterial({ color: 0x553322 })); p1.position.set(-s, s * 0.75, 0);
    const p2 = p1.clone(); p2.position.set(s, s * 0.75, 0);
    const rail = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.15, s * 0.05), new THREE.MeshStandardMaterial({ color: 0x553322 })); rail.position.set(0, s * 1.2, 0);
    g.add(p1, p2, rail); g.userData = { obstacleRadius: s * 1.2, obstacleHeight: s * 1.5, crashWeight: 0.8, type: "prop" }; return g;
  };
  const makeCabinPiece = (s, rng) => {
    const g = new THREE.Group(); const wall = new THREE.Mesh(new THREE.BoxGeometry(s * 3, s * 2, s * 0.2), new THREE.MeshStandardMaterial({ color: 0x442211, map: textureSet.bark })); wall.position.y = s;
    g.add(wall); g.userData = { obstacleRadius: s * 1.5, obstacleHeight: s * 2, crashWeight: 2.0, type: "prop" }; return g;
  };
  const makeBrokenCart = (s, rng) => { const p = createPropModel(s, rng, true); p.rotation.z = Math.PI / 4; return p; };
  const makeWell = (s, rng) => {
    const g = new THREE.Group(); const base = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.8, s * 0.8, s, 12), new THREE.MeshStandardMaterial({ color: 0x666666, map: textureSet.stone })); base.position.y = s * 0.5;
    g.add(base); g.userData = { obstacleRadius: s * 0.9, obstacleHeight: s, crashWeight: 1.5, type: "prop" }; return g;
  };
  const makeStoneRuins = (s, rng) => createRuinPillarModel(s * 0.8, rng);
  const makeSteppingStones = (s, rng) => {
    const g = new THREE.Group();
    for (let i = 0; i < 4; i++) {
      const stone = createRockModel(s * 0.4, false, rng);
      stone.scale.set(1.5, 0.2, 1.5);
      stone.position.set((rng() - 0.5) * s, 0, (rng() - 0.5) * s);
      g.add(stone);
    }
    g.userData = { obstacleRadius: s, obstacleHeight: s * 0.2, crashWeight: 0.2, type: "prop" };
    return g;
  };

  // --- EXPANSION: DESERT (Map 2) ---
  const makeSaguaro = (s, rng) => {
    const g = new THREE.Group(); const mat = new THREE.MeshStandardMaterial({ color: 0x4a7c3a, roughness: 0.8 });
    const trunk = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.3, s * 0.4, s * 3), mat); trunk.position.y = s * 1.5;
    const arm = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 1.5), mat); arm.position.set(s * 0.5, s * 1.8, 0); arm.rotation.z = Math.PI / 4;
    g.add(trunk, arm); g.userData = { obstacleRadius: s * 0.8, obstacleHeight: s * 3, crashWeight: 1.0, type: "tree" }; return g;
  };
  const makeBarrelCactus = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(s * 0.6, 12, 12), new THREE.MeshStandardMaterial({ color: 0x558844 }));
    mesh.position.y = s * 0.5; mesh.scale.set(1, 1.2, 1);
    mesh.userData = { obstacleRadius: s * 0.7, obstacleHeight: s * 1.2, crashWeight: 0.5, type: "prop" }; return mesh;
  };
  const makePricklyPear = (s, rng) => { const p = createPropModel(s, rng, true); p.scale.set(1.5, 0.5, 0.2); return p; };
  const makeDriedHusk = (s, rng) => { const t = createTreeModel(s * 0.8, rng, true); t.scale.set(0.5, 0.5, 0.5); return t; };
  const makeAloe = (s, rng) => createPropModel(s * 0.6, rng, true);
  const makeSandstonePillar = (s, rng) => { const r = createRockModel(s, true, rng); r.scale.set(0.6, 2.5, 0.6); r.position.y = s * 2; return r; };
  const makeCanyonArch = (s, rng) => { const r = createRockModel(s * 2, true, rng); r.scale.set(1, 1.5, 0.3); r.position.y = s * 1.5; return r; };
  const makeTumbleweed = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.DodecahedronGeometry(s * 0.5, 1), new THREE.MeshStandardMaterial({ color: 0xaa8855, wireframe: true }));
    mesh.position.y = s * 0.5; mesh.userData = { obstacleRadius: s * 0.6, obstacleHeight: s, crashWeight: 0.1, type: "prop" }; return mesh;
  };
  const makeFlatShale = (s, rng) => { const r = createRockModel(s * 1.2, true, rng); r.scale.set(1.5, 0.2, 1.5); return r; };
  const makeDesertObelisk = (s, rng) => { const p = createRuinPillarModel(s * 1.2, rng); p.scale.set(0.5, 1.5, 0.5); return p; };
  const makeCrudeAltar = (s, rng) => { const r = createRockModel(s, true, rng); r.scale.set(1.2, 0.5, 1.2); r.position.y = s * 0.5; return r; };
  const makeCrackedPottery = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.4, s * 0.2, s * 0.8), new THREE.MeshStandardMaterial({ color: 0xcc7744 }));
    mesh.position.y = s * 0.4; mesh.userData = { obstacleRadius: s * 0.5, obstacleHeight: s * 0.8, crashWeight: 0.3, type: "prop" }; return mesh;
  };
  const makeTatteredTent = (s, rng) => {
    const g = new THREE.Group(); const cloth = new THREE.Mesh(new THREE.ConeGeometry(s * 1.5, s * 2, 4), new THREE.MeshStandardMaterial({ color: 0xddccaa, map: textureSet.cloth })); cloth.position.y = s;
    g.add(cloth); g.userData = { obstacleRadius: s * 1.5, obstacleHeight: s * 2, crashWeight: 0.4, type: "prop" }; return g;
  };
  const makeDryWell = (s, rng) => makeWell(s, rng);
  const makeDesertWarningSign = (s, rng) => {
    const g = new THREE.Group();
    const post = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.05, s * 1.5), new THREE.MeshStandardMaterial({ color: 0x553322 })); post.position.y = s * 0.75;
    const sign = new THREE.Mesh(new THREE.BoxGeometry(s * 0.8, s * 0.6, s * 0.05), new THREE.MeshStandardMaterial({ color: 0xaa2222 })); sign.position.y = s * 1.2;
    g.add(post, sign); g.userData = { obstacleRadius: s * 0.4, obstacleHeight: s * 1.5, crashWeight: 0.3, type: "prop" }; return g;
  };

  // --- EXPANSION: SNOW (Map 3) ---
  const makeIceShards = (s, rng) => createIceCrystalModel(s, rng);
  const makeGlacierBlock = (s, rng) => { const r = createRockModel(s * 2, false, rng); r.material.color.setHex(0xaaddff); r.material.roughness = 0.2; r.scale.set(1.5, 1, 1.5); return r; };
  const makeFrozenPond = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(s * 2, s * 2, 0.1), new THREE.MeshStandardMaterial({ color: 0x88ccff, roughness: 0.1, metalness: 0.3 }));
    mesh.userData = { obstacleRadius: s * 2, obstacleHeight: 0.2, crashWeight: 0.1, type: "prop" }; return mesh;
  };
  const makeIcicleCluster = (s, rng) => { const c = createIceCrystalModel(s * 0.5, rng); c.scale.set(0.5, 2, 0.5); return c; };
  const makeSnowDrift = (s, rng) => { const r = createRockModel(s * 1.5, false, rng); r.material.color.setHex(0xffffff); r.material.roughness = 0.9; r.scale.set(2, 0.4, 1.5); return r; };
  const makeSnowPine = (s, rng) => { const t = createTreeModel(s, rng, false); t.children[1].material.color.setHex(0xdddddd); t.scale.set(0.8, 1.5, 0.8); return t; };
  const makeDeadFrostedTree = (s, rng) => { const t = createTreeModel(s, rng, true); t.children.forEach(c => c.material.color.setHex(0xcccccc)); return t; };
  const makeFrozenBush = (s, rng) => { const p = createPropModel(s, rng, false); p.children[0].material.color.setHex(0xddeeff); return p; };
  const makeSnowStump = (s, rng) => { const t = createTreeModel(s, rng, true); t.scale.set(1, 0.2, 1); t.children[0].material.color.setHex(0xeeeeee); return t; };
  const makeBareBranches = (s, rng) => { const p = createPropModel(s, rng, true); p.scale.set(1, 2, 1); return p; };
  const makeFrostBoulder = (s, rng) => { const r = createRockModel(s * 1.2, false, rng); r.material.color.setHex(0xbbccdd); return r; };
  const makeIceCaveEntrance = (s, rng) => { const r = createRockModel(s * 3, false, rng); r.material.color.setHex(0xaaddff); r.scale.set(1.5, 1.2, 0.5); r.position.y = s * 1.5; return r; };
  const makeSnowSlate = (s, rng) => { const r = createRockModel(s, false, rng); r.material.color.setHex(0xffffff); r.scale.set(2, 0.3, 2); return r; };
  const makeSmoothRiverRock = (s, rng) => { const r = createRockModel(s, false, rng); r.scale.set(1.5, 0.6, 1); return r; };
  const makeJaggedPeak = (s, rng) => { const r = createRockModel(s * 1.5, false, rng); r.scale.set(0.5, 3, 0.5); r.position.y = s * 2; return r; };
  const makeSnowman = (s, rng) => {
    const g = new THREE.Group(); const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.9 });
    const b1 = new THREE.Mesh(new THREE.SphereGeometry(s * 0.6, 12, 12), mat); b1.position.y = s * 0.6;
    const b2 = new THREE.Mesh(new THREE.SphereGeometry(s * 0.4, 12, 12), mat); b2.position.y = s * 1.4;
    g.add(b1, b2); g.userData = { obstacleRadius: s * 0.6, obstacleHeight: s * 1.8, crashWeight: 0.2, type: "prop" }; return g;
  };
  const makeBrokenSkiChair = (s, rng) => { const p = createPropModel(s, rng, true); p.rotation.x = Math.PI / 2; return p; };
  const makeCabinChimney = (s, rng) => { const p = createRuinPillarModel(s * 0.5, rng); p.scale.set(0.8, 0.4, 0.8); return p; };
  const makeWarningTape = (s, rng) => makeWoodenFence(s, rng); // reuse base shapes
  const makeFrozenBarrel = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.4, s * 0.4, s * 0.8), new THREE.MeshStandardMaterial({ color: 0x88aacc, roughness: 0.3 }));
    mesh.position.y = s * 0.4; mesh.userData = { obstacleRadius: s * 0.5, obstacleHeight: s * 0.8, crashWeight: 0.5, type: "prop" }; return mesh;
  };

  // --- EXPANSION: CITY (Map 4) ---
  const makeCitySedan = (s, rng) => {
    const g = new THREE.Group(); const bodyMat = new THREE.MeshStandardMaterial({ color: 0x224488, roughness: 0.2, metalness: 0.5 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 0.6, s * 4), bodyMat); body.position.y = s * 0.6;
    const top = new THREE.Mesh(new THREE.BoxGeometry(s * 1.4, s * 0.5, s * 2), new THREE.MeshStandardMaterial({ color: 0x111111 })); top.position.y = s * 1.15; top.position.z = -s * 0.2;
    g.add(body, top); g.userData = { obstacleRadius: s * 2, obstacleHeight: s * 1.5, crashWeight: 4.0, type: "prop" }; return g;
  };
  const makeCityVan = (s, rng) => {
    const g = new THREE.Group(); const mat = new THREE.MeshStandardMaterial({ color: 0xdddddd });
    const box = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 2.2, s * 5), mat); box.position.y = s * 1.2;
    g.add(box); g.userData = { obstacleRadius: s * 2.5, obstacleHeight: s * 2.5, crashWeight: 5.0, type: "prop" }; return g;
  };
  const makeAbandonedBus = (s, rng) => {
    const g = new THREE.Group(); const mat = new THREE.MeshStandardMaterial({ color: 0xaa3333, roughness: 0.6 });
    const box = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 2.8, s * 8), mat); box.position.y = s * 1.5;
    g.add(box); g.userData = { obstacleRadius: s * 4, obstacleHeight: s * 3, crashWeight: 8.0, type: "prop" }; return g;
  };
  const makeBikeRack = (s, rng) => makeWoodenFence(s, rng); // reuse shape
  const makeScooter = (s, rng) => makeBrokenCart(s * 0.5, rng);
  const makeBench = (s, rng) => {
    const g = new THREE.Group();
    const seat = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 0.1, s * 0.6), new THREE.MeshStandardMaterial({ color: 0x553322 })); seat.position.y = s * 0.4;
    g.add(seat); g.userData = { obstacleRadius: s * 1.2, obstacleHeight: s * 0.6, crashWeight: 0.5, type: "prop" }; return g;
  };
  const makeTrashCan = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.3, s * 0.3, s * 0.8), new THREE.MeshStandardMaterial({ color: 0x333333 })); mesh.position.y = s * 0.4;
    mesh.userData = { obstacleRadius: s * 0.4, obstacleHeight: s * 0.8, crashWeight: 0.3, type: "prop" }; return mesh;
  };
  const makeMailbox = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(s * 0.5, s * 0.8, s * 0.5), new THREE.MeshStandardMaterial({ color: 0x2244aa })); mesh.position.y = s * 0.4;
    mesh.userData = { obstacleRadius: s * 0.4, obstacleHeight: s * 0.8, crashWeight: 0.4, type: "prop" }; return mesh;
  };
  const makePhoneBooth = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(s * 0.8, s * 2.2, s * 0.8), new THREE.MeshStandardMaterial({ color: 0xaa2222 })); mesh.position.y = s * 1.1;
    mesh.userData = { obstacleRadius: s * 0.6, obstacleHeight: s * 2.2, crashWeight: 1.0, type: "prop" }; return mesh;
  };
  const makeNewsstand = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, s * 1.8, s * 1.2), new THREE.MeshStandardMaterial({ color: 0x225533 })); mesh.position.y = s * 0.9;
    mesh.userData = { obstacleRadius: s * 1, obstacleHeight: s * 1.8, crashWeight: 1.5, type: "prop" }; return mesh;
  };
  const makeFireHydrant = (s, rng) => makeTrashCan(s * 0.6, rng); // Re-color logic implies scaling
  const makeStreetlightPole = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.1, s * 4), new THREE.MeshStandardMaterial({ color: 0x555555 })); mesh.position.y = s * 2;
    mesh.userData = { obstacleRadius: s * 0.2, obstacleHeight: s * 4, crashWeight: 1.0, type: "prop" }; return mesh;
  };
  const makeTrafficCone = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.ConeGeometry(s * 0.25, s * 0.6), new THREE.MeshStandardMaterial({ color: 0xff6600 })); mesh.position.y = s * 0.3;
    mesh.userData = { obstacleRadius: s * 0.3, obstacleHeight: s * 0.6, crashWeight: 0.2, type: "prop" }; return mesh;
  };
  const makeConcreteBarrier = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 0.8, s * 0.5), new THREE.MeshStandardMaterial({ color: 0xaaaaaa })); mesh.position.y = s * 0.4;
    mesh.userData = { obstacleRadius: s * 1.2, obstacleHeight: s * 0.8, crashWeight: 2.0, type: "prop" }; return mesh;
  };
  const makeManholeCover = (s, rng) => makeFrozenPond(s * 0.4, rng);
  const makeBillboard = (s, rng) => {
    const g = new THREE.Group(); const post = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 5), new THREE.MeshStandardMaterial({ color: 0x333333 })); post.position.y = s * 2.5;
    const board = new THREE.Mesh(new THREE.BoxGeometry(s * 4, s * 2, s * 0.2), new THREE.MeshStandardMaterial({ color: 0xcccccc })); board.position.y = s * 4;
    g.add(post, board); g.userData = { obstacleRadius: s * 2, obstacleHeight: s * 5, crashWeight: 2.0, type: "prop" }; return g;
  };
  const makeBusStop = (s, rng) => makeTatteredTent(s * 0.8, rng);
  const makeScaffolding = (s, rng) => makeDesertWarningSign(s * 2, rng);
  const makeACUnit = (s, rng) => makeTrashCan(s, rng);
  const makeDumpster = (s, rng) => makeNewsstand(s * 0.8, rng);

  // --- EXPANSION: ALPINE (Map 5) ---
  const makeGiantIceCrystal = (s, rng) => { const c = createIceCrystalModel(s * 2, rng); c.position.y = s * 2; return c; };
  const makeSmallCrystalCluster = (s, rng) => { const g = new THREE.Group(); for (let i = 0; i < 3; i++) { const c = createIceCrystalModel(s * 0.5, rng); c.position.set((rng() - 0.5) * s, s * 0.5, (rng() - 0.5) * s); g.add(c); } g.userData = { obstacleRadius: s, obstacleHeight: s, crashWeight: 0.8, type: "prop" }; return g; };
  const makeCrystalDebris = (s, rng) => makePebbleCluster(s, rng);
  const makeGlowingIceVein = (s, rng) => { const r = createRockModel(s * 1.5, false, rng); r.material.color.setHex(0x66ffff); r.material.emissive.setHex(0x2288cc); r.scale.set(1.5, 0.2, 0.5); return r; };
  const makeCrystalMonolith = (s, rng) => createNeonObeliskModel(s, rng);
  const makeAlpineSpire = (s, rng) => { const r = createRockModel(s, false, rng); r.scale.set(0.4, 4.0, 0.4); r.position.y = s * 3; return r; };
  const makeCrevasseLedge = (s, rng) => { const r = createRockModel(s * 2, false, rng); r.scale.set(1.5, 0.2, 1.5); r.position.y = s * 0.5; return r; };
  const makeSnowBridge = (s, rng) => makeArchStone(s, rng);
  const makeAvalancheDebris = (s, rng) => makePebbleCluster(s * 2, rng);
  const makePermafrostRock = (s, rng) => createRockModel(s * 1.5, false, rng);
  const makeAlpineScrub = (s, rng) => makeTallGrass(s, rng);
  const makeFrozenLichen = (s, rng) => { const r = createRockModel(s, false, rng); r.material.color.setHex(0x667755); r.scale.set(1, 0.1, 1); return r; };
  const makeWindSweptPine = (s, rng) => { const t = createTreeModel(s, rng, false); t.rotation.x = Math.PI / 6; return t; };
  const makeIceFlower = (s, rng) => makeMushroom(s, rng);
  const makeDeadRootBall = (s, rng) => makeStump(s, rng);
  const makeMountaineerCamp = (s, rng) => makeTatteredTent(s * 0.6, rng);
  const makeFrozenFlag = (s, rng) => makeDesertWarningSign(s, rng);
  const makeRustyPiton = (s, rng) => makeStreetlightPole(s * 0.3, rng);
  const makeBrokenIceAxe = (s, rng) => makeBrokenCart(s * 0.5, rng);
  const makeFlareStick = (s, rng) => makeMushroom(s * 0.3, rng);

  // --- EXPANSION: LAVA (Map 6) ---
  const makeMagmaVent = (s, rng) => createMagmaVentModel(s, rng);
  const makeLavaPool = (s, rng) => { const r = createRockModel(s * 1.5, true, rng); r.material.color.setHex(0xff3300); r.material.emissive.setHex(0xaa1100); r.scale.set(2, 0.1, 2); return r; };
  const makeCoolingCrust = (s, rng) => { const r = createRockModel(s, true, rng); r.material.color.setHex(0x222222); r.scale.set(1.5, 0.2, 1.5); return r; };
  const makeBasaltColumn = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.4, s * 0.4, s * 3, 6), new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.9 }));
    mesh.position.y = s * 1.5; mesh.userData = { obstacleRadius: s * 0.5, obstacleHeight: s * 3, crashWeight: 2.0, type: "prop" }; return mesh;
  };
  const makeObsidianShard = (s, rng) => makeGiantIceCrystal(s * 0.6, rng);
  const makePumiceBoulder = (s, rng) => { const r = createRockModel(s * 1.2, true, rng); r.material.color.setHex(0x776655); return r; };
  const makeCharredRock = (s, rng) => { const r = createRockModel(s, true, rng); r.material.color.setHex(0x111111); return r; };
  const makeHeatSpire = (s, rng) => makeAlpineSpire(s, rng);
  const makeAshPile = (s, rng) => makePebbleCluster(s * 1.5, rng);
  const makeBrimstoneCluster = (s, rng) => makeSmallCrystalCluster(s, rng);
  const makeSmokeGeyser = (s, rng) => makeMagmaVent(s * 0.5, rng);
  const makeBurningDeadwood = (s, rng) => makeDeadFrostedTree(s, rng);
  const makeEmbersEmitter = (s, rng) => makeSmallCrystalCluster(s * 0.2, rng);
  const makeCalcifiedRoot = (s, rng) => makeWindSweptPine(s, rng);
  const makeLavaTube = (s, rng) => makeArchStone(s * 1.5, rng);
  const makeMeltedStructure = (s, rng) => makeBrokenCart(s * 1.5, rng);
  const makeWarningBeacon = (s, rng) => makeFireHydrant(s, rng);
  const makeHeatShieldScrap = (s, rng) => makeConcreteBarrier(s, rng);
  const makeAbandonedDrill = (s, rng) => makeCityVan(s, rng);
  const makeHazardSign = (s, rng) => makeDesertWarningSign(s * 1.2, rng);

  // Expose specific maps arrays
  const getForestModels = () => [makeBirch, makeOak, makePine, makeWillow, makeStump, makeMossyBoulder, makeSlateSheet, makePebbleCluster, makeOverhangRock, makeArchStone, makeFern, makeBush, makeTallGrass, makeMushroom, makeBerryShrub, makeWoodenFence, makeCabinPiece, makeBrokenCart, makeWell, makeStoneRuins];
  const getDesertModels = () => [makeSaguaro, makeBarrelCactus, makePricklyPear, makeDriedHusk, makeAloe, makeSandstonePillar, makeCanyonArch, makeTumbleweed, makeFlatShale, makePebbleCluster, makeStoneRuins, makeDesertObelisk, makeCrudeAltar, makeCrackedPottery, makePebbleCluster, makeTatteredTent, makeOak, makeDryWell, makeMushroom, makeDesertWarningSign];
  const getSnowModels = () => [makeIceShards, makeGlacierBlock, makeFrozenPond, makeIcicleCluster, makeSnowDrift, makeSnowPine, makeDeadFrostedTree, makeFrozenBush, makeSnowStump, makeBareBranches, makeFrostBoulder, makeIceCaveEntrance, makeSnowSlate, makeSmoothRiverRock, makeJaggedPeak, makeSnowman, makeBrokenSkiChair, makeCabinChimney, makeWarningTape, makeFrozenBarrel];
  const getCityModels = () => [makeCitySedan, makeCityVan, makeAbandonedBus, makeBikeRack, makeScooter, makeBench, makeTrashCan, makeMailbox, makePhoneBooth, makeNewsstand, makeFireHydrant, makeStreetlightPole, makeTrafficCone, makeConcreteBarrier, makeManholeCover, makeBillboard, makeBusStop, makeScaffolding, makeACUnit, makeDumpster];
  const getAlpineModels = () => [makeGiantIceCrystal, makeSmallCrystalCluster, makeCrystalDebris, makeGlowingIceVein, makeCrystalMonolith, makeAlpineSpire, makeCrevasseLedge, makeSnowBridge, makeAvalancheDebris, makePermafrostRock, makeAlpineScrub, makeFrozenLichen, makeWindSweptPine, makeIceFlower, makeDeadRootBall, makeMountaineerCamp, makeFrozenFlag, makeRustyPiton, makeBrokenIceAxe, makeFlareStick];
  const getLavaModels = () => [makeMagmaVent, makeLavaPool, makeCoolingCrust, makeBasaltColumn, makeObsidianShard, makePumiceBoulder, makeCharredRock, makeHeatSpire, makeAshPile, makeBrimstoneCluster, makeSmokeGeyser, makeBurningDeadwood, makeEmbersEmitter, makeCalcifiedRoot, makeLavaTube, makeMeltedStructure, makeWarningBeacon, makeHeatShieldScrap, makeAbandonedDrill, makeHazardSign];

  // --- EXPANSION: NEON (Map 7) ---
  const makeNeonObelisk = (s, rng) => createNeonObeliskModel(s, rng);
  const makeGlowingArch = (s, rng) => {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0x2288ff, emissive: 0x1144aa, emissiveIntensity: 0.5 });
    const left = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 4), mat); left.position.set(-s * 2, s * 2, 0);
    const right = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 4), mat); right.position.set(s * 2, s * 2, 0);
    const top = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 4), mat); top.position.set(0, s * 4, 0); top.rotation.z = Math.PI / 2;
    g.add(left, right, top); g.userData = { obstacleRadius: s * 2.5, obstacleHeight: s * 4, crashWeight: 1.0, type: "prop" }; return g;
  };
  const makeHollowCube = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 2, s * 2), new THREE.MeshStandardMaterial({ color: 0xff44aa, wireframe: true }));
    mesh.position.y = s * 1; mesh.userData = { obstacleRadius: s * 1.5, obstacleHeight: s * 2, crashWeight: 0.2, type: "prop" }; return mesh;
  };
  const makeTechSpire = (s, rng) => { const r = createRuinPillarModel(s, rng); r.children[1].material.color.setHex(0x00ffff); return r; };
  const makeEnergyBarrier = (s, rng) => {
    const g = new THREE.Group();
    const mat = new THREE.MeshStandardMaterial({ color: 0xffdd00, emissive: 0xaa8800, transparent: true, opacity: 0.5 });
    const barrier = new THREE.Mesh(new THREE.BoxGeometry(s * 3, s * 1.5, s * 0.1), mat); barrier.position.y = s * 0.75;
    g.add(barrier); g.userData = { obstacleRadius: s * 1.5, obstacleHeight: s * 1.5, crashWeight: 0.1, type: "prop" }; return g;
  };
  const makeDataStream = (s, rng) => makeFrozenPond(s * 0.5, rng);
  const makeCircuitPattern = (s, rng) => makeSlateSheet(s, rng);
  const makeHexTile = (s, rng) => { const r = createRockModel(s, false, rng); r.scale.set(1.5, 0.1, 1.5); return r; };
  const makeGlowingCrack = (s, rng) => makeLavaPool(s * 0.5, rng);
  const makeHoloProjector = (s, rng) => makeTrashCan(s, rng);
  const makeFiberTree = (s, rng) => { const t = createTreeModel(s, rng, false); t.children[1].material.emissive.setHex(0x221144); return t; };
  const makeNeonFern = (s, rng) => makeFern(s, rng);
  const makePlasmaBush = (s, rng) => { const b = makeBush(s, rng); b.children[0].material.color.setHex(0xff00ff); return b; };
  const makeCrystalGrass = (s, rng) => makeSmallCrystalCluster(s, rng);
  const makeEnergyNode = (s, rng) => makeMushroom(s, rng);
  const makeServerRack = (s, rng) => makePhoneBooth(s * 1.2, rng);
  const makeHoverboard = (s, rng) => makeScooter(s, rng);
  const makeCyberDeck = (s, rng) => makeMailbox(s, rng);
  const makeWarningHolo = (s, rng) => makeDesertWarningSign(s, rng);
  const makeDataTerminal = (s, rng) => makeNewsstand(s, rng);

  // --- EXPANSION: HARBOUR & OVERGROWN RUINS (Map 8) ---
  const makeContainer = (s, rng) => {
    const g = new THREE.Group();
    // 5x complexity: 5 colors, metallic frame, corrugated sides, corner castings
    const colors = [0xba4a22, 0x24587a, 0x4a6a3b, 0x755a3c, 0xaaaaaa];
    const baseColor = colors[Math.floor(rng() * colors.length)];
    const mat = new THREE.MeshStandardMaterial({ color: baseColor, roughness: 0.85 });
    const frameMat = new THREE.MeshStandardMaterial({ color: baseColor, roughness: 0.7, metalness: 0.2 });
    const detailMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.9, metalness: 0.5 }); // Corner castings

    const body = new THREE.Mesh(new THREE.BoxGeometry(s * 1.9, s * 1.9, s * 4.9), mat);
    body.position.y = s * 1.0;
    g.add(body);

    // Frames (Edging)
    const cw = s * 2.0; const ch = s * 2.0; const cd = s * 5.0; const fT = s * 0.15;

    for (const x of [-cw / 2 + fT / 2, cw / 2 - fT / 2]) {
      for (const z of [-cd / 2 + fT / 2, cd / 2 - fT / 2]) {
        const post = new THREE.Mesh(new THREE.BoxGeometry(fT, ch, fT), frameMat);
        post.position.set(x, s * 1.0, z);
        g.add(post);

        const castingT = new THREE.Mesh(new THREE.BoxGeometry(fT * 1.1, fT * 1.1, fT * 1.1), detailMat);
        castingT.position.set(x, s * 1.0 + ch / 2 - fT / 2, z);
        const castingB = new THREE.Mesh(new THREE.BoxGeometry(fT * 1.1, fT * 1.1, fT * 1.1), detailMat);
        castingB.position.set(x, s * 1.0 - ch / 2 + fT / 2, z);
        g.add(castingT, castingB);
      }
    }

    for (const x of [-cw / 2 + fT / 2, cw / 2 - fT / 2]) {
      for (const y of [s * 1.0 + ch / 2 - fT / 2, s * 1.0 - ch / 2 + fT / 2]) {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(fT, fT, cd - fT * 2), frameMat);
        rail.position.set(x, y, 0);
        g.add(rail);
      }
    }
    for (const z of [-cd / 2 + fT / 2, cd / 2 - fT / 2]) {
      for (const y of [s * 1.0 + ch / 2 - fT / 2, s * 1.0 - ch / 2 + fT / 2]) {
        const rail = new THREE.Mesh(new THREE.BoxGeometry(cw - fT * 2, fT, fT), frameMat);
        rail.position.set(0, y, z);
        g.add(rail);
      }
    }

    const numCorrugations = 12;
    for (const x of [-cw / 2, cw / 2]) {
      for (let i = 0; i < numCorrugations; i++) {
        const z = -cd / 2 + fT * 1.5 + (i * (cd - fT * 3) / (numCorrugations - 1));
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(s * 0.05, ch - fT * 2, s * 0.15), frameMat);
        stripe.position.set(x, s * 1.0, z);
        g.add(stripe);
      }
    }

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 2, crashWeight: 5.0, type: "prop" };
    return g;
  };
  const makeContainerStack = (s, rng) => {
    const g = new THREE.Group();
    const c1 = makeContainer(s, rng); c1.position.y = 0;
    const c2 = makeContainer(s, rng); c2.position.y = s * 2.0;
    g.add(c1, c2); g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 4, crashWeight: 10.0, type: "prop" }; return g;
  };
  // --- Shared materials for cranes (hoisted for draw-call batching) ---
  const craneMat_yellow = new THREE.MeshStandardMaterial({ color: 0xddaa22, roughness: 0.6, metalness: 0.5 });
  const craneMat_red = new THREE.MeshStandardMaterial({ color: 0xcc3322, roughness: 0.6, metalness: 0.4 });
  const craneMat_tyellow = new THREE.MeshStandardMaterial({ color: 0xffcc00, roughness: 0.6, metalness: 0.3 });
  const craneMat_dark = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8, metalness: 0.7 });
  const craneMat_white = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.5, metalness: 0.2 });
  const craneMat_cab = new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.4 });
  const craneMat_glass = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.8 });
  const craneMat_cabWhite = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.4 });
  const craneMat_twhite = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
  const craneMat_tdark = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.8, metalness: 0.8 });

  // --- Shared materials for ships (hoisted for draw-call batching) ---
  const shipMat_hullDark = new THREE.MeshStandardMaterial({ color: 0x11263d, roughness: 0.7 });
  const shipMat_deck = new THREE.MeshStandardMaterial({ color: 0x334433, roughness: 0.9 });
  const shipMat_white = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.5 });
  const shipMat_red = new THREE.MeshStandardMaterial({ color: 0xaa2222, roughness: 0.6 });
  const shipMat_glass = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.7 });
  const shipMat_hullWhite = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.5 });
  const shipMat_lowerHull = new THREE.MeshStandardMaterial({ color: 0x111133, roughness: 0.6 });
  const shipMat_deckWood = new THREE.MeshStandardMaterial({ color: 0xd2b48c, roughness: 0.8 });
  const shipMat_poolBlue = new THREE.MeshStandardMaterial({ color: 0x00aaff, roughness: 0.2 });
  const shipMat_glassCruise = new THREE.MeshStandardMaterial({ color: 0x44ccff, roughness: 0.1, metalness: 0.8, transparent: true, opacity: 0.7 });
  const shipMat_speedHull = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, metalness: 0.1 });
  const shipMat_speedTrim = new THREE.MeshStandardMaterial({ color: 0xee2222, roughness: 0.4 });
  const shipMat_speedGlass = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1, metalness: 0.8, transparent: true, opacity: 0.6 });
  const shipMat_interior = new THREE.MeshStandardMaterial({ color: 0xddccaa, roughness: 0.9 });
  const shipMat_engine = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.6, metalness: 0.8 });
  const shipMat_sailHull = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
  const shipMat_mast = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.6, metalness: 0.5 });
  const shipMat_sail = new THREE.MeshStandardMaterial({ color: 0xfafafa, roughness: 0.9, side: THREE.DoubleSide });
  const shipMat_yachtHull = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.2, metalness: 0.2 });
  const shipMat_yachtDeck = new THREE.MeshStandardMaterial({ color: 0xddcbaa, roughness: 0.7 });
  const shipMat_yachtGlass = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.8 });
  const shipMat_yachtDark = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5 });

  // --- Shared materials for vehicles (hoisted for draw-call batching) ---
  const vehMat_yellowBody = new THREE.MeshStandardMaterial({ color: 0xeebb00, roughness: 0.6, metalness: 0.2 });
  const vehMat_dark = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.8 });
  const vehMat_yellowCab = new THREE.MeshStandardMaterial({ color: 0xeebb00, roughness: 0.5, metalness: 0.3 });
  const vehMat_bedGrey = new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.7, metalness: 0.6 });
  const vehMat_chassis = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.9 });
  const vehMat_bulldozerBody = new THREE.MeshStandardMaterial({ color: 0xddaa00, roughness: 0.7, metalness: 0.3 });
  const vehMat_blueCab = new THREE.MeshStandardMaterial({ color: 0x2255aa, roughness: 0.5, metalness: 0.4 });
  const vehMat_bedDark = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.8 });
  const vehMat_redCab = new THREE.MeshStandardMaterial({ color: 0xaa2222, roughness: 0.5, metalness: 0.3 });
  const vehMat_cargoWhite = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.7 });
  const vehMat_mixerCab = new THREE.MeshStandardMaterial({ color: 0xeebb00, roughness: 0.5 });
  const vehMat_drumWhite = new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.6, metalness: 0.2 });
  const vehMat_mixerChassis = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.9 });
  const vehMat_mixerAccent = new THREE.MeshStandardMaterial({ color: 0x2255aa, roughness: 0.6 });
  const vehMat_orangeBody = new THREE.MeshStandardMaterial({ color: 0xff7700, roughness: 0.6, metalness: 0.1 });
  const vehMat_orangeDark = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });

  const makeCraneBase = (s, rng) => {
    const g = new THREE.Group();
    const mainMat = craneMat_yellow;
    const darkMat = craneMat_dark;
    const cabMat = craneMat_cabWhite;
    const glassMat = craneMat_glass;

    // --- Crawler Base ---
    const baseGrp = new THREE.Group();
    const chassis = new THREE.Mesh(new THREE.BoxGeometry(s * 3.5, s * 0.8, s * 4.0), darkMat);
    chassis.position.y = s * 1.5;

    // Tracks
    const trackL = createTrack(s, s * 6.5, s * 1.6, s * 1.2);
    trackL.position.set(-s * 2.5, s * 1.0, 0);
    const trackR = createTrack(s, s * 6.5, s * 1.6, s * 1.2);
    trackR.position.set(s * 2.5, s * 1.0, 0);
    baseGrp.add(chassis, trackL, trackR);

    // Slewing ring
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.5, s * 1.5, s * 0.4, 16), darkMat);
    ring.position.y = s * 2.1;
    baseGrp.add(ring);
    g.add(baseGrp);

    // --- Upper Superstructure ---
    const upperGrp = new THREE.Group();
    upperGrp.position.y = s * 2.3;
    upperGrp.rotation.y = rng() * Math.PI * 2; // Random rotation

    // Deck
    const deck = new THREE.Mesh(new THREE.BoxGeometry(s * 3.8, s * 0.6, s * 6.0), mainMat);
    deck.position.set(0, s * 0.3, s * 1.0);

    // Counterweights (rear)
    const cw = new THREE.Mesh(new THREE.BoxGeometry(s * 3.8, s * 2.5, s * 1.5), darkMat);
    cw.position.set(0, s * 1.8, s * 3.2);

    // Engine housing
    const engine = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 1.8, s * 3.0), mainMat);
    engine.position.set(0, s * 1.5, s * 1.0);

    // Exhaust pipe
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.1, s * 1.0), darkMat);
    exhaust.position.set(s * 0.8, s * 2.8, s * 1.5);

    upperGrp.add(deck, cw, engine, exhaust);

    // Cabin (front left)
    const cabGrp = new THREE.Group();
    const cabBody = new THREE.Mesh(new THREE.BoxGeometry(s * 1.4, s * 1.8, s * 1.8), cabMat);
    cabBody.position.set(-s * 1.6, s * 1.5, -s * 1.5);
    const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, s * 1.0, s * 1.9), glassMat);
    cabGlass.position.set(-s * 1.6, s * 1.6, -s * 1.5);
    cabGrp.add(cabBody, cabGlass);
    upperGrp.add(cabGrp);

    // --- Lattice Boom ---
    const boomGrp = new THREE.Group();
    boomGrp.position.set(0, s * 1.5, -s * 1.0);
    const boomAngle = Math.PI / 4 + rng() * 0.2; // roughly 45 to 55 degrees up
    boomGrp.rotation.x = -boomAngle;

    const boomLen = s * 20.0;
    const boomW = s * 1.2;

    // Main chords
    for (const bx of [-boomW / 2, boomW / 2]) {
      for (const by of [-boomW / 2, boomW / 2]) {
        const chord = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.1, boomLen, 6), mainMat);
        chord.rotation.x = Math.PI / 2;
        chord.position.set(bx, by, boomLen / 2);
        boomGrp.add(chord);
      }
    }

    // Zig-zag lacing
    const lacingCount = 12;
    const lacingStep = boomLen / lacingCount;
    for (let i = 0; i < lacingCount; i++) {
      const zCenter = i * lacingStep + lacingStep / 2;
      for (const by of [-boomW / 2, boomW / 2]) {
        const lace = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, Math.hypot(boomW, lacingStep)), mainMat);
        lace.position.set(0, by, zCenter);
        lace.rotation.x = Math.PI / 2;
        lace.rotation.z = (i % 2 === 0 ? 1 : -1) * Math.atan2(lacingStep, boomW);
        boomGrp.add(lace);
      }
      for (const bx of [-boomW / 2, boomW / 2]) {
        const lace = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, Math.hypot(boomW, lacingStep)), mainMat);
        lace.position.set(bx, 0, zCenter);
        lace.rotation.x = Math.PI / 2;
        lace.rotation.y = (i % 2 === 0 ? 1 : -1) * Math.atan2(lacingStep, boomW);
        boomGrp.add(lace);
      }
      const crossH = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, boomW), mainMat);
      crossH.position.set(0, boomW / 2, i * lacingStep); crossH.rotation.z = Math.PI / 2;
      const crossH2 = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, boomW), mainMat);
      crossH2.position.set(0, -boomW / 2, i * lacingStep); crossH2.rotation.z = Math.PI / 2;
      const crossV = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, boomW), mainMat);
      crossV.position.set(boomW / 2, 0, i * lacingStep);
      const crossV2 = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, boomW), mainMat);
      crossV2.position.set(-boomW / 2, 0, i * lacingStep);
      boomGrp.add(crossH, crossH2, crossV, crossV2);
    }
    upperGrp.add(boomGrp);

    // --- Gantry / A-Frame ---
    const aFrame = new THREE.Group();
    aFrame.position.set(0, s * 1.5, s * 1.5);
    const aLegL = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 5), darkMat);
    aLegL.position.set(-s * 1.0, s * 2.0, 0); aLegL.rotation.z = 0.2;
    const aLegR = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 5), darkMat);
    aLegR.position.set(s * 1.0, s * 2.0, 0); aLegR.rotation.z = -0.2;
    const aTop = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 3), darkMat);
    aTop.position.set(0, s * 4.2, 0); aTop.rotation.z = Math.PI / 2;
    aFrame.add(aLegL, aLegR, aTop);
    upperGrp.add(aFrame);

    // --- Cables & Hook ---
    const tipY = s * 1.5 + Math.sin(boomAngle) * boomLen;
    const tipZ = -s * 1.0 + Math.cos(boomAngle) * boomLen; // Z is positive in boom rotation

    // Pendant cables (A-Frame to Boom tip)
    const aFrameTipY = s * 1.5 + s * 4.2;
    const aFrameTipZ = s * 1.5;
    const pendantLen = Math.hypot(tipY - aFrameTipY, tipZ - aFrameTipZ);

    for (const px of [-boomW / 2 + s * 0.2, boomW / 2 - s * 0.2]) {
      const pendant = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.05, pendantLen), darkMat);
      pendant.position.set(px, (tipY + aFrameTipY) / 2, (tipZ + aFrameTipZ) / 2);

      // Calculate rotation accurately. The cylinder by default points along Y axis.
      // We need it to point from A-frame top to Boom tip.
      // dz / dy
      const dy = tipY - aFrameTipY;
      const dz = tipZ - aFrameTipZ;
      pendant.rotation.x = Math.atan2(dz, dy);
      upperGrp.add(pendant);
    }
    // Hoist Cable
    const dropLen = s * 12.0;
    const hoist = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.05, dropLen), darkMat);
    hoist.position.set(0, tipY - dropLen / 2, tipZ);
    upperGrp.add(hoist);

    // Hook Block
    const hookGrp = new THREE.Group();
    hookGrp.position.set(0, tipY - dropLen, tipZ);
    const hBlock = new THREE.Mesh(new THREE.BoxGeometry(s * 1.2, s * 0.8, s * 0.6), mainMat);
    const hHook = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 1.2), darkMat);
    hHook.position.y = -s * 0.8;
    hookGrp.add(hBlock, hHook);
    upperGrp.add(hookGrp);

    g.add(upperGrp);

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 4, obstacleHeight: s * 8, crashWeight: 15.0, type: "prop" };
    return g;
  };

  const makeHeavyGantryCrane = (s, rng) => {
    const g = new THREE.Group();
    const mainMat = craneMat_red;
    const whiteMat = craneMat_white;
    const darkMat = craneMat_dark;
    const cabMat = craneMat_cab;
    const glassMat = craneMat_glass;

    const span = s * 6.0;
    const height = s * 8.0;

    // A-Frame Legs
    for (const lx of [-span, span]) {
      // Base bogeys
      const base1 = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 0.6, s * 0.8), darkMat); base1.position.set(lx, s * 0.3, -s * 1.2);
      const base2 = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 0.6, s * 0.8), darkMat); base2.position.set(lx, s * 0.3, s * 1.2);
      const tieTie = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 0.4, s * 2.4), mainMat); tieTie.position.set(lx, s * 0.8, 0);

      const leg1 = new THREE.Mesh(new THREE.BoxGeometry(s * 0.8, height * 1.02, s * 0.8), mainMat);
      leg1.position.set(lx, height / 2 + s * 1, -s * 1.2); leg1.rotation.x = -0.1;
      const leg2 = new THREE.Mesh(new THREE.BoxGeometry(s * 0.8, height * 1.02, s * 0.8), mainMat);
      leg2.position.set(lx, height / 2 + s * 1, s * 1.2); leg2.rotation.x = 0.1;

      // Cross bracing
      for (let y = s * 3; y < height; y += s * 2) {
        const brace = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 0.6, s * 2.4), mainMat);
        brace.position.set(lx, y, 0);
        g.add(brace);
      }
      g.add(base1, base2, tieTie, leg1, leg2);
    }

    // Dual Main Girders
    const girder1 = new THREE.Mesh(new THREE.BoxGeometry(span * 2 + s * 4, s * 1.2, s * 0.8), whiteMat);
    girder1.position.set(0, height, -s * 0.6);
    const girder2 = new THREE.Mesh(new THREE.BoxGeometry(span * 2 + s * 4, s * 1.2, s * 0.8), whiteMat);
    girder2.position.set(0, height, s * 0.6);
    g.add(girder1, girder2);

    // Top beams connecting girders
    for (let x = -span * 1.2; x <= span * 1.2; x += s * 1.5) {
      const topTie = new THREE.Mesh(new THREE.BoxGeometry(s * 0.4, s * 0.4, s * 1.2), mainMat);
      topTie.position.set(x, height + s * 0.8, 0);
      g.add(topTie);
    }

    // Machinery House / Hoist
    const hoist = new THREE.Mesh(new THREE.BoxGeometry(s * 3, s * 2, s * 2.2), darkMat);
    hoist.position.set(s * 2, height + s * 1.6, 0);
    g.add(hoist);

    // Operator Cabin
    const cabinGrp = new THREE.Group();
    const cabinBody = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, s * 1.5, s * 1.5), cabMat);
    const windowFront = new THREE.Mesh(new THREE.BoxGeometry(s * 1.6, s * 1.0, s * 1.6), glassMat);
    cabinGrp.add(cabinBody, windowFront);
    cabinGrp.position.set(-s * 3, height - s * 1.4, s * 1.2);
    g.add(cabinGrp);

    // Cables & Hook
    const hoistPos = s * 2;
    for (const z of [-s * 0.4, s * 0.4]) {
      const cable = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.04, s * 0.04, s * 5), darkMat);
      cable.position.set(hoistPos, height - s * 2.5, z);
      g.add(cable);
    }
    const hookBlock = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, s * 0.5, s * 1.2), mainMat);
    hookBlock.position.set(hoistPos, height - s * 5, 0);
    const hook = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 1), darkMat);
    hook.position.set(hoistPos, height - s * 5.7, 0);
    g.add(hookBlock, hook);

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: span, obstacleHeight: height + s * 2, crashWeight: 15.0, type: "prop" };
    return g;
  };

  const makeTowerCrane = (s, rng) => {
    const g = new THREE.Group();
    const mainMat = craneMat_tyellow;
    const darkMat = craneMat_tdark;
    const whiteMat = craneMat_twhite;
    const glassMat = craneMat_glass;

    const height = s * 12.0;
    const jibLength = s * 14.0;
    const counterJibLength = s * 5.0;

    // Pedestal Base
    const base = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.2, s * 1.5, s * 1.5, 8), darkMat);
    base.position.set(0, s * 0.75, 0);
    g.add(base);

    // Mast
    const mast = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, height, s * 1.5), mainMat);
    mast.position.set(0, height / 2 + s * 1.5, 0);
    g.add(mast);

    const slewingRing = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.6, s * 1.6, s * 0.8, 16), darkMat);
    slewingRing.position.set(0, height + s * 1.9, 0);
    g.add(slewingRing);

    // Upper section
    const upperGrp = new THREE.Group();
    upperGrp.position.set(0, height + s * 2.3, 0);

    // Operator Cabin
    const cabinBody = new THREE.Mesh(new THREE.BoxGeometry(s * 1.2, s * 1.8, s * 1.5), whiteMat);
    cabinBody.position.set(s * 1.2, s * 0.9, s * 1.2);
    const cabinGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 1.3, s * 1.0, s * 1.6), glassMat);
    cabinGlass.position.set(s * 1.2, s * 1.2, s * 1.2);
    upperGrp.add(cabinBody, cabinGlass);

    // Jib (Front Boom)
    const jib = new THREE.Mesh(new THREE.BoxGeometry(jibLength, s * 0.8, s * 0.8), mainMat);
    jib.position.set(jibLength / 2 + s * 0.75, s * 1.5, 0);
    upperGrp.add(jib);

    // Counter Jib
    const counterJib = new THREE.Mesh(new THREE.BoxGeometry(counterJibLength, s * 0.8, s * 0.8), mainMat);
    counterJib.position.set(-counterJibLength / 2 - s * 0.75, s * 1.5, 0);
    upperGrp.add(counterJib);

    // Counterweights
    const counterWeight = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 1.5, s * 1.8), darkMat);
    counterWeight.position.set(-counterJibLength + s * 0.5, s * 1.5, 0);
    upperGrp.add(counterWeight);

    // Apex (A-Frame)
    const apexFront = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 3.5), mainMat);
    apexFront.position.set(s * 0.5, s * 3.6, 0);
    apexFront.rotation.z = -0.3;
    const apexBack = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 3.5), mainMat);
    apexBack.position.set(-s * 0.5, s * 3.6, 0);
    apexBack.rotation.z = 0.3;
    upperGrp.add(apexFront, apexBack);

    // Tension Cables
    const cableFront = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.05, jibLength * 0.6), darkMat);
    cableFront.position.set(jibLength * 0.3, s * 3.5, 0);
    cableFront.rotation.z = Math.PI / 2 - 0.2;
    const cableBack = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.08, s * 0.08, counterJibLength), darkMat);
    cableBack.position.set(-counterJibLength / 2, s * 3.6, 0);
    cableBack.rotation.z = Math.PI / 2 + 0.3;
    upperGrp.add(cableFront, cableBack);

    // Trolley & Hook
    const trolleyDist = jibLength * (0.3 + rng() * 0.6); // Random position on jib
    const trolley = new THREE.Mesh(new THREE.BoxGeometry(s * 1.2, s * 0.6, s * 1.2), darkMat);
    trolley.position.set(s * 0.75 + trolleyDist, s * 1.0, 0);

    const dropLength = s * 4 + rng() * s * 4;
    const hoistCable = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.05, dropLength), darkMat);
    hoistCable.position.set(s * 0.75 + trolleyDist, s * 1.0 - dropLength / 2, 0);

    const hookBlock = new THREE.Mesh(new THREE.BoxGeometry(s * 0.8, s * 0.5, s * 0.8), mainMat);
    hookBlock.position.set(s * 0.75 + trolleyDist, s * 1.0 - dropLength, 0);
    upperGrp.add(trolley, hoistCable, hookBlock);

    // Add a slight random rotation to the upper part so they don't all face exactly forward
    upperGrp.rotation.y = rng() * Math.PI * 2;
    g.add(upperGrp);

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 1.5, obstacleHeight: height + s * 5, crashWeight: 10.0, type: "prop" };
    return g;
  };

  // --- Construction Machinery Models (5x Detail) ---
  const sharedWheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
  const sharedRimMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.5, metalness: 0.5 });
  const sharedGlassMat = new THREE.MeshStandardMaterial({ color: 0x112233, roughness: 0.1, metalness: 0.8, transparent: true, opacity: 0.7 });
  const sharedLightsMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, emissive: 0x552200, roughness: 0.2 });

  const createWheel = (s, radius, width) => {
    const wheelGrp = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 12), sharedWheelMat);
    tire.rotation.z = Math.PI / 2; // Flat faces out to the sides (X axis)
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.6, radius * 0.6, width * 1.05, 8), sharedRimMat);
    rim.rotation.z = Math.PI / 2;
    wheelGrp.add(tire, rim);
    return wheelGrp;
  };

  const createTrack = (s, length, height, width) => {
    const trackGrp = new THREE.Group();
    const treads = new THREE.Mesh(new THREE.BoxGeometry(width, height, length), sharedWheelMat);
    const wheels = new THREE.Mesh(new THREE.BoxGeometry(width * 1.05, height * 0.7, length * 0.8), sharedRimMat);
    trackGrp.add(treads, wheels);
    return trackGrp;
  };

  const makeExcavatorA = (s, rng) => {
    const g = new THREE.Group();
    const bodyMat = vehMat_yellowBody;
    const darkMat = vehMat_dark;

    // Undercarriage & Tracks
    const base = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 0.6, s * 3), darkMat); base.position.y = s * 0.8;
    const trackL = createTrack(s, s * 4.5, s * 1.0, s * 0.8); trackL.position.set(-s * 1.6, s * 0.5, 0);
    const trackR = createTrack(s, s * 4.5, s * 1.0, s * 0.8); trackR.position.set(s * 1.6, s * 0.5, 0);
    g.add(base, trackL, trackR);

    const upper = new THREE.Group();
    upper.position.set(0, s * 1.2, 0);
    upper.rotation.y = (rng() - 0.5) * Math.PI / 2; // Random pan

    const body = new THREE.Mesh(new THREE.BoxGeometry(s * 2.8, s * 1.5, s * 3.2), bodyMat); body.position.set(0, s * 0.75, s * 0.2);
    const engine = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 1.2, s * 1.5), darkMat); engine.position.set(0, s * 0.9, s * 2.2);
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.1, s * 1.5), darkMat); exhaust.position.set(s * 1, s * 2.0, s * 2.5);

    const cab = new THREE.Mesh(new THREE.BoxGeometry(s * 1.2, s * 1.8, s * 1.6), bodyMat); cab.position.set(-s * 0.8, s * 2.4, -s * 0.2);
    const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 1.1, s * 1.0, s * 1.7), sharedGlassMat); cabGlass.position.set(-s * 0.8, s * 2.5, -s * 0.2);

    // Arm
    const boom = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 4.5, s * 0.8), bodyMat); boom.position.set(s * 0.8, s * 2.5, -s * 1.5); boom.rotation.x = -0.5;
    const stick = new THREE.Mesh(new THREE.BoxGeometry(s * 0.5, s * 3.0, s * 0.6), bodyMat); stick.position.set(s * 0.8, s * 3.5, -s * 3.5); stick.rotation.x = 0.8;
    const bucket = new THREE.Mesh(new THREE.BoxGeometry(s * 1.0, s * 1.0, s * 1.0), darkMat); bucket.position.set(s * 0.8, s * 2.0, -s * 4.5); bucket.rotation.x = -0.4;

    // Cylinders
    const cyl1 = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 2), sharedRimMat); cyl1.position.set(s * 0.8, s * 1.5, -s * 0.5); cyl1.rotation.x = -0.3;

    upper.add(body, engine, exhaust, cab, cabGlass, boom, stick, bucket, cyl1);
    g.add(upper);

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 5, crashWeight: 10.0, type: "prop" }; return g;
  };

  const makeDumpTruck = (s, rng) => {
    const g = new THREE.Group();
    const cabMat = vehMat_yellowCab;
    const bedMat = vehMat_bedGrey;
    const chassisMat = vehMat_chassis;

    const chassis = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.5, s * 7.5), chassisMat); chassis.position.set(0, s * 1.0, 0);
    g.add(chassis);

    for (const z of [s * 2.5, -s * 1.5, -s * 2.8]) {
      for (const x of [s * 1.4, -s * 1.4]) {
        const w = createWheel(s, s * 0.8, s * 0.6);
        w.position.set(x, s * 0.8, z);
        g.add(w);
      }
    }

    const cabBody = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 2.0, s * 2.0), cabMat); cabBody.position.set(0, s * 2.2, s * 2.5);
    const cabTop = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 1.5, s * 1.5), cabMat); cabTop.position.set(0, s * 3.5, s * 2.2);
    const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 1.0, s * 1.6), sharedGlassMat); cabGlass.position.set(0, s * 3.5, s * 2.2);
    const grill = new THREE.Mesh(new THREE.BoxGeometry(s * 1.6, s * 1.2, s * 0.2), sharedRimMat); grill.position.set(0, s * 2.2, s * 3.5);
    const bumper = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 0.4, s * 0.4), chassisMat); bumper.position.set(0, s * 1.2, s * 3.6);
    g.add(cabBody, cabTop, cabGlass, grill, bumper);

    const bedGrp = new THREE.Group();
    bedGrp.position.set(0, s * 1.5, -s * 3.5);
    bedGrp.rotation.x = rng() > 0.7 ? -0.4 : 0; // Sometimes bed is raised

    const bedFloor = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 0.4, s * 5.5), bedMat); bedFloor.position.set(0, s * 0.2, s * 2.5);
    const bedL = new THREE.Mesh(new THREE.BoxGeometry(s * 0.2, s * 1.8, s * 5.5), bedMat); bedL.position.set(s * 1.2, s * 1.3, s * 2.5);
    const bedR = new THREE.Mesh(new THREE.BoxGeometry(s * 0.2, s * 1.8, s * 5.5), bedMat); bedR.position.set(-s * 1.2, s * 1.3, s * 2.5);
    const bedFront = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 2.0, s * 0.2), bedMat); bedFront.position.set(0, s * 1.4, s * 5.1);
    const bedBack = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 1.8, s * 0.2), bedMat); bedBack.position.set(0, s * 1.3, 0);
    // If raised, back flap opens
    if (bedGrp.rotation.x < 0) bedBack.rotation.x = 0.5;

    bedGrp.add(bedFloor, bedL, bedR, bedFront, bedBack);
    g.add(bedGrp);

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 4, crashWeight: 12.0, type: "prop" }; return g;
  };

  const makeBulldozer = (s, rng) => {
    const g = new THREE.Group();
    const bodyMat = vehMat_bulldozerBody;
    const darkMat = vehMat_chassis;

    const trackL = createTrack(s, s * 4.0, s * 1.2, s * 0.8); trackL.position.set(-s * 1.5, s * 0.6, 0);
    const trackR = createTrack(s, s * 4.0, s * 1.2, s * 0.8); trackR.position.set(s * 1.5, s * 0.6, 0);
    g.add(trackL, trackR);

    const body = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 1.5, s * 3.8), bodyMat); body.position.set(0, s * 1.5, 0);
    const engine = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 1.0, s * 1.8), bodyMat); engine.position.set(0, s * 2.5, s * 0.8);
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.1, s * 1.2), darkMat); exhaust.position.set(s * 0.6, s * 3.2, s * 1.2);

    const cab = new THREE.Mesh(new THREE.BoxGeometry(s * 2.0, s * 2.0, s * 1.8), bodyMat); cab.position.set(0, s * 2.8, -s * 0.8);
    const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 1.2, s * 1.9), sharedGlassMat); cabGlass.position.set(0, s * 2.9, -s * 0.8);
    const rollCage = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 2.2, s * 2.0), darkMat); rollCage.position.set(0, s * 2.8, -s * 0.8);

    // Front Blade
    const bladeArmL = new THREE.Mesh(new THREE.BoxGeometry(s * 0.3, s * 0.4, s * 2.5), bodyMat); bladeArmL.position.set(s * 1.8, s * 1.0, s * 1.5);
    const bladeArmR = new THREE.Mesh(new THREE.BoxGeometry(s * 0.3, s * 0.4, s * 2.5), bodyMat); bladeArmR.position.set(-s * 1.8, s * 1.0, s * 1.5);
    const blade = new THREE.Mesh(new THREE.BoxGeometry(s * 4.5, s * 2.0, s * 0.5), sharedRimMat); blade.position.set(0, s * 1.0, s * 2.8); blade.rotation.x = -0.2;

    // Rear Ripper
    const ripperArm = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, s * 0.4, s * 1.5), bodyMat); ripperArm.position.set(0, s * 1.0, -s * 2.4); ripperArm.rotation.x = 0.5;
    const ripperClaw = new THREE.Mesh(new THREE.BoxGeometry(s * 0.4, s * 1.5, s * 0.4), darkMat); ripperClaw.position.set(0, s * 0.5, -s * 3.0); ripperClaw.rotation.x = -0.3;

    g.add(body, engine, exhaust, cab, cabGlass, rollCage, bladeArmL, bladeArmR, blade, ripperArm, ripperClaw);

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 2.5, obstacleHeight: s * 4, crashWeight: 15.0, type: "prop" }; return g;
  };

  const makeLargeTruck = (s, rng) => {
    const g = new THREE.Group();
    const cabMat = vehMat_blueCab;
    const bedMat = vehMat_bedDark;
    const chassisMat = vehMat_chassis;

    const chassis = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.5, s * 9.0), chassisMat); chassis.position.set(0, s * 1.0, 0);
    g.add(chassis);

    for (const z of [s * 3.5, s * 1.5, -s * 2.5, -s * 3.8]) {
      for (const x of [s * 1.4, -s * 1.4]) {
        const w = createWheel(s, s * 0.8, s * 0.6); w.position.set(x, s * 0.8, z); g.add(w);
      }
    }

    // Cab
    const cabBody = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 2.5, s * 2.5), cabMat); cabBody.position.set(0, s * 2.5, s * 3.2);
    const cabWindDef = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 1.0, s * 1.8), new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.5, metalness: 0.2 })); cabWindDef.position.set(0, s * 4.0, s * 3.2);
    const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 2.7, s * 1.2, s * 2.0), sharedGlassMat); cabGlass.position.set(0, s * 3.0, s * 3.3);
    const grill = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 1.5, s * 0.2), sharedRimMat); grill.position.set(0, s * 2.0, s * 4.5);
    const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 3), sharedRimMat); exhaust.position.set(s * 1.4, s * 3.0, s * 1.8);
    g.add(cabBody, cabWindDef, cabGlass, grill, exhaust);

    // Flatbed
    const bed = new THREE.Mesh(new THREE.BoxGeometry(s * 2.8, s * 0.4, s * 6.5), bedMat); bed.position.set(0, s * 1.4, -s * 1.2);
    const headboard = new THREE.Mesh(new THREE.BoxGeometry(s * 2.8, s * 1.5, s * 0.4), bedMat); headboard.position.set(0, s * 2.2, s * 1.8);
    g.add(bed, headboard);

    // Random load
    if (rng() > 0.5) {
      const load = new THREE.Mesh(new THREE.BoxGeometry(s * 2.0, s * 1.5, s * 4.0), new THREE.MeshStandardMaterial({ color: 0x886644 }));
      load.position.set(0, s * 2.3, -s * 1.0);
      const tarp = new THREE.Mesh(new THREE.BoxGeometry(s * 2.1, s * 1.6, s * 4.1), new THREE.MeshStandardMaterial({ color: 0x22aa33, roughness: 0.9 }));
      tarp.position.set(0, s * 2.3, -s * 1.0);
      g.add(rng() > 0.5 ? load : tarp);
    }

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 3.5, obstacleHeight: s * 4, crashWeight: 14.0, type: "prop" }; return g;
  };

  const makeCargoTruck = (s, rng) => {
    const g = new THREE.Group();
    const cabMat = vehMat_redCab;
    const boxMat = vehMat_cargoWhite;
    const chassisMat = vehMat_chassis;

    const chassis = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.5, s * 8.0), chassisMat); chassis.position.set(0, s * 1.0, s * 0.5);
    g.add(chassis);

    for (const z of [s * 3.5, -s * 1.5, -s * 2.8]) {
      for (const x of [s * 1.4, -s * 1.4]) {
        const w = createWheel(s, s * 0.8, s * 0.6); w.position.set(x, s * 0.8, z); g.add(w);
      }
    }

    const cabBody = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 2.0, s * 2.0), cabMat); cabBody.position.set(0, s * 2.2, s * 3.0);
    const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 1.0, s * 1.6), sharedGlassMat); cabGlass.position.set(0, s * 3.0, s * 3.0);
    const airDeflector = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 1.0, s * 1.8), boxMat); airDeflector.position.set(0, s * 4.0, s * 3.0); airDeflector.rotation.x = 0.2;
    g.add(cabBody, cabGlass, airDeflector);

    const cargoBox = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 3.5, s * 5.5), boxMat); cargoBox.position.set(0, s * 3.0, -s * 1.0);
    const rearDoor = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 3.3, s * 0.2), sharedRimMat); rearDoor.position.set(0, s * 3.0, -s * 3.8);
    g.add(cargoBox, rearDoor);

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 3.5, obstacleHeight: s * 5, crashWeight: 12.0, type: "prop" }; return g;
  };

  const makeCementMixer = (s, rng) => {
    const g = new THREE.Group();
    const cabMat = vehMat_mixerCab;
    const drumMat = vehMat_drumWhite;
    const chassisMat = vehMat_mixerChassis;
    const accentMat = vehMat_mixerAccent;

    const chassis = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.5, s * 7.0), chassisMat); chassis.position.set(0, s * 1.0, 0);
    g.add(chassis);

    for (const z of [s * 2.5, -s * 1.2, -s * 2.5]) {
      for (const x of [s * 1.4, -s * 1.4]) {
        const w = createWheel(s, s * 0.8, s * 0.6); w.position.set(x, s * 0.8, z); g.add(w);
      }
    }

    const cabBody = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 2.0, s * 2.0), cabMat); cabBody.position.set(0, s * 2.2, s * 2.2);
    const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 1.0, s * 1.6), sharedGlassMat); cabGlass.position.set(0, s * 3.0, s * 2.2);
    g.add(cabBody, cabGlass);

    // Drum
    const drumGroup = new THREE.Group();
    drumGroup.position.set(0, s * 2.5, -s * 0.8);
    drumGroup.rotation.x = 0.3; // Angled upwards towards the front

    const drumBody = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.4, s * 0.8, s * 4.5, 16), drumMat); drumBody.rotation.x = Math.PI / 2;
    const stripe = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.42, s * 1.1, s * 0.8, 16), accentMat); stripe.rotation.x = Math.PI / 2; stripe.position.z = -s * 1.0;
    const waterTank = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.6, s * 0.6, s * 1.5), cabMat); waterTank.position.set(0, s * 1.6, s * 1.8); waterTank.rotation.z = Math.PI / 2;

    drumGroup.add(drumBody, stripe);
    g.add(drumGroup, waterTank);

    // Funnel & Chute
    const funnel = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.8, s * 0.4, s * 1.0), drumMat); funnel.position.set(0, s * 3.2, -s * 3.2); funnel.rotation.x = -0.3;
    const chute = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 0.2, s * 2.0), drumMat); chute.position.set(0, s * 1.8, -s * 3.8); chute.rotation.x = -0.5;
    g.add(funnel, chute);

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 4, crashWeight: 12.0, type: "prop" }; return g;
  };

  const makeExcavatorB = (s, rng) => {
    // Smaller, wheeled, orange mini-excavator
    const g = new THREE.Group();
    const bodyMat = vehMat_orangeBody;
    const darkMat = vehMat_orangeDark;

    const base = new THREE.Mesh(new THREE.BoxGeometry(s * 2.0, s * 0.6, s * 2.5), darkMat); base.position.y = s * 0.8;
    g.add(base);

    for (const z of [s * 1.0, -s * 1.0]) {
      for (const x of [s * 1.2, -s * 1.2]) {
        const w = createWheel(s, s * 0.6, s * 0.4); w.position.set(x, s * 0.6, z); g.add(w);
      }
    }

    // Outriggers
    for (const x of [s * 1.5, -s * 1.5]) {
      const rig = new THREE.Mesh(new THREE.BoxGeometry(s * 0.2, s * 1.2, s * 0.2), darkMat); rig.position.set(x, s * 0.6, -s * 1.4); rig.rotation.z = x > 0 ? -0.3 : 0.3;
      const pad = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 0.2, s * 0.6), bodyMat); pad.position.set(x + (x > 0 ? s * 0.2 : -s * 0.2), s * 0.1, -s * 1.5);
      g.add(rig, pad);
    }

    const upper = new THREE.Group();
    upper.position.set(0, s * 1.2, 0);
    upper.rotation.y = rng() * Math.PI;

    const body = new THREE.Mesh(new THREE.BoxGeometry(s * 2.0, s * 1.2, s * 2.2), bodyMat); body.position.set(0, s * 0.6, 0);
    const cab = new THREE.Mesh(new THREE.BoxGeometry(s * 1.0, s * 1.6, s * 1.2), bodyMat); cab.position.set(-s * 0.5, s * 2.0, s * 0.5);
    const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 0.9, s * 0.8, s * 1.3), sharedGlassMat); cabGlass.position.set(-s * 0.5, s * 2.0, s * 0.5);

    // Front blade
    const blade = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.6, s * 0.2), darkMat); blade.position.set(0, s * 0.2, s * 1.4);

    // Arm
    const boom = new THREE.Mesh(new THREE.BoxGeometry(s * 0.4, s * 3.0, s * 0.5), bodyMat); boom.position.set(s * 0.6, s * 2.0, s * 0.8); boom.rotation.x = 0.4;
    const stick = new THREE.Mesh(new THREE.BoxGeometry(s * 0.3, s * 2.2, s * 0.4), bodyMat); stick.position.set(s * 0.6, s * 2.6, s * 2.2); stick.rotation.x = -0.5;
    const bucket = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 0.8, s * 0.8), darkMat); bucket.position.set(s * 0.6, s * 1.6, s * 2.8); bucket.rotation.x = 0.2;

    upper.add(body, cab, cabGlass, blade, boom, stick, bucket);
    g.add(upper);

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 2, obstacleHeight: s * 3, crashWeight: 7.0, type: "prop" }; return g;
  };

  const makeWorksiteProps = (s, rng) => {
    const g = new THREE.Group();

    // Dirt mound
    const dirtMat = new THREE.MeshStandardMaterial({ color: 0x553311, roughness: 0.9 });
    const dirt = new THREE.Mesh(new THREE.SphereGeometry(s * 2, 7, 7, 0, Math.PI * 2, 0, Math.PI / 2), dirtMat);
    dirt.scale.set(1, 0.4, 1.2);
    dirt.position.set(0, 0, 0);
    g.add(dirt);

    // Concrete pipes
    if (rng() > 0.3) {
      const pipeMat = new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.8 });
      const pipeLoc = s * 2;
      for (let i = 0; i < 3; i++) {
        const pipe = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.6, s * 0.6, s * 2, 12), pipeMat);
        pipe.rotation.x = Math.PI / 2;
        pipe.position.set(pipeLoc + (i % 2) * s * 1.2, s * 0.6 + Math.floor(i / 2) * s * 1.0, s * 1.5);
        g.add(pipe);
      }
    }

    // Traffic Cones
    const coneMat = new THREE.MeshStandardMaterial({ color: 0xff4400, roughness: 0.6 });
    for (let i = 0; i < 4; i++) {
      const x = (rng() - 0.5) * s * 8;
      const z = (rng() - 0.5) * s * 8;
      const cone = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.2, s * 0.6), coneMat);
      cone.position.set(x, s * 0.3, z);
      g.add(cone);
    }

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 1.5, crashWeight: 2.0, type: "decor" }; return g;
  };

  const makeBollard = (s, rng) => {
    const g = new THREE.Group(); const mat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.8 });
    const post = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.3, s * 0.4, s * 0.8), mat); post.position.y = s * 0.4;
    const top = new THREE.Mesh(new THREE.BoxGeometry(s * 0.8, s * 0.2, s * 0.3), mat); top.position.y = s * 0.8;
    g.add(post, top); g.userData = { obstacleRadius: s * 0.5, obstacleHeight: s * 1, crashWeight: 2.0, type: "prop" }; return g;
  };
  const makePallets = (s, rng) => {
    // Highly detailed pallet stack with colorful cargo
    const g = new THREE.Group();
    const woodMat = new THREE.MeshStandardMaterial({ color: 0xddbbaa, roughness: 0.9 });
    const cargoMats = [
      new THREE.MeshStandardMaterial({ color: 0x3344cc, roughness: 0.7 }), // Blue
      new THREE.MeshStandardMaterial({ color: 0xcc3333, roughness: 0.7 }), // Red
      new THREE.MeshStandardMaterial({ color: 0x33cc44, roughness: 0.7 }), // Green
      new THREE.MeshStandardMaterial({ color: 0xee9911, roughness: 0.6 })  // Orange
    ];

    const pW = s * 1.6;
    const pD = s * 1.6;
    const pH = s * 0.25;

    const createOnePallet = () => {
      const pal = new THREE.Group();
      for (const x of [-pW / 2 + s * 0.1, 0, pW / 2 - s * 0.1]) {
        const stringer = new THREE.Mesh(new THREE.BoxGeometry(s * 0.15, s * 0.15, pD), woodMat);
        stringer.position.set(x, s * 0.1, 0); pal.add(stringer);
      }
      for (let z = -pD / 2 + s * 0.1; z <= pD / 2 - s * 0.1; z += s * 0.25) {
        const board = new THREE.Mesh(new THREE.BoxGeometry(pW, s * 0.05, s * 0.2), woodMat);
        board.position.set(0, s * 0.2, z); pal.add(board);
      }
      return pal;
    };

    const p1 = createOnePallet(); p1.position.set(0, 0, 0);
    const p2 = createOnePallet(); p2.position.set(0, pH, 0); p2.rotation.y = 0.1;
    g.add(p1, p2);

    const boxCount = 2 + Math.floor(rng() * 3);
    for (let i = 0; i < boxCount; i++) {
      const bw = s * (0.4 + rng() * 0.6); const bh = s * (0.4 + rng() * 0.8); const bd = s * (0.4 + rng() * 0.6);
      const box = new THREE.Mesh(new THREE.BoxGeometry(bw, bh, bd), cargoMats[Math.floor(rng() * cargoMats.length)]);
      box.position.set((rng() - 0.5) * (pW - bw), pH * 2 + bh / 2, (rng() - 0.5) * (pD - bd));
      box.rotation.y = rng() * Math.PI; g.add(box);
    }

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 1.5, obstacleHeight: s * 2, crashWeight: 0.5, type: "prop" };
    return g;
  };

  const makeWireSpool = (s, rng) => {
    const g = new THREE.Group();
    const woodMat = new THREE.MeshStandardMaterial({ color: 0xbb9977, roughness: 0.8 });
    const cableMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.6, metalness: 0.3 });
    const r = s * 1.2; const w = s * 1.8;

    const f1 = new THREE.Mesh(new THREE.CylinderGeometry(r, r, s * 0.15, 16), woodMat); f1.rotation.x = Math.PI / 2; f1.position.z = w / 2;
    const f2 = new THREE.Mesh(new THREE.CylinderGeometry(r, r, s * 0.15, 16), woodMat); f2.rotation.x = Math.PI / 2; f2.position.z = -w / 2;
    const core = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.4, r * 0.4, w * 0.9, 12), woodMat); core.rotation.x = Math.PI / 2;
    const cable = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.8, r * 0.8, w * 0.8, 16), cableMat); cable.rotation.x = Math.PI / 2;

    g.add(f1, f2, core, cable);
    g.position.y = r; g.rotation.y = rng() * Math.PI;
    if (rng() > 0.5) { g.rotation.x = Math.PI / 2; g.position.y = w / 2; }

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 1.5, obstacleHeight: s * 2.4, crashWeight: 1.5, type: "prop" };
    return g;
  };

  const makeConcretePipes = (s, rng) => {
    const g = new THREE.Group();
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.9, metalness: 0.1 });
    const holeMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 1.0 });

    const createPipe = () => {
      const p = new THREE.Group();
      const outer = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.8, s * 0.8, s * 3, 16), pipeMat); outer.rotation.x = Math.PI / 2;
      const inner = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.65, s * 0.65, s * 3.02, 16), holeMat); inner.rotation.x = Math.PI / 2;
      p.add(outer, inner); return p;
    };

    const p1 = createPipe(); p1.position.set(-s * 0.8, s * 0.8, 0);
    const p2 = createPipe(); p2.position.set(s * 0.8, s * 0.8, 0);
    const p3 = createPipe(); p3.position.set(0, s * (0.8 + 1.4), 0);
    g.add(p1, p2, p3); g.rotation.y = rng() * Math.PI;

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 2.0, obstacleHeight: s * 3.0, crashWeight: 3.0, type: "prop" };
    return g;
  };

  const makeOilBarrel = (s, rng) => makeTrashCan(s * 1.2, rng);
  const makeMooringRope = (s, rng) => makeFrozenPond(s * 0.3, rng);
  const makeHarborBarricade = (s, rng) => makeConcreteBarrier(s, rng);
  const makeHarborSign = (s, rng) => makeBillboard(s * 0.6, rng);
  const makeVinedPillar = (s, rng) => { const p = createRuinPillarModel(s, rng); p.children[1].material.color.setHex(0x33aa44); return p; };
  const makeFallenFace = (s, rng) => { const r = createRockModel(s * 1.5, false, rng); r.scale.set(1.5, 0.5, 1); r.rotation.z = Math.PI / 4; return r; };
  const makeOvergrownArch = (s, rng) => makeArchStone(s * 1.2, rng);
  const makeAncientGear = (s, rng) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.5, s * 1.5, s * 0.2, 12), new THREE.MeshStandardMaterial({ color: 0x553322, metalness: 0.8 })); mesh.position.y = s * 1; mesh.rotation.x = Math.PI / 3;
    mesh.userData = { obstacleRadius: s * 1.5, obstacleHeight: s * 2, crashWeight: 1.0, type: "prop" }; return mesh;
  };
  const makeStonePedestal = (s, rng) => makeWell(s * 0.8, rng);
  const makeGiantFern = (s, rng) => makeFern(s * 1.5, rng);
  const makeVineCluster = (s, rng) => makeBareBranches(s, rng);
  const makeMossySteps = (s, rng) => makeSteppingStones(s * 1.2, rng);
  const makeRuinPillarModel = (s, rng) => createRuinPillarModel(s, rng);
  const makeBrokenStatue = (s, rng) => makeRuinPillarModel(s * 0.6, rng);
  const makeStoneShrine = (s, rng) => makeMailbox(s * 1.5, rng);

  // --- MARITIME EXPERIMENTAL ---
  const makeCargoShip = (s, rng) => {
    const g = new THREE.Group();
    const hullMat = shipMat_hullDark;
    const deckMat = shipMat_deck;
    const whiteMat = shipMat_white;
    const redMat = shipMat_red;
    const glassMat = shipMat_glass;

    const hullLower = new THREE.Mesh(new THREE.BoxGeometry(s * 10, s * 2, s * 42), redMat);
    hullLower.position.y = s * 1;
    const hullUpper = new THREE.Mesh(new THREE.BoxGeometry(s * 10.2, s * 3, s * 42.2), hullMat);
    hullUpper.position.y = s * 3.5;

    const bowGeo = new THREE.CylinderGeometry(0, s * 5.1, s * 5, 3);
    bowGeo.rotateZ(Math.PI / 2); bowGeo.rotateY(Math.PI / 2);
    const bow = new THREE.Mesh(bowGeo, hullMat);
    bow.position.set(0, s * 3.5, -s * 23.6);

    const deck = new THREE.Mesh(new THREE.BoxGeometry(s * 9.8, s * 0.2, s * 41.8), deckMat);
    deck.position.y = s * 5.1;
    g.add(hullLower, hullUpper, bow, deck);

    const bridgeGrp = new THREE.Group();
    const b1 = new THREE.Mesh(new THREE.BoxGeometry(s * 10, s * 3, s * 8), whiteMat); b1.position.y = s * 6.5;
    const b2 = new THREE.Mesh(new THREE.BoxGeometry(s * 8, s * 3, s * 6), whiteMat); b2.position.set(0, s * 9.5, s * -0.5);
    const bridgeWindows = new THREE.Mesh(new THREE.BoxGeometry(s * 8.2, s * 1.5, s * 6.2), glassMat); bridgeWindows.position.set(0, s * 9.5, s * -0.5);
    const radarMast = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 6), whiteMat); radarMast.position.set(0, s * 12.5, s * -2);
    const funnel = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.5, s * 1.2, s * 4), redMat); funnel.position.set(0, s * 11, s * 2);
    bridgeGrp.add(b1, b2, bridgeWindows, radarMast, funnel);
    bridgeGrp.position.set(0, 0, s * 15);
    g.add(bridgeGrp);

    for (let x = -3; x <= 3; x += 3) {
      for (let z = -14; z <= 8; z += 5.5) {
        if (rng() > 0.2) {
          const stackH = 1 + Math.floor(rng() * 3);
          for (let i = 0; i < stackH; i++) {
            const c = makeContainer(s * 1.05, rng);
            c.position.set(x * s * 1.1, s * 6.1 + i * s * 2.1, z * s);
            g.add(c);
          }
        }
      }
    }
    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 20, obstacleHeight: s * 10, crashWeight: 100.0, type: "decor" };
    return g;
  };

  const makeCruiseShip = (s, rng) => {
    const g = new THREE.Group();
    const hullMat = shipMat_hullWhite;
    const lowerHullMat = shipMat_lowerHull;
    const deckMat = shipMat_deckWood;
    const glassMat = shipMat_glassCruise;
    const poolMat = shipMat_poolBlue;

    const hullLower = new THREE.Mesh(new THREE.BoxGeometry(s * 12, s * 2, s * 50), lowerHullMat); hullLower.position.y = s * 1;
    const hullUpper = new THREE.Mesh(new THREE.BoxGeometry(s * 12.5, s * 4, s * 51), hullMat); hullUpper.position.y = s * 4;

    const bowGeo = new THREE.CylinderGeometry(0, s * 6.25, s * 6, 3);
    bowGeo.rotateZ(Math.PI / 2); bowGeo.rotateY(Math.PI / 2);
    const bow = new THREE.Mesh(bowGeo, hullMat); bow.position.set(0, s * 4, -s * 28.5);
    g.add(hullLower, hullUpper, bow);

    for (let i = 0; i < 4; i++) {
      const tierW = s * (11.5 - i * 0.5);
      const tierL = s * (40 - i * 4);
      const tier = new THREE.Mesh(new THREE.BoxGeometry(tierW, s * 2, tierL), hullMat);
      tier.position.set(0, s * (7 + i * 2), s * i);
      const glassBand = new THREE.Mesh(new THREE.BoxGeometry(tierW + s * 0.2, s * 1.2, tierL + s * 0.2), glassMat);
      glassBand.position.set(0, s * (7 + i * 2), s * i);
      g.add(tier, glassBand);
    }

    const topDeck = new THREE.Mesh(new THREE.BoxGeometry(s * 10, s * 0.2, s * 28), deckMat);
    topDeck.position.set(0, s * 14.1, s * 3);
    g.add(topDeck);

    const pool = new THREE.Mesh(new THREE.PlaneGeometry(s * 4, s * 8), poolMat);
    pool.rotation.x = -Math.PI / 2; pool.position.set(0, s * 14.2, s * 0); g.add(pool);

    const funnel1 = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.5, s * 1.2, s * 4), lowerHullMat);
    funnel1.position.set(0, s * 16, s * 8);
    const funnel2 = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.5, s * 1.2, s * 4), lowerHullMat);
    funnel2.position.set(0, s * 16, s * 13);
    g.add(funnel1, funnel2);

    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 25, obstacleHeight: s * 18, crashWeight: 100.0, type: "decor" };
    return g;
  };

  const makeSpeedboat = (s, rng) => {
    const g = new THREE.Group();
    const hullMat = shipMat_speedHull;
    const trimMat = shipMat_speedTrim;
    const glassMat = shipMat_speedGlass;
    const interiorMat = shipMat_interior;
    const engineMat = shipMat_engine;

    const hull = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 1.2, s * 6), hullMat);
    hull.position.y = s * 0.6;
    const bowGeo = new THREE.CylinderGeometry(0, s * 1.2, s * 2, 3);
    bowGeo.rotateZ(Math.PI / 2); bowGeo.rotateY(Math.PI / 2);
    const bow = new THREE.Mesh(bowGeo, hullMat); bow.position.set(0, s * 0.6, -s * 4);

    const trim = new THREE.Mesh(new THREE.BoxGeometry(s * 2.45, s * 0.3, s * 6.05), trimMat);
    trim.position.y = s * 1.0;
    const bowTrim = new THREE.Mesh(bowGeo.clone(), trimMat);
    bowTrim.scale.set(1.05, 0.25, 1.05); bowTrim.position.set(0, s * 1.0, -s * 4);

    const interior = new THREE.Mesh(new THREE.BoxGeometry(s * 2.0, s * 0.8, s * 3.5), interiorMat);
    interior.position.set(0, s * 1.0, s * 0.5);

    const windshield = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.1, s * 1.1, s * 0.8, 8, 1, false, 0, Math.PI));
    windshield.rotation.x = -Math.PI / 6; windshield.position.set(0, s * 1.5, -s * 1.2); windshield.material = glassMat;

    const engine1 = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 1.5, s * 0.8), engineMat); engine1.position.set(-s * 0.6, s * 0.5, s * 3.4);
    const engine2 = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 1.5, s * 0.8), engineMat); engine2.position.set(s * 0.6, s * 0.5, s * 3.4);

    g.add(hull, bow, trim, bowTrim, interior, windshield, engine1, engine2);
    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 3.5, obstacleHeight: s * 2.5, crashWeight: 5.0, type: "prop" };
    return g;
  };

  const makeSailboat = (s, rng) => {
    const g = new THREE.Group();
    const hullMat = shipMat_sailHull;
    const deckMat = shipMat_deckWood;
    const mastMat = shipMat_mast;
    const sailMat = shipMat_sail;

    const hull = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 1.5, s * 7), hullMat); hull.position.y = s * 0.75;
    const bowGeo = new THREE.CylinderGeometry(0, s * 1.25, s * 2.5, 3);
    bowGeo.rotateZ(Math.PI / 2); bowGeo.rotateY(Math.PI / 2);
    const bow = new THREE.Mesh(bowGeo, hullMat); bow.position.set(0, s * 0.75, -s * 4.75);

    const deck = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 0.1, s * 6.8), deckMat); deck.position.y = s * 1.55;
    const deckBow = new THREE.Mesh(bowGeo.clone(), deckMat); deckBow.scale.set(0.96, 0.04, 0.96); deckBow.position.set(0, s * 1.55, -s * 4.75);

    const cabin = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 0.8, s * 3), hullMat); cabin.position.set(0, s * 1.9, -s * 1);

    const mast = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.15, s * 12), mastMat); mast.position.set(0, s * 7, -s * 2);
    const boomL = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.08, s * 0.08, s * 5), mastMat); boomL.rotation.x = Math.PI / 2; boomL.position.set(0, s * 2.5, s * 0.5);

    const mainSailGeo = new THREE.BufferGeometry();
    mainSailGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, s * 2.6, s * -1.8, 0, s * 12, s * -1.8, 0, s * 2.6, s * 3]), 3));
    mainSailGeo.attributes.position.setX(2, s * 1.5); mainSailGeo.computeVertexNormals();
    const mainSail = new THREE.Mesh(mainSailGeo, sailMat);

    const jibGeo = new THREE.BufferGeometry();
    jibGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, s * 11, s * -2.2, 0, s * 1.8, s * -6.5, 0, s * 1.8, s * -2.2]), 3));
    jibGeo.attributes.position.setX(1, s * 1.0); jibGeo.computeVertexNormals();
    const jib = new THREE.Mesh(jibGeo, sailMat);

    g.add(hull, bow, deck, deckBow, cabin, mast, boomL, mainSail, jib);
    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 4, obstacleHeight: s * 12, crashWeight: 6.0, type: "prop" };
    return g;
  };

  const makeYacht = (s, rng) => {
    const g = new THREE.Group();
    const hullMat = shipMat_yachtHull;
    const deckMat = shipMat_yachtDeck;
    const glassMat = shipMat_yachtGlass;
    const darkMat = shipMat_yachtDark;

    const hullL = new THREE.Mesh(new THREE.BoxGeometry(s * 4, s * 1.5, s * 12), hullMat); hullL.position.y = s * 0.75;
    const bowGeo = new THREE.CylinderGeometry(0, s * 2, s * 4, 3); bowGeo.rotateZ(Math.PI / 2); bowGeo.rotateY(Math.PI / 2);
    const bow = new THREE.Mesh(bowGeo, hullMat); bow.position.set(0, s * 0.75, -s * 8);
    const deck = new THREE.Mesh(new THREE.BoxGeometry(s * 3.8, s * 0.1, s * 11.8), deckMat); deck.position.y = s * 1.55;

    const tier1 = new THREE.Mesh(new THREE.BoxGeometry(s * 3.6, s * 1.5, s * 8), hullMat); tier1.position.set(0, s * 2.3, s * 1);
    const windows1 = new THREE.Mesh(new THREE.BoxGeometry(s * 3.7, s * 1.0, s * 7.8), glassMat); windows1.position.set(0, s * 2.3, s * 1);

    const tier2 = new THREE.Mesh(new THREE.BoxGeometry(s * 2.8, s * 1.2, s * 5), hullMat); tier2.position.set(0, s * 3.65, s * 1.5);
    const windows2 = new THREE.Mesh(new THREE.BoxGeometry(s * 2.9, s * 0.8, s * 4.8), glassMat); windows2.position.set(0, s * 3.65, s * 1.5);

    const roof = new THREE.Mesh(new THREE.BoxGeometry(s * 3, s * 0.2, s * 5.2), hullMat); roof.position.set(0, s * 4.3, s * 1.5);
    const radarFront = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.3, s * 0.5, s * 0.4), darkMat); radarFront.position.set(0, s * 4.5, s * 0);
    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.05, s * 2), darkMat); antenna.position.set(0, s * 5.3, s * 2.5);

    const sunpad = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 0.2, s * 2), new THREE.MeshStandardMaterial({ color: 0xccffff }));
    sunpad.position.set(0, s * 1.6, -s * 4);

    g.add(hullL, bow, deck, tier1, windows1, tier2, windows2, roof, radarFront, antenna, sunpad);
    g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
    g.userData = { obstacleRadius: s * 6, obstacleHeight: s * 6, crashWeight: 10.0, type: "prop" };
    return g;
  };

  const makeBuoy = (s, rng) => {
    const g = new THREE.Group();
    const base = new THREE.Mesh(new THREE.CylinderGeometry(s, s, s, 12), new THREE.MeshStandardMaterial({ color: 0xff3300 }));
    base.position.y = s * 0.5;
    const top = new THREE.Mesh(new THREE.ConeGeometry(s, s * 2, 12), new THREE.MeshStandardMaterial({ color: 0xff3300 }));
    top.position.y = s * 2;
    g.add(base, top);
    g.userData = { obstacleRadius: s, obstacleHeight: s * 3, crashWeight: 2.0, type: "prop" };
    return g;
  };

  const makePier = (s, rng) => {
    const g = new THREE.Group();
    const deck = new THREE.Mesh(new THREE.BoxGeometry(s * 4, s * 0.5, s * 20), new THREE.MeshStandardMaterial({ color: 0x554433, map: textureSet.bark }));
    deck.position.y = s * 4;
    g.add(deck);
    for (let z = -8; z <= 8; z += 8) {
      for (const rx of [-1.5, 1.5]) {
        const pillar = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.4, s * 0.4, s * 6), new THREE.MeshStandardMaterial({ color: 0x332211 }));
        pillar.position.set(rx * s, s * 2, z * s);
        g.add(pillar);
      }
    }
    g.userData = { obstacleRadius: s * 10, obstacleHeight: s * 4, crashWeight: 15.0, type: "decor" };
    return g;
  };

  // Expose specific maps arrays
  const getNeonModels = () => [makeNeonObelisk, makeGlowingArch, makeHollowCube, makeTechSpire, makeEnergyBarrier, makeDataStream, makeCircuitPattern, makeHexTile, makeGlowingCrack, makeHoloProjector, makeFiberTree, makeNeonFern, makePlasmaBush, makeCrystalGrass, makeEnergyNode, makeServerRack, makeHoverboard, makeCyberDeck, makeWarningHolo, makeDataTerminal];
  const getHarborModels = () => [makeContainer, makeContainerStack, makeCraneBase, makeBollard, makePallets, makeOilBarrel, makeMooringRope, makeHarborBarricade, makeHarborSign, makeWireSpool, makeConcretePipes, makeVinedPillar, makeFallenFace, makeOvergrownArch, makeAncientGear, makeStonePedestal, makeGiantFern, makeVineCluster, makeMossySteps, makeBrokenStatue, makeStoneShrine];

  return {
    textures: textureSet,
    createRoadSurfaceMaterial,
    createRoadEdgeMaterial,
    createRoadMarkerMaterial,
    createRacerModel,
    createTreeModel,
    createRockModel,
    createPropModel,
    createIceCrystalModel,
    createNeonObeliskModel,
    createMagmaVentModel,
    createRuinPillarModel,
    getForestModels,
    getDesertModels,
    getSnowModels,
    getCityModels,
    getAlpineModels,
    getLavaModels,
    getLavaModels,
    getNeonModels,
    getHarborModels,
    applyPickupModelType,
    createPickupModel,
    createDetailedBuildingModel,
    makeCargoShip,
    makeCruiseShip,
    makeSpeedboat,
    makeSailboat,
    makeYacht,
    makeBuoy,
    makeCraneBase,
    makeHeavyGantryCrane,
    makeTowerCrane,
    makeTowTruck: makeCargoTruck, // Alias
    makeExcavatorA,
    makeDumpTruck,
    makeBulldozer,
    makeLargeTruck,
    makeCargoTruck,
    makeCementMixer,
    makeExcavatorB,
    makeWorksiteProps,
    makePier,
  };
}
