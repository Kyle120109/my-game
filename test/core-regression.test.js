import assert from "node:assert/strict";
import test from "node:test";

import { ITEM_TYPES, createAudioState, formatRaceTime, itemName } from "../src/game/config.js";
import {
  LEVELS,
  createRng,
  damp,
  distanceToTrack,
  forwardProgressDistance,
  projectProgress,
  projectProgressNear,
  samplePath,
  shortestAngle,
  signedProgressDelta,
} from "../src/game/levels.js";

test("item names map all known types and fallback unknown", () => {
  const unknownName = itemName("not-an-item");
  for (const type of ITEM_TYPES) {
    assert.notEqual(itemName(type), unknownName);
  }
  assert.equal(itemName("another-invalid-item"), unknownName);
});

test("time format is clamped and zero-padded", () => {
  assert.equal(formatRaceTime(-1), "00:00.00");
  assert.equal(formatRaceTime(9.123), "00:09.12");
  assert.equal(formatRaceTime(125.789), "02:05.78");
});

test("audio state starts with null handles", () => {
  const audioState = createAudioState();
  assert.deepEqual(audioState, {
    ctx: null,
    master: null,
    windGain: null,
    windFilter: null,
    windCurrent: 0,
    windTarget: 0,
  });
});

test("rng is deterministic for same seed", () => {
  const a = createRng(123);
  const b = createRng(123);
  const first = [a(), a(), a(), a(), a()];
  const second = [b(), b(), b(), b(), b()];
  assert.deepEqual(first, second);
});

test("prepared levels expose finite track math", () => {
  const ids = new Set();
  for (const level of LEVELS) {
    assert.ok(level.id);
    assert.ok(!ids.has(level.id), `duplicate level id: ${level.id}`);
    ids.add(level.id);

    assert.ok(level.totalLength > 0, `non-positive totalLength on ${level.id}`);
    assert.equal(level.segmentLengths.length, level.loop ? level.pathPoints.length : level.pathPoints.length - 1);

    const sample = samplePath(level, level.totalLength * 0.35);
    assert.ok(Number.isFinite(sample.point.x));
    assert.ok(Number.isFinite(sample.point.y));
    assert.ok(Number.isFinite(sample.point.z));

    const projected = projectProgress(level, sample.point.x, sample.point.z);
    assert.ok(Number.isFinite(projected.s));
    assert.ok(projected.distSq >= 0);

    const localProjection = projectProgressNear(level, sample.point.x, sample.point.z, sample.s, 4);
    assert.ok(Number.isFinite(localProjection.s));
    assert.ok(localProjection.distSq <= projected.distSq + 1e-6);

    assert.ok(distanceToTrack(level, sample.point.x, sample.point.z) < 0.05);
  }
});

test("level content definitions stay within expected ranges", () => {
  for (const level of LEVELS) {
    const checkpoints = level.checkpoints ?? [];
    for (const index of checkpoints) {
      assert.ok(Number.isInteger(index), `checkpoint index not integer in ${level.id}`);
      assert.ok(index >= 0 && index < level.path.length, `checkpoint index out of bounds in ${level.id}`);
    }

    for (const point of level.path) {
      const [x, z] = point;
      assert.ok(x >= level.bounds.minX && x <= level.bounds.maxX, `path x out of bounds in ${level.id}`);
      assert.ok(z >= level.bounds.minZ && z <= level.bounds.maxZ, `path z out of bounds in ${level.id}`);
      assert.ok(Number.isFinite(level.heightFn(x, z)), `heightFn returned non-finite value in ${level.id}`);
    }

    for (const segment of [...(level.ramps ?? []), ...(level.boosts ?? []), ...(level.items ?? [])]) {
      assert.ok(segment.t >= 0 && segment.t <= 1, `segment t out of range in ${level.id}`);
    }
  }
});

test("progress helpers keep loop/non-loop semantics", () => {
  for (const level of LEVELS) {
    const from = level.totalLength * 0.9;
    const to = level.totalLength * 0.1;
    const signed = signedProgressDelta(level, from, to);
    const forward = forwardProgressDistance(level, from, to);

    if (level.loop) {
      assert.ok(signed > 0);
      assert.ok(signed < level.totalLength * 0.5);
      assert.ok(forward >= 0 && forward < level.totalLength);
    } else {
      assert.equal(signed, to - from);
      assert.equal(forward, to - from);
    }
  }
});

test("angle and damping helpers stay in expected ranges", () => {
  const d = shortestAngle(Math.PI * 1.5, 0);
  assert.ok(d >= -Math.PI && d <= Math.PI);
  assert.equal(damp(10, 10, 5, 0.1), 10);
  assert.ok(damp(0, 10, 4, 0.5) > 0);
});
