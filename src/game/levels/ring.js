import * as THREE from "three";

export const ringLevel = {
  id: "ring",
  name: "环峰禁区",
  desc: "环形赛道 + 中央高山 + 大落差压迫",
  loop: true,
  seed: 9201,
  routeHalfWidth: 8.4,
  routeLayers: [0, -2.6, 2.6, -5.1, 5.1],
  barrierStep: 10,
  barrierDensity: 0.58,
  treeCount: 180,
  rockCount: 252,
  propCount: 132,
  hazardCount: 56,
  environmentTrackPadding: 2.4,
  bounds: { minX: -430, maxX: 430, minZ: -430, maxZ: 430 },
  clearColor: 0x93acc2,
  fogColor: 0xa3bacf,
  ambient: 0x8ea6b7,
  sun: 0xfff0cf,
  baseAiSpeed: 25,
  path: [
    [0, 288], [88, 272], [170, 236], [242, 180], [286, 100], [298, 8], [278, -80], [232, -160], [160, -232], [72, -276],
    [-24, -292], [-114, -270], [-194, -224], [-252, -156], [-286, -74], [-294, 18], [-268, 108], [-208, 188], [-130, 244], [-40, 282],
  ],
  ramps: [
    { t: 0.06, lane: 2.9, width: 6.6, length: 13, slope: 24, launch: 10, boost: 4.6 },
    { t: 0.18, lane: -2.6, width: 7.2, length: 14, slope: 20, launch: 9.4, boost: 4.2 },
    { t: 0.34, lane: 2.1, width: 7.6, length: 16, slope: 26, launch: 10.8, boost: 5.0 },
    { t: 0.55, lane: -2.1, width: 7.1, length: 15, slope: 23, launch: 9.8, boost: 4.5 },
    { t: 0.76, lane: 2.3, width: 7.4, length: 15, slope: 22, launch: 10.1, boost: 4.7 },
  ],
  boosts: [
    { t: 0.11, lane: 0, width: 3.8, length: 8.2, power: 12 },
    { t: 0.28, lane: -1.6, width: 3.4, length: 7.2, power: 11.4 },
    { t: 0.43, lane: 1.4, width: 3.4, length: 7.6, power: 11.8 },
    { t: 0.68, lane: 0.6, width: 3.8, length: 8.4, power: 12.3 },
    { t: 0.88, lane: -1.5, width: 3.3, length: 7.1, power: 11.4 },
  ],
  items: [
    { t: 0.08, lane: 0 },
    { t: 0.21, lane: 0.1 },
    { t: 0.34, lane: -0.1 },
    { t: 0.47, lane: 0.1 },
    { t: 0.6, lane: -0.1 },
    { t: 0.73, lane: 0.1 },
    { t: 0.86, lane: -0.1 },
  ],
  // [MARKER] ring 地图山体参数：后续新增/删减山体优先改这里。
  mountainField: {
    seedOffset: 0x87a1,
    boundsInset: 18,
    defaultMinTrackDist: 82,
    maxAttempts: 36,
    minNormalY: 0.62,
    maxRelief: 13.2,
    reliefSampleScale: 0.7,
    viewClearanceScale: 1.34,
    sightlineScale: 0.9,
    minSpacingScale: 1.24,
    belts: [
      { mode: "ring", count: 2, radius: 142, spread: 12, minScale: 9.8, maxScale: 13.4, minTrackDist: 126, footprintScale: 1.56, minSpacingScale: 1.26 },
      { mode: "ring", count: 6, radius: 356, spread: 18, minScale: 8.2, maxScale: 12.4, minTrackDist: 88, footprintScale: 1.52, minSpacingScale: 1.22 },
      { mode: "edge", count: 2, inset: 18, band: 30, minScale: 7.2, maxScale: 10.8, minTrackDist: 84, footprintScale: 1.42, minSpacingScale: 1.2 },
    ],
  },
  heightFn: (x, z) => {
    const r = Math.hypot(x, z);
    const centerMountain = 118 * Math.exp(-(r * r) / 52000);
    const innerRidges =
      18 * Math.exp(-((x - 54) * (x - 54) + (z + 18) * (z + 18)) / 11400) +
      16 * Math.exp(-((x + 62) * (x + 62) + (z - 28) * (z - 28)) / 11600);
    const ringValley = -14 * Math.exp(-((r - 252) * (r - 252)) / 4600);
    const outerRim = 32 * Math.exp(-((r - 336) * (r - 336)) / 18000);
    const rolling = Math.sin(x * 0.024) * 5.2 + Math.cos(z * 0.021) * 4.8;
    const broken = Math.sin((x + z) * 0.046) * 3 + Math.cos((x - z) * 0.034) * 4.2;
    const erosion = -7 * Math.exp(-((x + 22) * (x + 22) + (z + 18) * (z + 18)) / 6200);
    const ravine =
      -12 * Math.exp(-((x - 126) * (x - 126) + (z + 60) * (z + 60)) / 10600) -
      9 * Math.exp(-((x + 150) * (x + 150) + (z - 118) * (z - 118)) / 11000);
    return 42 + centerMountain + innerRidges + ringValley + outerRim + rolling + broken + erosion + ravine;
  },
  palette: {
    low: new THREE.Color(0x3d5b44),
    high: new THREE.Color(0xc9b08b),
    accent: new THREE.Color(0x70936a),
    route: 0x3d434a,
    boundary: 0xbf4a23,
    ramp: 0xc4482b,
    boost: 0x36e1d4,
  },
};
