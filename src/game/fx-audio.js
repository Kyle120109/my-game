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
    // --- JETPACK CONTINUOUS EMISSION & GLOW ---
    if (game.state === STATE.RACING && game.racers) {
      for (const racer of game.racers) {
        if (racer.rig && racer.rig.jetpackGlowMat) {
          const targetOpacity = (racer.jetpackActive && racer.jetpackFuel > 0) ? 0.9 : 0.0;
          racer.rig.jetpackGlowMat.opacity = THREE.MathUtils.lerp(racer.rig.jetpackGlowMat.opacity, targetOpacity, dt * 10);
        }

        if (racer.jetpackFuel > 0 && racer.jetpackActive && racer.isPlayer) {
          const nL = new THREE.Vector3();
          const nR = new THREE.Vector3();
          if (racer.rig.jetpackNozzleL && racer.rig.jetpackNozzleR) {
            racer.rig.jetpackNozzleL.getWorldPosition(nL);
            racer.rig.jetpackNozzleR.getWorldPosition(nR);

            // We want particles to fire *backwards* opposite to racer's heading
            const throwForward = new THREE.Vector3(Math.sin(racer.heading), 0, Math.cos(racer.heading));
            // Add air pitch for Y thrust
            throwForward.y = Math.sin(-racer.airPitch);
            const hz = Math.cos(-racer.airPitch);
            throwForward.x *= hz;
            throwForward.z *= hz;
            throwForward.normalize();

            // Blast the particles backwards at high speed
            const bSpd = -22.0;
            const bSpr = 0.15; // Much tighter spread for a focused jet flame

            const emitJet = (pos, color, scale, ls) => {
              for (let i = 0; i < scale; i++) {
                const size = 0.05 + Math.random() * 0.05;
                const mesh = new THREE.Mesh(new THREE.SphereGeometry(size, 8, 8), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9 }));
                mesh.position.copy(pos).add(new THREE.Vector3((Math.random() - 0.5) * bSpr, (Math.random() - 0.5) * bSpr, (Math.random() - 0.5) * bSpr));

                // Tight directional velocity
                const vel = new THREE.Vector3(throwForward.x * bSpd + (Math.random() - 0.5), throwForward.y * bSpd + (Math.random() - 0.5), throwForward.z * bSpd + (Math.random() - 0.5));
                game.fxRoot.add(mesh);
                game.particles.push({ mesh, vel, life: ls * (0.5 + Math.random() * 0.5), maxLife: ls, jetpack: true, initialSize: size });
              }
            };

            // White/cyan core, blue outer
            if (Math.random() < 0.9) emitJet(nL, 0xffffff, 2, 0.15);
            if (Math.random() < 0.9) emitJet(nR, 0xffffff, 2, 0.15);
            if (Math.random() < 0.7) emitJet(nL, 0x00ffff, 4, 0.25);
            if (Math.random() < 0.7) emitJet(nR, 0x00ffff, 4, 0.25);
            if (Math.random() < 0.5) emitJet(nL, 0x0055ff, 3, 0.4);
            if (Math.random() < 0.5) emitJet(nR, 0x0055ff, 3, 0.4);

            if (game.audio && game.audio.ctx) {
              const now = game.audio.ctx.currentTime;
              if (!racer.lastJetSound || now - racer.lastJetSound > 0.04) {
                // Trigger a continuous noise rush (we use the turbo impact as a roaring loop)
                playUseTurboSound(game);
                racer.lastJetSound = now;
              }
            }
          }
        }
      }
    }

    for (let i = game.particles.length - 1; i >= 0; i -= 1) {
      const p = game.particles[i];
      p.life -= dt;
      if (p.life <= 0) {
        game.fxRoot.remove(p.mesh);
        game.particles.splice(i, 1);
        continue;
      }

      if (!p.jetpack) p.vel.y -= 8.4 * dt; // Gravity for normal particles, jetpack particles shoot straight
      p.mesh.position.addScaledVector(p.vel, dt);

      if (p.jetpack) {
        // Expand and fade fast
        const scale = 1.0 + (1.0 - p.life / p.maxLife) * 2.5;
        p.mesh.scale.set(scale, scale, scale);
        p.mesh.material.opacity = Math.pow(p.life / p.maxLife, 1.5);
      } else {
        p.mesh.material.opacity = p.life / p.maxLife;
      }
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

  function playCheckpointSound(game) {
    // Crisp, clear "Ding" like a coin or bell
    playTone(game, 1200, 0.3, 0.25, "sine");
    setTimeout(() => playTone(game, 1800, 0.4, 0.15, "sine"), 40);
  }

  function playRampJumpSound(game) {
    // A dramatic, airy "whoosh-up"
    playSweep(game, 200, 800, 0.45, 0.15, "triangle");
    playTone(game, 600, 0.3, 0.08, "sine");
  }

  function playShieldAbsorbSound(game) {
    // A heavy crystalline deflection chime
    playTone(game, 1800, 0.05, 0.2, "sine");
    setTimeout(() => playTone(game, 1400, 0.08, 0.15, "triangle"), 30);
    setTimeout(() => playTone(game, 800, 0.2, 0.12, "sine"), 80);
  }

  function playObstacleBumpSound(game, hitSpeed) {
    // A dull thud scaling with speed
    const intensity = THREE.MathUtils.clamp(Math.abs(hitSpeed) * 0.02, 0.05, 0.25);
    playSweep(game, 160, 30, 0.15, intensity, "square");
    playTone(game, 60, 0.12, intensity * 0.9, "triangle");
  }

  // === EXTREMELY DISTINCT PICKUP SOUNDS ===
  function playPickupTurboSound(game) {
    // Fast double rev (vroom vroom)
    playSweep(game, 300, 900, 0.1, 0.15, "sawtooth");
    setTimeout(() => playSweep(game, 300, 1100, 0.1, 0.15, "sawtooth"), 120);
  }
  function playPickupBashSound(game) {
    // Heavy, low double-thud
    playTone(game, 110, 0.08, 0.2, "square");
    setTimeout(() => playTone(game, 90, 0.1, 0.2, "square"), 100);
  }
  function playPickupShockSound(game) {
    // Rapid, jittery static sparks
    playTone(game, 2500, 0.03, 0.15, "square");
    setTimeout(() => playTone(game, 1800, 0.03, 0.15, "sawtooth"), 40);
    setTimeout(() => playTone(game, 3200, 0.03, 0.15, "square"), 80);
    setTimeout(() => playTone(game, 1400, 0.05, 0.15, "sawtooth"), 120);
  }
  function playPickupShieldSound(game) {
    // Harmonic, consonant chord (C major eq)
    playTone(game, 523, 0.2, 0.12, "sine"); // C5
    playTone(game, 659, 0.2, 0.10, "sine"); // E5
    playTone(game, 783, 0.2, 0.08, "sine"); // G5
  }
  function playPickupTrapSound(game) {
    // Mechanical crossing clank
    playSweep(game, 800, 300, 0.08, 0.15, "square");
    setTimeout(() => playSweep(game, 200, 600, 0.08, 0.15, "triangle"), 40);
  }
  function playPickupBananaSound(game) {
    // Classic goofy sliding "boing"
    playSweep(game, 200, 1200, 0.2, 0.15, "sine");
  }
  function playPickupBombSound(game) {
    // Ticking fuse warning
    playTone(game, 3000, 0.03, 0.1, "square");
    setTimeout(() => playTone(game, 3000, 0.03, 0.1, "square"), 150);
    setTimeout(() => playTone(game, 3000, 0.03, 0.1, "square"), 300);
  }

  // === EXTREMELY DISTINCT USAGE SOUNDS ===
  function playUseTurboSound(game) {
    // Massive, tearing jet engine roar
    playSweep(game, 150, 2000, 0.6, 0.25, "sawtooth");
    setTimeout(() => playSweep(game, 300, 1800, 0.5, 0.15, "square"), 100);
  }
  function playUseBashSound(game) {
    // Sucking wind-up into devastating bass strike
    playSweep(game, 80, 500, 0.3, 0.15, "square");
    playSweep(game, 80, 500, 0.3, 0.15, "triangle");
    setTimeout(() => playTone(game, 60, 0.25, 0.3, "square"), 300);
  }
  function playUseShockSound(game) {
    // Terrifying global thunder/fry down-sweep
    playSweep(game, 3500, 200, 0.8, 0.2, "square");
    setTimeout(() => playSweep(game, 2800, 150, 0.6, 0.18, "sawtooth"), 150);
  }
  function playUseShieldSound(game) {
    // Ascending harmonic power-up
    playSweep(game, 300, 700, 0.3, 0.15, "sine");
    setTimeout(() => playSweep(game, 400, 800, 0.3, 0.12, "sine"), 100);
    setTimeout(() => playSweep(game, 500, 900, 0.3, 0.1, "sine"), 200);
  }
  function playUseTrapSound(game) {
    // Heavy trap setting into dirt/road
    playSweep(game, 150, 40, 0.15, 0.2, "triangle");
    playTone(game, 90, 0.1, 0.18, "square");
  }
  function playUseBananaSound(game) {
    // Comical plunging drop
    playSweep(game, 1000, 100, 0.3, 0.18, "sine");
  }
  function playUseBombSound(game) {
    // Throwing mortar whistle
    playSweep(game, 1500, 400, 0.4, 0.15, "triangle");
    setTimeout(() => playTone(game, 300, 0.1, 0.1, "sine"), 400); // Thud on land
  }

  // === EXTREMELY DISTINCT TRIGGER/HIT SOUNDS ===
  function playHitTrapSound(game) {
    // Vicious bone/metal crunch
    playSweep(game, 900, 100, 0.15, 0.2, "sawtooth");
    playSweep(game, 600, 50, 0.2, 0.18, "square");
    setTimeout(() => playTone(game, 80, 0.15, 0.2, "triangle"), 50);
  }
  function playHitBananaSound(game) {
    // Crazy wobble slipping out of control
    playSweep(game, 800, 400, 0.1, 0.18, "sine");
    setTimeout(() => playSweep(game, 400, 900, 0.1, 0.18, "sine"), 100);
    setTimeout(() => playSweep(game, 900, 300, 0.15, 0.18, "sine"), 200);
  }
  function playHitBashSound(game) {
    // Pure blunt force trauma
    playTone(game, 50, 0.2, 0.3, "square");
    playSweep(game, 300, 50, 0.15, 0.2, "sawtooth");
  }
  function playHitShockSound(game) {
    // Harsh static continuous zap
    for (let i = 0; i < 6; i++) {
      setTimeout(() => playSweep(game, 2400 - i * 100, 400, 0.08, 0.15, "square"), i * 60);
    }
  }

  // === MELEE SOUNDS ===
  function playPunchSwingSound(game) {
    // Fast, sharp whoosh
    playSweep(game, 300, 600, 0.1, 0.08, "triangle");
  }
  function playPunchHitSound(game) {
    // Sharp crack combined with thud
    playSweep(game, 800, 100, 0.1, 0.18, "square");
    playTone(game, 80, 0.12, 0.2, "triangle");
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
