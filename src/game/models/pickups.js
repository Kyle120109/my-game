import * as THREE from "three";

const PICKUP_STYLE = {
    turbo: { scale: 2.02, spinMul: 1.22, floatMul: 1.08 },
    bash: { scale: 1.92, spinMul: 1.12, floatMul: 1.02 },
    shock: { scale: 2.05, spinMul: 1.28, floatMul: 1.08 },
    shield: { scale: 2.08, spinMul: 1.16, floatMul: 1.12 },
    trap: { scale: 1.88, spinMul: 1.08, floatMul: 1.0 },
    banana: { scale: 2.15, spinMul: 1.18, floatMul: 1.16 },
    bomb: { scale: 2.08, spinMul: 1.24, floatMul: 1.14 },
};

function createPickupCore(type, materials) {
    if (type === "turbo") {
        const group = new THREE.Group();
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

export function setupPickups(pickupMaterials, sharedPickupMaterialSet) {
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

    function createPickupModel(type) {
        const group = new THREE.Group();
        applyPickupModelType(group, type);
        return group;
    }

    return {
        disposePickupCore,
        applyPickupModelType,
        createPickupModel,
    };
}
