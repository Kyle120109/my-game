import * as THREE from "three";

// Debug flat map: hidden from menu carousel, accessible via F4 only.
// Minimal environment, straight track, used for testing visuals/interactions.
export const debugFlatLevel = {
    id: "debug",
    name: "Debug Flat",
    desc: "调试平原：包含所有模型与道具",
    loop: false,
    seed: 0xdeadbeef,
    baseAiSpeed: 22,

    // Route
    routeHalfWidth: 8,
    routeLayers: [0],

    // Environment counts (zero = no scattering)
    treeCount: 0,
    rockCount: 0,
    propCount: 0,
    hazardCount: 0,

    // World geometry
    bounds: { minX: -120, maxX: 120, minZ: -20, maxZ: 1040 },

    // Visuals – required by build-scene.js
    clearColor: 0x7a8c99,
    fogColor: 0x7a8c99,
    ambient: 0x888888,
    sun: 0xfff4e0,
    sunPitch: 0.9,
    sunYaw: 0.8,

    // Terrain vertex palette – required by buildTerrain()
    palette: {
        low: new THREE.Color(0x607060),
        high: new THREE.Color(0x909090),
        accent: new THREE.Color(0x6a7d6a),
        route: 0x404850,
        boundary: 0x885533,
        ramp: 0xc44020,
        boost: 0x30dde0,
    },

    // No ramps/boosts/items needed for debug
    ramps: [],
    boosts: [],
    items: [],

    // Path: straight line along Z axis, subdivided for smooth path sampling
    path: [
        [0, 0],
        [0, 200],
        [0, 400],
        [0, 600],
        [0, 800],
        [0, 1000],
    ],

    // Perfectly flat
    heightFn: (x, z) => 0,
};
