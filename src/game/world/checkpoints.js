import * as THREE from "three";
import { WORLD_UP } from "../config.js";
import { surfaceNormal } from "../levels.js";
export function createCheckpointBuilder({ tempVec3A, tempVec3B, tempVec3C, tempMat4 }) {
  function buildCheckpoints(game, level) {
    game.checkpointRoot.clear();
    game.checkpointMeshes.length = 0;

    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xb8fff5,
      transparent: true,
      opacity: 0.78,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const auraMat = new THREE.MeshBasicMaterial({
      color: 0x56b9ff,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    level.checkpointData = [];
    const pathCount = level.pathPoints.length;
    const configured = Array.isArray(level.checkpoints) ? level.checkpoints : null;
    const rawIndices = configured?.length ? configured : level.pathPoints.map((_, index) => index);
    const checkpointIndices = [];
    const maxPathIndex = Math.max(0, pathCount - 1);

    for (const raw of rawIndices) {
      const idx = THREE.MathUtils.clamp(Math.round(raw), 0, maxPathIndex);
      if (checkpointIndices.length > 0 && checkpointIndices[checkpointIndices.length - 1] === idx) continue;
      checkpointIndices.push(idx);
    }

    if (level.loop && checkpointIndices.length > 1 && checkpointIndices[0] === checkpointIndices[checkpointIndices.length - 1]) {
      checkpointIndices.pop();
    }
    if (checkpointIndices.length < 2) {
      checkpointIndices.length = 0;
      for (let i = 0; i < pathCount; i += 1) checkpointIndices.push(i);
    }

    level.checkpointIndices = checkpointIndices.slice();

    for (let checkpointOrder = 0; checkpointOrder < checkpointIndices.length; checkpointOrder += 1) {
      const pathIndex = checkpointIndices[checkpointOrder];
      const point = level.pathPoints[pathIndex];
      const lastCheckpoint = checkpointIndices.length - 1;
      if (!level.loop && checkpointOrder === lastCheckpoint && checkpointOrder > 0) {
        const prevPathIndex = checkpointIndices[checkpointOrder - 1];
        tempVec3A.copy(point).sub(level.pathPoints[prevPathIndex]).setY(0);
      } else {
        const nextPathIndex = checkpointIndices[(checkpointOrder + 1) % checkpointIndices.length];
        const next = level.pathPoints[nextPathIndex];
        tempVec3A.copy(next).sub(point).setY(0);
      }

      if (tempVec3A.lengthSq() < 0.001) tempVec3A.set(0, 0, 1);
      tempVec3A.normalize();

      const normal = surfaceNormal(level, point.x, point.z);
      const liftedNormal = tempVec3C.copy(normal).lerp(WORLD_UP, 0.45).normalize();
      const right = tempVec3B.crossVectors(liftedNormal, tempVec3A).normalize();

      const group = new THREE.Group();
      const core = new THREE.Mesh(new THREE.TorusGeometry(5.2, 0.18, 18, 72), coreMat.clone());
      const aura = new THREE.Mesh(new THREE.TorusGeometry(5.8, 0.46, 16, 64), auraMat.clone());

      tempMat4.makeBasis(right, liftedNormal, tempVec3A);
      core.quaternion.setFromRotationMatrix(tempMat4);
      aura.quaternion.copy(core.quaternion);
      group.position.copy(point).addScaledVector(liftedNormal, 3.9);
      group.add(core, aura);
      game.checkpointRoot.add(group);

      const checkpoint = {
        index: checkpointOrder,
        pathIndex,
        group,
        core,
        aura,
        pulse: Math.random() * Math.PI * 2,
        point: point.clone(),
        forward: tempVec3A.clone(),
        right: right.clone(),
        gateHalfWidth: level.routeHalfWidth * 1.24,
        captureDepth: 6.2,
        captureRadiusSq: Math.pow(level.routeHalfWidth * 1.55, 2),
        s: level.cumulative[pathIndex] ?? level.totalLength,
      };

      game.checkpointMeshes.push(checkpoint);
      level.checkpointData.push(checkpoint);
    }
  }
  return {
    buildCheckpoints,
  };
}

