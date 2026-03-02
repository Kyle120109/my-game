import * as THREE from "three";
import { PHYSICS } from "../config.js";
import { createRng, surfaceNormal } from "../levels.js";
import { buildOrthonormalFrame } from "./math.js";
import { createSceneBuilder } from "./build-scene.js";
import { createRouteBuilder } from "./route.js";
import { buildMountainField } from "./mountains.js";
import { createCheckpointBuilder } from "./checkpoints.js";
import { createInteractionBuilder } from "./interactions.js";
import { createEnvironmentBuilder } from "./environment.js";
import { createHarborEnvironmentBuilder } from "./environments/harbor.js";
import { createUrbanEnvironmentBuilder } from "./environments/urban8.js";

/**
 * [MODULE] world/system: Facade for procedurally generating 3D maps.
 * Instantiates the scene graph layout and delegates construction to 
 * specialized environment builders for terrain, routes, and scenery.
 */

/**
 * Creates the World Generation subsystem.
 * @param {Object} deps - Dependencies (settings, levels, model library).
 * @returns {Object} Methods to set up and tear down tracks.
 */
export function createWorldSystem({ settings, levels, modelLibrary }) {
  const tempVec3A = new THREE.Vector3();
  const tempVec3B = new THREE.Vector3();
  const tempVec3C = new THREE.Vector3();
  const tempVec3D = new THREE.Vector3();
  const tempMat4 = new THREE.Matrix4();

  const { buildLights, buildTerrain } = createSceneBuilder({ settings });
  const { buildRoute } = createRouteBuilder({ settings, modelLibrary, tempVec3A, tempVec3B, tempVec3C, tempVec3D, tempMat4 });
  const { buildCheckpoints } = createCheckpointBuilder({ tempVec3A, tempVec3B, tempVec3C, tempMat4 });
  const { buildInteractionZones } = createInteractionBuilder({ modelLibrary, tempVec3A, tempVec3B, tempVec3C, tempMat4 });
  const { buildHarborEnvironment } = createHarborEnvironmentBuilder({ modelLibrary, tempVec3A, tempVec3B, tempVec3C, tempMat4 });
  const { buildUrbanEnvironment } = createUrbanEnvironmentBuilder({ modelLibrary, tempVec3A, tempVec3B, tempVec3C, tempMat4 });
  const { buildEnvironment } = createEnvironmentBuilder({ modelLibrary, tempVec3A, buildHarborEnvironment, buildUrbanEnvironment });

  /**
   * Initializes a level by tearing down the old scene graph and 
   * building a completely new procedural world hierarchy.
   * @param {Object} game - The global game state.
   * @param {string} levelId - Identifier of the level to generate.
   */
  function setupWorld(game, levelId) {
    const level = levels.find((entry) => entry.id === levelId) ?? levels[0];
    game.activeLevel = level;

    if (game.worldRoot) game.scene.remove(game.worldRoot);

    game.worldRoot = new THREE.Group();
    game.terrainRoot = new THREE.Group();
    game.routeRoot = new THREE.Group();
    game.decorRoot = new THREE.Group();
    game.checkpointRoot = new THREE.Group();
    game.racerRoot = new THREE.Group();
    game.fxRoot = new THREE.Group();

    game.worldRoot.add(game.terrainRoot, game.routeRoot, game.decorRoot, game.checkpointRoot, game.racerRoot, game.fxRoot);
    game.scene.add(game.worldRoot);

    game.obstacles = [];
    game.ramps = [];
    game.boostPads = [];
    game.itemCrates = [];
    game.itemWaves = [];
    game.itemWavesInitialized = false;
    game.activeItemWave = 0;
    game.itemWaveCooldown = 0;
    game.itemWaveAdvanceDelay = PHYSICS.itemWaveAdvanceDelay;
    const entropy = ((Date.now() ^ Math.floor(Math.random() * 0x100000000)) >>> 0);
    game.itemTypeRng = createRng((level.seed ^ 0x7f4a ^ entropy) >>> 0);
    game.itemTypeBag = [];
    game.itemTypeBagCursor = 0;
    game.itemProjectiles = [];
    game.groundHazards = [];
    game.checkpointMeshes = [];
    game.particles = [];

    buildLights(game, level);
    buildTerrain(game, level);
    buildRoute(game, level);
    buildMountainField(game, level);
    buildCheckpoints(game, level);
    buildInteractionZones(game, level);
    buildEnvironment(game, level);
    buildStartGate(game, level);

    if (level.id === "debug") buildAssetGallery(game);
  }

  /**
   * Debug feature: Spawns a sequential catalog of every procedural 
   * mesh available in the model library on a massive flat plane.
   * Excellent for visual inspection of generation algorithms.
   */
  function buildAssetGallery(game) {
    let spawnX = 0;

    // 1. Group minor models by environment columns
    const environments = [
      modelLibrary.getForestModels(),
      modelLibrary.getDesertModels(),
      modelLibrary.getSnowModels(),
      modelLibrary.getCityModels(),
      modelLibrary.getAlpineModels(),
      modelLibrary.getLavaModels(),
      modelLibrary.getNeonModels(),
      modelLibrary.getHarborModels()
    ];

    environments.forEach((envFns) => {
      let zOffset = 20;
      for (const fn of envFns) {
        if (!fn) continue;
        const model = fn(1, () => 0.5);
        model.position.set(spawnX, 0, zOffset);
        game.decorRoot.add(model);
        zOffset += 15; // Increased spacing
      }
      spawnX += 20;
    });

    // 2. Core Rocks
    let rockOffset = 20;
    for (let i = 0; i < 4; i++) {
      const rock = modelLibrary.createRockModel(2.5, i % 2 === 0, () => (i + 0.1) / 4);
      rock.position.set(-20, 0, rockOffset);
      game.decorRoot.add(rock);
      rockOffset += 20;
    }

    // 3. Buildings
    if (modelLibrary.createDetailedBuildingModel) {
      let bldgOffset = 20;
      for (let i = 0; i < 5; i++) {
        const rng = () => ((i * 137 + 73) % 100) / 100;
        const bldg = modelLibrary.createDetailedBuildingModel(20, 20, 30 + i * 20, i, rng);
        bldg.position.set(spawnX, 0, bldgOffset);
        game.decorRoot.add(bldg);
        bldgOffset += 40;
      }
      spawnX += 40;
    }

    // 4. Vehicles
    if (modelLibrary.makeExcavatorA) {
      const vehicles = [
        modelLibrary.makeExcavatorA, modelLibrary.makeDumpTruck, modelLibrary.makeBulldozer,
        modelLibrary.makeLargeTruck, modelLibrary.makeCargoTruck, modelLibrary.makeCementMixer,
        modelLibrary.makeExcavatorB, modelLibrary.makeWorksiteProps,
      ];
      let vehOffset = 20;
      for (const vehFn of vehicles) {
        if (!vehFn) continue;
        const veh = vehFn(1.2, () => 0.5);
        veh.position.set(spawnX, 0, vehOffset);
        game.decorRoot.add(veh);
        vehOffset += 30;
      }
      spawnX += 30;
    }

    // 5. Cranes
    if (modelLibrary.makeHeavyGantryCrane) {
      const cranes = [modelLibrary.makeHeavyGantryCrane, modelLibrary.makeTowerCrane];
      let craneOffset = 20;
      for (const craneFn of cranes) {
        if (!craneFn) continue;
        const crane = craneFn(2.5, () => 0.5);
        crane.position.set(spawnX, 0, craneOffset);
        game.decorRoot.add(crane);
        craneOffset += 60;
      }
      spawnX += 60;
    }

    // 6. Ships
    if (modelLibrary.makeCargoShip) {
      const ships = [
        modelLibrary.makeCargoShip, modelLibrary.makeCruiseShip, modelLibrary.makeSpeedboat,
        modelLibrary.makeSailboat, modelLibrary.makeYacht,
      ];
      let shipOffset = 20;
      for (const shipFn of ships) {
        if (!shipFn) continue;
        const ship = shipFn(1.2, () => 0.5);
        ship.position.set(spawnX, 0, shipOffset);
        game.decorRoot.add(ship);
        shipOffset += 80;
      }
      spawnX += 80;
    }

    // 7. Pickups and Dummy Racer
    let miscOffset = 20;
    const pickups = ["turbo", "bash", "shock", "shield", "banana", "bomb", "trap"];
    pickups.forEach(type => {
      const g = modelLibrary.createPickupModel(type);
      g.position.set(-40, 1.5, miscOffset);
      game.decorRoot.add(g);
      miscOffset += 10;
    });

    const dummy = modelLibrary.createRacerModel({ color: 0xff0000, isPlayer: false }).group;
    dummy.position.set(-40, 0.05, miscOffset);
    game.decorRoot.add(dummy);
  }

  function buildStartGate(game, level) {
    const start = level.pathPoints[0];
    const next = level.pathPoints[1];
    tempVec3A.copy(next).sub(start).setY(0).normalize();
    const right = tempVec3B;
    const up = tempVec3C;
    buildOrthonormalFrame(tempVec3A, surfaceNormal(level, start.x, start.z), right, up, tempVec3A);
    tempMat4.makeBasis(right, up, tempVec3A);

    const gate = new THREE.Group();
    gate.position.copy(start);
    gate.quaternion.setFromRotationMatrix(tempMat4);

    const metalMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, metalness: 0.7, roughness: 0.4 });
    const blueMat = new THREE.MeshStandardMaterial({ color: 0x0055ff, metalness: 0.5, roughness: 0.5 });
    const redMat = new THREE.MeshStandardMaterial({ color: 0xd02020, roughness: 0.7 });
    const woodMat = new THREE.MeshStandardMaterial({ color: 0x5a4a3a, roughness: 0.9 });

    const deckDepth = 6;
    const deckWidth = Math.max(18, level.routeHalfWidth * 2.2);
    const deck = new THREE.Mesh(new THREE.BoxGeometry(deckWidth, 0.2, deckDepth), woodMat);
    deck.position.set(0, 0.1, -3.5);
    deck.receiveShadow = true;
    deck.castShadow = true;
    gate.add(deck);

    const pillarGeom = new THREE.CylinderGeometry(0.15, 0.15, 4.5, 8);
    for (const x of [-deckWidth / 2 + 0.5, deckWidth / 2 - 0.5]) {
      for (const z of [-6.0, -1.0]) {
        const pillar = new THREE.Mesh(pillarGeom, metalMat);
        pillar.position.set(x, 2.25, z);
        pillar.castShadow = true;
        gate.add(pillar);

        const foot = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.4, 0.6), blueMat);
        foot.position.set(x, 0.2, z);
        gate.add(foot);
      }
    }

    const beamGeom = new THREE.CylinderGeometry(0.15, 0.15, deckWidth, 8);
    beamGeom.rotateZ(Math.PI / 2);
    for (const z of [-6.0, -1.0]) {
      const beam = new THREE.Mesh(beamGeom, metalMat);
      beam.position.set(0, 4.35, z);
      beam.castShadow = true;
      gate.add(beam);
    }
    const sideBeamGeom = new THREE.CylinderGeometry(0.12, 0.12, 5, 8);
    sideBeamGeom.rotateX(Math.PI / 2);
    for (const x of [-deckWidth / 2 + 0.5, deckWidth / 2 - 0.5]) {
      const sbeam = new THREE.Mesh(sideBeamGeom, metalMat);
      sbeam.position.set(x, 4.35, -3.5);
      sbeam.castShadow = true;
      gate.add(sbeam);
    }

    const banner = new THREE.Mesh(new THREE.BoxGeometry(deckWidth - 1, 1.2, 0.1), redMat);
    banner.position.set(0, 3.8, -1.0);
    banner.castShadow = true;
    gate.add(banner);

    const pipeGeom = new THREE.CylinderGeometry(0.06, 0.06, 2.0, 8);
    const vertGeom = new THREE.CylinderGeometry(0.06, 0.06, 1.0, 8);
    const jointGeom = new THREE.SphereGeometry(0.09, 8, 8);
    pipeGeom.rotateX(Math.PI / 2);

    for (let i = -5; i <= 4; i++) {
      const px = i * 1.8 + 0.9;
      const pGroup = new THREE.Group();

      const hBar = new THREE.Mesh(pipeGeom, metalMat);
      hBar.position.set(0, 1.0, -4.2);
      hBar.castShadow = true;
      pGroup.add(hBar);

      const vBar1 = new THREE.Mesh(vertGeom, metalMat);
      vBar1.position.set(0, 0.5, -3.2);
      vBar1.castShadow = true;
      pGroup.add(vBar1);

      const vBar2 = new THREE.Mesh(vertGeom, metalMat);
      vBar2.position.set(0, 0.5, -5.2);
      vBar2.castShadow = true;
      pGroup.add(vBar2);

      const j1 = new THREE.Mesh(jointGeom, blueMat);
      j1.position.set(0, 1.0, -3.2);
      const j2 = new THREE.Mesh(jointGeom, blueMat);
      j2.position.set(0, 1.0, -5.2);
      pGroup.add(j1, j2);

      pGroup.position.set(px, 0, 0);
      gate.add(pGroup);
    }

    const line = new THREE.Mesh(new THREE.PlaneGeometry(deckWidth, 0.4), new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.1 }));
    line.rotation.x = -Math.PI / 2;
    line.position.set(0, 0.22, -0.6);
    line.receiveShadow = true;
    gate.add(line);

    game.routeRoot.add(gate);
  }

  return {
    setupWorld,
  };
}
