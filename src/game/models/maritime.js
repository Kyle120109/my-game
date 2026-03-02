import * as THREE from "three";

export function setupMaritime(vehicles) {
    // Use containers and cranes if needed from vehicles. Actually we need container for cargo ship.
    // Wait, I need a simple makeContainer for cargo ship if it's placed.
    // In original code, makeContainer is inside the themes for harbor but used in cargo ship inside Maritime experimental?
    // Let's just define the ship materials here and the ships.

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

    let harborThemesDependency = null;
    // Use a lazy getter to avoid circular dep if needed, but we can just pass makeContainer.

    const makeCargoShip = (s, rng, makeContainerFunc) => {
        const g = new THREE.Group();
        const hullMat = shipMat_hullDark; const deckMat = shipMat_deck; const whiteMat = shipMat_white; const redMat = shipMat_red; const glassMat = shipMat_glass;

        const hullLower = new THREE.Mesh(new THREE.BoxGeometry(s * 10, s * 2, s * 42), redMat); hullLower.position.y = s * 1;
        const hullUpper = new THREE.Mesh(new THREE.BoxGeometry(s * 10.2, s * 3, s * 42.2), hullMat); hullUpper.position.y = s * 3.5;

        const bowGeo = new THREE.CylinderGeometry(0, s * 5.1, s * 5, 3);
        bowGeo.rotateZ(Math.PI / 2); bowGeo.rotateY(Math.PI / 2);
        const bow = new THREE.Mesh(bowGeo, hullMat); bow.position.set(0, s * 3.5, -s * 23.6);

        const deck = new THREE.Mesh(new THREE.BoxGeometry(s * 9.8, s * 0.2, s * 41.8), deckMat); deck.position.y = s * 5.1;
        g.add(hullLower, hullUpper, bow, deck);

        const bridgeGrp = new THREE.Group();
        const b1 = new THREE.Mesh(new THREE.BoxGeometry(s * 10, s * 3, s * 8), whiteMat); b1.position.y = s * 6.5;
        const b2 = new THREE.Mesh(new THREE.BoxGeometry(s * 8, s * 3, s * 6), whiteMat); b2.position.set(0, s * 9.5, s * -0.5);
        const bridgeWindows = new THREE.Mesh(new THREE.BoxGeometry(s * 8.2, s * 1.5, s * 6.2), glassMat); bridgeWindows.position.set(0, s * 9.5, s * -0.5);
        const radarMast = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 6), whiteMat); radarMast.position.set(0, s * 12.5, s * -2);
        const funnel = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.5, s * 1.2, s * 4), redMat); funnel.position.set(0, s * 11, s * 2);
        bridgeGrp.add(b1, b2, bridgeWindows, radarMast, funnel); bridgeGrp.position.set(0, 0, s * 15); g.add(bridgeGrp);

        if (makeContainerFunc) {
            for (let x = -3; x <= 3; x += 3) {
                for (let z = -14; z <= 8; z += 5.5) {
                    if (rng() > 0.2) {
                        const stackH = 1 + Math.floor(rng() * 3);
                        for (let i = 0; i < stackH; i++) {
                            const c = makeContainerFunc(s * 1.05, rng);
                            c.position.set(x * s * 1.1, s * 6.1 + i * s * 2.1, z * s);
                            g.add(c);
                        }
                    }
                }
            }
        }
        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 20, obstacleHeight: s * 10, crashWeight: 100.0, type: "decor" }; return g;
    };

    const makeCruiseShip = (s, rng) => {
        const g = new THREE.Group();
        const hullMat = shipMat_hullWhite; const lowerHullMat = shipMat_lowerHull; const deckMat = shipMat_deckWood; const glassMat = shipMat_glassCruise; const poolMat = shipMat_poolBlue;

        const hullLower = new THREE.Mesh(new THREE.BoxGeometry(s * 12, s * 2, s * 50), lowerHullMat); hullLower.position.y = s * 1;
        const hullUpper = new THREE.Mesh(new THREE.BoxGeometry(s * 12.5, s * 4, s * 51), hullMat); hullUpper.position.y = s * 4;
        const bowGeo = new THREE.CylinderGeometry(0, s * 6.25, s * 6, 3); bowGeo.rotateZ(Math.PI / 2); bowGeo.rotateY(Math.PI / 2);
        const bow = new THREE.Mesh(bowGeo, hullMat); bow.position.set(0, s * 4, -s * 28.5);
        g.add(hullLower, hullUpper, bow);

        for (let i = 0; i < 4; i++) {
            const tierW = s * (11.5 - i * 0.5); const tierL = s * (40 - i * 4);
            const tier = new THREE.Mesh(new THREE.BoxGeometry(tierW, s * 2, tierL), hullMat); tier.position.set(0, s * (7 + i * 2), s * i);
            const glassBand = new THREE.Mesh(new THREE.BoxGeometry(tierW + s * 0.2, s * 1.2, tierL + s * 0.2), glassMat); glassBand.position.set(0, s * (7 + i * 2), s * i);
            g.add(tier, glassBand);
        }

        const topDeck = new THREE.Mesh(new THREE.BoxGeometry(s * 10, s * 0.2, s * 28), deckMat); topDeck.position.set(0, s * 14.1, s * 3); g.add(topDeck);
        const pool = new THREE.Mesh(new THREE.PlaneGeometry(s * 4, s * 8), poolMat); pool.rotation.x = -Math.PI / 2; pool.position.set(0, s * 14.2, s * 0); g.add(pool);

        const funnel1 = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.5, s * 1.2, s * 4), lowerHullMat); funnel1.position.set(0, s * 16, s * 8);
        const funnel2 = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.5, s * 1.2, s * 4), lowerHullMat); funnel2.position.set(0, s * 16, s * 13);
        g.add(funnel1, funnel2);

        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 25, obstacleHeight: s * 18, crashWeight: 100.0, type: "decor" }; return g;
    };

    const makeSpeedboat = (s, rng) => {
        const g = new THREE.Group();
        const hullMat = shipMat_speedHull; const trimMat = shipMat_speedTrim; const glassMat = shipMat_speedGlass; const interiorMat = shipMat_interior; const engineMat = shipMat_engine;

        const hull = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 1.2, s * 6), hullMat); hull.position.y = s * 0.6;
        const bowGeo = new THREE.CylinderGeometry(0, s * 1.2, s * 2, 3); bowGeo.rotateZ(Math.PI / 2); bowGeo.rotateY(Math.PI / 2);
        const bow = new THREE.Mesh(bowGeo, hullMat); bow.position.set(0, s * 0.6, -s * 4);

        const trim = new THREE.Mesh(new THREE.BoxGeometry(s * 2.45, s * 0.3, s * 6.05), trimMat); trim.position.y = s * 1.0;
        const bowTrim = new THREE.Mesh(bowGeo.clone(), trimMat); bowTrim.scale.set(1.05, 0.25, 1.05); bowTrim.position.set(0, s * 1.0, -s * 4);

        const interior = new THREE.Mesh(new THREE.BoxGeometry(s * 2.0, s * 0.8, s * 3.5), interiorMat); interior.position.set(0, s * 1.0, s * 0.5);

        const windshield = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.1, s * 1.1, s * 0.8, 8, 1, false, 0, Math.PI));
        windshield.rotation.x = -Math.PI / 6; windshield.position.set(0, s * 1.5, -s * 1.2); windshield.material = glassMat;

        const engine1 = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 1.5, s * 0.8), engineMat); engine1.position.set(-s * 0.6, s * 0.5, s * 3.4);
        const engine2 = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 1.5, s * 0.8), engineMat); engine2.position.set(s * 0.6, s * 0.5, s * 3.4);

        g.add(hull, bow, trim, bowTrim, interior, windshield, engine1, engine2);
        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 3.5, obstacleHeight: s * 2.5, crashWeight: 5.0, type: "prop" }; return g;
    };

    const makeSailboat = (s, rng) => {
        const g = new THREE.Group();
        const hullMat = shipMat_sailHull; const deckMat = shipMat_deckWood; const mastMat = shipMat_mast; const sailMat = shipMat_sail;

        const hull = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 1.5, s * 7), hullMat); hull.position.y = s * 0.75;
        const bowGeo = new THREE.CylinderGeometry(0, s * 1.25, s * 2.5, 3); bowGeo.rotateZ(Math.PI / 2); bowGeo.rotateY(Math.PI / 2);
        const bow = new THREE.Mesh(bowGeo, hullMat); bow.position.set(0, s * 0.75, -s * 4.75);

        const deck = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 0.1, s * 6.8), deckMat); deck.position.y = s * 1.55;
        const deckBow = new THREE.Mesh(bowGeo.clone(), deckMat); deckBow.scale.set(0.96, 0.04, 0.96); deckBow.position.set(0, s * 1.55, -s * 4.75);

        const cabin = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 0.8, s * 3), hullMat); cabin.position.set(0, s * 1.9, -s * 1);

        const mast = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.15, s * 12), mastMat); mast.position.set(0, s * 7, -s * 2);
        const boomL = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.08, s * 0.08, s * 5), mastMat); boomL.rotation.x = Math.PI / 2; boomL.position.set(0, s * 2.5, s * 0.5);

        const mainSailGeo = new THREE.BufferGeometry();
        mainSailGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, s * 2.6, s * -1.8, 0, s * 12, s * -1.8, 0, s * 2.6, s * 3]), 3));
        mainSailGeo.attributes.position.setX(2, s * 1.5); mainSailGeo.computeVertexNormals(); const mainSail = new THREE.Mesh(mainSailGeo, sailMat);

        const jibGeo = new THREE.BufferGeometry();
        jibGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, s * 11, s * -2.2, 0, s * 1.8, s * -6.5, 0, s * 1.8, s * -2.2]), 3));
        jibGeo.attributes.position.setX(1, s * 1.0); jibGeo.computeVertexNormals(); const jib = new THREE.Mesh(jibGeo, sailMat);

        g.add(hull, bow, deck, deckBow, cabin, mast, boomL, mainSail, jib);
        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 4, obstacleHeight: s * 12, crashWeight: 6.0, type: "prop" }; return g;
    };

    const makeYacht = (s, rng) => {
        const g = new THREE.Group();
        const hullMat = shipMat_yachtHull; const deckMat = shipMat_yachtDeck; const glassMat = shipMat_yachtGlass; const darkMat = shipMat_yachtDark;

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
        g.userData = { obstacleRadius: s * 6, obstacleHeight: s * 6, crashWeight: 10.0, type: "prop" }; return g;
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
        const deck = new THREE.Mesh(new THREE.BoxGeometry(s * 4, s * 0.5, s * 20), new THREE.MeshStandardMaterial({ color: 0x554433 }));
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

    return {
        makeCargoShip, makeCruiseShip, makeSpeedboat, makeSailboat, makeYacht, makeBuoy, makePier
    };
}
