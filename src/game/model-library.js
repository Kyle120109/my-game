import { createTextureSet } from './models/textures.js';
import { createMaterialSet } from './models/materials.js';
import { setupPickups } from './models/pickups.js';
import { setupRacers } from './models/racers.js';
import { setupEnvironmentCore } from './models/environment-core.js';
import { setupVehicles } from './models/vehicles.js';
import { setupMaritime } from './models/maritime.js';
import { setupThemes } from './models/environment-themes.js';

export function createModelLibrary() {
  const textures = createTextureSet();
  const materialDeps = createMaterialSet(textures);
  const { pickupMaterials, sharedPickupMaterialSet, createRoadSurfaceMaterial, createRoadEdgeMaterial, createRoadMarkerMaterial } = materialDeps;

  const pickups = setupPickups(pickupMaterials, sharedPickupMaterialSet);
  const racers = setupRacers(textures);
  const envCore = setupEnvironmentCore(textures, materialDeps);
  const vehicles = setupVehicles();
  const maritime = setupMaritime(vehicles);
  const themes = setupThemes(envCore, textures, vehicles, maritime);

  // Fallback for makePier if not in maritime just to be safe
  const makePier = maritime.makePier || envCore.makePier;

  return {
    textures,
    createRoadSurfaceMaterial,
    createRoadEdgeMaterial,
    createRoadMarkerMaterial,
    createRacerModel: racers.createRacerModel,
    createTreeModel: envCore.createTreeModel,
    createRockModel: envCore.createRockModel,
    createPropModel: envCore.createPropModel,
    createIceCrystalModel: envCore.createIceCrystalModel,
    createNeonObeliskModel: envCore.createNeonObeliskModel,
    createMagmaVentModel: envCore.createMagmaVentModel,
    createRuinPillarModel: envCore.createRuinPillarModel,
    getForestModels: themes.getForestModels,
    getDesertModels: themes.getDesertModels,
    getSnowModels: themes.getSnowModels,
    getCityModels: themes.getCityModels,
    getAlpineModels: themes.getAlpineModels,
    getLavaModels: themes.getLavaModels,
    getNeonModels: themes.getNeonModels,
    getHarborModels: themes.getHarborModels,
    applyPickupModelType: pickups.applyPickupModelType,
    createPickupModel: pickups.createPickupModel,
    createDetailedBuildingModel: envCore.createDetailedBuildingModel,
    makeCargoShip: maritime.makeCargoShip,
    makeCruiseShip: maritime.makeCruiseShip,
    makeSpeedboat: maritime.makeSpeedboat,
    makeSailboat: maritime.makeSailboat,
    makeYacht: maritime.makeYacht,
    makeBuoy: maritime.makeBuoy,
    makeCraneBase: vehicles.makeCraneBase,
    makeHeavyGantryCrane: vehicles.makeHeavyGantryCrane,
    makeTowerCrane: vehicles.makeTowerCrane,
    makeTowTruck: vehicles.makeTowTruck,
    makeExcavatorA: vehicles.makeExcavatorA,
    makeDumpTruck: vehicles.makeDumpTruck,
    makeBulldozer: vehicles.makeBulldozer,
    makeLargeTruck: vehicles.makeLargeTruck,
    makeCargoTruck: vehicles.makeCargoTruck,
    makeCementMixer: vehicles.makeCementMixer,
    makeExcavatorB: vehicles.makeExcavatorB,
    makeWorksiteProps: vehicles.makeWorksiteProps,
    makePier,
  };
}
