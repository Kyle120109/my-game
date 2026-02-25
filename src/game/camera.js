import * as THREE from "three";
import { surfaceNormal, samplePath, forwardFromHeading, horizontalSpeed, damp } from "./levels.js";

// [MODULE] camera: 玩家相机 + 菜单巡航相机。

export function createCameraSystem({ settings }) {
  const tempVec3A = new THREE.Vector3();
  const tempVec3B = new THREE.Vector3();
  const tempVec3C = new THREE.Vector3();
  const tempVec3D = new THREE.Vector3();
  const tempVec3E = new THREE.Vector3();
  const smoothedFollowForward = new THREE.Vector3(0, 0, 1);

  function clampCameraAboveTerrain(game, clearance) {
    if (!game.activeLevel) return;
    const floor = game.activeLevel.heightFn(game.camera.position.x, game.camera.position.z) + clearance;
    if (game.camera.position.y < floor) game.camera.position.y = floor;
  }

  const tempPlayerPos = new THREE.Vector3();

  function updatePlayerCamera(game, dt) {
    if (!game.player || !game.player.riderRoot) return;

    game.player.riderRoot.getWorldPosition(tempPlayerPos);

    const headingForward = forwardFromHeading(game.player.heading);
    const planarVelocity = tempVec3D.set(game.player.velocity.x, 0, game.player.velocity.z);
    const speed = horizontalSpeed(game.player.velocity);
    const velocityDir = tempVec3E;
    if (planarVelocity.lengthSq() > 0.0001) velocityDir.copy(planarVelocity).normalize();
    else velocityDir.copy(headingForward);
    const signedSpeed = Number.isFinite(game.player.signedForwardSpeed)
      ? game.player.signedForwardSpeed
      : planarVelocity.dot(headingForward);
    const reverseBlend = THREE.MathUtils.clamp((-signedSpeed - 0.2) / 3.2, 0, 1);
    const velocityWeight = speed > 2.5 ? (1 - reverseBlend) * 0.58 : 0;
    const desiredForward = tempVec3C
      .copy(headingForward)
      .multiplyScalar(1 - velocityWeight)
      .addScaledVector(velocityDir, velocityWeight);
    if (desiredForward.lengthSq() < 0.0001) desiredForward.copy(headingForward);
    else desiredForward.normalize();
    smoothedFollowForward.lerp(desiredForward, 1 - Math.exp(-dt * (reverseBlend > 0.15 ? 12 : 8)));
    if (smoothedFollowForward.lengthSq() < 0.0001) smoothedFollowForward.copy(desiredForward);
    smoothedFollowForward.normalize();

    const normal = surfaceNormal(game.activeLevel, tempPlayerPos.x, tempPlayerPos.z);
    const right = tempVec3A.crossVectors(normal, smoothedFollowForward).normalize();
    const followDist = 7.8 + Math.min(speed * 0.12, 5.2);
    const followHeight = 3.5 + Math.min(speed * 0.05, 3.4);

    tempVec3B
      .copy(tempPlayerPos)
      .addScaledVector(smoothedFollowForward, -followDist)
      .addScaledVector(right, game.player.steer * -1.05)
      .addScaledVector(normal, followHeight);

    let cameraFrontDot = -1;
    tempVec3D.copy(game.camera.position).sub(tempPlayerPos).setY(0);
    if (tempVec3D.lengthSq() > 0.0001) {
      tempVec3D.normalize();
      cameraFrontDot = tempVec3D.dot(headingForward);
    }
    const followRate = reverseBlend > 0.2 ? (cameraFrontDot > 0.2 ? 20 : 12) : 7;
    game.camera.position.lerp(tempVec3B, 1 - Math.exp(-dt * followRate));
    tempVec3C.copy(tempPlayerPos).addScaledVector(smoothedFollowForward, 12).addScaledVector(normal, 1.8);

    if (settings.shake && game.cameraShake > 0.001) {
      const shakeAmp = game.cameraShake * 0.28;
      game.camera.position.x += (Math.random() - 0.5) * shakeAmp;
      game.camera.position.y += (Math.random() - 0.5) * shakeAmp;
      game.camera.position.z += (Math.random() - 0.5) * shakeAmp;
      game.cameraShake *= Math.exp(-dt * 6.5);
    }

    clampCameraAboveTerrain(game, 2.4);
    game.camera.lookAt(tempVec3C);
    const targetFov = settings.fov + Math.min(speed * 0.45, 18);
    game.camera.fov = damp(game.camera.fov, targetFov, 4.5, dt);
    game.camera.updateProjectionMatrix();
  }

  function updateMenuCamera(game, dt) {
    game.menuOrbit += dt * 0.2;
    const focus = samplePath(game.activeLevel, game.simTime * 22).point;
    const radius = game.activeLevel.id === "ring" ? 150 : 120;

    tempVec3A.set(
      Math.cos(game.menuOrbit) * radius,
      36 + Math.sin(game.menuOrbit * 1.6) * 8,
      Math.sin(game.menuOrbit) * radius
    );

    tempVec3A.add(focus);
    game.camera.position.lerp(tempVec3A, 1 - Math.exp(-dt * 2.1));
    clampCameraAboveTerrain(game, 4.2);
    game.camera.lookAt(tempVec3B.copy(focus).add(new THREE.Vector3(0, 8, 0)));
    game.camera.fov = damp(game.camera.fov, settings.fov, 2.4, dt);
    game.camera.updateProjectionMatrix();
  }

  return {
    updatePlayerCamera,
    updateMenuCamera,
  };
}
