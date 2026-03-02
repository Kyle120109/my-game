import * as THREE from "three";

export function createMaterialSet(textureSet) {
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
        { body: new THREE.MeshStandardMaterial({ color: 0x2b2b2b, roughness: 0.3, metalness: 0.8, map: textureSet.metal }), trim: new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1, metalness: 0.9 }) },
        { body: new THREE.MeshStandardMaterial({ color: 0xb5a397, roughness: 0.9, metalness: 0.1, map: textureSet.stone }), trim: new THREE.MeshStandardMaterial({ color: 0x5c4d44, roughness: 0.8, metalness: 0.2 }) },
        { body: new THREE.MeshStandardMaterial({ color: 0x1e3a5f, roughness: 0.5, metalness: 0.6 }), trim: new THREE.MeshStandardMaterial({ color: 0xc4d8e2, roughness: 0.3, metalness: 0.8 }) },
    ];
    const buildingGlassMat = new THREE.MeshStandardMaterial({ color: 0x112233, roughness: 0.1, metalness: 0.9, envMapIntensity: 1.0 });
    const buildingRoofMat = new THREE.MeshStandardMaterial({ color: 0x1a1c20, roughness: 0.92 });
    const buildingPillarMat = new THREE.MeshStandardMaterial({ color: 0x444b55, roughness: 0.88 });

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

    return {
        pickupMaterials,
        sharedPickupMaterialSet,
        buildingFacadeStyles,
        buildingGlassMat,
        buildingRoofMat,
        buildingPillarMat,
        createRoadSurfaceMaterial,
        createRoadEdgeMaterial,
        createRoadMarkerMaterial,
    };
}
