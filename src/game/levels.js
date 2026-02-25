import * as THREE from "three";
import { BIKE_CLEARANCE } from "./config.js";
import { ringLevel } from "./levels/ring.js";
import { serpentLevel } from "./levels/serpent.js";
import { urban8Level } from "./levels/urban8.js";
import { harborLevel } from "./levels/harbor.js";
import { alpineLevel } from "./levels/alpine.js";
import { lavaLevel } from "./levels/lava.js";
import { neonLevel } from "./levels/neon.js";
import { ruinsLevel } from "./levels/ruins.js";
import { debugFlatLevel } from "./levels/debug_flat.js";

// [MODULE] levels: 关卡装配 + 路径/进度数学。

const tempVec2A = new THREE.Vector2();
const tempVec2B = new THREE.Vector2();
const tempVec3A = new THREE.Vector3();

// LEVELS is what the menu carousel shows. Debug map is kept separate.
export const LEVELS = [
  ringLevel, serpentLevel, urban8Level, harborLevel,
  alpineLevel, lavaLevel, neonLevel, ruinsLevel
];

// LEVELS_ALL includes the hidden debug map used by the world system.
export const LEVELS_ALL = [...LEVELS, debugFlatLevel];

export function prepareLevel(level) {
  level.pathPoints = level.path.map(([x, z]) => new THREE.Vector3(x, level.heightFn(x, z) + BIKE_CLEARANCE, z));
  const segmentCount = level.loop ? level.pathPoints.length : level.pathPoints.length - 1;
  level.segmentLengths = [];
  level.cumulative = [0];
  let total = 0;
  for (let i = 0; i < segmentCount; i += 1) {
    const a = level.pathPoints[i];
    const b = level.pathPoints[i + 1] ?? level.pathPoints[0];
    const len = Math.hypot(b.x - a.x, b.z - a.z);
    level.segmentLengths.push(len);
    total += len;
    level.cumulative.push(total);
  }
  level.totalLength = total;
}

export function samplePath(level, value) {
  let s = value;
  if (level.loop) {
    s %= level.totalLength;
    if (s < 0) s += level.totalLength;
  } else {
    s = THREE.MathUtils.clamp(s, 0, level.totalLength);
  }

  let segmentIndex = level.segmentLengths.length - 1;
  for (let i = 0; i < level.segmentLengths.length; i += 1) {
    if (level.cumulative[i + 1] >= s) {
      segmentIndex = i;
      break;
    }
  }

  const segStart = level.cumulative[segmentIndex];
  const segLen = level.segmentLengths[segmentIndex];
  const t = segLen <= 0.001 ? 0 : (s - segStart) / segLen;
  const a = level.pathPoints[segmentIndex];
  const b = level.pathPoints[segmentIndex + 1] ?? level.pathPoints[0];
  const px = THREE.MathUtils.lerp(a.x, b.x, t);
  const pz = THREE.MathUtils.lerp(a.z, b.z, t);
  const point = new THREE.Vector3(px, level.heightFn(px, pz) + BIKE_CLEARANCE, pz);
  const forward = new THREE.Vector3(b.x - a.x, 0, b.z - a.z);
  if (forward.lengthSq() < 0.0001) forward.set(0, 0, 1);
  forward.normalize();

  return { s, point, forward, segmentIndex, t };
}

export function projectProgress(level, x, z) {
  let bestDistSq = Number.POSITIVE_INFINITY;
  let bestS = 0;

  for (let i = 0; i < level.segmentLengths.length; i += 1) {
    const a = level.pathPoints[i];
    const b = level.pathPoints[i + 1] ?? level.pathPoints[0];
    tempVec2A.set(a.x, a.z);
    tempVec2B.set(b.x - a.x, b.z - a.z);
    const lenSq = tempVec2B.lengthSq();
    if (lenSq <= 0.0001) continue;

    const px = x - a.x;
    const pz = z - a.z;
    const t = THREE.MathUtils.clamp((px * tempVec2B.x + pz * tempVec2B.y) / lenSq, 0, 1);
    const projX = a.x + tempVec2B.x * t;
    const projZ = a.z + tempVec2B.y * t;
    const distSq = distance2DSq(x, z, projX, projZ);
    if (distSq < bestDistSq) {
      bestDistSq = distSq;
      bestS = level.cumulative[i] + level.segmentLengths[i] * t;
    }
  }

  if (!level.loop) bestS = THREE.MathUtils.clamp(bestS, 0, level.totalLength);
  return { s: bestS, distSq: bestDistSq };
}

