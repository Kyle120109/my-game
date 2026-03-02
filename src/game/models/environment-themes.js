import * as THREE from "three";

export function setupThemes(envCore, textureSet, vehicles, maritime) {
    const { createTreeModel, createRockModel, createPropModel, createIceCrystalModel, createRuinPillarModel, createMagmaVentModel, createNeonObeliskModel } = envCore;

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
    const makeWarningTape = (s, rng) => makeWoodenFence(s, rng);
    const makeFrozenBarrel = (s, rng) => {
        const mesh = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.4, s * 0.4, s * 0.8), new THREE.MeshStandardMaterial({ color: 0x88aacc, roughness: 0.3 }));
        mesh.position.y = s * 0.4; mesh.userData = { obstacleRadius: s * 0.5, obstacleHeight: s * 0.8, crashWeight: 0.5, type: "prop" }; return mesh;
    };

    // --- EXPANSION: CITY (Map 4) ---
    const makeBikeRack = (s, rng) => makeWoodenFence(s, rng);
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
    const makeFireHydrant = (s, rng) => makeTrashCan(s * 0.6, rng);
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
    const makeHazardSign = (s, rng) => makeDesertWarningSign(s * 1.2, rng);

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
    const makeCyberDeck = (s, rng) => makeMailbox(s, rng);

    // --- EXPANSION: HARBOUR & OVERGROWN RUINS (Map 8) ---
    const makeContainer = (s, rng) => {
        const g = new THREE.Group();
        const colors = [0xba4a22, 0x24587a, 0x4a6a3b, 0x755a3c, 0xaaaaaa];
        const baseColor = colors[Math.floor(rng() * colors.length)];
        const mat = new THREE.MeshStandardMaterial({ color: baseColor, roughness: 0.85 });
        const frameMat = new THREE.MeshStandardMaterial({ color: baseColor, roughness: 0.7, metalness: 0.2 });
        const detailMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.9, metalness: 0.5 });
        const body = new THREE.Mesh(new THREE.BoxGeometry(s * 1.9, s * 1.9, s * 4.9), mat);
        body.position.y = s * 1.0;
        g.add(body);
        const cw = s * 2.0; const ch = s * 2.0; const cd = s * 5.0; const fT = s * 0.15;
        for (const x of [-cw / 2 + fT / 2, cw / 2 - fT / 2]) {
            for (const z of [-cd / 2 + fT / 2, cd / 2 - fT / 2]) {
                const post = new THREE.Mesh(new THREE.BoxGeometry(fT, ch, fT), frameMat);
                post.position.set(x, s * 1.0, z); g.add(post);
                const castingT = new THREE.Mesh(new THREE.BoxGeometry(fT * 1.1, fT * 1.1, fT * 1.1), detailMat);
                castingT.position.set(x, s * 1.0 + ch / 2 - fT / 2, z);
                const castingB = new THREE.Mesh(new THREE.BoxGeometry(fT * 1.1, fT * 1.1, fT * 1.1), detailMat);
                castingB.position.set(x, s * 1.0 - ch / 2 + fT / 2, z); g.add(castingT, castingB);
            }
        }
        for (const x of [-cw / 2 + fT / 2, cw / 2 - fT / 2]) {
            for (const y of [s * 1.0 + ch / 2 - fT / 2, s * 1.0 - ch / 2 + fT / 2]) {
                const rail = new THREE.Mesh(new THREE.BoxGeometry(fT, fT, cd - fT * 2), frameMat); rail.position.set(x, y, 0); g.add(rail);
            }
        }
        for (const z of [-cd / 2 + fT / 2, cd / 2 - fT / 2]) {
            for (const y of [s * 1.0 + ch / 2 - fT / 2, s * 1.0 - ch / 2 + fT / 2]) {
                const rail = new THREE.Mesh(new THREE.BoxGeometry(cw - fT * 2, fT, fT), frameMat); rail.position.set(0, y, z); g.add(rail);
            }
        }
        const numCorrugations = 12;
        for (const x of [-cw / 2, cw / 2]) {
            for (let i = 0; i < numCorrugations; i++) {
                const z = -cd / 2 + fT * 1.5 + (i * (cd - fT * 3) / (numCorrugations - 1));
                const stripe = new THREE.Mesh(new THREE.BoxGeometry(s * 0.05, ch - fT * 2, s * 0.15), frameMat);
                stripe.position.set(x, s * 1.0, z); g.add(stripe);
            }
        }
        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 2, crashWeight: 5.0, type: "prop" }; return g;
    };
    const makeContainerStack = (s, rng) => {
        const g = new THREE.Group();
        const c1 = makeContainer(s, rng); c1.position.y = 0;
        const c2 = makeContainer(s, rng); c2.position.y = s * 2.0;
        g.add(c1, c2); g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 4, crashWeight: 10.0, type: "prop" }; return g;
    };
    const makeOldTire = (s, rng) => { const m = makeFrozenPond(s * 0.4, rng); m.material = new THREE.MeshStandardMaterial({ color: 0x222222, map: textureSet.rubber }); return m; };
    const makeCableSpool = (s, rng) => {
        const g = new THREE.Group(); const woodMat = new THREE.MeshStandardMaterial({ color: 0x664422, map: textureSet.bark }); const cableMat = new THREE.MeshStandardMaterial({ color: 0x333333, map: textureSet.cloth });
        const r = s * 1.2; const w = s * 1.5;
        const f1 = new THREE.Mesh(new THREE.CylinderGeometry(r, r, s * 0.15, 16), woodMat); f1.rotation.x = Math.PI / 2; f1.position.z = w / 2;
        const f2 = new THREE.Mesh(new THREE.CylinderGeometry(r, r, s * 0.15, 16), woodMat); f2.rotation.x = Math.PI / 2; f2.position.z = -w / 2;
        const core = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.4, r * 0.4, w * 0.9, 12), woodMat); core.rotation.x = Math.PI / 2;
        const cable = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.8, r * 0.8, w * 0.8, 16), cableMat); cable.rotation.x = Math.PI / 2;
        g.add(f1, f2, core, cable); g.position.y = r; g.rotation.y = rng() * Math.PI; if (rng() > 0.5) { g.rotation.x = Math.PI / 2; g.position.y = w / 2; }
        g.userData = { obstacleRadius: s * 1.5, obstacleHeight: s * 2.4, crashWeight: 1.5, type: "prop" }; return g;
    };
    const makeConcretePipes = (s, rng) => {
        const g = new THREE.Group(); const pipeMat = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, roughness: 0.9, metalness: 0.1 }); const holeMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 1.0 });
        const createPipe = () => { const p = new THREE.Group(); const outer = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.8, s * 0.8, s * 3, 16), pipeMat); outer.rotation.x = Math.PI / 2; const inner = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.65, s * 0.65, s * 3.02, 16), holeMat); inner.rotation.x = Math.PI / 2; p.add(outer, inner); return p; };
        const p1 = createPipe(); p1.position.set(-s * 0.8, s * 0.8, 0); const p2 = createPipe(); p2.position.set(s * 0.8, s * 0.8, 0); const p3 = createPipe(); p3.position.set(0, s * (0.8 + 1.4), 0);
        g.add(p1, p2, p3); g.rotation.y = rng() * Math.PI; g.userData = { obstacleRadius: s * 2.0, obstacleHeight: s * 3.0, crashWeight: 3.0, type: "prop" }; return g;
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
    const makeBrokenStatue = (s, rng) => createRuinPillarModel(s * 0.6, rng);
    const makeStoneShrine = (s, rng) => makeMailbox(s * 1.5, rng);

    const getForestModels = () => [makeBirch, makeOak, makePine, makeWillow, makeStump, makeMossyBoulder, makeSlateSheet, makePebbleCluster, makeOverhangRock, makeArchStone, makeFern, makeBush, makeTallGrass, makeMushroom, makeBerryShrub, makeWoodenFence, makeCabinPiece, makeBrokenCart, makeWell, makeStoneRuins];
    const getDesertModels = () => [makeSaguaro, makeBarrelCactus, makePricklyPear, makeDriedHusk, makeAloe, makeSandstonePillar, makeCanyonArch, makeTumbleweed, makeFlatShale, makePebbleCluster, makeStoneRuins, makeDesertObelisk, makeCrudeAltar, makeCrackedPottery, makePebbleCluster, makeTatteredTent, makeOak, makeDryWell, makeMushroom, makeDesertWarningSign];
    const getSnowModels = () => [makeIceShards, makeGlacierBlock, makeFrozenPond, makeIcicleCluster, makeSnowDrift, makeSnowPine, makeDeadFrostedTree, makeFrozenBush, makeSnowStump, makeBareBranches, makeFrostBoulder, makeIceCaveEntrance, makeSnowSlate, makeSmoothRiverRock, makeJaggedPeak, makeSnowman, makeBrokenSkiChair, makeCabinChimney, makeWarningTape, makeFrozenBarrel];
    const getCityModels = () => [vehicles.makeCitySedan, vehicles.makeCityVan, vehicles.makeAbandonedBus, makeBikeRack, makeScooter, makeBench, makeTrashCan, makeMailbox, makePhoneBooth, makeNewsstand, makeFireHydrant, makeStreetlightPole, makeTrafficCone, makeConcreteBarrier, makeManholeCover, makeBillboard, makeBusStop, makeScaffolding, makeACUnit, makeDumpster];
    const getAlpineModels = () => [makeGiantIceCrystal, makeSmallCrystalCluster, makeCrystalDebris, makeGlowingIceVein, makeCrystalMonolith, makeAlpineSpire, makeCrevasseLedge, makeSnowBridge, makeAvalancheDebris, makePermafrostRock, makeAlpineScrub, makeFrozenLichen, makeWindSweptPine, makeIceFlower, makeDeadRootBall, makeMountaineerCamp, makeFrozenFlag, makeRustyPiton, makeBrokenIceAxe, makeFlareStick];
    const getLavaModels = () => [makeMagmaVent, makeLavaPool, makeCoolingCrust, makeBasaltColumn, makeObsidianShard, makePumiceBoulder, makeCharredRock, makeHeatSpire, makeAshPile, makeBrimstoneCluster, makeSmokeGeyser, makeBurningDeadwood, makeEmbersEmitter, makeCalcifiedRoot, makeLavaTube, makeMeltedStructure, makeWarningBeacon, makeHeatShieldScrap, vehicles.makeAbandonedDrill, makeHazardSign];
    const getNeonModels = () => [makeNeonObelisk, makeGlowingArch, makeHollowCube, makeTechSpire, makeEnergyBarrier, makeDataStream, makeCircuitPattern, makeHexTile, makeGlowingCrack, makeHoloProjector, makeFiberTree, makeNeonFern, makePlasmaBush, makeCrystalGrass, makeEnergyNode, makeServerRack, makeHoverboard, makeCyberDeck, makeDesertWarningSign, makeDataTerminal];
    const getHarborModels = () => [maritime.makeCargoShip, maritime.makeCruiseShip, maritime.makeSpeedboat, maritime.makeSailboat, maritime.makeYacht, vehicles.makeHeavyGantryCrane, makeContainerStack, vehicles.makeTowerCrane, vehicles.makeCraneBase, makeOldTire, makeCableSpool, makeConcretePipes, makeOilBarrel, makeMooringRope, makeHarborBarricade, makeHarborSign, makeVinedPillar, makeFallenFace, makeOvergrownArch, makeAncientGear, makeStonePedestal, makeGiantFern, makeVineCluster, makeMossySteps, makeBrokenStatue, makeStoneShrine];

    return {
        getForestModels, getDesertModels, getSnowModels, getCityModels, getAlpineModels, getLavaModels, getNeonModels, getHarborModels,
        makeContainer
    };
}
