import * as THREE from "three";
import { STATE, itemName, formatRaceTime } from "./config.js";

// [MODULE] ui: 菜单/HUD/暂停/结算。

const SETTINGS_STORAGE_KEY = "bike_mountain_rush_settings_v1";
const QUALITY_VALUES = new Set(["low", "medium", "high"]);
const MENU_BLAST_TEXT = "KYLE WONG'S GAME";
const MENU_BLAST_SPARK_COUNT = 22;
const MENU_BLAST_LOOP_MS = 1650;
const MAP_LABELS = {
  ring: "环峰禁区",
  serpent: "裂脊蛇行",
  urban8: "城市双环立交",
  harbor: "港口巨构",
  alpine: "雪岭飞坠",
  lava: "熔火裂谷",
  neon: "霓虹疾线",
  ruins: "遗迹断层",
};

function clampNumber(value, min, max, fallback) {
  const num = Number(value);
  if (!Number.isFinite(num)) return fallback;
  return THREE.MathUtils.clamp(num, min, max);
}

function formatMsHuman(ms) {
  const total = Math.max(0, Math.floor(Number(ms) || 0));
  const minutes = Math.floor(total / 60000);
  const seconds = Math.floor((total % 60000) / 1000);
  const centi = Math.floor((total % 1000) / 10);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(centi).padStart(2, "0")}`;
}

function loadStoredSettings(settings) {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return;

    settings.volume = clampNumber(parsed.volume, 0, 1, settings.volume);
    settings.sensitivity = clampNumber(parsed.sensitivity, 0.6, 1.6, settings.sensitivity);
    settings.fov = clampNumber(parsed.fov, 55, 95, settings.fov);
    settings.quality = QUALITY_VALUES.has(parsed.quality) ? parsed.quality : settings.quality;
    settings.shake = parsed.shake !== false;
    settings.blur = parsed.blur === true;
  } catch {
    // ignore malformed storage payload
  }
}

function saveStoredSettings(settings) {
  try {
    const payload = {
      volume: settings.volume,
      sensitivity: settings.sensitivity,
      fov: settings.fov,
      quality: settings.quality,
      shake: settings.shake,
      blur: settings.blur,
    };
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // ignore storage quota/privacy mode errors
  }
}

export function collectUi() {
  return {
    menuScreen: document.getElementById("menu-screen"),
    menuHeroTitle: document.getElementById("menu-hero-title"),
    menuHeroLetters: document.getElementById("menu-hero-letters"),
    levelGrid: document.getElementById("level-grid"),
    singleBtn: document.getElementById("single-btn"),
    multiBtn: document.getElementById("multi-btn"),
    leaderboardBtn: document.getElementById("leaderboard-btn"),
    startBtn: document.getElementById("start-btn"),
    settingsBtn: document.getElementById("settings-btn"),
    singlePanel: document.getElementById("single-panel"),
    multiPanel: document.getElementById("multi-panel"),
    leaderboardPanel: document.getElementById("leaderboard-panel"),
    authEmail: document.getElementById("auth-email"),
    authNickname: document.getElementById("auth-nickname"),
    authPassword: document.getElementById("auth-password"),
    registerBtn: document.getElementById("register-btn"),
    loginBtn: document.getElementById("login-btn"),
    openMatchLobbyBtn: document.getElementById("open-match-lobby-btn"),
    matchLobbyPanel: document.getElementById("match-lobby-panel"),
    roomsRefreshBtn: document.getElementById("rooms-refresh-btn"),
    roomsList: document.getElementById("rooms-list"),
    queueBtn: document.getElementById("queue-btn"),
    readyBtn: document.getElementById("ready-btn"),
    startRoomBtn: document.getElementById("start-room-btn"),
    leaveRoomBtn: document.getElementById("leave-room-btn"),
    roomIdInput: document.getElementById("room-id"),
    roomMapSelect: document.getElementById("room-map"),
    roomState: document.getElementById("room-state"),
    authStatus: document.getElementById("auth-status"),
    lbMapCode: document.getElementById("lb-map-code"),
    lbPrevBtn: document.getElementById("lb-prev-btn"),
    lbNextBtn: document.getElementById("lb-next-btn"),
    lbPageInfo: document.getElementById("lb-page-info"),
    lbRefreshBtn: document.getElementById("lb-refresh-btn"),
    lbList: document.getElementById("lb-list"),
    lbAllList: document.getElementById("lb-all-list"),
    settingsPanel: document.getElementById("settings-panel"),
    settingVolume: document.getElementById("setting-volume"),
    settingVolumeValue: document.getElementById("setting-volume-value"),
    settingSensitivity: document.getElementById("setting-sensitivity"),
    settingSensitivityValue: document.getElementById("setting-sensitivity-value"),
    settingFov: document.getElementById("setting-fov"),
    settingFovValue: document.getElementById("setting-fov-value"),
    settingQuality: document.getElementById("setting-quality"),
    settingShake: document.getElementById("setting-shake"),
    settingBlur: document.getElementById("setting-blur"),
    hud: document.getElementById("hud"),
    speed: document.getElementById("speed"),
    rank: document.getElementById("rank"),
    checkpoint: document.getElementById("checkpoint"),
    punchCd: document.getElementById("punch-cd"),
    itemSlot: document.getElementById("item-slot"),
    raceTime: document.getElementById("race-time"),
    countdown: document.getElementById("countdown"),
    raceMessage: document.getElementById("race-message"),
    menuBtn: document.getElementById("menu-btn"),
    pauseScreen: document.getElementById("pause-screen"),
    pauseResumeBtn: document.getElementById("pause-resume-btn"),
    pauseMenuBtn: document.getElementById("pause-menu-btn"),
    pauseSettingVolume: document.getElementById("pause-setting-volume"),
    pauseSettingVolumeValue: document.getElementById("pause-setting-volume-value"),
    pauseSettingSensitivity: document.getElementById("pause-setting-sensitivity"),
    pauseSettingSensitivityValue: document.getElementById("pause-setting-sensitivity-value"),
    pauseSettingFov: document.getElementById("pause-setting-fov"),
    pauseSettingFovValue: document.getElementById("pause-setting-fov-value"),
    pauseSettingQuality: document.getElementById("pause-setting-quality"),
    pauseSettingShake: document.getElementById("pause-setting-shake"),
    pauseSettingBlur: document.getElementById("pause-setting-blur"),
    minimapCanvas: document.getElementById("minimap-canvas"),
    resultScreen: document.getElementById("result-screen"),
    resultSummary: document.getElementById("result-summary"),
    resultTime: document.getElementById("result-time"),
    resultHits: document.getElementById("result-hits"),
    resultTopSpeed: document.getElementById("result-top-speed"),
    resultList: document.getElementById("result-list"),
    resultRetryBtn: document.getElementById("result-retry-btn"),
    resultMenuBtn: document.getElementById("result-menu-btn"),
    postFinishAuth: document.getElementById("post-finish-auth"),
    finishEmail: document.getElementById("finish-email"),
    finishNickname: document.getElementById("finish-nickname"),
    finishPassword: document.getElementById("finish-password"),
    finishRegisterBtn: document.getElementById("finish-register-btn"),
    finishLoginBtn: document.getElementById("finish-login-btn"),
    finishSkipBtn: document.getElementById("finish-skip-btn"),
    finishAuthStatus: document.getElementById("finish-auth-status"),
  };
}

export function createUiSystem({ settings, levels, getSelectedLevelId, setSelectedLevelId, onLoadMenuPreview, onStartRace, onOpenMenu, onTogglePause, ensureAudio }) {
  loadStoredSettings(settings);

  const ui = collectUi();
  const apiBase = (window.__BIKE_API_BASE__ || localStorage.getItem("bike_api_base") || `${location.protocol}//${location.host}`).replace(/\/$/, "");
  const uiState = {
    loading: false,
    menuVisibleAt: 0,
    menuMode: "single",
    authToken: localStorage.getItem("bike_auth_token") || "",
    pvpSocket: null,
    lastFinish: null,
    leaderboard: {
      page: 1,
      limit: 10,
      allOffset: 0,
      allLimit: 25,
      loadingAll: false,
      allEnded: false,
    },
    lobby: {
      connected: false,
      roomId: "lobby",
      mapId: "ring",
      meId: null,
      players: [],
      ready: {},
      hostId: null,
    },
    lastBlastLevelId: null,
    titleBlastTimer: null,
    titleBlastLoopTimer: null,
    applySettingsNow: () => {},
    minimap: {
      levelId: null,
      minX: 0,
      maxX: 1,
      minZ: 0,
      maxZ: 1,
      width: 1,
      depth: 1,
      points: [],
    },
  };

  function setUiLoading(loading) {
    uiState.loading = loading;
    for (const btn of [ui.startBtn, ui.menuBtn, ui.pauseResumeBtn, ui.pauseMenuBtn, ui.resultRetryBtn, ui.resultMenuBtn]) {
      if (!btn) continue;
      btn.disabled = loading;
      btn.style.pointerEvents = loading ? "none" : "auto";
      btn.style.opacity = loading ? "0.62" : "1";
    }
  }

  function refreshLevelSelection() {
    const selectedId = getSelectedLevelId();
    ui.levelGrid.querySelectorAll(".level-card").forEach((card) => {
      card.classList.toggle("selected", card.dataset.levelId === selectedId);
    });
  }

  function syncSettingControls() {
    const volumeText = `${Math.round(settings.volume * 100)}%`;
    const sensitivityText = `${settings.sensitivity.toFixed(2)}x`;
    const fovText = String(Math.round(settings.fov));

    for (const input of [ui.settingVolume, ui.pauseSettingVolume]) {
      if (input) input.value = String(settings.volume);
    }
    for (const label of [ui.settingVolumeValue, ui.pauseSettingVolumeValue]) {
      if (label) label.textContent = volumeText;
    }

    for (const input of [ui.settingSensitivity, ui.pauseSettingSensitivity]) {
      if (input) input.value = String(settings.sensitivity);
    }
    for (const label of [ui.settingSensitivityValue, ui.pauseSettingSensitivityValue]) {
      if (label) label.textContent = sensitivityText;
    }

    for (const input of [ui.settingFov, ui.pauseSettingFov]) {
      if (input) input.value = String(Math.round(settings.fov));
    }
    for (const label of [ui.settingFovValue, ui.pauseSettingFovValue]) {
      if (label) label.textContent = fovText;
    }

    for (const select of [ui.settingQuality, ui.pauseSettingQuality]) {
      if (select) select.value = settings.quality;
    }
    for (const checkbox of [ui.settingShake, ui.pauseSettingShake]) {
      if (checkbox) checkbox.checked = settings.shake;
    }
    for (const checkbox of [ui.settingBlur, ui.pauseSettingBlur]) {
      if (checkbox) checkbox.checked = settings.blur;
    }
  }

  function saveAndApply({ applyRenderer = false, refreshPreview = false } = {}) {
    saveStoredSettings(settings);
    if (applyRenderer) uiState.applySettingsNow();
    if (refreshPreview && ui.menuScreen.classList.contains("visible")) onLoadMenuPreview(getSelectedLevelId());
  }

  function bindMirroredRange(primary, secondary, onValue) {
    const handle = (source) => {
      onValue(Number(source.value));
      if (primary && source !== primary) primary.value = source.value;
      if (secondary && source !== secondary) secondary.value = source.value;
      syncSettingControls();
    };
    primary?.addEventListener("input", () => handle(primary));
    secondary?.addEventListener("input", () => handle(secondary));
  }

  function bindMirroredCheckbox(primary, secondary, onValue) {
    const handle = (source) => {
      onValue(Boolean(source.checked));
      if (primary && source !== primary) primary.checked = source.checked;
      if (secondary && source !== secondary) secondary.checked = source.checked;
      syncSettingControls();
    };
    primary?.addEventListener("change", () => handle(primary));
    secondary?.addEventListener("change", () => handle(secondary));
  }

  function bindMirroredSelect(primary, secondary, onValue) {
    const handle = (source) => {
      onValue(source.value);
      if (primary && source !== primary) primary.value = source.value;
      if (secondary && source !== secondary) secondary.value = source.value;
      syncSettingControls();
    };
    primary?.addEventListener("change", () => handle(primary));
    secondary?.addEventListener("change", () => handle(secondary));
  }

  function triggerMenuTitleBlast(levelId, { force = false } = {}) {
    if (!ui.menuHeroTitle || !ui.menuHeroLetters) return;
    if (!force && typeof levelId === "string" && uiState.lastBlastLevelId === levelId) return;
    if (typeof levelId === "string") uiState.lastBlastLevelId = levelId;

    ui.menuHeroLetters.innerHTML = "";

    let glyphIndex = 0;
    const words = MENU_BLAST_TEXT.split(" ");
    for (let wordIndex = 0; wordIndex < words.length; wordIndex += 1) {
      const word = words[wordIndex];
      const wordWrap = document.createElement("span");
      wordWrap.className = "blast-word";

      for (const glyph of word) {
        const letter = document.createElement("span");
        letter.className = "blast-letter";
        letter.textContent = glyph;
        const delay = glyphIndex * 0.055 + Math.random() * 0.02;
        letter.style.setProperty("--delay", `${delay.toFixed(3)}s`);
        letter.style.setProperty("--blast-x", `${THREE.MathUtils.randFloatSpread(260).toFixed(1)}px`);
        letter.style.setProperty("--blast-y", `${THREE.MathUtils.randFloatSpread(190).toFixed(1)}px`);
        letter.style.setProperty("--blast-rot", `${THREE.MathUtils.randFloatSpread(320).toFixed(1)}deg`);
        wordWrap.appendChild(letter);
        glyphIndex += 1;
      }

      ui.menuHeroLetters.appendChild(wordWrap);
      if (wordIndex >= words.length - 1) continue;

      // keep wrapping behavior only between words, never inside "GAME"
      // so letters stay grouped during responsive wraps.
      {
        const gap = document.createElement("span");
        gap.className = "blast-gap";
        gap.textContent = "\u00A0";
        ui.menuHeroLetters.appendChild(gap);
      }
    }

    for (let i = 0; i < MENU_BLAST_SPARK_COUNT; i += 1) {
      const spark = document.createElement("span");
      spark.className = "blast-spark";
      spark.style.setProperty("--spark-size", `${THREE.MathUtils.randFloat(4, 11).toFixed(1)}px`);
      spark.style.setProperty("--spark-x", `${THREE.MathUtils.randFloatSpread(320).toFixed(1)}px`);
      spark.style.setProperty("--spark-y", `${THREE.MathUtils.randFloatSpread(150).toFixed(1)}px`);
      spark.style.setProperty("--spark-delay", `${THREE.MathUtils.randFloat(0, 0.42).toFixed(3)}s`);
      spark.style.setProperty("--spark-hue", `${THREE.MathUtils.randInt(16, 340)}deg`);
      ui.menuHeroLetters.appendChild(spark);
    }

    if (uiState.titleBlastTimer) {
      window.clearTimeout(uiState.titleBlastTimer);
      uiState.titleBlastTimer = null;
    }

    ui.menuHeroTitle.classList.remove("is-blasting");
    // force style flush so the same animation can replay on each loop/map switch
    void ui.menuHeroTitle.offsetWidth;
    ui.menuHeroTitle.classList.add("is-blasting");

    uiState.titleBlastTimer = window.setTimeout(() => {
      uiState.titleBlastTimer = null;
    }, 40);
  }

  function setMenuBlastLoopEnabled(enabled) {
    if (enabled) {
      if (uiState.titleBlastLoopTimer) return;
      uiState.titleBlastLoopTimer = window.setInterval(() => {
        triggerMenuTitleBlast(getSelectedLevelId(), { force: true });
      }, MENU_BLAST_LOOP_MS);
      return;
    }

    if (uiState.titleBlastLoopTimer) {
      window.clearInterval(uiState.titleBlastLoopTimer);
      uiState.titleBlastLoopTimer = null;
    }
  }

  function switchMenuMode(mode) {
    uiState.menuMode = mode;
    ui.singlePanel?.classList.toggle("hidden", mode !== "single");
    ui.multiPanel?.classList.toggle("hidden", mode !== "multi");
    ui.leaderboardPanel?.classList.toggle("hidden", mode !== "leaderboard");
    ui.singleBtn?.classList.toggle("active", mode === "single");
    ui.multiBtn?.classList.toggle("active", mode === "multi");
    ui.leaderboardBtn?.classList.toggle("active", mode === "leaderboard");

    const panel = ui.menuScreen?.querySelector?.(".menu-panel");
    if (panel) {
      panel.classList.toggle("mode-bg-photo", mode === "multi" || mode === "leaderboard");
    }
  }

  async function apiRequest(path, options = {}) {
    const headers = new Headers(options.headers || {});
    if (uiState.authToken) headers.set("authorization", `Bearer ${uiState.authToken}`);
    const res = await fetch(`${apiBase}${path}`, { ...options, headers });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.message || `HTTP ${res.status}`);
    return data;
  }

  async function refreshLeaderboard() {
    const mapCode = ui.lbMapCode?.value?.trim() || getSelectedLevelId();
    const page = Math.max(1, uiState.leaderboard.page);
    const limit = uiState.leaderboard.limit;
    const offset = (page - 1) * limit;
    if (!ui.lbList) return;
    ui.lbList.innerHTML = "加载中...";
    if (ui.lbPageInfo) ui.lbPageInfo.textContent = `第 ${page} 页`;
    try {
      const data = await apiRequest(`/leaderboard/${encodeURIComponent(mapCode)}?limit=${limit}&offset=${offset}`);
      const top = data.top || [];
      if (!top.length) {
        ui.lbList.innerHTML = "<div class='result-row'><span class='name'>该页暂无成绩</span></div>";
        return;
      }
      ui.lbList.innerHTML = top
        .map((row, idx) => {
          const nick = row.user?.nickname || row.nickname || row.userId || "unknown";
          const ms = row.durationMs ?? row.score ?? 0;
          const mapName = MAP_LABELS[mapCode] || mapCode;
          return `<div class="result-row"><span class="pos">#${offset + idx + 1}</span><span class="name">${mapName} · ${nick}</span><span class="time">${formatMsHuman(ms)}</span></div>`;
        })
        .join("");
    } catch (err) {
      ui.lbList.innerHTML = `<div class='result-row'><span class='name'>加载失败：${err.message}</span></div>`;
    }
  }

  async function loadAllRecords(append = false) {
    if (!ui.lbAllList || uiState.leaderboard.loadingAll || uiState.leaderboard.allEnded) return;
    uiState.leaderboard.loadingAll = true;
    if (!append) {
      uiState.leaderboard.allOffset = 0;
      uiState.leaderboard.allEnded = false;
      ui.lbAllList.innerHTML = "加载中...";
    }
    try {
      const { allOffset, allLimit } = uiState.leaderboard;
      const data = await apiRequest(`/leaderboard/all?limit=${allLimit}&offset=${allOffset}`);
      const items = data.items || [];
      if (!append) ui.lbAllList.innerHTML = "";
      if (!items.length) {
        if (!append) ui.lbAllList.innerHTML = "<div class='result-row'><span class='name'>暂无记录</span></div>";
        uiState.leaderboard.allEnded = true;
        return;
      }
      const html = items
        .map((row) => {
          const mapName = MAP_LABELS[row.track] || row.track;
          return `<div class="result-row"><span class="name">${mapName} · ${row.name}</span><span class="time">${formatMsHuman(row.bestMs)}</span></div>`;
        })
        .join("");
      ui.lbAllList.insertAdjacentHTML("beforeend", html);
      uiState.leaderboard.allOffset += items.length;
      if (items.length < allLimit) uiState.leaderboard.allEnded = true;
    } catch (err) {
      if (!append) ui.lbAllList.innerHTML = `<div class='result-row'><span class='name'>加载失败：${err.message}</span></div>`;
    } finally {
      uiState.leaderboard.loadingAll = false;
    }
  }

  async function refreshRoomBrowser() {
    if (!ui.roomsList) return;
    ui.roomsList.innerHTML = "加载中...";
    try {
      const data = await apiRequest("/pvp/rooms");
      const rooms = data.rooms || [];
      if (!rooms.length) {
        ui.roomsList.innerHTML = "<div class='result-row'><span class='name'>暂无房间</span></div>";
        return;
      }
      ui.roomsList.innerHTML = rooms.map((r) => {
        const statusText = r.status === "in_game" ? "正在游戏" : "等待中";
        const btn = r.status === "in_game"
          ? `<button class='ghost-btn' type='button' disabled>不可进入</button>`
          : `<button class='ghost-btn room-join-btn' data-room='${r.roomId}' data-map='${r.mapId}' type='button'>加入</button>`;
        return `<div class='result-row'><span class='name'>${r.roomId} · ${r.mapId} · ${statusText}</span><span class='time'>${r.players}人 ${btn}</span></div>`;
      }).join("");

      ui.roomsList.querySelectorAll(".room-join-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          ui.roomIdInput.value = btn.dataset.room || "lobby";
          if (btn.dataset.map) ui.roomMapSelect.value = btn.dataset.map;
          ui.authStatus.textContent = `已选择房间 ${ui.roomIdInput.value}`;
        });
      });
    } catch (err) {
      ui.roomsList.innerHTML = `<div class='result-row'><span class='name'>加载失败：${err.message}</span></div>`;
    }
  }

  function renderRoomState() {
    if (!ui.roomState) return;
    const l = uiState.lobby;
    const players = l.players || [];
    if (!l.connected) {
      ui.roomState.innerHTML = "<div class='result-row'><span class='name'>未连接房间</span></div>";
      return;
    }
    ui.roomState.innerHTML = [
      `<div class="result-row"><span class="name">房间：${l.roomId}</span><span class="time">地图：${l.mapId}</span></div>`,
      `<div class="result-row"><span class="name">人数：${players.length}</span><span class="time">房主：${l.hostId || "-"}</span></div>`,
      ...players.map((p, idx) => `<div class="result-row"><span class="pos">#${idx + 1}</span><span class="name">${p.nickname || p.id}${p.id===l.meId?" (你)":""}</span><span class="time">${l.ready?.[p.id] ? "已准备" : "未准备"}</span></div>`),
    ].join("");
  }

  function sendLobby(type, payload = {}) {
    const ws = uiState.pvpSocket;
    if (!ws || ws.readyState !== WebSocket.OPEN) return;
    ws.send(JSON.stringify({ type, ...payload }));
  }

  async function submitFinishRecord(mapCode, durationMs) {
    if (!uiState.authToken) throw new Error("未登录");
    return apiRequest("/leaderboard/submit", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ mapCode, score: durationMs, durationMs }),
    });
  }

  function setupUi(applySettings) {
    uiState.applySettingsNow = applySettings;

    ui.levelGrid.innerHTML = "";
    for (const level of levels) {
      const card = document.createElement("button");
      card.className = "level-card";
      card.dataset.levelId = level.id;
      card.type = "button";
      card.innerHTML = `<p class="level-name">${level.name}</p><p class="level-meta">${level.desc}</p>`;
      card.addEventListener("click", () => {
        setSelectedLevelId(level.id);
        refreshLevelSelection();
        onLoadMenuPreview(level.id);
      });
      ui.levelGrid.appendChild(card);
    }
    refreshLevelSelection();

    ui.singleBtn?.addEventListener("click", () => switchMenuMode("single"));
    ui.multiBtn?.addEventListener("click", () => switchMenuMode("multi"));
    ui.leaderboardBtn?.addEventListener("click", () => {
      switchMenuMode("leaderboard");
      uiState.leaderboard.page = 1;
      void refreshLeaderboard();
      void loadAllRecords(false);
    });

    ui.lbMapCode?.addEventListener("change", () => {
      uiState.leaderboard.page = 1;
      void refreshLeaderboard();
    });

    ui.lbPrevBtn?.addEventListener("click", () => {
      uiState.leaderboard.page = Math.max(1, uiState.leaderboard.page - 1);
      void refreshLeaderboard();
    });

    ui.lbNextBtn?.addEventListener("click", () => {
      uiState.leaderboard.page += 1;
      void refreshLeaderboard();
    });

    ui.lbRefreshBtn?.addEventListener("click", () => {
      void refreshLeaderboard();
      void loadAllRecords(false);
    });

    ui.lbAllList?.addEventListener("wheel", (event) => {
      const el = ui.lbAllList;
      if (!el) return;
      const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 24;
      if (event.deltaY > 0 && nearBottom) {
        void loadAllRecords(true);
      }
    });

    ui.registerBtn?.addEventListener("click", async () => {
      try {
        const email = ui.authEmail?.value?.trim();
        const nickname = ui.authNickname?.value?.trim();
        const password = ui.authPassword?.value || "";
        const data = await apiRequest("/auth/register", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, nickname, password }),
        });
        uiState.authToken = data.token || "";
        localStorage.setItem("bike_auth_token", uiState.authToken);
        ui.authStatus.textContent = `注册成功：${data.user?.nickname || "OK"}`;
      } catch (err) {
        ui.authStatus.textContent = `注册失败：${err.message}`;
      }
    });

    ui.loginBtn?.addEventListener("click", async () => {
      try {
        const email = ui.authEmail?.value?.trim();
        const password = ui.authPassword?.value || "";
        const data = await apiRequest("/auth/login", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        uiState.authToken = data.token || "";
        localStorage.setItem("bike_auth_token", uiState.authToken);
        ui.authStatus.textContent = `登录成功：${data.user?.nickname || "OK"}`;
      } catch (err) {
        ui.authStatus.textContent = `登录失败：${err.message}`;
      }
    });

    ui.finishRegisterBtn?.addEventListener("click", async () => {
      try {
        const email = ui.finishEmail?.value?.trim();
        const nickname = ui.finishNickname?.value?.trim();
        const password = ui.finishPassword?.value || "";
        const data = await apiRequest("/auth/register", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, nickname, password }),
        });
        uiState.authToken = data.token || "";
        localStorage.setItem("bike_auth_token", uiState.authToken);
        const latest = uiState.lastFinish;
        if (latest) {
          await submitFinishRecord(latest.mapCode, latest.durationMs);
          ui.finishAuthStatus.textContent = "注册并保存成功";
        }
      } catch (err) {
        ui.finishAuthStatus.textContent = `失败：${err.message}`;
      }
    });

    ui.finishLoginBtn?.addEventListener("click", async () => {
      try {
        const email = ui.finishEmail?.value?.trim();
        const password = ui.finishPassword?.value || "";
        const data = await apiRequest("/auth/login", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        uiState.authToken = data.token || "";
        localStorage.setItem("bike_auth_token", uiState.authToken);
        const latest = uiState.lastFinish;
        if (latest) {
          await submitFinishRecord(latest.mapCode, latest.durationMs);
          ui.finishAuthStatus.textContent = "登录并保存成功";
        }
      } catch (err) {
        ui.finishAuthStatus.textContent = `失败：${err.message}`;
      }
    });

    ui.finishSkipBtn?.addEventListener("click", () => {
      if (ui.postFinishAuth) ui.postFinishAuth.classList.add("hidden");
      ui.finishAuthStatus.textContent = "已跳过保存";
    });

    ui.openMatchLobbyBtn?.addEventListener("click", () => {
      ui.matchLobbyPanel?.classList.toggle("hidden");
      if (!ui.matchLobbyPanel?.classList.contains("hidden")) {
        void refreshRoomBrowser();
      }
    });

    ui.roomsRefreshBtn?.addEventListener("click", () => {
      void refreshRoomBrowser();
    });

    ui.queueBtn?.addEventListener("click", () => {
      if (!uiState.authToken) {
        ui.authStatus.textContent = "请先登录";
        return;
      }
      try {
        if (uiState.pvpSocket) {
          uiState.pvpSocket.close();
          uiState.pvpSocket = null;
        }
        const roomId = ui.roomIdInput?.value?.trim() || "lobby";
        const mapId = ui.roomMapSelect?.value || "ring";
        const wsProto = apiBase.startsWith("https") ? "wss" : "ws";
        const wsBase = apiBase.replace(/^https?/, wsProto);
        const ws = new WebSocket(`${wsBase}/pvp/queue?token=${encodeURIComponent(uiState.authToken)}&room=${encodeURIComponent(roomId)}`);
        uiState.pvpSocket = ws;
        uiState.lobby.roomId = roomId;
        uiState.lobby.mapId = mapId;

        ws.onopen = () => {
          uiState.lobby.connected = true;
          ui.authStatus.textContent = "已进入房间，等待其他玩家...";
          window.__BIKE_MP_NET__ = {
            send: (type, payload = {}) => sendLobby(type, payload),
            remoteStates: {},
            remoteActions: [],
            roomId,
            meId: uiState.lobby.meId,
          };
          sendLobby("join_room", { roomId, mapId });
          renderRoomState();
        };

        ws.onmessage = (event) => {
          const msg = JSON.parse(event.data);
          if (msg.type === "room_state") {
            uiState.lobby.players = msg.players || [];
            uiState.lobby.ready = msg.ready || {};
            uiState.lobby.hostId = msg.hostId || null;
            uiState.lobby.meId = msg.meId || uiState.lobby.meId;
            uiState.lobby.mapId = msg.mapId || uiState.lobby.mapId;
            if (window.__BIKE_MP_NET__) {
              window.__BIKE_MP_NET__.meId = uiState.lobby.meId;
              window.__BIKE_MP_NET__.roomId = uiState.lobby.roomId;
            }
            renderRoomState();
            return;
          }
          if (msg.type === "joined") {
            uiState.lobby.meId = msg.meId || uiState.lobby.meId;
            if (window.__BIKE_MP_NET__) window.__BIKE_MP_NET__.meId = uiState.lobby.meId;
            ui.authStatus.textContent = `已加入房间：${uiState.lobby.roomId}`;
            renderRoomState();
            return;
          }
          if (msg.type === "match_found") {
            ui.authStatus.textContent = "房间人数已满足，可准备并开始";
            renderRoomState();
            return;
          }
          if (msg.type === "player_state") {
            if (window.__BIKE_MP_NET__ && msg.from && msg.p) {
              const prev = window.__BIKE_MP_NET__.remoteStates[msg.from];
              if (!prev || (msg.t || 0) >= (prev.t || 0)) {
                window.__BIKE_MP_NET__.remoteStates[msg.from] = msg;
              }
            }
            return;
          }
          if (msg.type === "action") {
            if (window.__BIKE_MP_NET__ && msg.from) {
              window.__BIKE_MP_NET__.remoteActions.push(msg);
            }
            return;
          }
          if (msg.type === "room_closed") {
            ui.authStatus.textContent = "房间已自动注销（人数不足），请重新创建/加入房间";
            uiState.lobby.ready = {};
            renderRoomState();
            if (window.__BIKE_GAME__?.game?.state && window.__BIKE_GAME__.game.state !== 0) {
              Promise.resolve(onOpenMenu());
            }
            return;
          }
          if (msg.type === "start_game") {
            ui.authStatus.textContent = "房主已开始游戏，进入地图...";
            if (msg.mapId) {
              setSelectedLevelId(msg.mapId);
              refreshLevelSelection();
            }
            window.__BIKE_MP_START__ = {
              active: true,
              roomId: uiState.lobby.roomId,
              meId: uiState.lobby.meId,
              players: msg.players || uiState.lobby.players || [],
            };
            Promise.resolve(onStartRace(getSelectedLevelId()));
            return;
          }
          ui.authStatus.textContent = `事件：${msg.type}`;
        };

        ws.onerror = () => {
          ui.authStatus.textContent = "房间连接失败";
        };

        ws.onclose = () => {
          uiState.lobby.connected = false;
          uiState.lobby.players = [];
          uiState.lobby.ready = {};
          window.__BIKE_MP_NET__ = null;
          renderRoomState();
        };
      } catch (err) {
        ui.authStatus.textContent = `进入房间失败：${err.message}`;
      }
    });

    ui.readyBtn?.addEventListener("click", () => {
      sendLobby("toggle_ready");
    });

    ui.startRoomBtn?.addEventListener("click", () => {
      const mapId = ui.roomMapSelect?.value || "ring";
      sendLobby("start_game", { mapId });
    });

    ui.leaveRoomBtn?.addEventListener("click", () => {
      if (uiState.pvpSocket) {
        uiState.pvpSocket.close();
        uiState.pvpSocket = null;
      }
      uiState.lobby.connected = false;
      uiState.lobby.players = [];
      uiState.lobby.ready = {};
      window.__BIKE_MP_NET__ = null;
      window.__BIKE_MP_START__ = null;
      ui.authStatus.textContent = "已退出房间";
      renderRoomState();
    });

    switchMenuMode("single");
    renderRoomState();

    ui.startBtn.addEventListener("click", () => {
      if (uiState.loading) return;
      if (performance.now() - uiState.menuVisibleAt < 650) return;
      ensureAudio();
      setUiLoading(true);
      Promise.resolve(onStartRace(getSelectedLevelId())).finally(() => setUiLoading(false));
    });

    ui.settingsBtn.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      ui.settingsPanel.classList.toggle("hidden");
    });

    ui.menuBtn.addEventListener("click", () => {
      if (uiState.loading) return;
      onTogglePause();
    });

    ui.pauseResumeBtn?.addEventListener("click", () => {
      if (uiState.loading) return;
      onTogglePause();
    });

    ui.pauseMenuBtn?.addEventListener("click", () => {
      if (uiState.loading) return;
      setUiLoading(true);
      Promise.resolve(onOpenMenu()).finally(() => setUiLoading(false));
    });

    ui.resultRetryBtn.addEventListener("click", () => {
      if (uiState.loading) return;
      ensureAudio();
      setUiLoading(true);
      Promise.resolve(onStartRace(getSelectedLevelId())).finally(() => setUiLoading(false));
    });

    ui.resultMenuBtn.addEventListener("click", () => {
      if (uiState.loading) return;
      setUiLoading(true);
      Promise.resolve(onOpenMenu()).finally(() => setUiLoading(false));
    });

    bindMirroredRange(ui.settingVolume, ui.pauseSettingVolume, (value) => {
      settings.volume = clampNumber(value, 0, 1, settings.volume);
      saveAndApply({ applyRenderer: true });
    });

    bindMirroredRange(ui.settingSensitivity, ui.pauseSettingSensitivity, (value) => {
      settings.sensitivity = clampNumber(value, 0.6, 1.6, settings.sensitivity);
      saveAndApply();
    });

    bindMirroredRange(ui.settingFov, ui.pauseSettingFov, (value) => {
      settings.fov = Math.round(clampNumber(value, 55, 95, settings.fov));
      saveAndApply({ applyRenderer: true });
    });

    bindMirroredSelect(ui.settingQuality, ui.pauseSettingQuality, (value) => {
      settings.quality = QUALITY_VALUES.has(value) ? value : settings.quality;
      saveAndApply({ applyRenderer: true, refreshPreview: true });
    });

    bindMirroredCheckbox(ui.settingShake, ui.pauseSettingShake, (value) => {
      settings.shake = value;
      saveAndApply();
    });

    bindMirroredCheckbox(ui.settingBlur, ui.pauseSettingBlur, (value) => {
      settings.blur = value;
      saveAndApply();
    });

    syncSettingControls();
    triggerMenuTitleBlast(getSelectedLevelId(), { force: true });
    setMenuBlastLoopEnabled(true);
  }

  function applySettings({ camera, renderer, scene, audio, initial = false }) {
    camera.fov = settings.fov;
    camera.updateProjectionMatrix();

    if (settings.quality === "low") {
      renderer.shadowMap.enabled = false;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.1));
    } else if (settings.quality === "medium") {
      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    } else {
      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    if (!initial && scene?.userData?.sun) {
      const map = settings.quality === "high" ? 2048 : settings.quality === "medium" ? 1536 : 1024;
      scene.userData.sun.shadow.mapSize.set(map, map);
      scene.userData.sun.shadow.needsUpdate = true;
    }

    if (audio.master) {
      audio.master.gain.setTargetAtTime(settings.volume, audio.ctx.currentTime, 0.05);
    }
  }

  function setMenuVisible(visible) {
    if (visible) uiState.menuVisibleAt = performance.now();
    setMenuBlastLoopEnabled(visible);
    if (visible) triggerMenuTitleBlast(getSelectedLevelId(), { force: true });
    ui.menuScreen.classList.toggle("visible", visible);
    ui.menuScreen.classList.toggle("hidden", !visible);
    ui.menuScreen.style.pointerEvents = visible ? "auto" : "none";
    ui.hud.classList.toggle("visible", !visible);
    ui.hud.classList.toggle("hidden", visible);
    if (visible) setPauseVisible(false);
  }

  function setPauseVisible(visible) {
    if (!ui.pauseScreen) return;
    ui.pauseScreen.classList.toggle("visible", visible);
    ui.pauseScreen.classList.toggle("hidden", !visible);
    ui.pauseScreen.style.pointerEvents = visible ? "auto" : "none";
    if (visible) ui.settingsPanel.classList.add("hidden");
  }

  function markMenuReady() {
    uiState.menuVisibleAt = performance.now();
  }

  function setResultVisible(visible) {
    ui.resultScreen.classList.toggle("visible", visible);
    ui.resultScreen.classList.toggle("hidden", !visible);
    ui.resultScreen.style.pointerEvents = visible ? "auto" : "none";
    if (visible) setPauseVisible(false);
  }

  function setRaceMessage(game, text, duration = 0) {
    ui.raceMessage.textContent = text;
    game.messageTimer = duration;
  }

  function rebuildMinimap(level) {
    if (!level || !Array.isArray(level.pathPoints) || level.pathPoints.length === 0) {
      uiState.minimap.levelId = null;
      uiState.minimap.points = [];
      return;
    }

    let minX = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let minZ = Number.POSITIVE_INFINITY;
    let maxZ = Number.NEGATIVE_INFINITY;

    for (const point of level.pathPoints) {
      minX = Math.min(minX, point.x);
      maxX = Math.max(maxX, point.x);
      minZ = Math.min(minZ, point.z);
      maxZ = Math.max(maxZ, point.z);
    }

    const margin = 12;
    minX = Math.min(minX, level.bounds?.minX ?? minX) - margin;
    maxX = Math.max(maxX, level.bounds?.maxX ?? maxX) + margin;
    minZ = Math.min(minZ, level.bounds?.minZ ?? minZ) - margin;
    maxZ = Math.max(maxZ, level.bounds?.maxZ ?? maxZ) + margin;

    uiState.minimap.levelId = level.id;
    uiState.minimap.minX = minX;
    uiState.minimap.maxX = maxX;
    uiState.minimap.minZ = minZ;
    uiState.minimap.maxZ = maxZ;
    uiState.minimap.width = Math.max(1, maxX - minX);
    uiState.minimap.depth = Math.max(1, maxZ - minZ);
    uiState.minimap.points = level.pathPoints.map((point) => ({ x: point.x, z: point.z }));
  }

  function projectToMinimap(x, z, canvasSize, padding) {
    const map = uiState.minimap;
    const available = canvasSize - padding * 2;
    const scale = available / Math.max(map.width, map.depth);
    const drawWidth = map.width * scale;
    const drawHeight = map.depth * scale;
    const offsetX = (canvasSize - drawWidth) * 0.5;
    const offsetY = (canvasSize - drawHeight) * 0.5;
    return {
      x: offsetX + (x - map.minX) * scale,
      y: offsetY + (map.maxZ - z) * scale,
    };
  }

  function drawMinimap(game) {
    const canvas = ui.minimapCanvas;
    if (!canvas || !game.activeLevel || !game.player) return;

    if (uiState.minimap.levelId !== game.activeLevel.id) rebuildMinimap(game.activeLevel);
    if (!uiState.minimap.points.length) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const size = canvas.width;
    const padding = 12;

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = "rgba(6, 10, 14, 0.78)";
    ctx.fillRect(0, 0, size, size);
    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 1;
    ctx.strokeRect(0.5, 0.5, size - 1, size - 1);

    const points = uiState.minimap.points;
    const totalPoints = points.length;
    const checkpointCount = Math.max(1, game.checkpointMeshes?.length ?? totalPoints);
    const nextCheckpoint = THREE.MathUtils.clamp(game.player.nextCheckpoint ?? 0, 0, checkpointCount - 1);
    const completedIndex = game.activeLevel.loop
      ? THREE.MathUtils.clamp(game.player.checkpoint ?? -1, -1, checkpointCount - 1)
      : THREE.MathUtils.clamp(game.player.checkpoint ?? -1, -1, checkpointCount - 1);

    const segmentCount = game.activeLevel.loop ? totalPoints : totalPoints - 1;
    for (let i = 0; i < segmentCount; i += 1) {
      const from = points[i];
      const to = points[(i + 1) % totalPoints];
      const a = projectToMinimap(from.x, from.z, size, padding);
      const b = projectToMinimap(to.x, to.z, size, padding);
      const passed = i <= completedIndex;
      ctx.strokeStyle = passed ? "rgba(132, 138, 150, 0.86)" : "rgba(127, 255, 232, 0.95)";
      ctx.lineWidth = passed ? 3 : 3.5;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    const cpPoint = game.checkpointMeshes?.[nextCheckpoint]?.point ?? points[Math.min(nextCheckpoint, totalPoints - 1)];
    if (!cpPoint) return;
    const cpScreen = projectToMinimap(cpPoint.x, cpPoint.z, size, padding);
    const pulse = 0.68 + (Math.sin(game.simTime * 7.4) * 0.5 + 0.5) * 0.32;
    ctx.fillStyle = `rgba(255, 210, 98, ${pulse.toFixed(3)})`;
    ctx.beginPath();
    ctx.arc(cpScreen.x, cpScreen.y, 6.5 + pulse * 3, 0, Math.PI * 2);
    ctx.fill();

    const playerPos = projectToMinimap(game.player.position.x, game.player.position.z, size, padding);
    const forwardWorldX = Math.sin(game.player.heading);
    const forwardWorldZ = Math.cos(game.player.heading);
    const playerFront = projectToMinimap(game.player.position.x + forwardWorldX * 5, game.player.position.z + forwardWorldZ * 5, size, padding);
    const heading = Math.atan2(playerFront.y - playerPos.y, playerFront.x - playerPos.x);

    ctx.save();
    ctx.translate(playerPos.x, playerPos.y);
    ctx.rotate(heading);
    ctx.fillStyle = "rgba(255, 106, 26, 0.96)";
    ctx.beginPath();
    ctx.moveTo(8, 0);
    ctx.lineTo(-5.5, 4.2);
    ctx.lineTo(-5.5, -4.2);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function updateHud(game, getRaceOrder) {
    if (!game.player || game.state === STATE.MENU) {
      if (game.state === STATE.MENU) game.renderer.domElement.style.filter = "none";
      return;
    }

    const speedKmh = Math.round(Math.hypot(game.player.velocity.x, game.player.velocity.z) * 3.6);
    ui.speed.textContent = String(speedKmh);

    const ranking = getRaceOrder();
    ui.rank.textContent = `${Math.max(1, ranking.findIndex((entry) => entry === game.player) + 1)}/${game.racers.length}`;

    const totalCp = Math.max(1, game.checkpointMeshes?.length ?? game.activeLevel.pathPoints.length);
    const cpPassed = game.activeLevel.loop
      ? Math.min(totalCp, game.player.lap * totalCp + game.player.checkpoint + 1)
      : Math.min(game.player.checkpoint + 1, totalCp);

    ui.checkpoint.textContent = `${cpPassed}/${totalCp}`;
    ui.punchCd.textContent = Math.max(0, game.player.punchCooldown).toFixed(1);
    ui.itemSlot.textContent = game.player.itemType ? itemName(game.player.itemType) : "无";
    ui.raceTime.textContent = formatRaceTime(game.raceElapsed);

    if (game.state === STATE.FINISHED) ui.countdown.textContent = "FINISH";

    drawMinimap(game);

    game.renderer.domElement.style.filter = settings.blur && game.state !== STATE.PAUSED
      ? `blur(${(THREE.MathUtils.clamp(speedKmh / 190, 0, 1) * 1.3).toFixed(2)}px)`
      : "none";
  }

  async function showResultPanel(game, getRaceOrder) {
    game.resultShown = true;
    setResultVisible(true);

    const ranking = getRaceOrder();
    const playerRank = Math.max(1, ranking.findIndex((entry) => entry === game.player) + 1);
    ui.resultSummary.textContent = `最终名次：第 ${playerRank} / ${game.racers.length}`;
    ui.resultTime.textContent = formatRaceTime(game.raceFinishedAt || game.raceElapsed);
    ui.resultHits.textContent = String(game.player?.hits ?? 0);
    ui.resultTopSpeed.textContent = `${Math.round(game.player?.topSpeedReached ?? 0)} km/h`;

    ui.resultList.innerHTML = "";
    for (let i = 0; i < ranking.length; i += 1) {
      const racer = ranking[i];
      const row = document.createElement("div");
      row.className = "result-row";
      const timeText = racer.finishTime != null ? formatRaceTime(racer.finishTime) : "未完赛";
      row.innerHTML = `<span class="pos">#${i + 1}</span><span class="name">${racer.name}${racer.profile ? ` (${racer.profile.key})` : ""}</span><span class="time">${timeText}</span>`;
      ui.resultList.appendChild(row);
    }

    const isSingle = !game.multiplayer?.active;
    const durationMs = Math.max(1, Math.floor((game.raceFinishedAt || game.raceElapsed) * 1000));
    uiState.lastFinish = { mapCode: game.activeLevel?.id || getSelectedLevelId(), durationMs };

    if (!isSingle) {
      if (ui.postFinishAuth) ui.postFinishAuth.classList.add("hidden");
      return;
    }

    if (uiState.authToken) {
      try {
        await submitFinishRecord(uiState.lastFinish.mapCode, uiState.lastFinish.durationMs);
      } catch {
        // ignore and let user retry from leaderboard panel
      }
      if (ui.postFinishAuth) ui.postFinishAuth.classList.add("hidden");
    } else {
      if (ui.postFinishAuth) ui.postFinishAuth.classList.remove("hidden");
      if (ui.finishAuthStatus) ui.finishAuthStatus.textContent = "游客通关：登录或注册可保存本次成绩";
    }
  }

  return {
    ui,
    setupUi,
    applySettings,
    refreshLevelSelection,
    setUiLoading,
    setMenuVisible,
    setPauseVisible,
    markMenuReady,
    triggerMenuTitleBlast,
    setResultVisible,
    setRaceMessage,
    updateHud,
    showResultPanel,
  };
}
