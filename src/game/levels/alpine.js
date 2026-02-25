import * as THREE from "three";

export const alpineLevel = {
    id: "alpine",
    name: "冰川遗迹 (Frost Peak)",
    desc: "高海拔冰雪赛道 + 险峻悬崖 + 遗迹碎石",
    loop: false,
    seed: 88482,
    routeHalfWidth: 8.8,
    routeLayers: [0, -2.8, 2.8, -5.4, 5.4],
    barrierStep: 14,
    barrierDensity: 0.55,
    treeCount: 220,
    rockCount: 450,
    propCount: 180,
    hazardCount: 88,
    environmentTrackPadding: 2.0,
    bounds: { minX: -600, maxX: 600, minZ: -600, maxZ: 600 },
    clearColor: 0xd0e1ec,
    fogColor: 0xc8dbec,
    ambient: 0xa8c2dd,
    sun: 0xfffcf0,
    baseAiSpeed: 24,
    path: [
        [-50, 520], [80, 480], [150, 400], [110, 320], [30, 240], [-60, 260],
        [-150, 200], [-190, 110], [-100, 40], [20, -10], [120, -70], [220, -150],
        [180, -260], [80, -320], [0, -400], [-100, -450], [-200, -380], [-280, -310],
        [-350, -400], [-280, -500], [-160, -560], [-40, -520]
    ],
    checkpoints: [0, 3, 6, 9, 12, 15, 18, 20, 21],
    ramps: [
        { t: 0.15, lane: 2.5, width: 7.2, length: 14, slope: 22, launch: 10.0, boost: 4.8 },
        { t: 0.35, lane: -2.0, width: 8.0, length: 15, slope: 24, launch: 11.2, boost: 5.2 },
        { t: 0.55, lane: 1.5, width: 6.8, length: 16, slope: 25, launch: 10.5, boost: 4.5 },
        { t: 0.75, lane: -2.5, width: 7.5, length: 14, slope: 21, launch: 9.8, boost: 4.6 },
        { t: 0.90, lane: 0.0, width: 8.5, length: 18, slope: 28, launch: 12.0, boost: 5.8 },
    ],
    boosts: [
        { t: 0.08, lane: 0.0, width: 4.0, length: 8.5, power: 12.5 },
        { t: 0.25, lane: -1.5, width: 3.5, length: 7.5, power: 11.8 },
        { t: 0.45, lane: 2.0, width: 3.8, length: 8.0, power: 12.0 },
        { t: 0.65, lane: -1.0, width: 3.6, length: 7.8, power: 11.9 },
        { t: 0.82, lane: 1.5, width: 3.9, length: 8.2, power: 12.2 },
    ],
    items: [
        { t: 0.10, lane: 0.5 },
        { t: 0.28, lane: -0.5 },
        { t: 0.48, lane: 0.8 },
        { t: 0.68, lane: -0.8 },
        { t: 0.88, lane: 0.0 },
    ],
    mountainField: {
        seedOffset: 0x9812,
        boundsInset: 24,
        defaultMinTrackDist: 90,
        maxAttempts: 45,
        minNormalY: 0.55,
        maxRelief: 18.2,
        reliefSampleScale: 0.8,
        viewClearanceScale: 1.4,
        sightlineScale: 0.85,
        minSpacingScale: 1.3,
        belts: [
            { mode: "edge", count: 6, inset: 24, band: 50, minScale: 10.5, maxScale: 18.5, minTrackDist: 100, footprintScale: 1.8, minSpacingScale: 1.4 },
            { mode: "line", count: 4, x: -200, zMin: -500, zMax: 400, jitterX: 30, jitterZ: 30, minScale: 12.5, maxScale: 16.5, minTrackDist: 95, footprintScale: 1.6, minSpacingScale: 1.3 },
            { mode: "line", count: 4, x: 250, zMin: -400, zMax: 500, jitterX: 40, jitterZ: 30, minScale: 14.0, maxScale: 19.0, minTrackDist: 100, footprintScale: 1.7, minSpacingScale: 1.3 },
        ],
    },
    heightFn: (x, z) => {
        // Alpine terrain: steep descent overall, jagged ridges, deep glacial crevasses.
        const descent = 140 - (520 - z) * 0.12;
        const peaks = Math.sin(x * 0.015) * 12.5 + Math.cos(z * 0.018) * 15.2;
        const jagged = Math.sin((x + z) * 0.055) * 6.8 + Math.cos((x - z) * 0.045) * 5.4;
        const crevasse1 = -25 * Math.exp(-((x - 60) * (x - 60) + (z - 250) * (z - 250)) / 4800);
        const crevasse2 = -28 * Math.exp(-((x + 120) * (x + 120) + (z + 180) * (z + 180)) / 5200);
        const crevasse3 = -32 * Math.exp(-((x - 150) * (x - 150) + (z + 400) * (z + 400)) / 6000);
        const mass = 45 * Math.exp(-((x + 280) * (x + 280)) / 12000);

        return descent + peaks + jagged + crevasse1 + crevasse2 + crevasse3 + mass;
    },
    palette: {
        low: new THREE.Color(0xbdd1df),
        high: new THREE.Color(0xfcfdfd),
        accent: new THREE.Color(0x8fa9c4),
        route: 0x6e889b,
        boundary: 0x3d70a3,
        ramp: 0x4883c4,
        boost: 0x4fe6f2,
    },
};
