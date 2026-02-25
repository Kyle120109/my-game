import { STATE } from "./config.js";

// [MODULE] input: 输入采集 + 按键队列。

export function createInputState() {
  return {
    forward: false,
    brake: false,
    left: false,
    right: false,
    punchQueued: false,
    itemQueued: false,
    respawnQueued: false,
    debugF4: false,
    debug1: false,
    debug2: false,
    debug3: false,
    debug4: false,
    debug5: false,
    debug6: false,
    debug7: false,
    debug8: false,
    debug9: false,
    debug0: false,
    debugT: false,
    debugY: false,
    debugU: false,
  };
}

export function clearInputState(input) {
  input.forward = false;
  input.brake = false;
  input.left = false;
  input.right = false;
  input.punchQueued = false;
  input.itemQueued = false;
  input.respawnQueued = false;
  input.debugF4 = false;
  input.debug1 = false;
  input.debug2 = false;
  input.debug3 = false;
  input.debug4 = false;
  input.debug5 = false;
  input.debug6 = false;
  input.debug7 = false;
  input.debug8 = false;
  input.debug9 = false;
  input.debug0 = false;
  input.debugT = false;
  input.debugY = false;
  input.debugU = false;
}

export function bindInput({ input, ensureAudio, getState, ui, openMenu, togglePause }) {
  window.addEventListener("keydown", (event) => {
    ensureAudio();
    if (event.code === "KeyW" || event.code === "ArrowUp") input.forward = true;
    if (event.code === "KeyS" || event.code === "ArrowDown") input.brake = true;
    if (event.code === "KeyA" || event.code === "ArrowLeft") input.left = true;
    if (event.code === "KeyD" || event.code === "ArrowRight") input.right = true;
    if (event.code === "KeyF" && !event.repeat) input.punchQueued = true;
    if (event.code === "KeyQ" && !event.repeat) input.itemQueued = true;
    if (event.code === "KeyR" && !event.repeat) input.respawnQueued = true;
    if (event.code === "F4" && !event.repeat) input.debugF4 = true;
    if (event.code === "Digit1" && !event.repeat) input.debug1 = true;
    if (event.code === "Digit2" && !event.repeat) input.debug2 = true;
    if (event.code === "Digit3" && !event.repeat) input.debug3 = true;
    if (event.code === "Digit4" && !event.repeat) input.debug4 = true;
    if (event.code === "Digit5" && !event.repeat) input.debug5 = true;
    if (event.code === "Digit6" && !event.repeat) input.debug6 = true;
    if (event.code === "Digit7" && !event.repeat) input.debug7 = true;
    if (event.code === "Digit8" && !event.repeat) input.debug8 = true;
    if (event.code === "Digit9" && !event.repeat) input.debug9 = true;
    if (event.code === "Digit0" && !event.repeat) input.debug0 = true;
    if (event.code === "KeyT" && !event.repeat) input.debugT = true;
    if (event.code === "KeyY" && !event.repeat) input.debugY = true;
    if (event.code === "KeyU" && !event.repeat) input.debugU = true;

    if (event.code === "Escape" && !event.repeat) {
      const state = getState();
      if (state === STATE.MENU) {
        ui.settingsPanel.classList.toggle("hidden");
      } else if (state === STATE.READY || state === STATE.RACING || state === STATE.PAUSED) {
        togglePause();
      } else {
        openMenu();
      }
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.code === "KeyW" || event.code === "ArrowUp") input.forward = false;
    if (event.code === "KeyS" || event.code === "ArrowDown") input.brake = false;
    if (event.code === "KeyA" || event.code === "ArrowLeft") input.left = false;
    if (event.code === "KeyD" || event.code === "ArrowRight") input.right = false;
  });
}
