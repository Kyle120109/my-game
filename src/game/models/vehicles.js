import * as THREE from "three";

export function setupVehicles() {
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

    const sharedWheelMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    const sharedRimMat = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.5, metalness: 0.5 });
    const sharedGlassMat = new THREE.MeshStandardMaterial({ color: 0x112233, roughness: 0.1, metalness: 0.8, transparent: true, opacity: 0.7 });

    const createWheel = (s, radius, width) => {
        const wheelGrp = new THREE.Group();
        const tire = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, width, 12), sharedWheelMat);
        tire.rotation.z = Math.PI / 2;
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

    const makeCraneBase = (s, rng) => {
        const g = new THREE.Group();
        const mainMat = craneMat_yellow;
        const darkMat = craneMat_dark;
        const cabMat = craneMat_cabWhite;
        const glassMat = craneMat_glass;

        const baseGrp = new THREE.Group();
        const chassis = new THREE.Mesh(new THREE.BoxGeometry(s * 3.5, s * 0.8, s * 4.0), darkMat);
        chassis.position.y = s * 1.5;

        const trackL = createTrack(s, s * 6.5, s * 1.6, s * 1.2); trackL.position.set(-s * 2.5, s * 1.0, 0);
        const trackR = createTrack(s, s * 6.5, s * 1.6, s * 1.2); trackR.position.set(s * 2.5, s * 1.0, 0);
        baseGrp.add(chassis, trackL, trackR);

        const ring = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.5, s * 1.5, s * 0.4, 16), darkMat); ring.position.y = s * 2.1;
        baseGrp.add(ring); g.add(baseGrp);

        const upperGrp = new THREE.Group();
        upperGrp.position.y = s * 2.3;
        upperGrp.rotation.y = rng() * Math.PI * 2;

        const deck = new THREE.Mesh(new THREE.BoxGeometry(s * 3.8, s * 0.6, s * 6.0), mainMat); deck.position.set(0, s * 0.3, s * 1.0);
        const cw = new THREE.Mesh(new THREE.BoxGeometry(s * 3.8, s * 2.5, s * 1.5), darkMat); cw.position.set(0, s * 1.8, s * 3.2);
        const engine = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 1.8, s * 3.0), mainMat); engine.position.set(0, s * 1.5, s * 1.0);
        const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.1, s * 1.0), darkMat); exhaust.position.set(s * 0.8, s * 2.8, s * 1.5);
        upperGrp.add(deck, cw, engine, exhaust);

        const cabGrp = new THREE.Group();
        const cabBody = new THREE.Mesh(new THREE.BoxGeometry(s * 1.4, s * 1.8, s * 1.8), cabMat); cabBody.position.set(-s * 1.6, s * 1.5, -s * 1.5);
        const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, s * 1.0, s * 1.9), glassMat); cabGlass.position.set(-s * 1.6, s * 1.6, -s * 1.5);
        cabGrp.add(cabBody, cabGlass); upperGrp.add(cabGrp);

        const boomGrp = new THREE.Group();
        boomGrp.position.set(0, s * 1.5, -s * 1.0);
        const boomAngle = Math.PI / 4 + rng() * 0.2;
        boomGrp.rotation.x = -boomAngle;

        const boomLen = s * 20.0; const boomW = s * 1.2;
        for (const bx of [-boomW / 2, boomW / 2]) {
            for (const by of [-boomW / 2, boomW / 2]) {
                const chord = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.1, boomLen, 6), mainMat);
                chord.rotation.x = Math.PI / 2; chord.position.set(bx, by, boomLen / 2); boomGrp.add(chord);
            }
        }

        const lacingCount = 12; const lacingStep = boomLen / lacingCount;
        for (let i = 0; i < lacingCount; i++) {
            const zCenter = i * lacingStep + lacingStep / 2;
            for (const by of [-boomW / 2, boomW / 2]) {
                const lace = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, Math.hypot(boomW, lacingStep)), mainMat);
                lace.position.set(0, by, zCenter); lace.rotation.x = Math.PI / 2; lace.rotation.z = (i % 2 === 0 ? 1 : -1) * Math.atan2(lacingStep, boomW);
                boomGrp.add(lace);
            }
            for (const bx of [-boomW / 2, boomW / 2]) {
                const lace = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, Math.hypot(boomW, lacingStep)), mainMat);
                lace.position.set(bx, 0, zCenter); lace.rotation.x = Math.PI / 2; lace.rotation.y = (i % 2 === 0 ? 1 : -1) * Math.atan2(lacingStep, boomW);
                boomGrp.add(lace);
            }
            const crossH = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, boomW), mainMat); crossH.position.set(0, boomW / 2, i * lacingStep); crossH.rotation.z = Math.PI / 2;
            const crossH2 = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, boomW), mainMat); crossH2.position.set(0, -boomW / 2, i * lacingStep); crossH2.rotation.z = Math.PI / 2;
            const crossV = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, boomW), mainMat); crossV.position.set(boomW / 2, 0, i * lacingStep);
            const crossV2 = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.06, s * 0.06, boomW), mainMat); crossV2.position.set(-boomW / 2, 0, i * lacingStep);
            boomGrp.add(crossH, crossH2, crossV, crossV2);
        }
        upperGrp.add(boomGrp);

        const aFrame = new THREE.Group(); aFrame.position.set(0, s * 1.5, s * 1.5);
        const aLegL = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 5), darkMat); aLegL.position.set(-s * 1.0, s * 2.0, 0); aLegL.rotation.z = 0.2;
        const aLegR = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 5), darkMat); aLegR.position.set(s * 1.0, s * 2.0, 0); aLegR.rotation.z = -0.2;
        const aTop = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 3), darkMat); aTop.position.set(0, s * 4.2, 0); aTop.rotation.z = Math.PI / 2;
        aFrame.add(aLegL, aLegR, aTop); upperGrp.add(aFrame);

        const tipY = s * 1.5 + Math.sin(boomAngle) * boomLen; const tipZ = -s * 1.0 + Math.cos(boomAngle) * boomLen;
        const aFrameTipY = s * 1.5 + s * 4.2; const aFrameTipZ = s * 1.5;
        const pendantLen = Math.hypot(tipY - aFrameTipY, tipZ - aFrameTipZ);

        for (const px of [-boomW / 2 + s * 0.2, boomW / 2 - s * 0.2]) {
            const pendant = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.05, pendantLen), darkMat);
            pendant.position.set(px, (tipY + aFrameTipY) / 2, (tipZ + aFrameTipZ) / 2);
            pendant.rotation.x = Math.atan2(tipZ - aFrameTipZ, tipY - aFrameTipY);
            upperGrp.add(pendant);
        }
        const dropLen = s * 12.0; const hoist = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.05, dropLen), darkMat);
        hoist.position.set(0, tipY - dropLen / 2, tipZ); upperGrp.add(hoist);

        const hookGrp = new THREE.Group(); hookGrp.position.set(0, tipY - dropLen, tipZ);
        const hBlock = new THREE.Mesh(new THREE.BoxGeometry(s * 1.2, s * 0.8, s * 0.6), mainMat);
        const hHook = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 1.2), darkMat); hHook.position.y = -s * 0.8;
        hookGrp.add(hBlock, hHook); upperGrp.add(hookGrp); g.add(upperGrp);

        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 4, obstacleHeight: s * 8, crashWeight: 15.0, type: "prop" };
        return g;
    };

    const makeHeavyGantryCrane = (s, rng) => {
        const g = new THREE.Group();
        const mainMat = craneMat_red; const whiteMat = craneMat_white; const darkMat = craneMat_dark; const cabMat = craneMat_cab; const glassMat = craneMat_glass;
        const span = s * 6.0; const height = s * 8.0;

        for (const lx of [-span, span]) {
            const base1 = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 0.6, s * 0.8), darkMat); base1.position.set(lx, s * 0.3, -s * 1.2);
            const base2 = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 0.6, s * 0.8), darkMat); base2.position.set(lx, s * 0.3, s * 1.2);
            const tieTie = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 0.4, s * 2.4), mainMat); tieTie.position.set(lx, s * 0.8, 0);
            const leg1 = new THREE.Mesh(new THREE.BoxGeometry(s * 0.8, height * 1.02, s * 0.8), mainMat); leg1.position.set(lx, height / 2 + s * 1, -s * 1.2); leg1.rotation.x = -0.1;
            const leg2 = new THREE.Mesh(new THREE.BoxGeometry(s * 0.8, height * 1.02, s * 0.8), mainMat); leg2.position.set(lx, height / 2 + s * 1, s * 1.2); leg2.rotation.x = 0.1;
            for (let y = s * 3; y < height; y += s * 2) {
                const brace = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 0.6, s * 2.4), mainMat); brace.position.set(lx, y, 0); g.add(brace);
            }
            g.add(base1, base2, tieTie, leg1, leg2);
        }

        const girder1 = new THREE.Mesh(new THREE.BoxGeometry(span * 2 + s * 4, s * 1.2, s * 0.8), whiteMat); girder1.position.set(0, height, -s * 0.6);
        const girder2 = new THREE.Mesh(new THREE.BoxGeometry(span * 2 + s * 4, s * 1.2, s * 0.8), whiteMat); girder2.position.set(0, height, s * 0.6);
        g.add(girder1, girder2);

        for (let x = -span * 1.2; x <= span * 1.2; x += s * 1.5) {
            const topTie = new THREE.Mesh(new THREE.BoxGeometry(s * 0.4, s * 0.4, s * 1.2), mainMat); topTie.position.set(x, height + s * 0.8, 0); g.add(topTie);
        }
        const hoist = new THREE.Mesh(new THREE.BoxGeometry(s * 3, s * 2, s * 2.2), darkMat); hoist.position.set(s * 2, height + s * 1.6, 0); g.add(hoist);

        const cabinGrp = new THREE.Group();
        const cabinBody = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, s * 1.5, s * 1.5), cabMat);
        const windowFront = new THREE.Mesh(new THREE.BoxGeometry(s * 1.6, s * 1.0, s * 1.6), glassMat);
        cabinGrp.add(cabinBody, windowFront); cabinGrp.position.set(-s * 3, height - s * 1.4, s * 1.2); g.add(cabinGrp);

        const hoistPos = s * 2;
        for (const z of [-s * 0.4, s * 0.4]) {
            const cable = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.04, s * 0.04, s * 5), darkMat); cable.position.set(hoistPos, height - s * 2.5, z); g.add(cable);
        }
        const hookBlock = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, s * 0.5, s * 1.2), mainMat); hookBlock.position.set(hoistPos, height - s * 5, 0);
        const hook = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.2, s * 0.2, s * 1), darkMat); hook.position.set(hoistPos, height - s * 5.7, 0);
        g.add(hookBlock, hook);

        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: span, obstacleHeight: height + s * 2, crashWeight: 15.0, type: "prop" };
        return g;
    };

    const makeTowerCrane = (s, rng) => {
        const g = new THREE.Group();
        const mainMat = craneMat_tyellow; const darkMat = craneMat_tdark; const whiteMat = craneMat_twhite; const glassMat = craneMat_glass;
        const height = s * 12.0; const jibLength = s * 14.0; const counterJibLength = s * 5.0;

        const base = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.2, s * 1.5, s * 1.5, 8), darkMat); base.position.set(0, s * 0.75, 0); g.add(base);
        const mast = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, height, s * 1.5), mainMat); mast.position.set(0, height / 2 + s * 1.5, 0); g.add(mast);
        const slewingRing = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.6, s * 1.6, s * 0.8, 16), darkMat); slewingRing.position.set(0, height + s * 1.9, 0); g.add(slewingRing);

        const upperGrp = new THREE.Group(); upperGrp.position.set(0, height + s * 2.3, 0);
        const cabinBody = new THREE.Mesh(new THREE.BoxGeometry(s * 1.2, s * 1.8, s * 1.5), whiteMat); cabinBody.position.set(s * 1.2, s * 0.9, s * 1.2);
        const cabinGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 1.3, s * 1.0, s * 1.6), glassMat); cabinGlass.position.set(s * 1.2, s * 1.2, s * 1.2);
        upperGrp.add(cabinBody, cabinGlass);

        const jib = new THREE.Mesh(new THREE.BoxGeometry(jibLength, s * 0.8, s * 0.8), mainMat); jib.position.set(jibLength / 2 + s * 0.75, s * 1.5, 0); upperGrp.add(jib);
        const counterJib = new THREE.Mesh(new THREE.BoxGeometry(counterJibLength, s * 0.8, s * 0.8), mainMat); counterJib.position.set(-counterJibLength / 2 - s * 0.75, s * 1.5, 0); upperGrp.add(counterJib);
        const counterWeight = new THREE.Mesh(new THREE.BoxGeometry(s * 2, s * 1.5, s * 1.8), darkMat); counterWeight.position.set(-counterJibLength + s * 0.5, s * 1.5, 0); upperGrp.add(counterWeight);

        const apexFront = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 3.5), mainMat); apexFront.position.set(s * 0.5, s * 3.6, 0); apexFront.rotation.z = -0.3;
        const apexBack = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 3.5), mainMat); apexBack.position.set(-s * 0.5, s * 3.6, 0); apexBack.rotation.z = 0.3;
        upperGrp.add(apexFront, apexBack);

        const cableFront = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.05, jibLength * 0.6), darkMat); cableFront.position.set(jibLength * 0.3, s * 3.5, 0); cableFront.rotation.z = Math.PI / 2 - 0.2;
        const cableBack = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.08, s * 0.08, counterJibLength), darkMat); cableBack.position.set(-counterJibLength / 2, s * 3.6, 0); cableBack.rotation.z = Math.PI / 2 + 0.3;
        upperGrp.add(cableFront, cableBack);

        const trolleyDist = jibLength * (0.3 + rng() * 0.6);
        const trolley = new THREE.Mesh(new THREE.BoxGeometry(s * 1.2, s * 0.6, s * 1.2), darkMat); trolley.position.set(s * 0.75 + trolleyDist, s * 1.0, 0);
        const dropLength = s * 4 + rng() * s * 4;
        const hoistCable = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.05, dropLength), darkMat); hoistCable.position.set(s * 0.75 + trolleyDist, s * 1.0 - dropLength / 2, 0);
        const hookBlock = new THREE.Mesh(new THREE.BoxGeometry(s * 0.8, s * 0.5, s * 0.8), mainMat); hookBlock.position.set(s * 0.75 + trolleyDist, s * 1.0 - dropLength, 0);
        upperGrp.add(trolley, hoistCable, hookBlock);

        upperGrp.rotation.y = rng() * Math.PI * 2; g.add(upperGrp);
        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 1.5, obstacleHeight: height + s * 5, crashWeight: 10.0, type: "prop" };
        return g;
    };

    const makeExcavatorA = (s, rng) => {
        const g = new THREE.Group();
        const bodyMat = vehMat_yellowBody; const darkMat = vehMat_dark;

        const base = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 0.6, s * 3), darkMat); base.position.y = s * 0.8;
        const trackL = createTrack(s, s * 4.5, s * 1.0, s * 0.8); trackL.position.set(-s * 1.6, s * 0.5, 0);
        const trackR = createTrack(s, s * 4.5, s * 1.0, s * 0.8); trackR.position.set(s * 1.6, s * 0.5, 0);
        g.add(base, trackL, trackR);

        const upper = new THREE.Group(); upper.position.set(0, s * 1.2, 0); upper.rotation.y = (rng() - 0.5) * Math.PI / 2;
        const body = new THREE.Mesh(new THREE.BoxGeometry(s * 2.8, s * 1.5, s * 3.2), bodyMat); body.position.set(0, s * 0.75, s * 0.2);
        const engine = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 1.2, s * 1.5), darkMat); engine.position.set(0, s * 0.9, s * 2.2);
        const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.1, s * 1.5), darkMat); exhaust.position.set(s * 1, s * 2.0, s * 2.5);
        const cab = new THREE.Mesh(new THREE.BoxGeometry(s * 1.2, s * 1.8, s * 1.6), bodyMat); cab.position.set(-s * 0.8, s * 2.4, -s * 0.2);
        const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 1.1, s * 1.0, s * 1.7), sharedGlassMat); cabGlass.position.set(-s * 0.8, s * 2.5, -s * 0.2);

        const boom = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 4.5, s * 0.8), bodyMat); boom.position.set(s * 0.8, s * 2.5, -s * 1.5); boom.rotation.x = -0.5;
        const stick = new THREE.Mesh(new THREE.BoxGeometry(s * 0.5, s * 3.0, s * 0.6), bodyMat); stick.position.set(s * 0.8, s * 3.5, -s * 3.5); stick.rotation.x = 0.8;
        const bucket = new THREE.Mesh(new THREE.BoxGeometry(s * 1.0, s * 1.0, s * 1.0), darkMat); bucket.position.set(s * 0.8, s * 2.0, -s * 4.5); bucket.rotation.x = -0.4;
        const cyl1 = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 2), sharedRimMat); cyl1.position.set(s * 0.8, s * 1.5, -s * 0.5); cyl1.rotation.x = -0.3;

        upper.add(body, engine, exhaust, cab, cabGlass, boom, stick, bucket, cyl1); g.add(upper);
        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 5, crashWeight: 10.0, type: "prop" }; return g;
    };

    const makeDumpTruck = (s, rng) => {
        const g = new THREE.Group();
        const cabMat = vehMat_yellowCab; const bedMat = vehMat_bedGrey; const chassisMat = vehMat_chassis;
        const chassis = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.5, s * 7.5), chassisMat); chassis.position.set(0, s * 1.0, 0); g.add(chassis);

        for (const z of [s * 2.5, -s * 1.5, -s * 2.8]) {
            for (const x of [s * 1.4, -s * 1.4]) {
                const w = createWheel(s, s * 0.8, s * 0.6); w.position.set(x, s * 0.8, z); g.add(w);
            }
        }

        const cabBody = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 2.0, s * 2.0), cabMat); cabBody.position.set(0, s * 2.2, s * 2.5);
        const cabTop = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 1.5, s * 1.5), cabMat); cabTop.position.set(0, s * 3.5, s * 2.2);
        const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 1.0, s * 1.6), sharedGlassMat); cabGlass.position.set(0, s * 3.5, s * 2.2);
        const grill = new THREE.Mesh(new THREE.BoxGeometry(s * 1.6, s * 1.2, s * 0.2), sharedRimMat); grill.position.set(0, s * 2.2, s * 3.5);
        const bumper = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 0.4, s * 0.4), chassisMat); bumper.position.set(0, s * 1.2, s * 3.6);
        g.add(cabBody, cabTop, cabGlass, grill, bumper);

        const bedGrp = new THREE.Group(); bedGrp.position.set(0, s * 1.5, -s * 3.5); bedGrp.rotation.x = rng() > 0.7 ? -0.4 : 0;
        const bedFloor = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 0.4, s * 5.5), bedMat); bedFloor.position.set(0, s * 0.2, s * 2.5);
        const bedL = new THREE.Mesh(new THREE.BoxGeometry(s * 0.2, s * 1.8, s * 5.5), bedMat); bedL.position.set(s * 1.2, s * 1.3, s * 2.5);
        const bedR = new THREE.Mesh(new THREE.BoxGeometry(s * 0.2, s * 1.8, s * 5.5), bedMat); bedR.position.set(-s * 1.2, s * 1.3, s * 2.5);
        const bedFront = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 2.0, s * 0.2), bedMat); bedFront.position.set(0, s * 1.4, s * 5.1);
        const bedBack = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 1.8, s * 0.2), bedMat); bedBack.position.set(0, s * 1.3, 0);
        if (bedGrp.rotation.x < 0) bedBack.rotation.x = 0.5;

        bedGrp.add(bedFloor, bedL, bedR, bedFront, bedBack); g.add(bedGrp);
        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 4, crashWeight: 12.0, type: "prop" }; return g;
    };

    const makeBulldozer = (s, rng) => {
        const g = new THREE.Group();
        const bodyMat = vehMat_bulldozerBody; const darkMat = vehMat_chassis;

        const trackL = createTrack(s, s * 4.0, s * 1.2, s * 0.8); trackL.position.set(-s * 1.5, s * 0.6, 0);
        const trackR = createTrack(s, s * 4.0, s * 1.2, s * 0.8); trackR.position.set(s * 1.5, s * 0.6, 0);
        g.add(trackL, trackR);

        const body = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 1.5, s * 3.8), bodyMat); body.position.set(0, s * 1.5, 0);
        const engine = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 1.0, s * 1.8), bodyMat); engine.position.set(0, s * 2.5, s * 0.8);
        const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.1, s * 0.1, s * 1.2), darkMat); exhaust.position.set(s * 0.6, s * 3.2, s * 1.2);
        const cab = new THREE.Mesh(new THREE.BoxGeometry(s * 2.0, s * 2.0, s * 1.8), bodyMat); cab.position.set(0, s * 2.8, -s * 0.8);
        const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 1.2, s * 1.9), sharedGlassMat); cabGlass.position.set(0, s * 2.9, -s * 0.8);
        const rollCage = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 2.2, s * 2.0), darkMat); rollCage.position.set(0, s * 2.8, -s * 0.8);

        const bladeArmL = new THREE.Mesh(new THREE.BoxGeometry(s * 0.3, s * 0.4, s * 2.5), bodyMat); bladeArmL.position.set(s * 1.8, s * 1.0, s * 1.5);
        const bladeArmR = new THREE.Mesh(new THREE.BoxGeometry(s * 0.3, s * 0.4, s * 2.5), bodyMat); bladeArmR.position.set(-s * 1.8, s * 1.0, s * 1.5);
        const blade = new THREE.Mesh(new THREE.BoxGeometry(s * 4.5, s * 2.0, s * 0.5), sharedRimMat); blade.position.set(0, s * 1.0, s * 2.8); blade.rotation.x = -0.2;

        const ripperArm = new THREE.Mesh(new THREE.BoxGeometry(s * 1.5, s * 0.4, s * 1.5), bodyMat); ripperArm.position.set(0, s * 1.0, -s * 2.4); ripperArm.rotation.x = 0.5;
        const ripperClaw = new THREE.Mesh(new THREE.BoxGeometry(s * 0.4, s * 1.5, s * 0.4), darkMat); ripperClaw.position.set(0, s * 0.5, -s * 3.0); ripperClaw.rotation.x = -0.3;

        g.add(body, engine, exhaust, cab, cabGlass, rollCage, bladeArmL, bladeArmR, blade, ripperArm, ripperClaw);
        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 2.5, obstacleHeight: s * 4, crashWeight: 15.0, type: "prop" }; return g;
    };

    const makeLargeTruck = (s, rng) => {
        const g = new THREE.Group();
        const cabMat = vehMat_blueCab; const bedMat = vehMat_bedDark; const chassisMat = vehMat_chassis;
        const chassis = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.5, s * 9.0), chassisMat); chassis.position.set(0, s * 1.0, 0); g.add(chassis);

        for (const z of [s * 3.5, s * 1.5, -s * 2.5, -s * 3.8]) {
            for (const x of [s * 1.4, -s * 1.4]) {
                const w = createWheel(s, s * 0.8, s * 0.6); w.position.set(x, s * 0.8, z); g.add(w);
            }
        }

        const cabBody = new THREE.Mesh(new THREE.BoxGeometry(s * 2.6, s * 2.5, s * 2.5), cabMat); cabBody.position.set(0, s * 2.5, s * 3.2);
        const cabWindDef = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 1.0, s * 1.8), new THREE.MeshStandardMaterial({ color: 0xeeeeee, roughness: 0.5, metalness: 0.2 })); cabWindDef.position.set(0, s * 4.0, s * 3.2);
        const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 2.7, s * 1.2, s * 2.0), sharedGlassMat); cabGlass.position.set(0, s * 3.0, s * 3.3);
        const grill = new THREE.Mesh(new THREE.BoxGeometry(s * 1.8, s * 1.5, s * 0.2), sharedRimMat); grill.position.set(0, s * 2.0, s * 4.5);
        const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.15, s * 0.15, s * 3), sharedRimMat); exhaust.position.set(s * 1.4, s * 3.0, s * 1.8);
        g.add(cabBody, cabWindDef, cabGlass, grill, exhaust);

        const bed = new THREE.Mesh(new THREE.BoxGeometry(s * 2.8, s * 0.4, s * 6.5), bedMat); bed.position.set(0, s * 1.4, -s * 1.2);
        const headboard = new THREE.Mesh(new THREE.BoxGeometry(s * 2.8, s * 1.5, s * 0.4), bedMat); headboard.position.set(0, s * 2.2, s * 1.8);
        g.add(bed, headboard);

        if (rng() > 0.5) {
            const load = new THREE.Mesh(new THREE.BoxGeometry(s * 2.0, s * 1.5, s * 4.0), new THREE.MeshStandardMaterial({ color: 0x886644 })); load.position.set(0, s * 2.3, -s * 1.0);
            const tarp = new THREE.Mesh(new THREE.BoxGeometry(s * 2.1, s * 1.6, s * 4.1), new THREE.MeshStandardMaterial({ color: 0x22aa33, roughness: 0.9 })); tarp.position.set(0, s * 2.3, -s * 1.0);
            g.add(rng() > 0.5 ? load : tarp);
        }

        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 3.5, obstacleHeight: s * 4, crashWeight: 14.0, type: "prop" }; return g;
    };

    const makeCargoTruck = (s, rng) => {
        const g = new THREE.Group();
        const cabMat = vehMat_redCab; const boxMat = vehMat_cargoWhite; const chassisMat = vehMat_chassis;
        const chassis = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.5, s * 8.0), chassisMat); chassis.position.set(0, s * 1.0, s * 0.5); g.add(chassis);

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
        const cabMat = vehMat_mixerCab; const drumMat = vehMat_drumWhite; const chassisMat = vehMat_mixerChassis; const accentMat = vehMat_mixerAccent;
        const chassis = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.5, s * 7.0), chassisMat); chassis.position.set(0, s * 1.0, 0); g.add(chassis);

        for (const z of [s * 2.5, -s * 1.2, -s * 2.5]) {
            for (const x of [s * 1.4, -s * 1.4]) {
                const w = createWheel(s, s * 0.8, s * 0.6); w.position.set(x, s * 0.8, z); g.add(w);
            }
        }

        const cabBody = new THREE.Mesh(new THREE.BoxGeometry(s * 2.4, s * 2.0, s * 2.0), cabMat); cabBody.position.set(0, s * 2.2, s * 2.2);
        const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 2.5, s * 1.0, s * 1.6), sharedGlassMat); cabGlass.position.set(0, s * 3.0, s * 2.2);
        g.add(cabBody, cabGlass);

        const drumGroup = new THREE.Group(); drumGroup.position.set(0, s * 2.5, -s * 0.8); drumGroup.rotation.x = 0.3;
        const drumBody = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.4, s * 0.8, s * 4.5, 16), drumMat); drumBody.rotation.x = Math.PI / 2;
        const stripe = new THREE.Mesh(new THREE.CylinderGeometry(s * 1.42, s * 1.1, s * 0.8, 16), accentMat); stripe.rotation.x = Math.PI / 2; stripe.position.z = -s * 1.0;
        const waterTank = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.6, s * 0.6, s * 1.5), cabMat); waterTank.position.set(0, s * 1.6, s * 1.8); waterTank.rotation.z = Math.PI / 2;
        drumGroup.add(drumBody, stripe); g.add(drumGroup, waterTank);

        const funnel = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.8, s * 0.4, s * 1.0), drumMat); funnel.position.set(0, s * 3.2, -s * 3.2); funnel.rotation.x = -0.3;
        const chute = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 0.2, s * 2.0), drumMat); chute.position.set(0, s * 1.8, -s * 3.8); chute.rotation.x = -0.5;
        g.add(funnel, chute);

        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 4, crashWeight: 12.0, type: "prop" }; return g;
    };

    const makeExcavatorB = (s, rng) => {
        const g = new THREE.Group();
        const bodyMat = vehMat_orangeBody; const darkMat = vehMat_orangeDark;

        const base = new THREE.Mesh(new THREE.BoxGeometry(s * 2.0, s * 0.6, s * 2.5), darkMat); base.position.y = s * 0.8; g.add(base);

        for (const z of [s * 1.0, -s * 1.0]) {
            for (const x of [s * 1.2, -s * 1.2]) {
                const w = createWheel(s, s * 0.6, s * 0.4); w.position.set(x, s * 0.6, z); g.add(w);
            }
        }

        for (const x of [s * 1.5, -s * 1.5]) {
            const rig = new THREE.Mesh(new THREE.BoxGeometry(s * 0.2, s * 1.2, s * 0.2), darkMat); rig.position.set(x, s * 0.6, -s * 1.4); rig.rotation.z = x > 0 ? -0.3 : 0.3;
            const pad = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 0.2, s * 0.6), bodyMat); pad.position.set(x + (x > 0 ? s * 0.2 : -s * 0.2), s * 0.1, -s * 1.5);
            g.add(rig, pad);
        }

        const upper = new THREE.Group(); upper.position.set(0, s * 1.2, 0); upper.rotation.y = rng() * Math.PI;
        const body = new THREE.Mesh(new THREE.BoxGeometry(s * 2.0, s * 1.2, s * 2.2), bodyMat); body.position.set(0, s * 0.6, 0);
        const cab = new THREE.Mesh(new THREE.BoxGeometry(s * 1.0, s * 1.6, s * 1.2), bodyMat); cab.position.set(-s * 0.5, s * 2.0, s * 0.5);
        const cabGlass = new THREE.Mesh(new THREE.BoxGeometry(s * 0.9, s * 0.8, s * 1.3), sharedGlassMat); cabGlass.position.set(-s * 0.5, s * 2.0, s * 0.5);
        const blade = new THREE.Mesh(new THREE.BoxGeometry(s * 2.2, s * 0.6, s * 0.2), darkMat); blade.position.set(0, s * 0.2, s * 1.4);

        const boom = new THREE.Mesh(new THREE.BoxGeometry(s * 0.4, s * 3.0, s * 0.5), bodyMat); boom.position.set(s * 0.6, s * 2.0, s * 0.8); boom.rotation.x = 0.4;
        const stick = new THREE.Mesh(new THREE.BoxGeometry(s * 0.3, s * 2.2, s * 0.4), bodyMat); stick.position.set(s * 0.6, s * 2.6, s * 2.2); stick.rotation.x = -0.5;
        const bucket = new THREE.Mesh(new THREE.BoxGeometry(s * 0.6, s * 0.8, s * 0.8), darkMat); bucket.position.set(s * 0.6, s * 1.6, s * 2.8); bucket.rotation.x = 0.2;

        upper.add(body, cab, cabGlass, blade, boom, stick, bucket); g.add(upper);
        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 2, obstacleHeight: s * 3, crashWeight: 7.0, type: "prop" }; return g;
    };

    const makeWorksiteProps = (s, rng) => {
        const g = new THREE.Group();
        const dirtMat = new THREE.MeshStandardMaterial({ color: 0x553311, roughness: 0.9 });
        const dirt = new THREE.Mesh(new THREE.SphereGeometry(s * 2, 7, 7, 0, Math.PI * 2, 0, Math.PI / 2), dirtMat);
        dirt.scale.set(1, 0.4, 1.2); dirt.position.set(0, 0, 0); g.add(dirt);

        if (rng() > 0.3) {
            const pipeMat = new THREE.MeshStandardMaterial({ color: 0x999999, roughness: 0.8 });
            const pipeLoc = s * 2;
            for (let i = 0; i < 3; i++) {
                const pipe = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.6, s * 0.6, s * 2, 12), pipeMat); pipe.rotation.x = Math.PI / 2;
                pipe.position.set(pipeLoc + (i % 2) * s * 1.2, s * 0.6 + Math.floor(i / 2) * s * 1.0, s * 1.5); g.add(pipe);
            }
        }

        const coneMat = new THREE.MeshStandardMaterial({ color: 0xff4400, roughness: 0.6 });
        for (let i = 0; i < 4; i++) {
            const x = (rng() - 0.5) * s * 8; const z = (rng() - 0.5) * s * 8;
            const cone = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.05, s * 0.2, s * 0.6), coneMat); cone.position.set(x, s * 0.3, z); g.add(cone);
        }
        g.traverse((node) => { if (node.isMesh) { node.castShadow = true; node.receiveShadow = true; } });
        g.userData = { obstacleRadius: s * 3, obstacleHeight: s * 1.5, crashWeight: 2.0, type: "decor" }; return g;
    };

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
    const makeAbandonedDrill = (s, rng) => makeCityVan(s, rng);

    return {
        makeCraneBase, makeHeavyGantryCrane, makeTowerCrane,
        makeExcavatorA, makeDumpTruck, makeBulldozer, makeLargeTruck, makeCargoTruck, makeCementMixer, makeExcavatorB,
        makeTowTruck: makeCargoTruck,
        makeWorksiteProps,
        makeCitySedan, makeCityVan, makeAbandonedBus, makeAbandonedDrill
    };
}
