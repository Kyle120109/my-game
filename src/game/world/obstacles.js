/**
 * [MODULE] obstacles: Utility for registering oriented box colliders.
 */

/**
 * Pushes a new oriented bounding box into the game's physics obstacle array.
 * @param {Object} game - Global game state.
 * @param {Object} options - Collider parameters (position, orientation, extents, crashWeight, type).
 */
export function pushBoxObstacle(game, options) {
  game.obstacles.push({
    shape: "box",
    x: options.x,
    y: options.y,
    z: options.z,
    right: options.right.clone(),
    forward: options.forward.clone(),
    halfWidth: options.halfWidth,
    halfLength: options.halfLength,
    halfHeight: options.halfHeight,
    crashWeight: options.crashWeight ?? 1.2,
    type: options.type ?? "edge",
  });
}

