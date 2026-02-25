import * as THREE from "three";

// [MODULE] dynamic-materials: Manages the generation of player/AI specific color palettes
// and handles the procedural generation of dynamic Dirt/Mud masks.

// Color palettes for differentiation
export const TEAM_COLORS = {
    PLAYER: 0xf7c64a, // Signature Yellow/Gold
    AI_RED: 0xe63946,
    AI_BLUE: 0x1d3557,
    AI_GREEN: 0x2a9d8f,
    AI_PURPLE: 0x7209b7,
    AI_ORANGE: 0xf4a261,
    AI_CYAN: 0x4cc9f0,
    AI_WHITE: 0xf8f9fa,
    AI_BLACK: 0x212529,
};

export function getAiColor(index) {
    const keys = Object.keys(TEAM_COLORS).filter(k => k !== 'PLAYER');
    return TEAM_COLORS[keys[index % keys.length]];
}

// Generates a base procedural dirt mask (returns a Canvas element so we can update it in real-time)
export function createDynamicDirtMask(size = 512) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    // Start fully black (no dirt)
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    return { canvas, ctx, texture };
}

// Utility to splatter mud on the canvas at runtime
export function addMudSplatter(ctx, size, amount, intensity = 1.0) {
    for (let i = 0; i < amount; i++) {
        // Bias splatter towards the bottom of the UV map (assuming Y-down UV layout for lower body/bike frame)
        const x = Math.random() * size;
        const y = size * 0.5 + Math.pow(Math.random(), 2) * (size * 0.5);

        const radius = 1 + Math.random() * 4 * intensity;

        // White represents dirt in the mask
        const alpha = 0.1 + Math.random() * 0.3 * intensity;
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Modified material builder that incorporates the dirt mask
export function buildAdvancedMaterialSet(baseColorHex, isPlayer, textures) {
    // Use HSL adjustments for a cohesive team look
    const baseColor = new THREE.Color(baseColorHex);

    // Rider clothing
    const clothColor = isPlayer
        ? new THREE.Color(0xf5ae3e)
        : baseColor.clone().offsetHSL(0, -0.08, -0.05);

    // Accent colors (pads, gloves, details)
    const accentColor = isPlayer
        ? new THREE.Color(0xffe0a4)
        : baseColor.clone().offsetHSL(0.08, +0.1, +0.1);

    // Hard shell armor/helmet
    const armorColor = baseColor.clone().offsetHSL(0, 0, -0.15);

    return {
        frame: new THREE.MeshStandardMaterial({
            color: baseColor,
            roughness: 0.36,
            metalness: 0.48,
            map: textures.frame,
            normalMap: textures.roadNormal,
            normalScale: new THREE.Vector2(0.16, 0.16),
        }),
        darkRubber: new THREE.MeshStandardMaterial({
            color: 0x1c232d,
            roughness: 0.88,
            metalness: 0.09,
            map: textures.rubber,
        }),
        chrome: new THREE.MeshStandardMaterial({
            color: 0xd6dee6,
            roughness: 0.22,
            metalness: 0.92,
            map: textures.metal,
        }),
        skin: new THREE.MeshStandardMaterial({
            color: 0xeec8a8,
            roughness: 0.76,
            metalness: 0.02,
        }),
        cloth: new THREE.MeshStandardMaterial({
            color: clothColor,
            roughness: 0.94, // High roughness for fabric
            metalness: 0.02,
            map: textures.cloth,
        }),
        armor: new THREE.MeshStandardMaterial({
            color: armorColor,
            roughness: 0.35,  // Semi-glossy plastic
            metalness: 0.1,
        }),
        accent: new THREE.MeshStandardMaterial({
            color: accentColor,
            roughness: 0.54,
            metalness: 0.12,
        }),
    };
}
