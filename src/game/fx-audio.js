import * as THREE from "three";
import { STATE } from "./config.js";
import { damp, horizontalSpeed } from "./levels.js";

// [MODULE] fx-audio: 粒子特效 + 音频系统。

export function createFxAudioSystem({ settings }) {
  function updateParticles(game, dt) {
    for (let i = game.particles.length - 1; i >= 0; i -= 1) {
      const p = game.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        game.fxRoot.remove(p.mesh);
        game.particles.splice(i, 1);
        continue;
      }

      p.vel.y -= 8.4 * dt;
      p.mesh.position.addScaledVector(p.vel, dt);
      p.mesh.material.opacity = p.life / p.maxLife;
    }
  }

  function spawnBurst(game, position, color, count, spread = 1, speed = 5) {
    for (let i = 0; i < count; i += 1) {
      const mesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.06 + Math.random() * 0.06, 8, 8),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 })
      );
      mesh.position.copy(position).add(new THREE.Vector3((Math.random() - 0.5) * spread, 0.35 + Math.random() * 0.8, (Math.random() - 0.5) * spread));
      const vel = new THREE.Vector3((Math.random() - 0.5) * speed, Math.random() * speed * 0.8, (Math.random() - 0.5) * speed);
      game.fxRoot.add(mesh);
      game.particles.push({ mesh, vel, life: 0.35 + Math.random() * 0.4, maxLife: 0.7 });
    }
  }

  function ensureAudio(game) {
    if (game.audio.ctx) return;

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const master = ctx.createGain();
    master.gain.value = settings.volume;
    master.connect(ctx.destination);

    const windFilter = ctx.createBiquadFilter();
    windFilter.type = "bandpass";
    windFilter.frequency.value = 620;
    windFilter.Q.value = 0.7;

    const windGain = ctx.createGain();
    windGain.gain.value = 0;

    const windSource = ctx.createBufferSource();
    windSource.buffer = createNoiseBuffer(ctx, 1.6);
    windSource.loop = true;
    windSource.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(master);
    windSource.start();

    game.audio.ctx = ctx;
    game.audio.master = master;
    game.audio.windGain = windGain;
    game.audio.windFilter = windFilter;
  }

  function createNoiseBuffer(ctx, seconds) {
    const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = (Math.random() * 2 - 1) * 0.8;
    return buffer;
  }

  function updateAudio(game, dt) {
    if (!game.audio.ctx || !game.player) return;

    const speed = horizontalSpeed(game.player.velocity);
    game.audio.windTarget = game.state === STATE.RACING || game.state === STATE.FINISHED
      ? THREE.MathUtils.clamp(speed / 35, 0, 1)
      : 0;

    game.audio.windCurrent = damp(game.audio.windCurrent, game.audio.windTarget, 2.6, dt);

    const now = game.audio.ctx.currentTime;
    game.audio.windGain.gain.setTargetAtTime(game.audio.windCurrent * 0.24, now, 0.1);
    game.audio.windFilter.frequency.setTargetAtTime(320 + game.audio.windCurrent * 1800, now, 0.08);
  }

  function playTone(game, freq, duration, gain = 0.15, type = "sine") {
    if (!game.audio.ctx) return;

    const now = game.audio.ctx.currentTime;
    const osc = game.audio.ctx.createOscillator();
    const g = game.audio.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(gain, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(g);
    g.connect(game.audio.master);
    osc.start(now);
    osc.stop(now + duration + 0.03);
  }

  function playSweep(game, startFreq, endFreq, duration, gain = 0.18, type = "triangle") {
    if (!game.audio.ctx) return;

    const now = game.audio.ctx.currentTime;
    const osc = game.audio.ctx.createOscillator();
    const g = game.audio.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(startFreq, now);
    osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), now + duration);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(gain, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(g);
    g.connect(game.audio.master);
    osc.start(now);
    osc.stop(now + duration + 0.03);
  }

  function playPunchSound(game, hit) {
    playTone(game, hit ? 180 : 120, 0.09, hit ? 0.14 : 0.08, "square");
    if (hit) playTone(game, 72, 0.14, 0.11, "triangle");
  }

  function playHitSound(game) {
    playSweep(game, 420, 110, 0.13, 0.16, "square");
  }

  function playBoostSound(game) {
    playSweep(game, 280, 960, 0.2, 0.15, "sawtooth");
  }

  function playCheckpointSound(game) {
    playTone(game, 940, 0.08, 0.1, "triangle");
    playTone(game, 1320, 0.09, 0.09, "triangle");
  }

  function playPickupSound(game) {
    playTone(game, 700, 0.08, 0.09, "sine");
    playTone(game, 980, 0.08, 0.08, "sine");
  }

  function playShockSound(game) {
    playSweep(game, 1800, 280, 0.18, 0.12, "square");
  }

  function playRespawnSound(game) {
    playSweep(game, 220, 700, 0.24, 0.11, "triangle");
  }

  function playExplosionSound(game) {
    // Layer 1: deep bass boom
    playTone(game, 48, 0.35, 0.22, "sine");
    playTone(game, 60, 0.28, 0.18, "triangle");
    // Layer 2: mid-range crack
    playSweep(game, 650, 90, 0.22, 0.2, "square");
    playSweep(game, 900, 140, 0.18, 0.14, "sawtooth");
    // Layer 3: high crackle/sizzle
    playSweep(game, 2200, 400, 0.12, 0.09, "square");
    playSweep(game, 1600, 200, 0.15, 0.08, "triangle");
  }


  function playStartSound(game) {
    playTone(game, 520, 0.11, 0.09, "square");
    setTimeout(() => playTone(game, 720, 0.13, 0.1, "square"), 110);
  }

  function playFinishSound(game) {
    playTone(game, 460, 0.18, 0.11, "triangle");
    setTimeout(() => playTone(game, 680, 0.22, 0.12, "triangle"), 120);
  }

  return {
    ensureAudio,
    updateParticles,
    spawnBurst,
    updateAudio,
    playPunchSound,
    playHitSound,
    playBoostSound,
    playCheckpointSound,
    playPickupSound,
    playShockSound,
    playExplosionSound,
    playRespawnSound,
    playStartSound,
    playFinishSound,
  };
}
