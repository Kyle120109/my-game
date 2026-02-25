import * as THREE from "three";
import { createRng, samplePath, surfaceNormal, distanceToTrack } from "../levels.js";
import { buildOrthonormalFrame } from "./math.js";
import { pushBoxObstacle } from "./obstacles.js";
export function createRouteBuilder({ settings, modelLibrary, tempVec3A, tempVec3B, tempVec3C, tempVec3D, tempMat4 }) {
  function buildRoute(game, level) {
    const rng = createRng(level.seed ^ 0xabcd);
    const isUrbanInterchange = level.id === "urban8";
    const routeMat = modelLibrary.createRoadSurfaceMaterial(level.palette.route);
    const edgePostMat = modelLibrary.createRoadEdgeMaterial(level.palette.boundary);
    const edgeRailMat = modelLibrary.createRoadEdgeMaterial(0x813a22);
    const markerMat = modelLibrary.createRoadMarkerMaterial(level.palette.boost);

    const step = settings.quality === "high" ? 2.4 : settings.quality === "medium" ? 3.1 : 4.2;
    const barrierStep = level.barrierStep ?? 9;
    const routeFrames = buildRouteFrames(level, step);
    const crossSegments = settings.quality === "high" ? 14 : settings.quality === "medium" ? 11 : 8;
    const routeGeometry = buildRouteRibbonGeometry(level, routeFrames, crossSegments);
    const routeMesh = new THREE.Mesh(routeGeometry, routeMat);
    routeMesh.userData.routeContinuous = true;
    routeMesh.castShadow = true;
    routeMesh.receiveShadow = true;
    game.routeRoot.add(routeMesh);

    const shoulderOuter = level.routeHalfWidth + 1.18;
    for (const side of [-1, 1]) {
      const shoulderGeo = buildRouteShoulderGeometry(routeFrames, level.routeHalfWidth * side, shoulderOuter * side, level.loop);
      const shoulder = new THREE.Mesh(shoulderGeo, edgePostMat);
      shoulder.userData.routeContinuous = true;
      shoulder.receiveShadow = true;
      shoulder.castShadow = true;
      game.routeRoot.add(shoulder);
    }

    const railOffset = level.routeHalfWidth + 1.02;
    if (!isUrbanInterchange) {
      for (const side of [-1, 1]) {
        const curvePoints = routeFrames.map((frame) => frame.center.clone().addScaledVector(frame.right, railOffset * side).addScaledVector(frame.up, 0.78));
        const railCurve = new THREE.CatmullRomCurve3(curvePoints, level.loop, "centripetal", 0.5);
        const railGeo = new THREE.TubeGeometry(railCurve, Math.max(80, curvePoints.length * 2), 0.09, 12, level.loop);
        const rail = new THREE.Mesh(railGeo, edgeRailMat);
        rail.userData.routeContinuous = true;
        rail.castShadow = true;
        rail.receiveShadow = true;
        game.routeRoot.add(rail);
      }
    }

    if (!isUrbanInterchange) {
      const postStep = 8;
      const colliderPostStep = 14;
      for (let s = 0; s < level.totalLength; s += postStep) {
        const sampled = samplePath(level, s);
        const forward = tempVec3D.copy(sampled.forward);
        const right = tempVec3B;
        const up = tempVec3C;
        buildOrthonormalFrame(forward, surfaceNormal(level, sampled.point.x, sampled.point.z), right, up, forward);
        for (const side of [-1, 1]) {
          const edgePoint = sampled.point.clone().addScaledVector(right, railOffset * side);
          const guardHeight = 1.34;
          const guard = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.16, guardHeight, 10), edgePostMat);
          guard.position.set(edgePoint.x, level.heightFn(edgePoint.x, edgePoint.z) + guardHeight * 0.5, edgePoint.z);
          guard.castShadow = true;
          guard.receiveShadow = true;
          game.routeRoot.add(guard);
        }
        const useEdgeCollider = level.loop || (s > 90 && s < level.totalLength - 90);
        if (useEdgeCollider && Math.floor(s / colliderPostStep) !== Math.floor((s - postStep) / colliderPostStep)) {
          for (const side of [-1, 1]) {
            const point = sampled.point.clone().addScaledVector(right, railOffset * side);
            game.obstacles.push({
              shape: "sphere",
              x: point.x,
              y: level.heightFn(point.x, point.z) + 0.8,
              z: point.z,
              radius: 0.4,
              height: 0.8,
              crashWeight: 1.16,
              type: "edge",
            });
          }
        }
      }
    }

    const laneMarkStep = 36;
    for (let s = 0; s < level.totalLength; s += laneMarkStep) {
      const sampled = samplePath(level, s);
      const forward = tempVec3D.copy(sampled.forward);
      const right = tempVec3A;
      const up = tempVec3B;
      buildOrthonormalFrame(forward, surfaceNormal(level, sampled.point.x, sampled.point.z), right, up, forward);
      const marker = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.05, 5.8), markerMat);
      marker.position.copy(sampled.point).addScaledVector(up, 0.24);
      tempMat4.makeBasis(right, up, forward);
      marker.quaternion.setFromRotationMatrix(tempMat4);
      marker.receiveShadow = true;
      game.routeRoot.add(marker);
    }

    if (isUrbanInterchange) {
      buildUrbanRouteBoundaries(game, level, routeFrames);
    }

    if (isUrbanInterchange) return;

    for (let s = barrierStep; s < level.totalLength; s += barrierStep) {
      const sampled = samplePath(level, s);
      const forward = tempVec3D.copy(sampled.forward);
      const right = tempVec3B;
      const up = tempVec3C;
      buildOrthonormalFrame(forward, surfaceNormal(level, sampled.point.x, sampled.point.z), right, up, forward);
      placeRouteBarrier(game, level, sampled.point, forward, right, edgePostMat, rng);
    }
  }
  function buildUrbanRouteBoundaries(game, level, routeFrames) {
    const boundaryMat = new THREE.MeshStandardMaterial({
      color: 0x8f959f,
      roughness: 0.82,
      metalness: 0.12,
    });
    const stripeMat = new THREE.MeshStandardMaterial({
      color: 0xe5b54a,
      roughness: 0.58,
      metalness: 0.08,
    });
    const curbInner = level.routeHalfWidth + 1.2;
    const curbOuter = level.routeHalfWidth + 2.24;
    const stripeInner = level.routeHalfWidth + 1.88;
    const stripeOuter = level.routeHalfWidth + 2.14;

    for (const side of [-1, 1]) {
      const curbGeo = buildRouteShoulderGeometry(routeFrames, curbInner * side, curbOuter * side, level.loop);
      const curb = new THREE.Mesh(curbGeo, boundaryMat);
      curb.userData.routeContinuous = true;
      curb.castShadow = true;
      curb.receiveShadow = true;
      game.routeRoot.add(curb);

      const stripeGeo = buildRouteShoulderGeometry(routeFrames, stripeInner * side, stripeOuter * side, level.loop);
      const stripe = new THREE.Mesh(stripeGeo, stripeMat);
      stripe.userData.routeContinuous = true;
      stripe.castShadow = false;
      stripe.receiveShadow = true;
      game.routeRoot.add(stripe);
    }

    const segStep = 18;
    const colliderOffset = level.routeHalfWidth + 1.82;
    const halfWidth = 0.18;
    const halfLength = 1.18;
    const halfHeight = 0.42;
    for (let s = 0; s < level.totalLength; s += segStep) {
      const sampled = samplePath(level, s);
      const forward = tempVec3A.copy(sampled.forward);
      const right = tempVec3B;
      const up = tempVec3C;
      buildOrthonormalFrame(forward, surfaceNormal(level, sampled.point.x, sampled.point.z), right, up, forward);

      for (const side of [-1, 1]) {
        const center = sampled.point.clone().addScaledVector(right, colliderOffset * side).addScaledVector(up, halfHeight + 0.06);
        if (isUrbanInterchangeCore(center.x, center.z, 236, 172)) {
          const keepOuter = Math.abs(center.x) > 116 || Math.abs(center.z) > 92;
          if (!keepOuter) continue;
        }
        if (Math.abs(center.x) < 64 && Math.abs(center.z) < 58) continue;
        pushBoxObstacle(game, {
          x: center.x,
          y: center.y,
          z: center.z,
          right,
          forward,
          halfWidth,
          halfLength,
          halfHeight,
          crashWeight: 1.14,
          type: "edge",
        });
      }
    }
  }
  function placeRouteBarrier(game, level, point, dir, right, material, rng) {
    const edge = level.routeHalfWidth + 1.45;
    const barrierDensity = level.barrierDensity ?? 0.5;
    for (const side of [-1, 1]) {
      if (rng() > barrierDensity) continue;

      let mesh;
      let radius;
      let height;
      let boxCollider = null;

      if (rng() < 0.4) {
        const boxH = 2.4 + rng() * 0.8;
        mesh = new THREE.Mesh(new THREE.BoxGeometry(1.6, boxH, 2.2), material);
        radius = 1.0;
        height = boxH;
        boxCollider = { halfWidth: 0.82, halfLength: 1.12, halfHeight: boxH * 0.54 };
      } else {
        const scale = 0.9 + rng() * 0.9;
        mesh = modelLibrary.createRockModel(scale, level.id === "serpent", rng);
        radius = 1.2 * scale;
        height = 2.4 * scale;
      }

      const safeOffset = edge + radius * 1.08 + 0.7 + rng() * 1.15;
      const base = tempVec3A.copy(point).addScaledVector(right, safeOffset * side);
      if (distanceToTrack(level, base.x, base.z) < level.routeHalfWidth + radius * 1.2 + 0.4) continue;
      const y = level.heightFn(base.x, base.z);
      mesh.position.set(base.x, y + height * 0.5, base.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      game.routeRoot.add(mesh);

      if (boxCollider) {
        pushBoxObstacle(game, {
          x: mesh.position.x,
          y: mesh.position.y,
          z: mesh.position.z,
          right,
          forward: dir,
          ...boxCollider,
          crashWeight: 1.4,
          type: "barrier",
        });
      } else {
        game.obstacles.push({ shape: "sphere", x: mesh.position.x, z: mesh.position.z, y: mesh.position.y, radius, height: height * 0.58, crashWeight: 1.4, type: "barrier" });
      }
    }

  }
  function buildRouteFrames(level, step) {
    const closed = level.loop;
    const points = [];
    for (let s = 0; s <= level.totalLength; s += step) {
      const sampled = samplePath(level, s);
      points.push(sampled.point.clone());
    }
    if (closed && points.length > 1) points.pop();
    const curve = new THREE.CatmullRomCurve3(points, closed, "centripetal", 0.55);
    const sampleCount = Math.max(120, Math.round(level.totalLength / Math.max(1.8, step * 0.8)));
    const frames = [];
    const limit = closed ? sampleCount : sampleCount + 1;
    for (let i = 0; i < limit; i += 1) {
      const t = closed ? i / sampleCount : i / sampleCount;
      const raw = curve.getPoint(t);
      const center = new THREE.Vector3(raw.x, level.heightFn(raw.x, raw.z) + 0.08, raw.z);
      const tangent = curve.getTangent(t);
      if (tangent.lengthSq() < 0.0001) tangent.set(0, 0, 1);
      tangent.normalize();
      const right = new THREE.Vector3();
      const up = new THREE.Vector3();
      const forward = tangent.clone();
      buildOrthonormalFrame(forward, surfaceNormal(level, center.x, center.z), right, up, forward);
      frames.push({
        center,
        right,
        up,
        forward,
        s: (i / sampleCount) * level.totalLength,
      });
    }
    return frames;
  }
  function buildRouteRibbonGeometry(level, frames, crossSegments) {
    const rowCount = frames.length;
    const colCount = crossSegments + 1;
    const positions = new Float32Array(rowCount * colCount * 3);
    const uvs = new Float32Array(rowCount * colCount * 2);
    const distances = new Float32Array(rowCount);

    distances[0] = 0;
    for (let i = 1; i < rowCount; i += 1) {
      const prev = frames[i - 1].center;
      const curr = frames[i].center;
      distances[i] = distances[i - 1] + prev.distanceTo(curr);
    }

    let vertexOffset = 0;
    let uvOffset = 0;
    for (let i = 0; i < rowCount; i += 1) {
      const frame = frames[i];
      const v = distances[i] * 0.16;
      for (let j = 0; j < colCount; j += 1) {
        const alpha = j / crossSegments;
        const lateral = THREE.MathUtils.lerp(-level.routeHalfWidth, level.routeHalfWidth, alpha);
        const crownWeight = 1 - Math.pow(Math.abs(lateral) / Math.max(0.01, level.routeHalfWidth), 1.72);
        const crown = crownWeight * 0.16;
        const edgeDrop = Math.pow(Math.abs(lateral) / Math.max(0.01, level.routeHalfWidth), 2.1) * -0.06;
        const point = frame.center.clone().addScaledVector(frame.right, lateral).addScaledVector(frame.up, crown + edgeDrop + 0.04);
        positions[vertexOffset] = point.x;
        positions[vertexOffset + 1] = point.y;
        positions[vertexOffset + 2] = point.z;
        vertexOffset += 3;

        uvs[uvOffset] = alpha * 2.2;
        uvs[uvOffset + 1] = v;
        uvOffset += 2;
      }
    }

    const quads = level.loop ? rowCount : rowCount - 1;
    const indices = new Uint32Array(quads * crossSegments * 6);
    let indexOffset = 0;
    for (let i = 0; i < quads; i += 1) {
      const next = (i + 1) % rowCount;
      for (let j = 0; j < crossSegments; j += 1) {
        const a = i * colCount + j;
        const b = i * colCount + j + 1;
        const c = next * colCount + j;
        const d = next * colCount + j + 1;
        indices[indexOffset] = a;
        indices[indexOffset + 1] = c;
        indices[indexOffset + 2] = b;
        indices[indexOffset + 3] = b;
        indices[indexOffset + 4] = c;
        indices[indexOffset + 5] = d;
        indexOffset += 6;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    geometry.computeVertexNormals();
    return geometry;
  }
  function buildRouteShoulderGeometry(frames, innerOffset, outerOffset, closed = false) {
    const rowCount = frames.length;
    const colCount = 2;
    const positions = new Float32Array(rowCount * colCount * 3);
    const uvs = new Float32Array(rowCount * colCount * 2);
    const distances = new Float32Array(rowCount);

    distances[0] = 0;
    for (let i = 1; i < rowCount; i += 1) {
      distances[i] = distances[i - 1] + frames[i - 1].center.distanceTo(frames[i].center);
    }

    for (let i = 0; i < rowCount; i += 1) {
      const frame = frames[i];
      const inner = frame.center.clone().addScaledVector(frame.right, innerOffset).addScaledVector(frame.up, -0.04);
      const outer = frame.center.clone().addScaledVector(frame.right, outerOffset).addScaledVector(frame.up, -0.32);
      const base = i * 6;
      positions[base] = inner.x;
      positions[base + 1] = inner.y;
      positions[base + 2] = inner.z;
      positions[base + 3] = outer.x;
      positions[base + 4] = outer.y;
      positions[base + 5] = outer.z;

      const uvBase = i * 4;
      uvs[uvBase] = 0;
      uvs[uvBase + 1] = distances[i] * 0.1;
      uvs[uvBase + 2] = 1;
      uvs[uvBase + 3] = distances[i] * 0.1;
    }

    const quads = closed ? rowCount : rowCount - 1;
    const indices = new Uint32Array(quads * 6);
    for (let i = 0; i < quads; i += 1) {
      const next = (i + 1) % rowCount;
      const a = i * 2;
      const b = a + 1;
      const c = next * 2;
      const d = c + 1;
      const idx = i * 6;
      indices[idx] = a;
      indices[idx + 1] = c;
      indices[idx + 2] = b;
      indices[idx + 3] = b;
      indices[idx + 4] = c;
      indices[idx + 5] = d;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
    geometry.setIndex(new THREE.BufferAttribute(indices, 1));
    geometry.computeVertexNormals();
    return geometry;
  }
  return {
    buildRoute,
  };
}
export function isUrbanInterchangeCore(x, z, halfX = 132, halfZ = 96) {
  return Math.abs(x) <= halfX && Math.abs(z) <= halfZ;
}

