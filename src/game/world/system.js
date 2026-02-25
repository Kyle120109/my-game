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

  function buildAssetGallery(game) {
    let zOffset = 20;
    const spawnX = 15;

    // We do not want them to act as obstacles, so we just add them to decor
    const addAsset = (model) => {
      model.position.set(spawnX, 0, zOffset);
      game.decorRoot.add(model);
      zOffset += 6;
    };

    const fns = [
      ...modelLibrary.getForestModels(),
      ...modelLibrary.getDesertModels(),
      ...modelLibrary.getSnowModels(),
      ...modelLibrary.getCityModels(),
      ...modelLibrary.getAlpineModels(),
      ...modelLibrary.getLavaModels(),
      ...modelLibrary.getNeonModels(),
      ...modelLibrary.getHarborModels()
    ];

    for (const fn of fns) {
      addAsset(fn(1, () => 0.5));
    }

    // Explicitly add the 4 new core rock models
    let rockOffset = 20;
    for (let i = 0; i < 4; i++) {
      // Pass an RNG that returns exactly (i/4), targeting each of the 4 geometry arrays
      const rock = modelLibrary.createRockModel(2.5, i % 2 === 0, () => (i + 0.1) / 4);
      rock.position.set(spawnX - 10, 0, rockOffset);
      game.decorRoot.add(rock);
      rockOffset += 12;
    }

    // Add sample buildings to the debug map
    if (modelLibrary.createDetailedBuildingModel) {
      let bldgOffset = 20;
      for (let i = 0; i < 5; i++) {
        // Pseudo-random generator for consistent debug view
        const rng = () => ((i * 137 + 73) % 100) / 100;
        const bldg = modelLibrary.createDetailedBuildingModel(20, 20, 30 + i * 20, i, rng);
        bldg.position.set(spawnX + 25, 0, bldgOffset);
        game.decorRoot.add(bldg);
        bldgOffset += 30;
      }
    }

    // Explicitly add massive ships for debug
    if (modelLibrary.makeCargoShip) {
      const ships = [
        modelLibrary.makeCargoShip,
        modelLibrary.makeCruiseShip,
        modelLibrary.makeSpeedboat,
        modelLibrary.makeSailboat,
        modelLibrary.makeYacht,
      ];
      let shipOffset = 20;
      for (const shipFn of ships) {
        if (!shipFn) continue;
        const ship = shipFn(1.2, () => 0.5);
        ship.position.set(spawnX + 60, 0, shipOffset);
        game.decorRoot.add(ship);
        shipOffset += 60; // Give them plenty of space
      }
    }

    // Explicitly add massive cranes for debug
    if (modelLibrary.makeHeavyGantryCrane) {
      const cranes = [
        modelLibrary.makeHeavyGantryCrane,
        modelLibrary.makeTowerCrane,
      ];
      let craneOffset = 20;
      for (const craneFn of cranes) {
        if (!craneFn) continue;
        const crane = craneFn(2.5, () => 0.5);
        crane.position.set(spawnX + 40, 0, craneOffset);
        game.decorRoot.add(crane);
        craneOffset += 40;
      }
    }

    // Explicitly add construction vehicles for debug
    if (modelLibrary.makeExcavatorA) {
      const vehicles = [
        modelLibrary.makeExcavatorA,
        modelLibrary.makeDumpTruck,
        modelLibrary.makeBulldozer,
        modelLibrary.makeLargeTruck,
        modelLibrary.makeCargoTruck,
        modelLibrary.makeCementMixer,
        modelLibrary.makeExcavatorB,
        modelLibrary.makeWorksiteProps,
      ];
      let vehOffset = 20;
      for (const vehFn of vehicles) {
        if (!vehFn) continue;
        const veh = vehFn(1.2, () => 0.5);
        veh.position.set(spawnX + 20, 0, vehOffset);
        game.decorRoot.add(veh);
        vehOffset += 25;
      }
    }

    const pickups = ["turbo", "bash", "shock", "shield", "banana", "bomb", "trap"];
    pickups.forEach(type => {
      const g = modelLibrary.createPickupModel(type);
      g.position.set(spawnX, 1.5, zOffset);
      game.decorRoot.add(g);
      zOffset += 4;
    });

    const dummy = modelLibrary.createRacerModel({ color: 0xff0000, isPlayer: false }).group;
    dummy.position.set(spawnX, 0.05, zOffset);
    game.decorRoot.add(dummy);
  }

  function buildStartGate(game, level) {
    const start = level.pathPoints[0];
    const next = level.pathPoints[1];
    tempVec3A.copy(next).sub(start).setY(0).normalize();
    const right = tempVec3B;
    const up = tempVec3C;
    buildOrthonormalFrame(tempVec3A, surfaceNormal(level, start.x, start.z), right, up, tempVec3A);

    const platform = new THREE.Mesh(new THREE.BoxGeometry(level.routeHalfWidth * 2.7, 0.8, 9), new THREE.MeshStandardMaterial({ color: 0x37424c, roughness: 0.72 }));
    platform.position.copy(start).addScaledVector(tempVec3A, -4.4).addScaledVector(up, 0.4);
    tempMat4.makeBasis(right, up, tempVec3A);
    platform.quaternion.setFromRotationMatrix(tempMat4);
    platform.receiveShadow = true;
    platform.castShadow = true;
    game.routeRoot.add(platform);
  }

  return {
    setupWorld,
  };
}