export function projectProgressNear(level, x, z, seedS, segmentRadius = 6) {
  if (!Number.isFinite(seedS)) return projectProgress(level, x, z);
  const segCount = level.segmentLengths.length;
  if (segCount <= 0) return projectProgress(level, x, z);

  const radius = Math.max(1, Math.floor(segmentRadius));
  if (radius * 2 + 1 >= segCount) return projectProgress(level, x, z);

  let s = seedS;
  if (level.loop) {
    s %= level.totalLength;
    if (s < 0) s += level.totalLength;
  } else {
    s = THREE.MathUtils.clamp(s, 0, level.totalLength);
  }

  let seedIndex = segCount - 1;
  for (let i = 0; i < segCount; i += 1) {
    if (level.cumulative[i + 1] >= s) {
      seedIndex = i;
      break;
    }
  }

  let bestDistSq = Number.POSITIVE_INFINITY;
  let bestS = s;

  for (let offset = -radius; offset <= radius; offset += 1) {
    let i = seedIndex + offset;
    if (level.loop) {
      i = ((i % segCount) + segCount) % segCount;
    } else if (i < 0 || i >= segCount) {
      continue;
    }

    const a = level.pathPoints[i];
    const b = level.pathPoints[i + 1] ?? level.pathPoints[0];
    tempVec2A.set(a.x, a.z);
    tempVec2B.set(b.x - a.x, b.z - a.z);
    const lenSq = tempVec2B.lengthSq();
    if (lenSq <= 0.0001) continue;

    const px = x - a.x;
    const pz = z - a.z;
    const t = THREE.MathUtils.clamp((px * tempVec2B.x + pz * tempVec2B.y) / lenSq, 0, 1);
    const projX = a.x + tempVec2B.x * t;
    const projZ = a.z + tempVec2B.y * t;
    const distSq = distance2DSq(x, z, projX, projZ);
    if (distSq < bestDistSq) {
      bestDistSq = distSq;
      bestS = level.cumulative[i] + level.segmentLengths[i] * t;
    }
  }

  if (!Number.isFinite(bestDistSq)) return projectProgress(level, x, z);
  if (!level.loop) bestS = THREE.MathUtils.clamp(bestS, 0, level.totalLength);
  return { s: bestS, distSq: bestDistSq };
}

export function distanceToTrack(level, x, z) {
  return Math.sqrt(projectProgress(level, x, z).distSq);
}

export function signedProgressDelta(level, fromS, toS) {
  let delta = toS - fromS;
  if (level.loop) {
    const half = level.totalLength * 0.5;
    if (delta > half) delta -= level.totalLength;
    if (delta < -half) delta += level.totalLength;
  }
  return delta;
}

export function forwardProgressDistance(level, fromS, toS) {
  if (!level.loop) return toS - fromS;
  let dist = toS - fromS;
  while (dist < 0) dist += level.totalLength;
  while (dist >= level.totalLength) dist -= level.totalLength;
  return dist;
}

export function surfaceNormal(level, x, z) {
  const eps = 0.9;
  const hL = level.heightFn(x - eps, z);
  const hR = level.heightFn(x + eps, z);
  const hD = level.heightFn(x, z - eps);
  const hU = level.heightFn(x, z + eps);
  return tempVec3A.set(hL - hR, 2 * eps, hD - hU).normalize().clone();
}

export function forwardFromHeading(heading) {
  return new THREE.Vector3(Math.sin(heading), 0, Math.cos(heading));
}

export function horizontalSpeed(velocity) {
  return Math.hypot(velocity.x, velocity.z);
}

export function shortestAngle(from, to) {
  let d = to - from;
  while (d > Math.PI) d -= Math.PI * 2;
  while (d < -Math.PI) d += Math.PI * 2;
  return d;
}

export function distance2DSq(ax, az, bx, bz) {
  const dx = ax - bx;
  const dz = az - bz;
  return dx * dx + dz * dz;
}

export function damp(value, target, smoothing, dt) {
  return THREE.MathUtils.lerp(value, target, 1 - Math.exp(-smoothing * dt));
}

export function createRng(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

for (const level of LEVELS) {
  prepareLevel(level);
}
// Debug level is not in LEVELS (hidden from carousel) so must be prepared separately.
prepareLevel(debugFlatLevel);
