import * as THREE from "three";

function createCanvasTexture(size, paint) {
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    paint(ctx, size);
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
    return texture;
}

function createRoadAlbedo(size = 1024) {
    return createCanvasTexture(size, (ctx, s) => {
        ctx.fillStyle = "#2e343b";
        ctx.fillRect(0, 0, s, s);
        for (let i = 0; i < 2500; i += 1) {
            const x = Math.random() * s;
            const y = Math.random() * s;
            const r = 0.4 + Math.random() * 1.8;
            const tone = 32 + Math.floor(Math.random() * 40);
            ctx.fillStyle = `rgba(${tone},${tone},${tone},${0.24 + Math.random() * 0.25})`;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
        }
        for (let y = 0; y < s; y += Math.max(2, Math.floor(s / 160))) {
            const alpha = 0.018 + Math.random() * 0.024;
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.fillRect(0, y, s, 1);
        }
    });
}

function createRoadRoughness(size = 1024) {
    const texture = createCanvasTexture(size, (ctx, s) => {
        ctx.fillStyle = "#9a9a9a";
        ctx.fillRect(0, 0, s, s);
        for (let i = 0; i < 3200; i += 1) {
            const x = Math.random() * s;
            const y = Math.random() * s;
            const tone = 100 + Math.floor(Math.random() * 120);
            ctx.fillStyle = `rgba(${tone},${tone},${tone},${0.15 + Math.random() * 0.24})`;
            ctx.fillRect(x, y, 1 + Math.random() * 2, 1 + Math.random() * 2);
        }
    });
    texture.colorSpace = THREE.NoColorSpace;
    return texture;
}

function createRoadNormal(size = 1024) {
    const texture = createCanvasTexture(size, (ctx, s) => {
        ctx.fillStyle = "rgb(128,128,255)";
        ctx.fillRect(0, 0, s, s);
        for (let i = 0; i < 3600; i += 1) {
            const x = Math.random() * s;
            const y = Math.random() * s;
            const nx = 118 + Math.floor(Math.random() * 20);
            const ny = 118 + Math.floor(Math.random() * 20);
            const nz = 230 + Math.floor(Math.random() * 24);
            ctx.fillStyle = `rgba(${nx},${ny},${nz},${0.18 + Math.random() * 0.2})`;
            ctx.fillRect(x, y, 1 + Math.random() * 2, 1 + Math.random() * 2);
        }
    });
    texture.colorSpace = THREE.NoColorSpace;
    return texture;
}

function createCrossHatchTexture(baseHex, linesHex, rough = false, size = 512) {
    const base = new THREE.Color(baseHex);
    const lines = new THREE.Color(linesHex);
    const texture = createCanvasTexture(size, (ctx, s) => {
        ctx.fillStyle = `#${base.getHexString()}`;
        ctx.fillRect(0, 0, s, s);
        ctx.strokeStyle = `rgba(${Math.floor(lines.r * 255)},${Math.floor(lines.g * 255)},${Math.floor(lines.b * 255)},0.34)`;
        ctx.lineWidth = Math.max(1, Math.floor(s / 180));
        const step = Math.max(8, Math.floor(s / 26));
        for (let i = -s; i < s * 2; i += step) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i - s, s);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(i, s);
            ctx.lineTo(i - s, 0);
            ctx.stroke();
        }
        if (rough) {
            for (let i = 0; i < 900; i += 1) {
                const x = Math.random() * s;
                const y = Math.random() * s;
                const alpha = 0.06 + Math.random() * 0.15;
                ctx.fillStyle = `rgba(255,255,255,${alpha})`;
                ctx.fillRect(x, y, 1, 1);
            }
        }
    });
    return texture;
}

function createMetalTexture(size = 512) {
    return createCanvasTexture(size, (ctx, s) => {
        const grad = ctx.createLinearGradient(0, 0, s, s);
        grad.addColorStop(0, "#d5dde6");
        grad.addColorStop(0.4, "#a9b5c1");
        grad.addColorStop(1, "#e1e6eb");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, s, s);
        for (let i = 0; i < s; i += 3) {
            const alpha = 0.04 + Math.random() * 0.05;
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.fillRect(0, i, s, 1);
        }
    });
}

export function createTextureSet() {
    const roadAlbedo = createRoadAlbedo();
    roadAlbedo.repeat.set(3.5, 28);
    const roadNormal = createRoadNormal();
    roadNormal.repeat.set(3.5, 28);
    const roadRoughness = createRoadRoughness();
    roadRoughness.repeat.set(3.5, 28);
    const clothTexture = createCrossHatchTexture(0x4c5a72, 0x2a3341, true);
    const frameTexture = createCrossHatchTexture(0x4d6d94, 0x8db0d8, false);
    const rubberTexture = createCrossHatchTexture(0x20252e, 0x0b0f14, true);
    const barkTexture = createCrossHatchTexture(0x6e5038, 0x3e2f22, true);
    const leafTexture = createCrossHatchTexture(0x3f7244, 0x25512c, true);
    const stoneTexture = createCrossHatchTexture(0x707982, 0x535c64, true);
    const metalTexture = createMetalTexture();

    return {
        roadAlbedo,
        roadNormal,
        roadRoughness,
        cloth: clothTexture,
        frame: frameTexture,
        rubber: rubberTexture,
        bark: barkTexture,
        leaf: leafTexture,
        stone: stoneTexture,
        metal: metalTexture,
    };
}
