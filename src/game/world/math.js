import { WORLD_UP } from "../config.js";

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

