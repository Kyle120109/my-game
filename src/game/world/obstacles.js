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

