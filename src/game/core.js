import * as THREE from "three";
import { STATE, FIXED_DT, SETTINGS, createAudioState } from "./config.js";
import { LEVELS, LEVELS_ALL, forwardFromHeading } from "./levels.js";
import { createInputState, bindInput, clearInputState } from "./input.js";
import { createUiSystem } from "./ui.js";
import { createWorldSystem } from "./world.js";
import { createEntitiesSystem } from "./entities.js";
import { createGameplaySystem } from "./systems-gameplay.js";
import { createCameraSystem } from "./camera.js";
import { createFxAudioSystem } from "./fx-audio.js";
import { createMapInspector } from "./map-inspector.js";
import { createModelLibrary } from "./model-library.js";

// [MODULE] core: 启动 + 主循环 + 状态机。

function createGameState() {
  return {
    renderer: null,
    scene: null,
    camera: null,
    clock: null,

    worldRoot: null,
    terrainRoot: null,
    routeRoot: null,
    decorRoot: null,
    checkpointRoot: null,
    racerRoot: null,
    fxRoot: null,

    activeLevel: null,
    selectedLevelId: "ring",
    racers: [],
    player: null,
    state: STATE.MENU,
    stateBeforePause: STATE.RACING,

    obstacles: [],
    ramps: [],
    boostPads: [],
    itemCrates: [],
    itemWaves: [],
    itemWavesInitialized: false,
    activeItemWave: 0,
    itemWaveCooldown: 0,
    itemWaveAdvanceDelay: 0,
    itemProjectiles: [],
    groundHazards: [],
    checkpointMeshes: [],
    particles: [],

    accumulator: 0,
    simTime: 0,
    menuOrbit: 0,
    countdownTimer: 0,
    checkpointAlertTimer: 0,
    messageTimer: 0,
    raceElapsed: 0,
    racingStartTime: 0,
    raceFinishedAt: 0,
    resultDelay: 0,
    resultShown: false,
    readyGoPlayed: false,
    packPressureTimer: 0,
    cameraShake: 0,
    uiTransitionUntil: 0,
    lastBigAirSoundAt: -99,

    audio: createAudioState(),
    multiplayer: {
      active: false,
      roomId: null,
      meId: null,
      players: [],
      remoteStates: {},
      remoteRacers: {},
      sendTimer: 0,
      remoteLerp: 0.62,
    },
  };
}

