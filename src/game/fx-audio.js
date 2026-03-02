import * as THREE from "three";
import { STATE } from "./config.js";
import { damp, horizontalSpeed } from "./levels.js";

/**
 * Visual effects (particles) and WebAudio synthesizer system.
 * Handles procedural wind noise, impact sweeps, and beep tones without external sound files.
 */

/**
 * Initializes the audio and particle effects context.
 * Creates an empty audio state which will be 'ensured' (unlocked) upon user interaction.
 * @param {Object} deps - Dependencies.
 * @param {Object} deps.settings - Application settings for volume control.
 * @returns {Object} API for spawning particles and triggering synth events.
 */
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

    // Add dirt noise support
    const speed = horizontalSpeed(game.player.velocity);
    const speedVal = THREE.MathUtils.clamp(speed / 35, 0, 1);

    // Check if off-road
    const isOffRoad = game.player.trackDist > game.activeLevel.routeHalfWidth * 0.9 && game.player.grounded;

    game.audio.windTarget = game.state === STATE.RACING || game.state === STATE.FINISHED ? speedVal : 0;
    game.audio.windCurrent = damp(game.audio.windCurrent, game.audio.windTarget, 2.6, dt);

    const now = game.audio.ctx.currentTime;

    if (isOffRoad) {
      // Gritty, lower-frequency noise floor for dirt
      game.audio.windGain.gain.setTargetAtTime(game.audio.windCurrent * 0.45, now, 0.1);
      game.audio.windFilter.frequency.setTargetAtTime(180 + game.audio.windCurrent * 800, now, 0.08);
    } else {
      // Smooth high wind for asphalt
      game.audio.windGain.gain.setTargetAtTime(game.audio.windCurrent * 0.24, now, 0.1);
      game.audio.windFilter.frequency.setTargetAtTime(320 + game.audio.windCurrent * 1800, now, 0.08);
    }
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

  // Removed generic playHitSound, playBoostSound, playPickupSound, playPunchSound (will be replaced by granular ones)

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

  // === NEW DIVERSE INTERACTION SOUNDS ===

  function playRampJumpSound(game) {
    // A sweeping, airy sound distinct from the aggressive turbo boost
    playSweep(game, 150, 600, 0.35, 0.12, "triangle");
    playTone(game, 420, 0.2, 0.08, "sine");
  }

  function playShieldAbsorbSound(game) {
    // A crystalline/metallic chime for absorbing damage
    playTone(game, 1200, 0.05, 0.12, "sine");
    setTimeout(() => playTone(game, 1600, 0.08, 0.10, "sine"), 40);
    setTimeout(() => playTone(game, 2100, 0.15, 0.08, "triangle"), 90);
  }

  // === GRANULAR PICKUP SOUNDS ===
  function playPickupTurboSound(game) {
    playSweep(game, 400, 1200, 0.15, 0.1, "triangle");
  }
  function playPickupBashSound(game) {
    playTone(game, 180, 0.15, 0.12, "square");
  }
  function playPickupShockSound(game) {
    playTone(game, 1500, 0.05, 0.1, "sawtooth");
    setTimeout(() => playTone(game, 2000, 0.08, 0.1, "square"), 40);
  }
  function playPickupShieldSound(game) {
    playTone(game, 500, 0.1, 0.1, "sine");
    playTone(game, 800, 0.2, 0.1, "sine");
  }
  function playPickupTrapSound(game) {
    playSweep(game, 600, 300, 0.1, 0.1, "square");
  }
  function playPickupBananaSound(game) {
    playSweep(game, 300, 500, 0.12, 0.12, "sine");
  }
  function playPickupBombSound(game) {
    playTone(game, 300, 0.05, 0.1, "triangle");
    setTimeout(() => playTone(game, 300, 0.05, 0.1, "triangle"), 80);
  }

  // === GRANULAR USAGE SOUNDS ===
  function playUseTurboSound(game) {
    playSweep(game, 280, 1400, 0.3, 0.18, "sawtooth");
  }
  function playUseBashSound(game) {
    playSweep(game, 120, 450, 0.25, 0.18, "sawtooth");
    setTimeout(() => playTone(game, 280, 0.15, 0.15, "square"), 150);
  }
  function playUseShockSound(game) {
    playSweep(game, 2400, 800, 0.4, 0.18, "square");
  }
  function playUseShieldSound(game) {
    playSweep(game, 400, 1200, 0.2, 0.12, "sine");
  }
  function playUseTrapSound(game) {
    playSweep(game, 240, 90, 0.15, 0.15, "triangle");
    playTone(game, 120, 0.08, 0.1, "square");
  }
  function playUseBananaSound(game) {
    playSweep(game, 300, 150, 0.18, 0.14, "sine");
  }
  function playUseBombSound(game) {
    playSweep(game, 400, 150, 0.2, 0.16, "sawtooth");
  }

  // === GRANULAR TRIGGER/HIT SOUNDS ===
  function playHitTrapSound(game) {
    playSweep(game, 800, 200, 0.15, 0.16, "sawtooth");
    playTone(game, 120, 0.1, 0.12, "square");
    setTimeout(() => playSweep(game, 500, 100, 0.1, 0.12, "square"), 50);
  }
  function playHitBananaSound(game) {
    playSweep(game, 600, 200, 0.25, 0.15, "sine");
    setTimeout(() => playTone(game, 180, 0.1, 0.12, "triangle"), 150);
  }
  function playHitBashSound(game) {
    playSweep(game, 420, 90, 0.15, 0.2, "square");
    playTone(game, 80, 0.15, 0.18, "sawtooth");
  }
  function playHitShockSound(game) {
    playSweep(game, 1800, 280, 0.18, 0.14, "square");
    setTimeout(() => playTone(game, 600, 0.1, 0.1, "sawtooth"), 100);
  }

  // === MELEE SOUNDS ===
  function playPunchSwingSound(game) {
    playSweep(game, 220, 380, 0.12, 0.08, "triangle");
  }
  function playPunchHitSound(game) {
    playSweep(game, 380, 120, 0.1, 0.18, "square");
    playTone(game, 90, 0.1, 0.15, "triangle");
  }

  return {
    ensureAudio,
    updateParticles,
    spawnBurst,
    updateAudio,
    playShockSound,
    playExplosionSound,
    playRespawnSound,
    playStartSound,
    playFinishSound,
    playCheckpointSound,

    playRampJumpSound,
    playShieldAbsorbSound,
    playObstacleBumpSound,

    playPickupTurboSound,
    playPickupBashSound,
    playPickupShockSound,
    playPickupShieldSound,
    playPickupTrapSound,
    playPickupBananaSound,
    playPickupBombSound,

    playUseTurboSound,
    playUseBashSound,
    playUseShockSound,
    playUseShieldSound,
    playUseTrapSound,
    playUseBananaSound,
    playUseBombSound,

    playHitTrapSound,
    playHitBananaSound,
    playHitBashSound,
    playHitShockSound,

    playPunchSwingSound,
    playPunchHitSound,
  };
}
