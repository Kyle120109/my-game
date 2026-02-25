import * as THREE from "three";

export const lavaLevel = {
    id: "lava",
    name: "熔岩峡谷 (Lava Canyon)",
    desc: "封闭熔岩隧道与开放喷发口 + 极限弯道",
    loop: false,
    seed: 94001,
    routeHalfWidth: 8.0,
    routeLayers: [0, -2.5, 2.5, -4.8, 4.8],
    barrierStep: 10,
    barrierDensity: 0.65,
    treeCount: 0,
    rockCount: 650,
    propCount: 220,
    hazardCount: 130,
    environmentTrackPadding: 1.5,
    bounds: { minX: -550, maxX: 550, minZ: -300, maxZ: 700 },
    clearColor: 0x4a1911,
    fogColor: 0x5c2117,
    ambient: 0x8a3c2b,
    sun: 0xff6633,
    baseAiSpeed: 25,
    path: [
        [-30, 650], [90, 600], [210, 500], [260, 420], [210, 310], [100, 240],
        [-50, 190], [-180, 220], [-260, 310], [-340, 360], [-420, 280], [-400, 180],
        [-290, 80], [-190, -20], [-100, -100], [-120, -190], [-220, -250], [-30, -280],
        [80, -260], [160, -200], [240, -130], [350, -60], [420, 20], [380, 120]
    ],
    checkpoints: [0, 3, 6, 9, 12, 15, 18, 21, 23],
    ramps: [
        { t: 0.12, lane: -2.0, width: 7.0, length: 14, slope: 23, launch: 10.5, boost: 4.8 },
        { t: 0.28, lane: 2.2, width: 7.5, length: 15, slope: 26, launch: 11.0, boost: 5.2 },
        { t: 0.44, lane: 0.0, width: 8.0, length: 16, slope: 25, launch: 11.5, boost: 5.5 },
        { t: 0.65, lane: -2.5, width: 6.8, length: 14, slope: 22, launch: 9.9, boost: 4.5 },
        { t: 0.85, lane: 1.8, width: 7.4, length: 15, slope: 24, launch: 10.8, boost: 5.0 },
    ],
    boosts: [
        { t: 0.06, lane: 0.5, width: 3.5, length: 8.0, power: 12.0 },
        { t: 0.22, lane: -1.5, width: 3.8, length: 7.6, power: 11.5 },
        { t: 0.40, lane: 2.0, width: 3.6, length: 8.2, power: 12.5 },
        { t: 0.60, lane: -1.0, width: 3.9, length: 7.8, power: 11.8 },
        { t: 0.80, lane: 1.5, width: 3.5, length: 7.5, power: 12.2 },
    ],
    items: [
        { t: 0.09, lane: -0.5 },
        { t: 0.30, lane: 0.8 },
        { t: 0.48, lane: -0.8 },
        { t: 0.68, lane: 0.2 },
        { t: 0.88, lane: -0.2 },
    ],
    mountainField: {
        seedOffset: 0xa9c3,
        boundsInset: 20,
        defaultMinTrackDist: 85,
        maxAttempts: 50,
        minNormalY: 0.50,
        maxRelief: 22.0,
        reliefSampleScale: 0.9,
        viewClearanceScale: 1.5,
        sightlineScale: 0.8,
        minSpacingScale: 1.4,
        belts: [
            { mode: "edge", count: 8, inset: 30, band: 60, minScale: 12.0, maxScale: 20.0, minTrackDist: 105, footprintScale: 1.9, minSpacingScale: 1.5 },
            { mode: "ring", count: 5, radius: 250, spread: 40, minScale: 13.0, maxScale: 18.0, minTrackDist: 90, footprintScale: 1.7, minSpacingScale: 1.4 },
        ],
    },
    heightFn: (x, z) => {
        // Lava canyon: extreme sharp peaks, massive caldera drop
        const rawDescent = 120 - (650 - z) * 0.15;
        const volcanicCones = 35 * Math.exp(-((x - 150) * (x - 150) + (z - 250) * (z - 250)) / 8000)
            + 40 * Math.exp(-((x + 250) * (x + 250) + (z - 50) * (z - 50)) / 9000);
        const caldera = -45 * Math.exp(-((x + 100) * (x + 100) + (z + 150) * (z + 150)) / 15000);
        const hardRidges = Math.sin((x * 0.04) + (z * 0.02)) * 8.5 + Math.cos((x * 0.03) - (z * 0.05)) * 7.2;
        const crack = -18 * Math.exp(-((x - z) * (x - z)) / 3000);

        return rawDescent + volcanicCones + caldera + hardRidges + crack;
    },
    palette: {
        low: new THREE.Color(0x38120c),
        high: new THREE.Color(0x732316),
        accent: new THREE.Color(0x993717),
        route: 0x221c1a,
        boundary: 0xff3b00,
        ramp: 0xbd2a00,
        boost: 0xff8c00,
    },
};
