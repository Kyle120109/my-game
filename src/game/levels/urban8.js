import * as THREE from "three";

export const urban8Level = {
  id: "urban8",
  name: "城市双环立交",
  desc: "正交街区 + 长距立交桥 + 下穿隧道",
  loop: true,
  seed: 23117,
  routeHalfWidth: 8.5,
  routeLayers: [0, -2.6, 2.6, -5.2, 5.2],
  barrierStep: 10,
  barrierDensity: 0.85,  // Very dense guards on bridges
  treeCount: 0,
  rockCount: 0,
  propCount: 0,
  hazardCount: 0, // We will use env props for hazards
  environmentTrackPadding: 1.5,
  bounds: { minX: -550, maxX: 550, minZ: -550, maxZ: 550 },
  clearColor: 0x222831,
  fogColor: 0x393e46,
  ambient: 0x5a626d,
  sun: 0xffd3b6,
  baseAiSpeed: 25,
  path: [
    // Bottom straight (East)
    [-300, 300], [-100, 300], [0, 300], [100, 300], [300, 300],
    // Right curve (East -> North)
    [360, 280], [380, 220], [380, 160],
    // Right straight (North)
    [380, 0], [380, -160],
    // Top Right curve (North -> West)
    [360, -280], [300, -300],
    // Inter-link straight (West)
    [100, -300], [0, -300], [-80, -300],
    // Middle zigzag to avoid overlapping (West -> South -> West -> North)
    [-160, -280], [-180, -220], [-180, -100], [-180, 0], [-180, 100],
    [-200, 160], [-260, 180], [-320, 160], [-340, 100], [-340, -100], [-340, -160],
    // Top Left curve (North -> West -> South)
    [-380, -220], [-420, -200], [-420, -100],
    // Left straight (South)
    [-420, 0], [-420, 160],
    // Bottom Left curve (South -> East)
    [-400, 260], [-360, 290]
  ],
  checkpoints: [0, 5, 8, 12, 17, 22, 26, 30],
  ramps: [
    { t: 0.15, lane: 0.0, width: 8.0, length: 15, slope: 18, launch: 10.0, boost: 4.5 },
    { t: 0.45, lane: -2.0, width: 7.5, length: 15, slope: 20, launch: 10.5, boost: 4.8 },
    { t: 0.75, lane: 2.0, width: 7.5, length: 15, slope: 20, launch: 10.5, boost: 4.8 }
  ],
  boosts: [
    { t: 0.08, lane: 1.5, width: 3.5, length: 8.0, power: 12.0 },
    { t: 0.28, lane: -1.0, width: 4.0, length: 9.0, power: 12.5 },
    { t: 0.58, lane: 0.0, width: 4.5, length: 10.0, power: 13.0 },
    { t: 0.85, lane: -1.5, width: 3.5, length: 8.0, power: 12.0 }
  ],
  items: [
    { t: 0.10, lane: 0.0 },
    { t: 0.25, lane: 0.8 },
    { t: 0.40, lane: -0.8 },
    { t: 0.55, lane: 0.0 },
    { t: 0.70, lane: 0.5 },
    { t: 0.90, lane: -0.5 }
  ],
  mountainField: {
    seedOffset: 0x52a4,
    boundsInset: 0,
    defaultMinTrackDist: 10,
    maxAttempts: 0, // Disabled standard mountains, replaced with pure cityscape
    minNormalY: 0.9,
    maxRelief: 1,
    reliefSampleScale: 0.1,
    viewClearanceScale: 1.0,
    sightlineScale: 1.0,
    minSpacingScale: 1.0,
    belts: [],
  },
  heightFn: (x, z) => {
    // Rigid orthogonal heights. 
    // X > 200 is Elevated Highway (Y = 45)
    // X < -300 is Deep Tunnel (Y = -15)
    // Between is flat ground level (Y = 15)
    // We use smoothstep logic implemented via exp blends for long progressive slopes.

    const hGround = 15.0;

    // East elevated section
    const elevatedBlend = 1.0 / (1.0 + Math.exp(-(x - 280) * 0.04));
    const hElevated = elevatedBlend * 30.0;

    // West sunken tunnel section
    const tunnelBlend = 1.0 / (1.0 + Math.exp((x + 360) * 0.05));
    const hTunnel = tunnelBlend * -30.0;

    // Local noise for realism
    const localNoise = Math.sin(x * 0.015) * 0.5 + Math.cos(z * 0.015) * 0.5;

    return hGround + hElevated + hTunnel + localNoise;
  },
  palette: {
    low: new THREE.Color(0x1a1a2e),
    high: new THREE.Color(0x16213e),
    accent: new THREE.Color(0x0f3460),
    route: 0x222222,
    boundary: 0xe94560, // Neon guardrails
    ramp: 0xffa500,
    boost: 0x00d2ff,
  },
};
