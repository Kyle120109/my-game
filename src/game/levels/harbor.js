import * as THREE from "three";

export const harborLevel = {
  id: "harbor",
  name: "港口巨构",
  desc: "集装箱走廊 + 开阔码头边缘 + 高架维护桥",
  loop: true,
  seed: 40123,
  routeHalfWidth: 8.4,
  routeLayers: [0, -2.6, 2.6, -5.1, 5.1],
  barrierStep: 11,
  barrierDensity: 0.8, // Denser barriers for dangerous dock edges
  treeCount: 0,
  rockCount: 0,
  propCount: 0,
  hazardCount: 0,
  environmentTrackPadding: 2.4,
  bounds: { minX: -600, maxX: 600, minZ: -450, maxZ: 450 },
  clearColor: 0x9bb0bb,
  fogColor: 0xa9bbc4,
  ambient: 0x8597a0,
  sun: 0xffe9c2,
  baseAiSpeed: 23, // slightly slower for narrow technical corridors
  path: [
    // Water edge run (South, low elevation)
    [-300, 280], [0, 290], [300, 280],
    // Climb up to Yard East
    [450, 200], [400, 50],
    // Yard Zig-Zag through center
    [250, -50], [350, -150], [150, -250],
    // North edge sweep
    [0, -300], [-250, -250],
    // Approach massive bridge at X=-100
    [-100, -150],
    // The Bridge
    [-100, 0], [-100, 120],
    // Descend and sweep back West
    [-350, 150]
  ],
  checkpoints: [0, 3, 6, 9, 11, 13],
  ramps: [
    { t: 0.15, lane: -1.0, width: 7.0, length: 14, slope: 18, launch: 9.5, boost: 4.2 },
    { t: 0.35, lane: 0, width: 7.5, length: 13, slope: 20, launch: 9.7, boost: 4.3 },
    { t: 0.65, lane: 1.0, width: 7.0, length: 15, slope: 18, launch: 9.6, boost: 4.2 },
    { t: 0.85, lane: -1.5, width: 7.0, length: 12, slope: 20, launch: 9.6, boost: 4.2 },
  ],
  boosts: [
    { t: 0.10, lane: 0, width: 3.4, length: 7.4, power: 12.0 },
    { t: 0.40, lane: -1.0, width: 3.3, length: 7.2, power: 11.8 },
    { t: 0.70, lane: 1.0, width: 3.6, length: 7.9, power: 12.5 },
    { t: 0.82, lane: 0.0, width: 3.6, length: 12.0, power: 14.5 }, // Boost over the bridge
  ],
  items: [
    { t: 0.08, lane: 0.0 }, { t: 0.25, lane: 0.5 }, { t: 0.45, lane: -0.5 },
    { t: 0.60, lane: 1.0 }, { t: 0.80, lane: -1.0 }, { t: 0.95, lane: 0.0 }
  ],
  mountainField: {
    seedOffset: 0x612f,
    boundsInset: 0,
    defaultMinTrackDist: 10,
    maxAttempts: 0, // Disabled standard mountains
    minNormalY: 0.84,
    maxRelief: 1,
    reliefSampleScale: 0.5,
    viewClearanceScale: 1.1,
    sightlineScale: 0.9,
    minSpacingScale: 1.2,
    belts: [],
  },
  heightFn: (x, z) => {
    // 1. Water edge (South, Z > 200): height = 0 (Seafloor)
    // 2. Central Yard (Z from -200 to 200): height = 15
    // 3. Elevated bridge crossing (X near -100, running North-South): height = 35

    let h = 15.0; // Base yard

    // Drop to water edge (seafloor)
    const edgeBlend = 1.0 / (1.0 + Math.exp(-(z - 200) * 0.05));
    h -= edgeBlend * 15.0;

    // Create a raised causeway for the southernmost track segment (z ~ 285)
    // It runs from roughly x = -400 to 450.
    const trackRidgeBlend = Math.exp(-Math.pow(z - 285, 2) / 800);
    h += trackRidgeBlend * edgeBlend * 6.0;

    // Rise to bridge. The bridge is a corridor from X=-150 to X=-50
    const bridgeXBlend = Math.exp(-Math.pow(x + 100, 2) / 2000); // peak at x=-100
    // Only raise if we are in the middle Z area or north
    const bridgeZBlend = 1.0 / (1.0 + Math.exp((z - 150) * 0.05)); // drops off going south

    // So if you are at x=-100 and z<150, you go up to 35
    h += bridgeXBlend * bridgeZBlend * 20.0;

    // Small noise for concrete slab imperfections, mostly flat on the causeway
    const slabNoise = (Math.sin(x * 0.01) * 0.2 + Math.cos(z * 0.01) * 0.2) * (1.0 - edgeBlend * 0.5);

    return h + slabNoise;
  },
  palette: {
    low: new THREE.Color(0x354045), // Darker structural concrete
    high: new THREE.Color(0xa7b5bb), // Lighter top surface
    accent: new THREE.Color(0x5a6d77),
    route: 0x242a2e, // Dark asphalt
    boundary: 0xd3692d,
    ramp: 0xbe5729,
    boost: 0x2ed3c5,
  },
};
