import * as THREE from "three";

export const neonLevel = {
    id: "neon",
    name: "霓虹电网 (Neon Grid)",
    desc: "赛博数字赛道 + 发光边界 + 极速直线带",
    loop: true,
    seed: 40404,
    routeHalfWidth: 9.5,
    routeLayers: [0, -3.0, 3.0, -6.0, 6.0],
    barrierStep: 8,
    barrierDensity: 0.85,
    treeCount: 0,
    rockCount: 0,
    propCount: 360,
    hazardCount: 160,
    environmentTrackPadding: 1.0,
    bounds: { minX: -600, maxX: 600, minZ: -600, maxZ: 600 },
    clearColor: 0x05010a,
    fogColor: 0x0f021a,
    ambient: 0x1f0b3b,
    sun: 0x8a2be2,
    baseAiSpeed: 28,
    path: [
        [0, 500], [200, 500], [400, 400], [500, 200], [500, -200], [400, -400],
        [200, -500], [-200, -500], [-400, -400], [-500, -200], [-500, 200], [-400, 400],
        [-200, 500]
    ],
    checkpoints: [0, 3, 6, 9, 12],
    ramps: [
        { t: 0.08, lane: 0.0, width: 9.0, length: 18, slope: 22, launch: 10.5, boost: 5.5 },
        { t: 0.25, lane: -2.5, width: 8.5, length: 16, slope: 25, launch: 11.2, boost: 5.8 },
        { t: 0.42, lane: 2.5, width: 8.5, length: 16, slope: 25, launch: 11.2, boost: 5.8 },
        { t: 0.58, lane: -1.5, width: 8.0, length: 15, slope: 23, launch: 10.0, boost: 5.0 },
        { t: 0.75, lane: 1.5, width: 8.0, length: 15, slope: 23, launch: 10.0, boost: 5.0 },
        { t: 0.92, lane: 0.0, width: 10.0, length: 20, slope: 28, launch: 12.5, boost: 6.5 },
    ],
    boosts: [
        { t: 0.04, lane: 0.0, width: 4.5, length: 10.0, power: 13.5 },
        { t: 0.15, lane: -2.0, width: 4.0, length: 9.0, power: 12.8 },
        { t: 0.32, lane: 2.0, width: 4.0, length: 9.0, power: 12.8 },
        { t: 0.50, lane: 0.0, width: 5.0, length: 12.0, power: 14.0 },
        { t: 0.68, lane: -2.0, width: 4.0, length: 9.0, power: 12.5 },
        { t: 0.85, lane: 2.0, width: 4.0, length: 9.0, power: 12.5 },
    ],
    items: [
        { t: 0.10, lane: 0.0 },
        { t: 0.20, lane: -1.0 },
        { t: 0.38, lane: 1.0 },
        { t: 0.54, lane: 0.0 },
        { t: 0.72, lane: -1.0 },
        { t: 0.88, lane: 1.0 },
    ],
    mountainField: {
        seedOffset: 0xbbbb,
        boundsInset: 15,
        defaultMinTrackDist: 70,
        maxAttempts: 25,
        minNormalY: 0.70,
        maxRelief: 8.0,
        reliefSampleScale: 0.4,
        viewClearanceScale: 1.1,
        sightlineScale: 0.9,
        minSpacingScale: 1.2,
        belts: [
            { mode: "ring", count: 8, radius: 280, spread: 20, minScale: 8.0, maxScale: 14.0, minTrackDist: 85, footprintScale: 1.3, minSpacingScale: 1.2 },
        ],
    },
    heightFn: (x, z) => {
        // Artificial flat grid with undulating digital waves
        const baseHeight = 25.0;
        const waveX = Math.sin(x * 0.02) * 4.0;
        const waveZ = Math.cos(z * 0.02) * 4.0;
        const interference = Math.sin((x + z) * 0.03) * 2.5;
        const centerDip = -15 * Math.exp(-(x * x + z * z) / 20000);
        return baseHeight + waveX + waveZ + interference + centerDip;
    },
    palette: {
        low: new THREE.Color(0x0a0316),
        high: new THREE.Color(0x1a052b),
        accent: new THREE.Color(0x380b59),
        route: 0x05010a,
        boundary: 0x00ffff, // Cyan neon
        ramp: 0xff00ff,     // Magenta neon 
        boost: 0x00ff00,    // Green neon
    },
};
