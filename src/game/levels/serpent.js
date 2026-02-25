import * as THREE from "three";

export const serpentLevel = {
  id: "serpent",
  name: "裂脊蛇行",
  desc: "线性盘绕 + 峡谷跳跃 + 高速风险路段",
  loop: false,
  seed: 18427,
  routeHalfWidth: 8.2,
  routeLayers: [0, -2.4, 2.4, -4.8, 4.8],
  barrierStep: 12,
  barrierDensity: 0.42,
  treeCount: 88,
  rockCount: 300,
  propCount: 156,
  hazardCount: 44,
  environmentTrackPadding: 2.2,
  bounds: { minX: -320, maxX: 320, minZ: -430, maxZ: 390 },
  clearColor: 0xc39f7b,
  fogColor: 0xcdb08a,
  ambient: 0xbf9f7e,
  sun: 0xffdfaf,
  baseAiSpeed: 27,
  path: [
    [-24, 356], [52, 332], [120, 296], [166, 242], [178, 184], [148, 132], [92, 88], [20, 52], [-58, 16], [-128, -34],
    [-170, -94], [-166, -158], [-124, -222], [-52, -264], [30, -302], [108, -338], [164, -386], [174, -420], [140, -430], [72, -416],
    [-8, -380], [-86, -330], [-142, -272], [-176, -206], [-174, -140], [-132, -80], [-62, -34], [22, 4], [104, 40], [170, 90],
    [202, 154], [194, 218], [148, 274], [78, 316], [-2, 342], [-80, 358],
  ],
  ramps: [
    { t: 0.13, lane: 2.2, width: 6.9, length: 14, slope: 20, launch: 9.6, boost: 4.2 },
    { t: 0.29, lane: -2.3, width: 7.4, length: 15, slope: 24, launch: 10.4, boost: 4.6 },
    { t: 0.45, lane: 0.9, width: 7.8, length: 16, slope: 27, launch: 11.3, boost: 5.2 },
    { t: 0.63, lane: -1.8, width: 7.2, length: 14, slope: 22, launch: 9.9, boost: 4.4 },
    { t: 0.82, lane: 1.9, width: 7.3, length: 15, slope: 25, launch: 10.9, boost: 4.9 },
  ],
  boosts: [
    { t: 0.06, lane: 0.3, width: 3.4, length: 7.4, power: 12.1 },
    { t: 0.2, lane: -1.6, width: 3.2, length: 7.1, power: 11.5 },
    { t: 0.38, lane: 1.8, width: 3.6, length: 8.2, power: 12.8 },
    { t: 0.56, lane: -0.5, width: 3.4, length: 7.6, power: 12.3 },
    { t: 0.73, lane: 1.5, width: 3.2, length: 7.2, power: 11.8 },
    { t: 0.91, lane: -1.6, width: 3.5, length: 8.2, power: 12.2 },
  ],
  items: [
    { t: 0.1, lane: 0 },
    { t: 0.23, lane: 0.1 },
    { t: 0.35, lane: -0.1 },
    { t: 0.5, lane: 0.1 },
    { t: 0.63, lane: -0.1 },
    { t: 0.76, lane: 0.1 },
    { t: 0.89, lane: -0.1 },
  ],
  // [MARKER] serpent 地图山体参数：后续新增峡谷山脊优先改这里。
  mountainField: {
    seedOffset: 0x48f1,
    boundsInset: 16,
    defaultMinTrackDist: 86,
    maxAttempts: 36,
    minNormalY: 0.64,
    maxRelief: 12.2,
    reliefSampleScale: 0.72,
    viewClearanceScale: 1.38,
    sightlineScale: 0.92,
    minSpacingScale: 1.26,
    belts: [
      { mode: "edge", count: 5, inset: 16, band: 42, minScale: 7.2, maxScale: 11.4, minTrackDist: 90, footprintScale: 1.46, minSpacingScale: 1.24 },
      { mode: "line", count: 4, x: -268, zMin: -392, zMax: 340, jitterX: 12, jitterZ: 10, minScale: 8.2, maxScale: 12, minTrackDist: 96, footprintScale: 1.5, minSpacingScale: 1.24 },
      { mode: "line", count: 4, x: 264, zMin: -392, zMax: 340, jitterX: 12, jitterZ: 10, minScale: 8.2, maxScale: 12, minTrackDist: 96, footprintScale: 1.5, minSpacingScale: 1.24 },
    ],
  },
  heightFn: (x, z) => {
    const descent = 118 - (340 - z) * 0.086;
    const dunes = Math.sin(x * 0.033) * 6.2 + Math.cos(z * 0.027) * 5.1;
    const ribs = Math.sin((x + z) * 0.044) * 3.8 + Math.cos((x - z) * 0.038) * 3.4;
    const canyonWalls = 18 * Math.exp(-((x + 178) * (x + 178)) / 7600) + 20 * Math.exp(-((x - 168) * (x - 168)) / 8600);
    const sideRidges = 12 * Math.exp(-((x + 246) * (x + 246)) / 4300) + 12 * Math.exp(-((x - 244) * (x - 244)) / 4300);
    const trench = -15 * Math.exp(-((x + 4) * (x + 4)) / 2600);
    const pits =
      -11 * Math.exp(-((x - 106) * (x - 106) + (z + 204) * (z + 204)) / 9200) -
      13 * Math.exp(-((x + 120) * (x + 120) + (z - 54) * (z - 54)) / 9600);
    return descent + dunes + ribs + canyonWalls + sideRidges + trench + pits;
  },
  palette: {
    low: new THREE.Color(0x836145),
    high: new THREE.Color(0xe0bf90),
    accent: new THREE.Color(0xb17f56),
    route: 0x453f39,
    boundary: 0xd1541f,
    ramp: 0xad341d,
    boost: 0x3ee7cb,
  },
};
