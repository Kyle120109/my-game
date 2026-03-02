import * as THREE from "three";
import { buildAdvancedMaterialSet, createDynamicDirtMask } from "../gameplay/dynamic-materials.js";

function addSpokes(parent, radius, width, count, material) {
    for (let i = 0; i < count; i += 1) {
        const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, radius * 1.9, 8), material);
        spoke.rotation.x = (i / count) * Math.PI;
        spoke.position.x = width;
        parent.add(spoke);
    }
}

export function setupRacers(textureSet) {
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
        rearSwingPivot.position.set(0, 0.6, -0.36);
        bikeRoot.add(rearSwingPivot);
        addTube(0.036, 1.02, new THREE.Vector3(0, -0.12, -0.44), new THREE.Vector3(1.24, 0, 0), mats.darkRubber, 14);

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
        handleBarRoot.position.set(0, 0.98, 0.82);
        handleBarRoot.rotation.x = -0.38;
        bikeRoot.add(handleBarRoot);

        const stem = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.16), mats.chrome);
        stem.position.set(0, 0.2, 0.04);
        handleBarRoot.add(stem);

        const handleWrapper = new THREE.Group();
        handleWrapper.position.set(0, 0.2, 0.08);
        handleWrapper.rotation.x = 0.38;
        handleBarRoot.add(handleWrapper);

        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.037, 0.037, 0.76, 20), mats.chrome);
        handle.rotation.z = Math.PI / 2;
        handleWrapper.add(handle);
        const gripGeo = new THREE.CylinderGeometry(0.052, 0.052, 0.17, 16);
        const gripL = new THREE.Mesh(gripGeo, mats.darkRubber);
        gripL.rotation.z = Math.PI / 2;
        gripL.position.set(-0.33, 0, 0);
        const gripR = gripL.clone();
        gripR.position.set(0.33, 0, 0);

        const gripTargetL = new THREE.Group();
        gripTargetL.position.set(-0.35, 0.03, 0.05);
        const gripTargetR = new THREE.Group();
        gripTargetR.position.set(0.35, 0.03, 0.05);
        handleWrapper.add(gripL, gripR, gripTargetL, gripTargetR);

        const forkPivot = new THREE.Group();
        forkPivot.position.set(0, 0, 0);
        handleBarRoot.add(forkPivot);
        const forkLeft = new THREE.Mesh(new THREE.CylinderGeometry(0.032, 0.032, 1.1, 14), mats.chrome);
        forkLeft.position.set(-0.12, -0.45, 0);
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
        rearWheelMount.position.set(0, -0.55, -0.95);
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
        frontWheelMount.position.set(0, -1.0, 0);
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

        const pelvisPivot = new THREE.Group();
        pelvisPivot.position.set(0, 0, -0.2);
        riderRoot.add(pelvisPivot);
        const pelvis = new THREE.Mesh(new THREE.CapsuleGeometry(0.2, 0.18, 16, 32), mats.cloth);
        const belt = new THREE.Mesh(new THREE.TorusGeometry(0.21, 0.04, 12, 32), mats.darkRubber);
        belt.rotation.x = Math.PI / 2;
        belt.position.y = 0.08;
        const buckle = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.08, 0.04), mats.chrome);
        buckle.position.set(0, 0.08, 0.22);
        pelvisPivot.add(pelvis, belt, buckle);

        const lowerSpinePivot = new THREE.Group();
        lowerSpinePivot.position.set(0, 0.1, 0);
        pelvisPivot.add(lowerSpinePivot);
        const lowerTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.21, 0.2, 16), mats.cloth);
        lowerTorso.position.y = 0.1;
        lowerSpinePivot.add(lowerTorso);

        const midSpinePivot = new THREE.Group();
        midSpinePivot.position.set(0, 0.2, 0);
        lowerSpinePivot.add(midSpinePivot);
        const midTorso = new THREE.Mesh(new THREE.CylinderGeometry(0.21, 0.19, 0.25, 16), mats.cloth);
        midTorso.position.y = 0.125;
        const armorStrapBase = new THREE.Mesh(new THREE.BoxGeometry(0.44, 0.05, 0.44), mats.darkRubber);
        armorStrapBase.position.y = 0.1;
        midSpinePivot.add(midTorso, armorStrapBase);

        const upperSpinePivot = new THREE.Group();
        upperSpinePivot.position.set(0, 0.25, 0);
        midSpinePivot.add(upperSpinePivot);
        const upperTorso = new THREE.Mesh(new THREE.CapsuleGeometry(0.24, 0.25, 16, 32), mats.cloth);
        upperTorso.position.set(0, 0.12, 0.04);

        const chestPlate = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.22, 0.12), mats.accent);
        chestPlate.position.set(0, 0.15, 0.14);
        chestPlate.rotation.x = -0.15;
        const chestCore = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.14, 16), mats.chrome);
        chestCore.rotation.x = Math.PI / 2;
        chestCore.position.set(0, 0.15, 0.18);
        const backPlate = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.3, 0.08), mats.accent);
        backPlate.position.set(0, 0.15, -0.12);
        upperSpinePivot.add(upperTorso, chestPlate, chestCore, backPlate);

        const lowerNeckPivot = new THREE.Group();
        lowerNeckPivot.position.set(0, 0.35, 0.04);
        upperSpinePivot.add(lowerNeckPivot);
        const lowerNeck = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.08, 0.1, 16), mats.skin);
        lowerNeck.position.y = 0.05;
        lowerNeckPivot.add(lowerNeck);

        const upperNeckPivot = new THREE.Group();
        upperNeckPivot.position.set(0, 0.1, 0);
        lowerNeckPivot.add(upperNeckPivot);

        const headPivot = new THREE.Group();
        headPivot.position.set(0, 0.06, 0);
        upperNeckPivot.add(headPivot);

        const head = new THREE.Mesh(new THREE.SphereGeometry(0.2, 32, 32), mats.skin);
        const helmetBase = new THREE.Mesh(new THREE.SphereGeometry(0.215, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.55), mats.darkRubber);
        helmetBase.position.y = 0.02;
        const helmetRidge = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.15, 0.35), mats.accent);
        helmetRidge.position.set(0, 0.2, -0.05);
        helmetRidge.rotation.x = 0.2;
        const visorPivot = new THREE.Group();
        visorPivot.position.set(0, 0.05, 0);
        const visor = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.15, 32, 1, false, Math.PI * 0.2, Math.PI * 0.6), new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.1, metalness: 0.9 }));
        visor.rotation.y = -Math.PI / 2;
        visorPivot.add(visor);
        const jawPivot = new THREE.Group();
        jawPivot.position.set(0, -0.05, 0.1);
        const jawPanel = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.06, 0.1), mats.darkRubber);
        jawPanel.position.set(0, -0.08, 0.14);
        jawPanel.rotation.x = -0.2;
        jawPivot.add(jawPanel);

        headPivot.add(head, helmetBase, helmetRidge, visorPivot, jawPivot);

        const makeArm = (side) => {
            const clavicle = new THREE.Group();
            clavicle.position.set(side * 0.1, 0.28, 0.05);
            upperSpinePivot.add(clavicle);

            const shoulderPivot = new THREE.Group();
            shoulderPivot.position.set(side * 0.22, 0, 0);
            clavicle.add(shoulderPivot);

            const pauldron = new THREE.Mesh(new THREE.SphereGeometry(0.12, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2), mats.accent);
            pauldron.rotation.z = side * Math.PI / 4;
            pauldron.position.y = 0.05;

            const upperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.40, 12, 24), mats.cloth);
            upperArm.position.set(0, -0.20, 0);

            const upperTwist = new THREE.Group();
            upperTwist.position.set(0, -0.40, 0);
            shoulderPivot.add(pauldron, upperArm, upperTwist);

            const elbowPivot = new THREE.Group();
            const elbowPad = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.1), mats.darkRubber);
            elbowPad.position.set(0, 0, -0.06);
            upperTwist.add(elbowPivot);

            const lowerArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.055, 0.40, 12, 24), mats.skin);
            lowerArm.position.set(0, -0.20, 0);

            const lowerTwist = new THREE.Group();
            lowerTwist.position.set(0, -0.40, 0);
            elbowPivot.add(elbowPad, lowerArm, lowerTwist);

            const wristPivot = new THREE.Group();
            lowerTwist.add(wristPivot);

            const palm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.04), mats.skin);
            palm.position.set(0, -0.04, 0);
            wristPivot.add(palm);

            const createDigit = (length, radius, segments) => {
                const root = new THREE.Group();
                let currentParent = root;
                const joints = [];
                const segLen = length / segments;
                for (let i = 0; i < segments; i++) {
                    const joint = new THREE.Group();
                    joint.position.y = i === 0 ? 0 : -segLen;
                    const mesh = new THREE.Mesh(new THREE.CapsuleGeometry(radius, segLen, 8, 8), mats.skin);
                    mesh.position.y = -segLen / 2;
                    joint.add(mesh);
                    currentParent.add(joint);
                    joints.push(joint);
                    currentParent = joint;
                }
                return { root, joints };
            };

            const thumb = createDigit(0.06, 0.015, 2);
            thumb.root.position.set(side * 0.04, -0.02, 0.02);
            thumb.root.rotation.z = side * Math.PI / 4;

            const indexFinger = createDigit(0.08, 0.012, 3);
            indexFinger.root.position.set(side * 0.03, -0.08, 0);
            const midFinger = createDigit(0.085, 0.012, 3);
            midFinger.root.position.set(0, -0.08, 0);
            const pinkyFinger = createDigit(0.07, 0.012, 3);
            pinkyFinger.root.position.set(side * -0.03, -0.08, 0);

            wristPivot.add(thumb.root, indexFinger.root, midFinger.root, pinkyFinger.root);

            return { clavicle, shoulderPivot, upperTwist, elbowPivot, lowerTwist, wristPivot, digits: { thumb, indexFinger, midFinger, pinkyFinger } };
        };

        const makeLeg = (side) => {
            const hipPivot = new THREE.Group();
            hipPivot.position.set(side * 0.12, -0.05, 0);
            pelvisPivot.add(hipPivot);

            const upperLeg = new THREE.Mesh(new THREE.CapsuleGeometry(0.08, 0.46, 16, 24), mats.cloth);
            upperLeg.position.set(0, -0.23, 0);

            const upperLegTwist = new THREE.Group();
            upperLegTwist.position.set(0, -0.46, 0);
            hipPivot.add(upperLeg, upperLegTwist);

            const kneePivot = new THREE.Group();
            const kneePad = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.12, 0.1), mats.darkRubber);
            kneePad.position.set(0, 0, 0.06);
            upperLegTwist.add(kneePivot);

            const lowerLeg = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.46, 16, 24), mats.cloth);
            lowerLeg.position.set(0, -0.23, 0);

            const lowerLegTwist = new THREE.Group();
            lowerLegTwist.position.set(0, -0.46, 0);
            kneePivot.add(kneePad, lowerLeg, lowerLegTwist);

            const anklePivot = new THREE.Group();
            lowerLegTwist.add(anklePivot);

            const heel = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.06, 0.08), mats.darkRubber);
            heel.position.set(0, -0.03, -0.04);
            const ballPivot = new THREE.Group();
            ballPivot.position.set(0, 0, 0.04);
            const ball = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.05, 0.12), mats.darkRubber);
            ball.position.set(0, -0.025, 0.06);
            const toePivot = new THREE.Group();
            toePivot.position.set(0, 0, 0.12);
            const toe = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.04, 0.08), mats.darkRubber);
            toe.position.set(0, -0.02, 0.04);

            toePivot.add(toe);
            ballPivot.add(ball, toePivot);
            anklePivot.add(heel, ballPivot);

            return { hipPivot, upperLegTwist, kneePivot, lowerLegTwist, anklePivot, ballPivot, toePivot };
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
            pedalR: pedalA,
            pedalL: pedalB,
            rig: {
                spinePivot: pelvisPivot,
                pelvisPivot,
                lowerSpine: lowerSpinePivot,
                midSpine: midSpinePivot,
                upperSpine: upperSpinePivot,
                lowerNeck: lowerNeckPivot,
                upperNeck: upperNeckPivot,
                neckPivot: lowerNeckPivot,
                headPivot,
                jawPivot,
                visorPivot,

                leftShoulder: leftArm.shoulderPivot,
                leftElbow: leftArm.elbowPivot,
                leftWrist: leftArm.wristPivot,
                leftClavicle: leftArm.clavicle,
                leftUpperTwist: leftArm.upperTwist,
                leftLowerTwist: leftArm.lowerTwist,
                leftDigits: leftArm.digits,

                rightShoulder: rightArm.shoulderPivot,
                rightElbow: rightArm.elbowPivot,
                rightWrist: rightArm.wristPivot,
                rightClavicle: rightArm.clavicle,
                rightUpperTwist: rightArm.upperTwist,
                rightLowerTwist: rightArm.lowerTwist,
                rightDigits: rightArm.digits,

                leftHip: leftLeg.hipPivot,
                leftKnee: leftLeg.kneePivot,
                leftAnkle: leftLeg.anklePivot,
                leftUpperLegTwist: leftLeg.upperLegTwist,
                leftLowerLegTwist: leftLeg.lowerLegTwist,
                leftBall: leftLeg.ballPivot,
                leftToe: leftLeg.toePivot,

                rightHip: rightLeg.hipPivot,
                rightKnee: rightLeg.kneePivot,
                rightAnkle: rightLeg.anklePivot,
                rightUpperLegTwist: rightLeg.upperLegTwist,
                rightLowerLegTwist: rightLeg.lowerLegTwist,
                rightBall: rightLeg.ballPivot,
                rightToe: rightLeg.toePivot,
            },
            gripL,
            gripR,
            gripTargetL,
            gripTargetR,
        };
    }

    return { createRacerModel };
}
