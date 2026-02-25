import * as THREE from "three";
import { STATE } from "./config.js";
import { distanceToTrack, samplePath, surfaceNormal } from "./levels.js";

// [MODULE] map-inspector: 自由视角检图 + 自动巡检。

export function createMapInspector({ game, levels, world, uiSystem, onExitToMenu }) {
  const move = {
    forward: false,
    back: false,
    left: false,
    right: false,
    up: false,
    down: false,
    sprint: false,
  };

  const state = {
    active: false,
    looking: false,
    yaw: 0,
    pitch: 0,
    speed: 34,
    levelIndex: 0,
  };
  const prevCameraPos = new THREE.Vector3();

  function install() {
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    const dom = game.renderer?.domElement;
    if (!dom) return;

    dom.addEventListener("contextmenu", (event) => {
      if (state.active) event.preventDefault();
    });
    dom.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    dom.addEventListener("wheel", onWheel, { passive: false });
  }

  function onKeyDown(event) {
    if (event.code === "F2" && !event.repeat) {
      toggle();
      event.preventDefault();
      return;
    }
    if (event.code === "F3" && !event.repeat && state.active) {
      cycleLevel();
      event.preventDefault();
      return;
    }

    if (!state.active) return;
    if (event.code === "KeyW") move.forward = true;
    if (event.code === "KeyS") move.back = true;
    if (event.code === "KeyA") move.left = true;
    if (event.code === "KeyD") move.right = true;
    if (event.code === "KeyE") move.up = true;
    if (event.code === "KeyQ") move.down = true;
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") move.sprint = true;
  }

  function onKeyUp(event) {
    if (!state.active) return;
    if (event.code === "KeyW") move.forward = false;
    if (event.code === "KeyS") move.back = false;
    if (event.code === "KeyA") move.left = false;
    if (event.code === "KeyD") move.right = false;
    if (event.code === "KeyE") move.up = false;
    if (event.code === "KeyQ") move.down = false;
    if (event.code === "ShiftLeft" || event.code === "ShiftRight") move.sprint = false;
  }

  function onMouseDown(event) {
    if (!state.active || event.button !== 2) return;
    state.looking = true;
    event.preventDefault();
  }

  function onMouseUp(event) {
    if (event.button === 2) state.looking = false;
  }

  function onMouseMove(event) {
    if (!state.active || !state.looking) return;
    const sens = 0.0024;
    state.yaw -= event.movementX * sens;
    state.pitch -= event.movementY * sens;
    state.pitch = THREE.MathUtils.clamp(state.pitch, -Math.PI * 0.49, Math.PI * 0.49);
  }

  function onWheel(event) {
    if (!state.active) return;
    state.speed = THREE.MathUtils.clamp(state.speed + (event.deltaY > 0 ? -2 : 2), 8, 120);
    event.preventDefault();
  }

  function syncAnglesFromCamera() {
    const forward = new THREE.Vector3();
    game.camera.getWorldDirection(forward);
    state.yaw = Math.atan2(forward.x, forward.z);
    state.pitch = Math.asin(THREE.MathUtils.clamp(forward.y, -1, 1));
  }

  function clampInspectCameraToTerrain(level, clearance = 3.2) {
    const floor = level.heightFn(game.camera.position.x, game.camera.position.z) + clearance;
    if (game.camera.position.y < floor) game.camera.position.y = floor;
  }

  function resolveInspectCameraObstaclePenetration(level, clearance = 2.8) {
    const pos = game.camera.position;
    const camRadius = 1.02;
    const camHalfHeight = 1.1;
    let touched = false;

    for (let iter = 0; iter < 4; iter += 1) {
      let collided = false;
      for (const obstacle of game.obstacles) {
        if (obstacle.type === "edge") continue;

        if (obstacle.shape === "box") {
          const halfHeight = obstacle.halfHeight ?? obstacle.height ?? 1;
          if (Math.abs(pos.y - obstacle.y) > halfHeight + camHalfHeight) continue;
          const dx = pos.x - obstacle.x;
          const dz = pos.z - obstacle.z;
          const lx = dx * obstacle.right.x + dz * obstacle.right.z;
          const lz = dx * obstacle.forward.x + dz * obstacle.forward.z;
          const boundX = obstacle.halfWidth + camRadius;
          const boundZ = obstacle.halfLength + camRadius;
          if (Math.abs(lx) > boundX || Math.abs(lz) > boundZ) continue;

          const penX = boundX - Math.abs(lx);
          const penZ = boundZ - Math.abs(lz);
          if (penX < penZ) {
            const sign = lx >= 0 ? 1 : -1;
            pos.x += obstacle.right.x * penX * sign;
            pos.z += obstacle.right.z * penX * sign;
          } else {
            const sign = lz >= 0 ? 1 : -1;
            pos.x += obstacle.forward.x * penZ * sign;
            pos.z += obstacle.forward.z * penZ * sign;
          }
          collided = true;
          touched = true;
        } else {
          const halfHeight = obstacle.height ?? 1;
          if (Math.abs(pos.y - obstacle.y) > halfHeight + camHalfHeight) continue;
          const dx = pos.x - obstacle.x;
          const dz = pos.z - obstacle.z;
          const rr = (obstacle.radius ?? 1) + camRadius;
          const distSq = dx * dx + dz * dz;
          if (distSq >= rr * rr) continue;

          const dist = Math.sqrt(Math.max(0.0001, distSq));
          const push = rr - dist;
          pos.x += (dx / dist) * push;
          pos.z += (dz / dist) * push;
          collided = true;
          touched = true;
        }
      }

      clampInspectCameraToTerrain(level, clearance);
      if (!collided) break;
    }

    if (!touched) return;
    if (hitsAnyObstacle(pos.x, pos.y, pos.z, camRadius, camHalfHeight, Number.POSITIVE_INFINITY)) {
      pos.copy(prevCameraPos);
      clampInspectCameraToTerrain(level, clearance);
    }
  }

  function placeCameraForLevel(level) {
    const look = samplePath(level, level.totalLength * 0.03);
    const normal = surfaceNormal(level, look.point.x, look.point.z);
    const right = new THREE.Vector3().crossVectors(normal, look.forward);
    if (right.lengthSq() < 0.0001) right.set(look.forward.z, 0, -look.forward.x);
    right.normalize();
    const candidates = [
      { back: 18, side: 0, up: 11.5 },
      { back: 24, side: level.routeHalfWidth * 1.2, up: 13.5 },
      { back: 24, side: -level.routeHalfWidth * 1.2, up: 13.5 },
      { back: 14, side: 0, up: 18 },
    ];
    let placed = false;
    for (const candidate of candidates) {
      game.camera.position
        .copy(look.point)
        .addScaledVector(look.forward, -candidate.back)
        .addScaledVector(right, candidate.side)
        .addScaledVector(normal, candidate.up);
      clampInspectCameraToTerrain(level, 4.6);
      if (!hitsAnyObstacle(game.camera.position.x, game.camera.position.y, game.camera.position.z, 1.05, 1.2, Number.POSITIVE_INFINITY)) {
        placed = true;
        break;
      }
    }
    if (!placed) {
      game.camera.position.copy(look.point).addScaledVector(look.forward, -16).addScaledVector(normal, 14);
      clampInspectCameraToTerrain(level, 4.8);
    }
    game.camera.lookAt(look.point.clone().addScaledVector(normal, 2));
    syncAnglesFromCamera();
  }

  function enter(levelId = game.selectedLevelId) {
    const index = Math.max(0, levels.findIndex((level) => level.id === levelId));
    state.levelIndex = index;
    game.selectedLevelId = levels[state.levelIndex].id;
    world.setupWorld(game, game.selectedLevelId);
    if (game.racerRoot) game.racerRoot.clear();
    game.racers = [];
    game.player = null;
    game.state = STATE.INSPECT;
    game.resultShown = false;
    uiSystem.setResultVisible(false);
    uiSystem.setMenuVisible(false);
    uiSystem.ui.hud.classList.remove("visible");
    uiSystem.ui.hud.classList.add("hidden");
    placeCameraForLevel(game.activeLevel);
    state.active = true;
    uiSystem.setRaceMessage(
      game,
      `检图模式: ${game.activeLevel.name} | 右键拖动视角 WASD移动 QE升降 Shift冲刺 滚轮调速 F2退出 F3切图`,
      4.8
    );
  }

  function exit() {
    state.active = false;
    state.looking = false;
    move.forward = move.back = move.left = move.right = move.up = move.down = move.sprint = false;
    onExitToMenu();
  }

  function toggle() {
    if (state.active) exit();
    else enter(game.selectedLevelId);
  }

  function cycleLevel() {
    if (!state.active) return;
    state.levelIndex = (state.levelIndex + 1) % levels.length;
    enter(levels[state.levelIndex].id);
  }

  function update(dt) {
    if (!state.active) return;
    prevCameraPos.copy(game.camera.position);

    const cosPitch = Math.cos(state.pitch);
    const forward = new THREE.Vector3(
      Math.sin(state.yaw) * cosPitch,
      Math.sin(state.pitch),
      Math.cos(state.yaw) * cosPitch
    ).normalize();
    const right = new THREE.Vector3(forward.z, 0, -forward.x).normalize();
    const up = new THREE.Vector3(0, 1, 0);

    const velocity = new THREE.Vector3();
    if (move.forward) velocity.add(forward);
    if (move.back) velocity.sub(forward);
    if (move.right) velocity.add(right);
    if (move.left) velocity.sub(right);
    if (move.up) velocity.add(up);
    if (move.down) velocity.sub(up);

    if (velocity.lengthSq() > 0.0001) {
      velocity.normalize();
      const speed = state.speed * (move.sprint ? 2.4 : 1);
      game.camera.position.addScaledVector(velocity, speed * dt);
    }

    clampInspectCameraToTerrain(game.activeLevel, 2.8);
    resolveInspectCameraObstaclePenetration(game.activeLevel, 2.8);
    game.camera.lookAt(game.camera.position.clone().add(forward));
  }

  function analyzeLevel(levelId) {
    world.setupWorld(game, levelId);
    if (game.racerRoot) game.racerRoot.clear();
    game.racers = [];
    game.player = null;

    const level = game.activeLevel;
    const report = {
      levelId,
      obstacleCount: game.obstacles.length,
      intrusiveTrackObstacles: 0,
      likelyAirWalls: 0,
      mountainNearTrack: 0,
      blockedSamples: 0,
      samplePoints: 300,
      terrainTriangleCount: 0,
      terrainOversizedFaces: 0,
      terrainDegenerateFaces: 0,
      terrainMaxEdge: 0,
      routeMeshCount: 0,
      routeShearedMeshes: 0,
      routeMaxStretch: 0,
      mountainMeshCount: 0,
      mountainShearedMeshes: 0,
      mountainTriangleCount: 0,
      mountainOversizedFaces: 0,
      mountainDegenerateFaces: 0,
      mountainShardFaces: 0,
      mountainMaxEdge: 0,
      rampCount: 0,
      rampIssueCount: 0,
      rampCriticalCount: 0,
      rampIssues: [],
    };

    for (const obstacle of game.obstacles) {
      const trackDist = distanceToTrack(level, obstacle.x, obstacle.z);
      const type = obstacle.type;
      if ((type === "barrier" || type === "hazard") && trackDist < level.routeHalfWidth * 0.95) {
        report.intrusiveTrackObstacles += 1;
      }
      if (type !== "edge" && obstacle.shape === "box" && trackDist < level.routeHalfWidth * 1.05) {
        report.likelyAirWalls += 1;
      }
      if (type === "mountain" && trackDist < level.routeHalfWidth * 1.35) {
        report.mountainNearTrack += 1;
      }
    }

    const riderRadius = 0.78;
    const riderHalfHeight = 0.95;
    for (let i = 0; i < report.samplePoints; i += 1) {
      const sampled = samplePath(level, (level.totalLength * i) / report.samplePoints);
      const normal = surfaceNormal(level, sampled.point.x, sampled.point.z);
      const center = sampled.point.clone().addScaledVector(normal, 0.2);
      if (hitsAnyObstacle(center.x, center.y + 1.02, center.z, riderRadius, riderHalfHeight, level.routeHalfWidth * 1.03)) {
        report.blockedSamples += 1;
      }
    }

    const terrainStats = inspectTerrainGeometry();
    report.terrainTriangleCount = terrainStats.triangleCount;
    report.terrainOversizedFaces = terrainStats.oversizedFaces;
    report.terrainDegenerateFaces = terrainStats.degenerateFaces;
    report.terrainMaxEdge = Number(terrainStats.maxEdge.toFixed(2));
    const routeStats = inspectRouteGeometry();
    report.routeMeshCount = routeStats.meshCount;
    report.routeShearedMeshes = routeStats.shearedMeshes;
    report.routeMaxStretch = Number(routeStats.maxStretch.toFixed(2));
    const mountainStats = inspectMountainGeometry();
    report.mountainMeshCount = mountainStats.meshCount;
    report.mountainShearedMeshes = mountainStats.shearedMeshes;
    report.mountainTriangleCount = mountainStats.triangleCount;
    report.mountainOversizedFaces = mountainStats.oversizedFaces;
    report.mountainDegenerateFaces = mountainStats.degenerateFaces;
    report.mountainShardFaces = mountainStats.shardFaces;
    report.mountainMaxEdge = Number(mountainStats.maxEdge.toFixed(2));
    const rampIssues = (level.rampAudit ?? []).map((entry) => ({
      map: entry.map,
      index: entry.index,
      x: Number(entry.x.toFixed(2)),
      z: Number(entry.z.toFixed(2)),
      issues: entry.issues,
      corrected: !!entry.corrected,
      critical: !!entry.critical,
    }));
    report.rampCount = game.ramps.length;
    report.rampIssueCount = rampIssues.length;
    report.rampCriticalCount = rampIssues.filter((entry) => entry.critical).length;
    report.rampIssues = rampIssues;

    return report;
  }

  function analyzeAllLevels() {
    return levels.map((level) => analyzeLevel(level.id));
  }

  function runFullAudit() {
    const reports = analyzeAllLevels();
    const freeCamReports = runFreeCamAuditAll();
    const blockedSampleMaxRatio = 0.04;
    const freeCamRouteOcclusionMaxRatio = 0.06;
    const freeCamDecorOcclusionMaxRatio = 0.2;
    const pass = reports.every((report) =>
      report.intrusiveTrackObstacles === 0 &&
      report.likelyAirWalls === 0 &&
      report.terrainOversizedFaces === 0 &&
      report.terrainDegenerateFaces === 0 &&
      report.routeShearedMeshes === 0 &&
      report.mountainShearedMeshes === 0 &&
      report.mountainOversizedFaces === 0 &&
      report.mountainDegenerateFaces === 0 &&
      report.mountainShardFaces === 0 &&
      report.rampCriticalCount === 0 &&
      report.mountainNearTrack === 0 &&
      report.blockedSamples <= Math.ceil(report.samplePoints * blockedSampleMaxRatio)
    ) && freeCamReports.every((report) => {
      const totalViews = report.samplePoints * report.viewsPerSample;
      return (
        report.routeOcclusions <= Math.ceil(totalViews * freeCamRouteOcclusionMaxRatio) &&
        report.decorOcclusions <= Math.ceil(totalViews * freeCamDecorOcclusionMaxRatio)
      );
    });
    return {
      pass,
      checkedAt: new Date().toISOString(),
      threshold: {
        blockedSampleMaxRatio,
        freeCamRouteOcclusionMaxRatio,
        freeCamDecorOcclusionMaxRatio,
      },
      reports,
      freeCamReports,
    };
  }

  // [MARKER] Full map sweep:
  // 完整自由视角检图入口，返回每张图的可读问题列表。
  function runFullMapSweep(options = {}) {
    const blockedSampleMaxRatio = options.blockedSampleMaxRatio ?? 0.04;
    const freeCamRouteOcclusionMaxRatio = options.freeCamRouteOcclusionMaxRatio ?? 0.06;
    const freeCamDecorOcclusionMaxRatio = options.freeCamDecorOcclusionMaxRatio ?? 0.2;
    const freeCamOptions = {
      samplePoints: Math.max(180, Math.floor(options.freeCamSamplePoints ?? 260)),
      viewOffsets: options.viewOffsets,
    };

    const reports = levels.map((level) => {
      const gameplay = analyzeLevel(level.id);
      const freeCam = runFreeCamAudit(level.id, freeCamOptions);
      const totalViews = freeCam.samplePoints * freeCam.viewsPerSample;
      const blockedLimit = Math.ceil(gameplay.samplePoints * blockedSampleMaxRatio);
      const routeLimit = Math.ceil(totalViews * freeCamRouteOcclusionMaxRatio);
      const decorLimit = Math.ceil(totalViews * freeCamDecorOcclusionMaxRatio);
      const issues = [];

      if (gameplay.intrusiveTrackObstacles > 0) issues.push(`intrusiveTrackObstacles=${gameplay.intrusiveTrackObstacles}`);
      if (gameplay.likelyAirWalls > 0) issues.push(`likelyAirWalls=${gameplay.likelyAirWalls}`);
      if (gameplay.mountainNearTrack > 0) issues.push(`mountainNearTrack=${gameplay.mountainNearTrack}`);
      if (gameplay.terrainOversizedFaces > 0) issues.push(`terrainOversizedFaces=${gameplay.terrainOversizedFaces}`);
      if (gameplay.terrainDegenerateFaces > 0) issues.push(`terrainDegenerateFaces=${gameplay.terrainDegenerateFaces}`);
      if (gameplay.routeShearedMeshes > 0) issues.push(`routeShearedMeshes=${gameplay.routeShearedMeshes}`);
      if (gameplay.mountainShearedMeshes > 0) issues.push(`mountainShearedMeshes=${gameplay.mountainShearedMeshes}`);
      if (gameplay.mountainOversizedFaces > 0) issues.push(`mountainOversizedFaces=${gameplay.mountainOversizedFaces}`);
      if (gameplay.mountainDegenerateFaces > 0) issues.push(`mountainDegenerateFaces=${gameplay.mountainDegenerateFaces}`);
      if (gameplay.mountainShardFaces > 0) issues.push(`mountainShardFaces=${gameplay.mountainShardFaces}`);
      if (gameplay.rampCriticalCount > 0) issues.push(`rampCritical=${gameplay.rampCriticalCount}`);
      for (const rampIssue of gameplay.rampIssues.filter(r => r.critical).slice(0, 3)) {
        issues.push(`ramp#${rampIssue.index}@(${rampIssue.x},${rampIssue.z}) ${rampIssue.issues.join("|")}`);
      }
      if (gameplay.blockedSamples > blockedLimit) issues.push(`blockedSamples=${gameplay.blockedSamples}/${blockedLimit}`);
      if (freeCam.routeOcclusions > routeLimit) issues.push(`routeOcclusions=${freeCam.routeOcclusions}/${routeLimit}`);
      if (freeCam.decorOcclusions > decorLimit) issues.push(`decorOcclusions=${freeCam.decorOcclusions}/${decorLimit}`);

      return {
        levelId: level.id,
        pass: issues.length === 0,
        issues,
        gameplay,
        freeCam,
      };
    });

    return {
      pass: reports.every((entry) => entry.pass),
      checkedAt: new Date().toISOString(),
      threshold: {
        blockedSampleMaxRatio,
        freeCamRouteOcclusionMaxRatio,
        freeCamDecorOcclusionMaxRatio,
      },
      reports,
    };
  }

  function runFreeCamAudit(levelId, options = {}) {
    world.setupWorld(game, levelId);
    if (game.racerRoot) game.racerRoot.clear();
    game.racers = [];
    game.player = null;

    const level = game.activeLevel;
    const samplePoints = Math.max(90, Math.floor(options.samplePoints ?? 180));
    const viewOffsets = options.viewOffsets ?? [
      { side: level.routeHalfWidth * 2.3, back: 15.5, up: 10.5 },
      { side: -level.routeHalfWidth * 2.3, back: 15.5, up: 10.5 },
      { side: 0, back: 21, up: 15.8 },
    ];
    const raycaster = new THREE.Raycaster();
    const camPos = new THREE.Vector3();
    const target = new THREE.Vector3();
    const dir = new THREE.Vector3();
    const right = new THREE.Vector3();
    const up = new THREE.Vector3();

    const report = {
      levelId,
      samplePoints,
      viewsPerSample: viewOffsets.length,
      blockedViews: 0,
      routeOcclusions: 0,
      decorOcclusions: 0,
      terrainOcclusions: 0,
    };

    for (let i = 0; i < samplePoints; i += 1) {
      const sampled = samplePath(level, (level.totalLength * i) / samplePoints);
      up.copy(surfaceNormal(level, sampled.point.x, sampled.point.z)).normalize();
      right.crossVectors(up, sampled.forward);
      if (right.lengthSq() < 0.0001) right.set(sampled.forward.z, 0, -sampled.forward.x);
      right.normalize();

      for (const offset of viewOffsets) {
        camPos.copy(sampled.point)
          .addScaledVector(right, offset.side)
          .addScaledVector(sampled.forward, -offset.back)
          .addScaledVector(up, offset.up);
        const floor = level.heightFn(camPos.x, camPos.z) + 2.8;
        if (camPos.y < floor) camPos.y = floor;

        target.copy(sampled.point).addScaledVector(sampled.forward, 4.6).addScaledVector(up, 2.2);
        dir.copy(target).sub(camPos);
        const distance = dir.length();
        if (distance < 1) continue;
        dir.multiplyScalar(1 / distance);
        raycaster.set(camPos, dir);
        raycaster.far = distance - 0.35;
        if (raycaster.far <= 0.01) continue;
        const hit = raycaster.intersectObjects(game.worldRoot.children, true).find((entry) => entry.distance > 0.2 && entry.distance < raycaster.far);
        if (!hit) continue;

        report.blockedViews += 1;
        const category = getNodeCategory(hit.object);
        if (category === "route") report.routeOcclusions += 1;
        else if (category === "decor") report.decorOcclusions += 1;
        else if (category === "terrain") report.terrainOcclusions += 1;
      }
    }

    return report;
  }

  function runFreeCamAuditAll(options = {}) {
    return levels.map((level) => runFreeCamAudit(level.id, options));
  }

  // [MARKER] 完整自由视角巡检：用于两张图整体验证（高采样 + 多机位）。
  function runCompleteFreeCamValidation(options = {}) {
    const minSamplePoints = options.samplePoints ?? 320;
    const maxBlockedRatio = options.maxBlockedRatio ?? 0.2;

    return levels.map((level) => {
      const lateral = level.routeHalfWidth * 2.8;
      const highLateral = level.routeHalfWidth * 4.1;
      const viewOffsets = options.viewOffsets ?? [
        { side: lateral, back: 17, up: 11 },
        { side: -lateral, back: 17, up: 11 },
        { side: 0, back: 23, up: 15.5 },
        { side: highLateral, back: 12, up: 20.5 },
        { side: -highLateral, back: 12, up: 20.5 },
        { side: 0, back: 7, up: 30 },
      ];
      const report = runFreeCamAudit(level.id, {
        ...options,
        samplePoints: Math.max(180, Math.floor(minSamplePoints)),
        viewOffsets,
      });
      const totalViews = Math.max(1, report.samplePoints * report.viewsPerSample);
      const blockedRatio = report.blockedViews / totalViews;
      return {
        ...report,
        blockedRatio: Number(blockedRatio.toFixed(4)),
        pass: report.routeOcclusions === 0 && report.decorOcclusions === 0 && blockedRatio <= maxBlockedRatio,
      };
    });
  }

  function getNodeCategory(node) {
    let current = node;
    while (current) {
      if (current === game.routeRoot) return "route";
      if (current === game.decorRoot) return "decor";
      if (current === game.terrainRoot) return "terrain";
      current = current.parent;
    }
    return "other";
  }

  function hitsAnyObstacle(x, y, z, riderRadius, riderHalfHeight, maxTrackDist) {
    for (const obstacle of game.obstacles) {
      const td = distanceToTrack(game.activeLevel, obstacle.x, obstacle.z);
      if (td > maxTrackDist && obstacle.type !== "edge") continue;

      if (obstacle.shape === "box") {
        const halfHeight = obstacle.halfHeight ?? 1;
        if (Math.abs(y - obstacle.y) > halfHeight + riderHalfHeight) continue;
        const dx = x - obstacle.x;
        const dz = z - obstacle.z;
        const lx = dx * obstacle.right.x + dz * obstacle.right.z;
        const lz = dx * obstacle.forward.x + dz * obstacle.forward.z;
        if (Math.abs(lx) <= obstacle.halfWidth + riderRadius && Math.abs(lz) <= obstacle.halfLength + riderRadius) return true;
      } else {
        const halfHeight = obstacle.height ?? 1;
        if (Math.abs(y - obstacle.y) > halfHeight + riderHalfHeight) continue;
        const dx = x - obstacle.x;
        const dz = z - obstacle.z;
        const rr = (obstacle.radius ?? 1) + riderRadius;
        if (dx * dx + dz * dz <= rr * rr) return true;
      }
    }
    return false;
  }

  function inspectRouteGeometry() {
    const stats = {
      meshCount: 0,
      shearedMeshes: 0,
      maxStretch: 0,
    };
    if (!game.routeRoot) return stats;

    for (const child of game.routeRoot.children) {
      if (!child.isMesh || !child.geometry?.attributes?.position) continue;
      if (!child.geometry.boundingBox) child.geometry.computeBoundingBox();
      const box = child.geometry.boundingBox;
      if (!box) continue;

      const localX = box.max.x - box.min.x;
      const localY = box.max.y - box.min.y;
      const localZ = box.max.z - box.min.z;
      const localMax = Math.max(localX, localY, localZ, 0.001);
      const m = child.matrixWorld.elements;
      const worldX = localX * Math.hypot(m[0], m[1], m[2]);
      const worldY = localY * Math.hypot(m[4], m[5], m[6]);
      const worldZ = localZ * Math.hypot(m[8], m[9], m[10]);
      const worldMax = Math.max(worldX, worldY, worldZ);
      const stretch = worldMax / localMax;
      stats.maxStretch = Math.max(stats.maxStretch, stretch);
      stats.meshCount += 1;
      const isContinuousRoute = child.userData?.routeContinuous === true;
      if (stretch > 8.5 || (!isContinuousRoute && worldMax > 180)) stats.shearedMeshes += 1;
    }

    return stats;
  }

  function inspectTerrainGeometry() {
    const a = new THREE.Vector3();
    const b = new THREE.Vector3();
    const c = new THREE.Vector3();
    const ab = new THREE.Vector3();
    const ac = new THREE.Vector3();
    const bc = new THREE.Vector3();
    const cross = new THREE.Vector3();
    const stats = {
      triangleCount: 0,
      oversizedFaces: 0,
      degenerateFaces: 0,
      maxEdge: 0,
    };

    const checkTriangle = (mesh, pos, ia, ib, ic) => {
      a.set(pos.getX(ia), pos.getY(ia), pos.getZ(ia));
      b.set(pos.getX(ib), pos.getY(ib), pos.getZ(ib));
      c.set(pos.getX(ic), pos.getY(ic), pos.getZ(ic));
      mesh.localToWorld(a);
      mesh.localToWorld(b);
      mesh.localToWorld(c);

      const e1 = ab.copy(a).sub(b).length();
      const e2 = bc.copy(b).sub(c).length();
      const e3 = ac.copy(c).sub(a).length();
      const maxEdge = Math.max(e1, e2, e3);
      stats.maxEdge = Math.max(stats.maxEdge, maxEdge);

      ab.copy(b).sub(a);
      ac.copy(c).sub(a);
      const area = cross.copy(ab).cross(ac).length() * 0.5;
      if (area <= 0.0005) stats.degenerateFaces += 1;
      if (maxEdge > 24 || area > 160) stats.oversizedFaces += 1;
      stats.triangleCount += 1;
    };

    for (const child of game.terrainRoot.children) {
      if (!child.isMesh || !child.geometry?.attributes?.position) continue;
      const pos = child.geometry.attributes.position;
      const index = child.geometry.index?.array;
      if (index) {
        for (let i = 0; i < index.length; i += 3) {
          checkTriangle(child, pos, index[i], index[i + 1], index[i + 2]);
        }
      } else {
        for (let i = 0; i < pos.count; i += 3) {
          checkTriangle(child, pos, i, i + 1, i + 2);
        }
      }
    }

    return stats;
  }

  function inspectMountainGeometry() {
    const a = new THREE.Vector3();
    const b = new THREE.Vector3();
    const c = new THREE.Vector3();
    const ab = new THREE.Vector3();
    const ac = new THREE.Vector3();
    const bc = new THREE.Vector3();
    const cross = new THREE.Vector3();
    const stats = {
      meshCount: 0,
      shearedMeshes: 0,
      triangleCount: 0,
      oversizedFaces: 0,
      degenerateFaces: 0,
      shardFaces: 0,
      maxEdge: 0,
    };
    if (!game.decorRoot) return stats;

    const meshes = [];
    game.decorRoot.traverse((node) => {
      if (node.isMesh && node.userData?.decorType === "mountain" && node.geometry?.attributes?.position) {
        meshes.push(node);
      }
    });

    const checkTriangle = (mesh, pos, ia, ib, ic) => {
      a.set(pos.getX(ia), pos.getY(ia), pos.getZ(ia));
      b.set(pos.getX(ib), pos.getY(ib), pos.getZ(ib));
      c.set(pos.getX(ic), pos.getY(ic), pos.getZ(ic));
      mesh.localToWorld(a);
      mesh.localToWorld(b);
      mesh.localToWorld(c);

      const e1 = ab.copy(a).sub(b).length();
      const e2 = bc.copy(b).sub(c).length();
      const e3 = ac.copy(c).sub(a).length();
      const maxEdge = Math.max(e1, e2, e3);
      const minEdge = Math.max(0.0001, Math.min(e1, e2, e3));
      stats.maxEdge = Math.max(stats.maxEdge, maxEdge);

      ab.copy(b).sub(a);
      ac.copy(c).sub(a);
      const area = cross.copy(ab).cross(ac).length() * 0.5;
      if (area <= 0.0025) stats.degenerateFaces += 1;
      if (maxEdge > 36 || area > 240) stats.oversizedFaces += 1;
      if (maxEdge / minEdge > 18 && maxEdge > 11) stats.shardFaces += 1;
      stats.triangleCount += 1;
    };

    for (const mesh of meshes) {
      if (!mesh.geometry.boundingBox) mesh.geometry.computeBoundingBox();
      const box = mesh.geometry.boundingBox;
      if (!box) continue;
      const localX = box.max.x - box.min.x;
      const localY = box.max.y - box.min.y;
      const localZ = box.max.z - box.min.z;
      const localMax = Math.max(localX, localY, localZ, 0.001);
      const m = mesh.matrixWorld.elements;
      const worldX = localX * Math.hypot(m[0], m[1], m[2]);
      const worldY = localY * Math.hypot(m[4], m[5], m[6]);
      const worldZ = localZ * Math.hypot(m[8], m[9], m[10]);
      const worldMax = Math.max(worldX, worldY, worldZ);
      const stretch = worldMax / localMax;
      if (stretch > 5.5 || worldMax > 120) stats.shearedMeshes += 1;
      stats.meshCount += 1;

      const pos = mesh.geometry.attributes.position;
      const index = mesh.geometry.index?.array;
      if (index) {
        for (let i = 0; i < index.length; i += 3) {
          checkTriangle(mesh, pos, index[i], index[i + 1], index[i + 2]);
        }
      } else {
        for (let i = 0; i < pos.count; i += 3) {
          checkTriangle(mesh, pos, i, i + 1, i + 2);
        }
      }
    }

    return stats;
  }

  return {
    install,
    enter,
    exit,
    toggle,
    cycleLevel,
    update,
    analyzeLevel,
    analyzeAllLevels,
    runFullAudit,
    runFullMapSweep,
    runFreeCamAudit,
    runFreeCamAuditAll,
    runCompleteFreeCamValidation,
    get active() {
      return state.active;
    },
  };
}
