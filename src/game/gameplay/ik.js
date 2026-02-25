import * as THREE from "three";

// [MODULE] ik: Lightweight procedural Inverse Kinematics for Two-Bone chains (arms/legs).
// Used to perfectly snap the rider's hands to the physical handlebars.

const tempVec = new THREE.Vector3();
const tempTargetLocal = new THREE.Vector3();
const tempDir = new THREE.Vector3();

/**
 * A simplified heuristic solver tailored to the specific rig structure of the racer model.
 * The racer's arms are capsules rotating around local X/Z.
 * 
 * @param {THREE.Object3D} rootJoint - Shoulder
 * @param {THREE.Object3D} midJoint - Elbow
 * @param {THREE.Object3D} effectorJoint - Wrist
 * @param {THREE.Vector3} targetWorldPos - Global target (grip)
 * @param {number} boneL1 - Length of upper bone
 * @param {number} boneL2 - Length of lower bone
 * @param {number} side - 1 for right, -1 for left
 */
export function solveTwoBoneIK(rootJoint, midJoint, effectorJoint, targetWorldPos, boneL1, boneL2, side) {
    // Note: The previous mathematical IK failed because the procedural cylinders in Three.js
    // do not have standard strictly-aligned +Y forward bones like standard GLTF rigs.
    // Instead of fighting global coordinate space, we will use a heuristic local-space approach
    // that overrides the shoulder and elbow rotations directly.

    // 1. Convert Target to Shoulder Local Space
    rootJoint.parent.updateMatrixWorld(true);
    tempTargetLocal.copy(targetWorldPos);
    rootJoint.parent.worldToLocal(tempTargetLocal); // Target relative to spine pivot

    // The shoulder is at rootJoint.position (in spine space)
    tempDir.copy(tempTargetLocal).sub(rootJoint.position);
    let dist = tempDir.length();

    // Prevent over-reach
    const maxReach = boneL1 + boneL2 - 0.02;
    if (dist > maxReach) {
        dist = maxReach;
    }

    // 2. Law of Cosines (for the elbow bend)
    // We assume the elbow only bends on one localized axis (local X down/back)
    const sqDist = dist * dist;
    const sqL1 = boneL1 * boneL1;
    const sqL2 = boneL2 * boneL2;

    // Angle at elbow
    let cosBeta = (sqL1 + sqL2 - sqDist) / (2 * boneL1 * boneL2);
    cosBeta = THREE.MathUtils.clamp(cosBeta, -1, 1);
    const beta = Math.acos(cosBeta);

    // Bend the elbow. The procedural rig bends elbows by making their X rotation negative.
    // beta is the interior angle. A completely straight arm has rotation 0 (beta = PI).
    const elbowBend = -(Math.PI - beta);
    midJoint.rotation.set(elbowBend, 0, side * 0.05);

    // 3. Aim the Shoulder
    // First, point the shoulder directly at the target in local space.
    // The procedural arm initially points "down" (local -Y).
    const yaw = Math.atan2(tempDir.x, tempDir.z);

    // Project length onto YZ plane to find pitch
    const xzLen = Math.hypot(tempDir.x, tempDir.z);
    const pitch = Math.atan2(xzLen, -tempDir.y); // Negative Y because arm points down

    // The shoulder needs to pitch UP by alpha to compensate for the elbow bend
    let cosAlpha = (sqDist + sqL1 - sqL2) / (2 * dist * boneL1);
    cosAlpha = THREE.MathUtils.clamp(cosAlpha, -1, 1);
    const alpha = Math.acos(cosAlpha);

    // Apply rotations
    // The procedural rig uses Euler(X, Y, Z) where X is pitch and Z is roll (side to side).
    // We blend the aiming pitch with the IK alpha compensation.
    rootJoint.rotation.x = pitch - alpha;

    // Smoothly apply yaw (bringing arm inwards toward center)
    // The bars are in front, so arm swings forward and slightly to the center
    rootJoint.rotation.z = side * (0.15 + (1.0 - (dist / maxReach)) * 0.2);
    rootJoint.rotation.y = yaw * 0.5;

    // 4. Wrist lock (handled natively in entities.js)
}
