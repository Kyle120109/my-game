import * as THREE from "three";

export function setupEnvironmentCore(textureSet, materials) {
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
        mesh.userData.crashWeight = 1.6;
        mesh.userData.type = "crystal";
        return mesh;
    }

    function createDetailedBuildingModel(w, d, h, styleIndex, rng) {
        const style = materials.buildingFacadeStyles[styleIndex % materials.buildingFacadeStyles.length];
        const group = new THREE.Group();

        const baseH = 4 + rng() * 2;
        const baseW = w * 1.05;
        const baseD = d * 1.05;
        const base = new THREE.Mesh(new THREE.BoxGeometry(baseW, baseH, baseD), style.trim);
        base.position.y = baseH * 0.5;
        base.castShadow = true;
        base.receiveShadow = true;
        group.add(base);

        const numPillarsX = Math.max(2, Math.floor(w / 4));
        for (let i = 0; i <= numPillarsX; i++) {
            const px = -baseW / 2 + (i / numPillarsX) * baseW;
            const pillar1 = new THREE.Mesh(new THREE.BoxGeometry(0.8, baseH, baseD + 0.2), materials.buildingPillarMat);
            pillar1.position.set(px, baseH * 0.5, 0);
            group.add(pillar1);
        }
        const numPillarsZ = Math.max(2, Math.floor(d / 4));
        for (let i = 0; i <= numPillarsZ; i++) {
            const pz = -baseD / 2 + (i / numPillarsZ) * baseD;
            const pillar2 = new THREE.Mesh(new THREE.BoxGeometry(baseW + 0.2, baseH, 0.8), materials.buildingPillarMat);
            pillar2.position.set(0, baseH * 0.5, pz);
            group.add(pillar2);
        }

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

            const isGlassy = rng() > 0.3;
            if (isGlassy) {
                const isVertical = rng() > 0.5;
                if (isVertical) {
                    const numMullions = Math.max(3, Math.floor(currentW / 3));
                    const glassW = currentW * 0.8;
                    const glassD = currentD * 0.8;

                    const glassBlock1 = new THREE.Mesh(new THREE.BoxGeometry(currentW + 0.1, tierH - 1, glassD), materials.buildingGlassMat);
                    glassBlock1.position.y = currentY + tierH * 0.5;
                    const glassBlock2 = new THREE.Mesh(new THREE.BoxGeometry(glassW, tierH - 1, currentD + 0.1), materials.buildingGlassMat);
                    glassBlock2.position.y = currentY + tierH * 0.5;
                    group.add(glassBlock1, glassBlock2);

                    for (let i = 0; i <= numMullions; i++) {
                        const px = -currentW / 2 + (i / numMullions) * currentW;
                        const mullion = new THREE.Mesh(new THREE.BoxGeometry(0.4, tierH, currentD + 0.2), style.trim);
                        mullion.position.set(px, currentY + tierH * 0.5, 0);
                        group.add(mullion);
                    }
                } else {
                    const floorH = 3.5;
                    const numFloors = Math.floor(tierH / floorH);
                    for (let i = 0; i < numFloors; i++) {
                        const floorY = currentY + i * floorH;
                        const glassBand = new THREE.Mesh(new THREE.BoxGeometry(currentW + 0.1, floorH * 0.6, currentD + 0.1), materials.buildingGlassMat);
                        glassBand.position.y = floorY + floorH * 0.5;
                        group.add(glassBand);

                        const spandrel = new THREE.Mesh(new THREE.BoxGeometry(currentW + 0.2, floorH * 0.4, currentD + 0.2), style.trim);
                        spandrel.position.y = floorY + floorH * 0.8;
                        group.add(spandrel);
                    }
                }
            }

            const roofThickness = 0.6;
            const tierRoof = new THREE.Mesh(new THREE.BoxGeometry(currentW * 0.95, roofThickness, currentD * 0.95), materials.buildingRoofMat);
            tierRoof.position.y = currentY + tierH + roofThickness * 0.5;
            group.add(tierRoof);

            currentY += tierH;
            currentW *= 0.75 + rng() * 0.15;
            currentD *= 0.75 + rng() * 0.15;

            if (rng() > 0.4 || isLastTier) {
                const acW = rng() * 4 + 2;
                const acD = rng() * 4 + 2;
                const acH = rng() * 2 + 1;
                const ac = new THREE.Mesh(new THREE.BoxGeometry(acW, acH, acD), style.trim);
                ac.position.set((rng() - 0.5) * (currentW / 2), currentY + acH * 0.5, (rng() - 0.5) * (currentD / 2));
                group.add(ac);

                if (isLastTier && h > 40) {
                    const antennaH = h * 0.2 + rng() * 10;
                    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.4, antennaH, 8), materials.buildingPillarMat);
                    antenna.position.set(0, currentY + antennaH * 0.5, 0);
                    group.add(antenna);

                    if (rng() > 0.5 && currentW > 10 && currentD > 10) {
                        const pad = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 0.5, 16), materials.buildingPillarMat);
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

    return {
        createTreeModel,
        createRockModel,
        createPropModel,
        createIceCrystalModel,
        createDetailedBuildingModel,
        createNeonObeliskModel,
        createRuinPillarModel,
        createMagmaVentModel,
    };
}
