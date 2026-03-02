import { WORLD_UP } from "../config.js";

/**
 * [MODULE] world/math: Shared spatial calculations for world generation.
 */

/**
 * Constructs a robust 3D local coordinate frame (Right, Up, Forward) given a 
 * forward tangent and a desired Up hint (like the terrain normal).
 * Ensures the vectors remain orthogonal even if the underlying spline twists.
 * 
 * @param {THREE.Vector3} forwardHint - The desired forward tangent direction.
 * @param {THREE.Vector3} upHint - The desired upward orientation (usually terrain normal).
 * @param {THREE.Vector3} rightOut - The target vector to receive the computed Right axis.
 * @param {THREE.Vector3} upOut - The target vector to receive the computed Up axis.
 * @param {THREE.Vector3} forwardOut - The target vector to receive the computed Forward axis.
 */
export function buildOrthonormalFrame(forwardHint, upHint, rightOut, upOut, forwardOut) {
  forwardOut.copy(forwardHint);
  if (forwardOut.lengthSq() < 0.0001) forwardOut.set(0, 0, 1);
  forwardOut.normalize();

  upOut.copy(upHint);
  if (upOut.lengthSq() < 0.0001) upOut.copy(WORLD_UP);
  upOut.normalize();
  upOut.addScaledVector(forwardOut, -upOut.dot(forwardOut));

  if (upOut.lengthSq() < 0.0001) {
    upOut.set(1, 0, 0);
    upOut.addScaledVector(forwardOut, -upOut.dot(forwardOut));
  }

  upOut.normalize();
  rightOut.crossVectors(upOut, forwardOut).normalize();
  upOut.crossVectors(forwardOut, rightOut).normalize();
}

