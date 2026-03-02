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

        // High Detail Frame Construction
        const frameMat = mats.frame;
        const weldMat = mats.chrome; // Or slightly darkened frame color

        // Utility to blend joints
        const addWeld = (pos, size = 0.055) => {
            const weld = new THREE.Mesh(new THREE.SphereGeometry(size, 16, 16), weldMat);
            weld.position.copy(pos);
            bikeRoot.add(weld);
        };

        const addTube = (radius, length, pos, rot, mat = frameMat, radial = 24) => {
            const tube = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, length, radial), mat);
            tube.position.copy(pos);
            tube.rotation.set(rot.x, rot.y, rot.z);
            bikeRoot.add(tube);
            return tube;
        };

        // 1. Detailed Frame (Front Triangle)
        // Top Tube
        addTube(0.045, 1.0, new THREE.Vector3(0, 0.98, -0.05), new THREE.Vector3(Math.PI / 2 + 0.15, 0, 0));
        // Down Tube
        addTube(0.055, 1.05, new THREE.Vector3(0, 0.72, 0.2), new THREE.Vector3(Math.PI / 2 - 0.65, 0, 0));
        // Seat Tube
        addTube(0.04, 0.85, new THREE.Vector3(0, 0.8, -0.32), new THREE.Vector3(Math.PI / 2 - 0.2, 0, 0));
        // Head Tube
        addTube(0.05, 0.22, new THREE.Vector3(0, 0.95, 0.45), new THREE.Vector3(Math.PI / 2 - 0.38, 0, 0));

        // Welds
        addWeld(new THREE.Vector3(0, 0.92, 0.42), 0.055); // Top/Head
        addWeld(new THREE.Vector3(0, 1.05, -0.4), 0.045); // Top/Seat
        addWeld(new THREE.Vector3(0, 0.35, -0.15), 0.06); // Down/Seat/BB

        // Bottom Bracket Shell
        const bbShell = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.18, 20), frameMat);
        bbShell.rotation.z = Math.PI / 2;
        bbShell.position.set(0, 0.35, -0.15);
        bikeRoot.add(bbShell);

        // 2. Full Suspension Swingarm (Rear Triangle)
        const rearSwingPivot = new THREE.Group();
        rearSwingPivot.position.set(0, 0.42, -0.2); // Moved down near BB
        bikeRoot.add(rearSwingPivot);

        // Chainstays
        const chainStayL = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.015, 0.85, 16), frameMat);
        chainStayL.position.set(-0.08, -0.05, -0.38);
        chainStayL.rotation.x = Math.PI / 2 + 0.1;
        const chainStayR = chainStayL.clone();
        chainStayR.position.x = 0.08;
        rearSwingPivot.add(chainStayL, chainStayR);

        // Seatstays
        const seatStayL = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.015, 0.8, 16), frameMat);
        seatStayL.position.set(-0.06, 0.3, -0.38);
        seatStayL.rotation.x = Math.PI / 2 + 0.8;
        const seatStayR = seatStayL.clone();
        seatStayR.position.x = 0.06;
        rearSwingPivot.add(seatStayL, seatStayR);

        // Dropouts
        const dropoutL = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.1, 0.15), weldMat);
        dropoutL.position.set(-0.06, -0.1, -0.75);
        const dropoutR = dropoutL.clone();
        dropoutR.position.x = 0.06;
        rearSwingPivot.add(dropoutL, dropoutR);

        // Suspension Linkage & Shock
        const shockPivot = new THREE.Group();
        shockPivot.position.set(0, 0.8, -0.2); // Attached to Seat Tube
        bikeRoot.add(shockPivot);

        const shockBody = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.25, 16), mats.darkRubber);
        shockBody.rotation.x = Math.PI / 2 - 0.2;
        shockBody.position.set(0, -0.1, -0.15);
        const shockCoil = new THREE.Mesh(new THREE.TorusGeometry(0.045, 0.008, 16, 64, Math.PI * 12), mats.accent);
        shockCoil.rotation.x = Math.PI / 2 - 0.2;
        shockCoil.position.set(0, -0.1, -0.15);
        shockPivot.add(shockBody, shockCoil);

        // 3. Cockpit & Steering
        const handleBarRoot = new THREE.Group();
        handleBarRoot.position.set(0, 1.1, 0.52);
        handleBarRoot.rotation.x = -0.38;
        bikeRoot.add(handleBarRoot);

        // Stem
        const stemBase = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.08, 16), mats.chrome);
        const stemBody = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.12), mats.chrome);
        stemBody.position.set(0, 0.02, 0.06);
        const stemplat = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.08, 16), mats.chrome);
        stemplat.rotation.z = Math.PI / 2;
        stemplat.position.set(0, 0.02, 0.12);
        handleBarRoot.add(stemBase, stemBody, stemplat);

        const handleWrapper = new THREE.Group();
        handleWrapper.position.set(0, 0.02, 0.12);
        handleWrapper.rotation.x = 0.38;
        handleBarRoot.add(handleWrapper);

        // Handlebars
        const barCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-0.35, -0.05, 0.05),
            new THREE.Vector3(-0.15, 0, 0),
            new THREE.Vector3(0, 0, 0),
            new THREE.Vector3(0.15, 0, 0),
            new THREE.Vector3(0.35, -0.05, 0.05)
        ]);
        const handle = new THREE.Mesh(new THREE.TubeGeometry(barCurve, 20, 0.018, 12, false), mats.chrome);
        handleWrapper.add(handle);

        // Grips
        const gripGeo = new THREE.CylinderGeometry(0.022, 0.022, 0.15, 16);
        const gripL = new THREE.Mesh(gripGeo, mats.darkRubber);
        gripL.rotation.z = Math.PI / 2;
        gripL.rotation.y = -0.15;
        gripL.position.set(-0.33, -0.04, 0.04);

        // Grip texturing (ribs)
        for (let i = 0; i < 8; i++) {
            const rib = new THREE.Mesh(new THREE.TorusGeometry(0.023, 0.002, 8, 16), mats.darkRubber);
            rib.position.y = -0.06 + (i * 0.015);
            rib.rotation.x = Math.PI / 2;
            gripL.add(rib);
        }

        const gripR = gripL.clone();
        gripR.rotation.y = 0.15;
        gripR.position.set(0.33, -0.04, 0.04);

        // Brake Levers
        const leverGeo = new THREE.BoxGeometry(0.01, 0.01, 0.1);
        const leverL = new THREE.Mesh(leverGeo, mats.chrome);
        leverL.position.set(-0.25, -0.02, 0.05);
        leverL.rotation.y = -0.2;
        const leverR = new THREE.Mesh(leverGeo, mats.chrome);
        leverR.position.set(0.25, -0.02, 0.05);
        leverR.rotation.y = 0.2;

        const gripTargetL = new THREE.Group();
        gripTargetL.position.set(-0.35, 0, 0.04);
        const gripTargetR = new THREE.Group();
        gripTargetR.position.set(0.35, 0, 0.04);
        handleWrapper.add(gripL, gripR, leverL, leverR, gripTargetL, gripTargetR);

        // 4. Suspension Fork
        const forkPivot = new THREE.Group();
        forkPivot.position.set(0, 0, 0);
        handleBarRoot.add(forkPivot);

        // Stanchions (Upper tubes)
        const stanchionL = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.5, 16), mats.chrome);
        stanchionL.position.set(-0.08, -0.25, 0);
        const stanchionR = stanchionL.clone();
        stanchionR.position.x = 0.08;

        // Crown
        const crown = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.06), frameMat);
        crown.position.set(0, -0.05, 0);

        // Lower Legs
        const lowerL = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.55, 16), frameMat);
        lowerL.position.set(-0.08, -0.65, 0);
        const lowerR = lowerL.clone();
        lowerR.position.x = 0.08;

        // Arch/Brace
        const archCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-0.08, -0.4, 0),
            new THREE.Vector3(0, -0.35, 0.05),
            new THREE.Vector3(0.08, -0.4, 0)
        ]);
        const arch = new THREE.Mesh(new THREE.TubeGeometry(archCurve, 10, 0.015, 8, false), frameMat);

        forkPivot.add(stanchionL, stanchionR, crown, lowerL, lowerR, arch);

        // 5. High Detail Wheels & Brakes
        const wheelMat = new THREE.MeshStandardMaterial({ color: 0x12161d, roughness: 0.9, metalness: 0.14, map: textureSet.rubber });
        const rimMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5, metalness: 0.5 });
        const spokeMat = mats.chrome;

        // Detailed Tire with Treads
        const tireRadius = 0.35;
        const tireThickness = 0.05;
        const tireGeo = new THREE.TorusGeometry(tireRadius, tireThickness, 24, 64);
        const rimGeo = new THREE.TorusGeometry(tireRadius - 0.03, 0.02, 16, 64);

        // Add Knobby Treads
        const treadGeo = new THREE.BoxGeometry(0.02, 0.015, 0.04);
        const treadCount = 60;
        const centerTreads = new THREE.InstancedMesh(treadGeo, wheelMat, treadCount);
        const sideTreadsL = new THREE.InstancedMesh(treadGeo, wheelMat, treadCount);
        const sideTreadsR = new THREE.InstancedMesh(treadGeo, wheelMat, treadCount);

        const dummy = new THREE.Object3D();
        for (let i = 0; i < treadCount; i++) {
            const angle = (i / treadCount) * Math.PI * 2;

            // Center
            dummy.position.set(Math.cos(angle) * (tireRadius + tireThickness), Math.sin(angle) * (tireRadius + tireThickness), 0);
            dummy.lookAt(0, 0, 0);
            dummy.updateMatrix();
            centerTreads.setMatrixAt(i, dummy.matrix);

            // Side L
            dummy.position.set(Math.cos(angle) * (tireRadius + tireThickness * 0.7), Math.sin(angle) * (tireRadius + tireThickness * 0.7), 0.035);
            dummy.lookAt(0, 0, 0);
            dummy.rotateX(0.5);
            dummy.updateMatrix();
            sideTreadsL.setMatrixAt(i, dummy.matrix);

            // Side R
            dummy.position.set(Math.cos(angle) * (tireRadius + tireThickness * 0.7), Math.sin(angle) * (tireRadius + tireThickness * 0.7), -0.035);
            dummy.lookAt(0, 0, 0);
            dummy.rotateX(-0.5);
            dummy.updateMatrix();
            sideTreadsR.setMatrixAt(i, dummy.matrix);
        }

        const hubGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.12, 20);
        const brakeDiscGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.005, 32);

        // Brake Calipers (Static)
        const caliperGeo = new THREE.BoxGeometry(0.04, 0.06, 0.03);
        const rearCaliper = new THREE.Mesh(caliperGeo, mats.accent);
        rearCaliper.position.set(0.12, 0.05, -0.05);
        const frontCaliper = new THREE.Mesh(caliperGeo, mats.accent);
        frontCaliper.position.set(-0.05, 0.12, 0.05);

        const rearWheelMount = new THREE.Group();
        rearWheelMount.position.set(0, -0.1, -0.75); // Matches dropout location
        rearSwingPivot.add(rearWheelMount, rearCaliper);
        const rearWheelSpin = new THREE.Group();
        rearWheelMount.add(rearWheelSpin);

        const rearTire = new THREE.Mesh(tireGeo, wheelMat);
        const rearRim = new THREE.Mesh(rimGeo, rimMat);
        const rearHub = new THREE.Mesh(hubGeo, mats.chrome);
        rearHub.rotation.x = Math.PI / 2;
        const rearBrake = new THREE.Mesh(brakeDiscGeo, mats.chrome);
        rearBrake.rotation.x = Math.PI / 2;
        rearBrake.position.z = -0.05;

        // Cassette (Gears)
        const cassette = new THREE.Group();
        for (let i = 0; i < 8; i++) {
            const cog = new THREE.Mesh(new THREE.CylinderGeometry(0.1 - (i * 0.008), 0.1 - (i * 0.008), 0.005, 24), mats.chrome);
            cog.rotation.x = Math.PI / 2;
            cog.position.z = 0.02 + (i * 0.006);
            cassette.add(cog);
        }

        rearWheelSpin.add(rearTire, centerTreads, sideTreadsL, sideTreadsR, rearRim, rearHub, rearBrake, cassette);
        addSpokes(rearWheelSpin, tireRadius - 0.03, 0.03, 16, spokeMat);
        addSpokes(rearWheelSpin, tireRadius - 0.03, -0.03, 16, spokeMat);
        rearWheelSpin.rotation.y = Math.PI / 2;

        const frontWheelMount = new THREE.Group();
        frontWheelMount.position.set(0, -0.9, 0); // Dropouts on fork
        forkPivot.add(frontWheelMount, frontCaliper);
        const frontWheelSpin = new THREE.Group();
        frontWheelMount.add(frontWheelSpin);

        const frontTire = rearTire.clone();
        const frontCenterTreads = centerTreads.clone();
        const frontSideL = sideTreadsL.clone();
        const frontSideR = sideTreadsR.clone();
        const frontRim = rearRim.clone();
        const frontHub = rearHub.clone();
        const frontBrake = rearBrake.clone();
        frontBrake.position.z = 0.05; // Flip disc to other side

        frontWheelSpin.add(frontTire, frontCenterTreads, frontSideL, frontSideR, frontRim, frontHub, frontBrake);
        addSpokes(frontWheelSpin, tireRadius - 0.03, 0.03, 16, spokeMat);
        addSpokes(frontWheelSpin, tireRadius - 0.03, -0.03, 16, spokeMat);
        frontWheelSpin.rotation.y = Math.PI / 2;

        // 6. Seating
        const seatPost = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.25, 12), mats.chrome);
        seatPost.position.set(0, 1.1, -0.4);
        seatPost.rotation.x = -0.2;

        // Sculpted Saddle
        const seatShape = new THREE.Shape();
        seatShape.moveTo(0, 0.15);
        seatShape.quadraticCurveTo(0.08, 0.05, 0.08, -0.1);
        seatShape.quadraticCurveTo(0, -0.15, -0.08, -0.1);
        seatShape.quadraticCurveTo(-0.08, 0.05, 0, 0.15);
        const seatGeo = new THREE.ExtrudeGeometry(seatShape, { depth: 0.04, bevelEnabled: true, bevelSize: 0.01 });
        seatGeo.center();
        const seat = new THREE.Mesh(seatGeo, mats.darkRubber);
        seat.rotation.x = Math.PI / 2 + 0.1;
        seat.position.set(0, 1.22, -0.42);
        bikeRoot.add(seatPost, seat);

        // 7. Drivetrain (Cranks, Chainring, Chain, Pedals)
        const crankRoot = new THREE.Group();
        crankRoot.position.set(0, 0.35, -0.15); // Matches new BB shell
        bikeRoot.add(crankRoot);

        // Chainring with teeth
        const chainring = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.01, 32), mats.chrome);
        chainring.rotation.x = Math.PI / 2;
        chainring.position.z = 0.05;
        crankRoot.add(chainring);

        // Derailleur (Static representation on swingarm)
        const derailleur = new THREE.Group();
        derailleur.position.set(0.06, -0.15, -0.75);
        const cage = new THREE.Mesh(new THREE.BoxGeometry(0.015, 0.12, 0.03), mats.chrome);
        cage.rotation.z = -0.5;
        const pulley1 = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.02, 12), frameMat);
        pulley1.rotation.x = Math.PI / 2;
        pulley1.position.set(0, 0.04, 0);
        const pulley2 = pulley1.clone();
        pulley2.position.set(0.03, -0.04, 0);
        derailleur.add(cage, pulley1, pulley2);
        rearSwingPivot.add(derailleur);

        // Chain Loop
        const chainCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0.05, 0.12, 0), // Top of chainring
            new THREE.Vector3(0.05, 0.45, -0.6), // Top of cassette (relative to BB)
            new THREE.Vector3(0.05, 0.25, -0.65), // Through derailleur
            new THREE.Vector3(0.05, -0.12, 0), // Bottom of chainring
        ], true);
        const chain = new THREE.Mesh(new THREE.TubeGeometry(chainCurve, 24, 0.008, 4, true), mats.chrome);
        crankRoot.add(chain);

        // Crank Arms & Pedals
        const crankArmL = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.18, 0.015), mats.chrome);
        crankArmL.position.set(-0.07, 0, 0);
        crankArmL.rotation.z = Math.PI / 2;
        crankArmL.position.set(0, 0.09, 0.07); // Right side (A)
        const crankArmR = crankArmL.clone();
        crankArmR.position.set(0, -0.09, -0.07); // Left side (B)

        // Platform Pedals with pins
        const pedalGeo = new THREE.BoxGeometry(0.1, 0.02, 0.08);
        const pedalA = new THREE.Mesh(pedalGeo, mats.darkRubber);
        pedalA.position.set(0, 0.18, 0.08);
        const pedalB = pedalA.clone();
        pedalB.position.set(0, -0.18, -0.08);

        crankRoot.add(crankArmL, crankArmR, pedalA, pedalB);


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