export function bootstrapGame() {
  const game = createGameState();
  const input = createInputState();
  const modelLibrary = createModelLibrary();

  const fx = createFxAudioSystem({ settings: SETTINGS });
  const world = createWorldSystem({ settings: SETTINGS, levels: LEVELS_ALL, modelLibrary });
  const entities = createEntitiesSystem({ modelLibrary });
  const cameraSystem = createCameraSystem({ settings: SETTINGS });

  const uiSystem = createUiSystem({
    settings: SETTINGS,
    levels: LEVELS,
    getSelectedLevelId: () => game.selectedLevelId,
    setSelectedLevelId: (id) => { game.selectedLevelId = id; },
    onLoadMenuPreview: (id) => loadMenuPreview(id),
    onStartRace: (id) => startRace(id),
    onOpenMenu: () => openMenu(),
    onTogglePause: () => togglePause(),
    ensureAudio: () => fx.ensureAudio(game),
  });

  const gameplay = createGameplaySystem({
    input,
    settings: SETTINGS,
    ui: uiSystem.ui,
    fx,
    updateRacerVisual: entities.updateRacerVisual,
    setRaceMessage: uiSystem.setRaceMessage,
  });

  const modules = {
    world,
    entities,
    gameplay,
    camera: cameraSystem,
    fx,
    ui: uiSystem,
    modelLibrary,
    inspector: null,
  };

  setupRendererAndScene();
  const inspector = createMapInspector({
    game,
    levels: LEVELS_ALL,
    world,
    uiSystem,
    onExitToMenu: () => loadMenuPreview(game.selectedLevelId),
  });
  inspector.install();
  modules.inspector = inspector;
  bindInput({
    input,
    ensureAudio: () => fx.ensureAudio(game),
    getState: () => game.state,
    ui: uiSystem.ui,
    openMenu: () => openMenu(),
    togglePause: () => togglePause(),
  });

  // F4: toggle debug flat map (hidden, not in menu carousel)
  window.addEventListener("keydown", (e) => {
    if (e.code !== "F4" || e.repeat) return;
    e.preventDefault();
    fx.ensureAudio(game);
    if (game.selectedLevelId === "debug") {
      game.selectedLevelId = "ring";
      const overlay = document.getElementById("debug-overlay");
      if (overlay) overlay.style.display = "none";
      openMenu();
    } else {
      enterDebugMode();
    }
  });

  uiSystem.setupUi(() => applySettings(false));
  applySettings(true);

  let transitionToken = 0;
  window.addEventListener("resize", onResize);
  loadMenuPreview(game.selectedLevelId);
  animate();

  // 便于后续局部调试：直接在控制台查看 game 与模块边界。
  window.__BIKE_GAME__ = {
    game,
    modules,
    settings: SETTINGS,
    inspect: {
      enter: (levelId) => inspector.enter(levelId),
      exit: () => inspector.exit(),
      toggle: () => inspector.toggle(),
      cycleLevel: () => inspector.cycleLevel(),
      analyzeLevel: (levelId) => inspector.analyzeLevel(levelId),
      analyzeAll: () => inspector.analyzeAllLevels(),
      fullAudit: () => inspector.runFullAudit(),
      fullMapSweep: (options) => inspector.runFullMapSweep(options),
      freeCamAudit: (levelId, options) => inspector.runFreeCamAudit(levelId, options),
      freeCamAuditAll: (options) => inspector.runFreeCamAuditAll(options),
      completeFreeCamValidation: (options) => inspector.runCompleteFreeCamValidation(options),
    },
  };

  function setupRendererAndScene() {
    game.scene = new THREE.Scene();
    game.camera = new THREE.PerspectiveCamera(SETTINGS.fov, window.innerWidth / window.innerHeight, 0.1, 2600);
    game.camera.position.set(0, 24, -30);

    game.renderer = new THREE.WebGLRenderer({ antialias: true });
    game.renderer.setSize(window.innerWidth, window.innerHeight);
    game.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    game.renderer.shadowMap.enabled = true;
    game.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    game.renderer.outputColorSpace = THREE.SRGBColorSpace;
    document.getElementById("app").prepend(game.renderer.domElement);

    game.clock = new THREE.Clock();
  }

  function applySettings(initial = false) {
    uiSystem.applySettings({
      camera: game.camera,
      renderer: game.renderer,
      scene: game.scene,
      audio: game.audio,
      initial,
    });
  }

  function onResize() {
    game.camera.aspect = window.innerWidth / window.innerHeight;
    game.camera.updateProjectionMatrix();
    game.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  async function loadMenuPreview(levelId) {
    const token = ++transitionToken;
    game.uiTransitionUntil = game.simTime + 0.36;
    uiSystem.setUiLoading(true);
    uiSystem.setRaceMessage(game, "加载中...");
    uiSystem.setResultVisible(false);
    uiSystem.setMenuVisible(true);
    uiSystem.triggerMenuTitleBlast(levelId);
    // let the browser paint once before heavy sync work
    await new Promise((r) => requestAnimationFrame(r));
    if (token !== transitionToken) {
      uiSystem.setUiLoading(false);
      return;
    }
    world.setupWorld(game, levelId);
    entities.spawnRacers(game, 7, true);
    game.state = STATE.MENU;
    game.stateBeforePause = STATE.RACING;
    game.multiplayer.active = false;
    game.multiplayer.remoteStates = {};
    game.multiplayer.remoteRacers = {};
    game.multiplayer.players = [];
    game.countdownTimer = 0;
    game.checkpointAlertTimer = 0;
    game.lastBigAirSoundAt = -99;
    game.raceElapsed = 0;
    game.resultShown = false;
    uiSystem.setRaceMessage(game, "", 0);
    uiSystem.ui.countdown.textContent = "";
    uiSystem.setPauseVisible(false);
    uiSystem.markMenuReady();
    uiSystem.setUiLoading(false);
    clearInputState(input);
  }

  async function startRace(levelId) {
    const token = ++transitionToken;
    game.uiTransitionUntil = game.simTime + 0.28;
    uiSystem.setUiLoading(true);
    uiSystem.setRaceMessage(game, "加载中...");
    uiSystem.setResultVisible(false);
    uiSystem.setMenuVisible(false);
    // yield a frame so UI can update before heavy setup
    await new Promise((r) => requestAnimationFrame(r));
    if (token !== transitionToken) {
      uiSystem.setUiLoading(false);
      return;
    }
    world.setupWorld(game, levelId);

    const mpStart = window.__BIKE_MP_START__;
    const isMultiplayer = !!(mpStart && mpStart.active);
    if (isMultiplayer) {
      const players = Array.isArray(mpStart.players) ? mpStart.players : [];
      const count = Math.max(2, players.length || 2);
      entities.spawnRacers(game, count, false);
      game.multiplayer.active = true;
      game.multiplayer.roomId = mpStart.roomId || null;
      game.multiplayer.meId = mpStart.meId || null;
      game.multiplayer.players = players;
      game.multiplayer.remoteStates = {};
      game.multiplayer.remoteRacers = {};
      game.multiplayer.sendTimer = 0;

      const remotes = game.racers.filter((r) => !r.isPlayer);
      const remotePlayers = players.filter((p) => p.id !== game.multiplayer.meId);
      for (let i = 0; i < remotes.length; i += 1) {
        const rp = remotePlayers[i];
        if (!rp) {
          remotes[i].debugFrozen = true;
          remotes[i].group.visible = false;
          continue;
        }
        remotes[i].name = rp.nickname || remotes[i].name;
        remotes[i].networkId = rp.id;
        remotes[i].debugFrozen = true;
        remotes[i].group.visible = true;
        game.multiplayer.remoteRacers[rp.id] = remotes[i];
      }
    } else {
      const count = THREE.MathUtils.randInt(5, 8);
      entities.spawnRacers(game, count, false);
      game.multiplayer.active = false;
      game.multiplayer.roomId = null;
      game.multiplayer.meId = null;
      game.multiplayer.players = [];
      game.multiplayer.remoteStates = {};
      game.multiplayer.remoteRacers = {};
      game.multiplayer.sendTimer = 0;
    }
    game.state = STATE.READY;
    game.stateBeforePause = STATE.RACING;
    game.countdownTimer = 3.2;
    game.checkpointAlertTimer = 0;
    game.lastBigAirSoundAt = -99;
    game.raceElapsed = 0;
    game.racingStartTime = 0;
    game.raceFinishedAt = 0;
    game.resultDelay = 1.2;
    game.resultShown = false;
    game.readyGoPlayed = false;
    game.packPressureTimer = 0;
    uiSystem.setResultVisible(false);
    uiSystem.setMenuVisible(false);
    uiSystem.setPauseVisible(false);
    uiSystem.setRaceMessage(game, "预备", 1.4);
    uiSystem.setUiLoading(false);
    clearInputState(input);
  }

  function togglePause(forceResume = null) {
    if (game.state === STATE.PAUSED) {
      if (forceResume === false) return;
      game.state = game.stateBeforePause === STATE.READY ? STATE.READY : STATE.RACING;
      game.stateBeforePause = STATE.RACING;
      uiSystem.setPauseVisible(false);
      if (game.state === STATE.RACING) uiSystem.ui.countdown.textContent = "";
      clearInputState(input);
      return;
    }

    if (forceResume === true) return;
    if (game.state !== STATE.READY && game.state !== STATE.RACING) return;
    game.stateBeforePause = game.state;
    game.state = STATE.PAUSED;
    uiSystem.setMenuVisible(false);
    uiSystem.setPauseVisible(true);
    uiSystem.ui.countdown.textContent = "PAUSED";
    game.renderer.domElement.style.filter = "none";
    clearInputState(input);
  }

  function openMenu() {
    if (game.multiplayer?.active && window.__BIKE_MP_NET__) {
      window.__BIKE_MP_NET__.send("leave_map", { roomId: game.multiplayer.roomId });
    }
    if (game.state === STATE.PAUSED) clearInputState(input);
    uiSystem.setPauseVisible(false);
    return loadMenuPreview(game.selectedLevelId);
  }

  async function enterDebugMode() {
    const token = ++transitionToken;
    game.selectedLevelId = "debug";
    uiSystem.setUiLoading(true);
    uiSystem.setResultVisible(false);
    uiSystem.setMenuVisible(false);
    await new Promise((r) => requestAnimationFrame(r));
    if (token !== transitionToken) { uiSystem.setUiLoading(false); return; }

    world.setupWorld(game, "debug");
    entities.spawnRacers(game, 4, false);  // player + 3 dummies

    // Place dummies at different positions/distances for comprehensive testing
    if (game.player && game.racers.length >= 2) {
      const fwd = forwardFromHeading(game.player.heading);
      const right = new THREE.Vector3(fwd.z, 0, -fwd.x);
      const dummies = game.racers.filter((r) => !r.isPlayer);
      const positions = [
        { x: fwd.x * 10, z: fwd.z * 10, prog: 15 }, // A: 正前方10格
        { x: fwd.x * 20 + right.x * 3, z: fwd.z * 20 + right.z * 3, prog: 30 }, // B: 前方20格偏左
        { x: fwd.x * 5 - right.x * 2.5, z: fwd.z * 5 - right.z * 2.5, prog: 8 }, // C: 前方5格偏右
      ];
      for (let i = 0; i < dummies.length && i < positions.length; i++) {
        const dummy = dummies[i];
        const p = positions[i];
        dummy.position.set(
          game.player.position.x + p.x,
          game.player.position.y,
          game.player.position.z + p.z
        );
        dummy.heading = game.player.heading;
        dummy.velocity.set(0, 0, 0);
        dummy.globalProgress = (game.player.globalProgress ?? 0) + p.prog;
        dummy.debugFrozen = true;
      }
    }

    game.state = STATE.RACING;
    game.stateBeforePause = STATE.RACING;
    game.countdownTimer = 0;
    game.checkpointAlertTimer = 0;
    game.lastBigAirSoundAt = -99;
    game.raceElapsed = 0;
    game.racingStartTime = 0;
    game.raceFinishedAt = 0;
    game.resultDelay = 9999;
    game.resultShown = false;
    game.readyGoPlayed = true;
    game.packPressureTimer = 0;
    uiSystem.setResultVisible(false);
    uiSystem.setMenuVisible(false);
    uiSystem.setPauseVisible(false);
    uiSystem.ui.countdown.textContent = "";  // No big center text
    uiSystem.ui.raceMessage.textContent = "";
    game.messageTimer = 0;

    // Create persistent debug overlay in top-right corner
    let overlay = document.getElementById("debug-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "debug-overlay";
      overlay.style.cssText = `
        position:fixed; top:12px; right:12px; z-index:9999;
        background:rgba(0,0,0,0.72); color:#ddd; font:11px/1.6 monospace;
        padding:8px 12px; border-radius:6px; pointer-events:none;
        white-space:pre; max-width:260px;
      `;
      document.body.appendChild(overlay);
    }
    overlay.textContent =
      `[DEBUG 快捷键]
F4  退出调试
1   击倒自己    T  被炸弹命中
2   击倒假人    Y  被香蕉命中
3   挥拳        U  被电震命中
4   使用道具
5   加速冲刺
6   爆炸VFX
7   发射炸弹
8   发射香蕉
9   获得护盾
0   循环(涡轮/冲撞/电震/地雷)`;
    overlay.style.display = "block";

    uiSystem.setUiLoading(false);
    clearInputState(input);
  }


  function animate() {
    requestAnimationFrame(animate);
    const frameDt = Math.min(game.clock.getDelta(), 0.05);
    game.accumulator += frameDt;
    while (game.accumulator >= FIXED_DT) {
      step(FIXED_DT);
      game.accumulator -= FIXED_DT;
    }
    game.renderer.render(game.scene, game.camera);
  }

  function step(dt) {
    if (!game.activeLevel) return;
    if (game.state !== STATE.INSPECT && game.racers.length === 0) return;

    game.simTime += dt;
    if (game.state === STATE.READY || game.state === STATE.RACING || game.state === STATE.FINISHED) {
      game.raceElapsed += dt;
    }

    gameplay.animateCheckpointAndItems(game, dt);

    if (game.state === STATE.INSPECT) {
      inspector.update(dt);
      game.renderer.domElement.style.filter = "none";
    } else if (game.state === STATE.MENU) {
      gameplay.updateRacers(game, dt, true);
      cameraSystem.updateMenuCamera(game, dt);
    } else if (game.state === STATE.READY) {
      gameplay.updateReady(game, dt);
      gameplay.updateRacers(game, dt, false);
      cameraSystem.updatePlayerCamera(game, dt);
    } else if (game.state === STATE.PAUSED) {
      cameraSystem.updatePlayerCamera(game, dt);
      game.renderer.domElement.style.filter = "none";
    } else {
      gameplay.updateRacers(game, dt, false);
      gameplay.updateStealthCatchup(game, dt);
      cameraSystem.updatePlayerCamera(game, dt);
      if (game.state === STATE.FINISHED && !game.resultShown) {
        game.resultDelay -= dt;
        if (game.resultDelay <= 0) uiSystem.showResultPanel(game, () => gameplay.getRaceOrder(game));
      }
    }

    fx.updateParticles(game, dt);
    fx.updateAudio(game, dt);

    if (game.state !== STATE.PAUSED) {
      if (game.messageTimer > 0) {
        game.messageTimer -= dt;
        if (game.messageTimer <= 0) uiSystem.ui.raceMessage.textContent = "";
      }
      if (game.checkpointAlertTimer > 0) {
        game.checkpointAlertTimer -= dt;
        if (game.checkpointAlertTimer <= 0 && game.state === STATE.RACING) uiSystem.ui.countdown.textContent = "";
      }
    }

    if (game.multiplayer.active && game.player) {
      const net = window.__BIKE_MP_NET__;
      if (net) {
        game.multiplayer.sendTimer -= dt;
        if (game.multiplayer.sendTimer <= 0) {
          game.multiplayer.sendTimer = 0.05;
          net.send("player_state", {
            roomId: game.multiplayer.roomId,
            p: {
              x: Number(game.player.position.x.toFixed(3)),
              y: Number(game.player.position.y.toFixed(3)),
              z: Number(game.player.position.z.toFixed(3)),
              h: Number(game.player.heading.toFixed(4)),
              vx: Number(game.player.velocity.x.toFixed(3)),
              vy: Number(game.player.velocity.y.toFixed(3)),
              vz: Number(game.player.velocity.z.toFixed(3)),
            },
          });
        }

        const remoteStates = net.remoteStates || {};
        const nowMs = Date.now();
        for (const [remoteId, state] of Object.entries(remoteStates)) {
          const racer = game.multiplayer.remoteRacers[remoteId];
          if (!racer || !state?.p) continue;

          const ageSec = Math.min(Math.max(((nowMs - (state.t || nowMs)) / 1000), 0), 0.2);
          const px = (state.p.x ?? racer.position.x) + (state.p.vx ?? 0) * ageSec;
          const py = (state.p.y ?? racer.position.y) + (state.p.vy ?? 0) * ageSec;
          const pz = (state.p.z ?? racer.position.z) + (state.p.vz ?? 0) * ageSec;

          const k = game.multiplayer.remoteLerp;
          racer.position.x = THREE.MathUtils.lerp(racer.position.x, px, k);
          racer.position.y = THREE.MathUtils.lerp(racer.position.y, py, k);
          racer.position.z = THREE.MathUtils.lerp(racer.position.z, pz, k);
          racer.heading = THREE.MathUtils.lerp(racer.heading, state.p.h ?? racer.heading, k);
          if (typeof state.p.vx === "number") racer.velocity.x = state.p.vx;
          if (typeof state.p.vy === "number") racer.velocity.y = state.p.vy;
          if (typeof state.p.vz === "number") racer.velocity.z = state.p.vz;
          entities.updateRacerVisual(game, racer, dt);
        }

        const actionQueue = net.remoteActions || [];
        while (actionQueue.length > 0) {
          const action = actionQueue.shift();
          modules.gameplay?.applyNetworkAction?.(game, action);
        }
      }
    }

    uiSystem.updateHud(game, () => gameplay.getRaceOrder(game));
  }

  return { game, modules };
}
