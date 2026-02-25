import * as THREE from "three";

export const STATE = {
  MENU: "menu",
  READY: "ready",
  RACING: "racing",
  PAUSED: "paused",
  FINISHED: "finished",
  INSPECT: "inspect",
};

export const FIXED_DT = 1 / 120;
export const GRAVITY = 32;
export const BIKE_CLEARANCE = 0.5;
export const PLAYER_NAME = "最屌最牛最霸最强最硬的kyle wong ！！！";
export const BOT_NAMES = ["淑芬", "翠花", "二狗", "铁蛋", "三炮", "老宝", "小牛"];
export const PUNCH_ANIM_TIME = 0.28;
export const WORLD_UP = new THREE.Vector3(0, 1, 0);

export const SETTINGS = {
  volume: 0.65,
  sensitivity: 1,
  fov: 68,
  quality: "high",
  shake: true,
  blur: false,
};

// 统一手感参数，便于后续只改这一处做速度/操控微调。
export const PHYSICS = {
  playerDriveForce: 60,
  aiDriveForce: 60,
  brakeForce: 34,
  reverseDriveScale: 0.24,
  reverseMaxSpeed: 5.8,
  reverseEntrySpeed: 0.55,
  reverseExitSpeed: 1.05,
  reverseEngageDelay: 0.12,
  checkpointMissWarnDistance: 180,
  checkpointMissRespawnDistance: 420,
  checkpointMissResetDistance: 70,
  checkpointMissDistanceScaleByLevel: {
    default: 1,
    serpent: 1.2,
  },
  checkpointProjectionSegmentRadius: 6,
  checkpointProjectionSegmentRadiusByLevel: {
    default: 6,
    serpent: 4,
  },
  rampMinApproachSpeed: 8,
  rampTriggerCooldown: 0.5,
  rampSoundCooldown: 0.35,
  rampMinLaunchVelocity: 8.8,
  rampLaunchGraceDuration: 0.22,
  itemWaveAdvanceDelay: 1.6,
  itemWaveLaneFactor: 0.52,
  itemWaveDensityScale: 1.68,
  itemWaveDensityScaleByLevel: {
    default: 1.68,
    ring: 1.72,
    serpent: 1.84,
    urban8: 1.74,
    harbor: 1.72,
  },
  itemWaveMinGapDistance: 52,
  itemWaveMinGapDistanceByLevel: {
    default: 52,
    ring: 56,
    serpent: 48,
    urban8: 54,
    harbor: 56,
  },
  itemWaveMaxWaveCount: 14,
  itemWaveMaxWaveCountByLevel: {
    default: 14,
    ring: 13,
    serpent: 14,
    urban8: 13,
    harbor: 13,
  },
  mudSlowdown: 0.17,
  mudDustInterval: 0.1,
  knockdownDuration: 2.25,
  knockdownRecoverDuration: 0.95,
  itemHitImmunity: 1.05,
  itemProjectileSpeed: 28,
  itemProjectileTurnRate: 14,
  bananaProjectileLife: 3.6,
  bananaHazardLife: 7.6,
  bananaHazardRadius: 1.5,
  bombProjectileLife: 4.5,
  bombHazardLife: 3.4,
  bombBlastRadius: 7.5,
  trapHazardLife: 8.4,
  trapHazardRadius: 2.2,
  baseDrag: 0.115,
  speedDragFactor: 0.022,
  sideForce: 17,
  sideDamping: 2.9,
  offTrackRespawnFactor: 3.15,
  boostTopSpeedScale: 1.22,
  airTopSpeedBonus: 10,
};

export const AI_PROFILES = [
  { key: "Aggressive", aggression: 0.95, speedBias: 1.05, risk: 0.95, dodge: 0.65 },
  { key: "Racer", aggression: 0.35, speedBias: 1.10, risk: 0.50, dodge: 0.90 },
  { key: "Trickster", aggression: 0.70, speedBias: 1.02, risk: 1.0, dodge: 0.72 },
  { key: "Defender", aggression: 0.55, speedBias: 1.04, risk: 0.35, dodge: 0.94 },
  { key: "Sprinter", aggression: 0.25, speedBias: 1.14, risk: 0.30, dodge: 0.80 },
];

export const ITEM_TYPES = ["turbo", "bash", "shock", "shield", "trap", "banana", "bomb"];

export function itemName(type) {
  if (type === "turbo") return "涡轮";
  if (type === "bash") return "冲撞";
  if (type === "shock") return "电震";
  if (type === "shield") return "护盾";
  if (type === "trap") return "地雷";
  if (type === "banana") return "香蕉皮";
  if (type === "bomb") return "炸弹";
  return "未知";
}

export function formatRaceTime(time) {
  const clamped = Math.max(0, time);
  const minutes = Math.floor(clamped / 60);
  const seconds = Math.floor(clamped % 60);
  const cent = Math.floor((clamped - Math.floor(clamped)) * 100);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(cent).padStart(2, "0")}`;
}

export function createAudioState() {
  return {
    ctx: null,
    master: null,
    windGain: null,
    windFilter: null,
    windCurrent: 0,
    windTarget: 0,
  };
}
