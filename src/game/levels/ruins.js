import * as THREE from "three";

export const ruinsLevel = {
    id: "ruins",
    name: "荒木神庙 (Overgrown Ruins)",
    desc: "失落神庙结构 + 密集植被覆盖 + 多段极限飞跃",
    loop: false,
    seed: 70107,
    routeHalfWidth: 7.8,
    routeLayers: [0, -2.4, 2.4, -4.6, 4.6],
    barrierStep: 12,
    barrierDensity: 0.35,
    treeCount: 880,
    rockCount: 320,
    propCount: 150,
    hazardCount: 60,
    environmentTrackPadding: 2.5,
    bounds: { minX: -450, maxX: 450, minZ: -450, maxZ: 450 },
    clearColor: 0x7b9971,
    fogColor: 0x8aa880,
    ambient: 0x5a7a50,
    sun: 0xfffae6,
    baseAiSpeed: 23,
    path: [
        [350, 350], [250, 380], [120, 320], [60, 220], [180, 160], [240, 60],
        [160, -40], [50, -120], [-80, -60], [-180, 40], [-280, 120], [-380, 50],
        [-400, -80], [-320, -180], [-200, -240], [-80, -320], [40, -400], [180, -350],
        [280, -250], [380, -150]
    ],
    checkpoints: [0, 4, 8, 12, 16, 19],
    ramps: [
        { t: 0.18, lane: -1.5, width: 6.5, length: 13, slope: 25, launch: 10.5, boost: 4.6 },
        { t: 0.36, lane: 1.8, width: 7.0, length: 14, slope: 27, launch: 11.2, boost: 5.0 },
        { t: 0.54, lane: 0.0, width: 8.0, length: 16, slope: 30, launch: 12.8, boost: 6.2 },
        { t: 0.72, lane: -2.0, width: 6.8, length: 14, slope: 26, launch: 10.8, boost: 4.8 },
        { t: 0.88, lane: 2.2, width: 7.2, length: 15, slope: 28, launch: 11.5, boost: 5.2 },
    ],
    boosts: [
        { t: 0.12, lane: 1.5, width: 3.5, length: 7.5, power: 11.8 },
        { t: 0.30, lane: -2.0, width: 3.6, length: 8.2, power: 12.2 },
        { t: 0.48, lane: 0.0, width: 4.2, length: 9.0, power: 13.0 },
        { t: 0.66, lane: 2.0, width: 3.8, length: 8.5, power: 12.5 },
        { t: 0.82, lane: -1.5, width: 3.5, length: 7.8, power: 12.0 },
    ],
    items: [
        { t: 0.08, lane: 0.0 },
        { t: 0.24, lane: 0.8 },
        { t: 0.42, lane: -0.8 },
        { t: 0.60, lane: 0.5 },
        { t: 0.78, lane: -0.5 },
        { t: 0.94, lane: 0.0 },
    ],
    mountainField: {
        seedOffset: 0xf12a,
        boundsInset: 18,
        defaultMinTrackDist: 82,
        maxAttempts: 40,
        minNormalY: 0.60,
        maxRelief: 15.0,
        reliefSampleScale: 0.85,
        viewClearanceScale: 1.45,
        sightlineScale: 0.82,
        minSpacingScale: 1.35,
        belts: [
            { mode: "edge", count: 7, inset: 25, band: 55, minScale: 11.0, maxScale: 17.5, minTrackDist: 95, footprintScale: 1.7, minSpacingScale: 1.4 },
            { mode: "ring", count: 6, radius: 180, spread: 35, minScale: 10.5, maxScale: 15.5, minTrackDist: 88, footprintScale: 1.6, minSpacingScale: 1.3 },
        ],
    },
    heightFn: (x, z) => {
        // Overgrown temple stairs and terraces
        const terrace = Math.floor((z + 450) / 100) * 12.0;
        const terraceSlope = ((z + 450) % 100) * 0.05;
        const mounds = Math.sin(x * 0.025) * 8.5 + Math.cos(z * 0.022) * 9.2;
        const pyramid = 35 * Math.exp(-((x) * (x) + (z) * (z)) / 6500);
        const sinkhole = -22 * Math.exp(-((x + 200) * (x + 200) + (z - 100) * (z - 100)) / 4200);

        return terrace + terraceSlope + mounds + pyramid + sinkhole;
    },
    palette: {
        low: new THREE.Color(0x3c4a30),
        high: new THREE.Color(0x8a9c78),
        accent: new THREE.Color(0x566e44),
        route: 0x4f5c45,
        boundary: 0xe6b800, // Gold temple borders
        ramp: 0xbf9900,
        boost: 0x99ff33, // Jungle green boost
    },
};
