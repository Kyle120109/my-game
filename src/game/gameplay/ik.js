import * as THREE from "three";

/**
 * Lightweight procedural Inverse Kinematics for Two-Bone chains (arms/legs).
 * Used exclusively to snap the procedural rider's hands perfectly to the 
 * mechanical constraints of the steering handlebars in real-time.
 */

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
export function solveTwoBoneIK(rootJoint, midJoint, effectorJoint, targetWorldPos, boneL1, boneL2, side, invertBend = false) {
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
    let cosBeta = (sqDist - sqL1 - sqL2) / (-2 * boneL1 * boneL2); // simplified rule of cosines
    cosBeta = THREE.MathUtils.clamp(cosBeta, -1, 1);
    const beta = Math.acos(cosBeta);

    // Bend the elbow. The procedural rig bends elbows by making their X rotation negative.
    // beta is the interior angle. A completely straight arm has rotation 0 (beta = PI).
    const elbowBend = invertBend ? (Math.PI - beta) : -(Math.PI - beta);
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

    // Apply true 3D spherical rotations. 
    // The previous math incorrectly had a positive pitch instead of negative, 
    // pointing the arm completely backwards away from the target!
    const aimPitch = -pitch;

    // Using YXZ order means it locally pitches (X), then yaws (Y), perfectly tracking the grip.
    rootJoint.rotation.order = 'YXZ';

    // 100% accurate Yaw!
    rootJoint.rotation.y = yaw;
    // Pitch with IK alpha compensation (corrected sign logic)
    rootJoint.rotation.x = invertBend ? (aimPitch - alpha) : (aimPitch + alpha);

    // Stabilize roll. We MUST keep Euler Z neutral initially, 
    // otherwise applying Z first rotates the aiming axis and entirely breaks the IK aim.
    rootJoint.rotation.z = 0;

    // Flare elbows natively without breaking wrist tracking.
    // By rotating the entire shoulder around the target vector (tempDir), 
    // the wrist stays perfectly in place while the elbow joint swings OUT!
    if (side !== 0) {
        // Only flare arms (invertBend = false) outwards (wide posture for mountain biking).
        const rollAngle = invertBend ? 0 : side * 0.55;
        if (rollAngle !== 0) {
            tempDir.normalize();
            const rollQuat = new THREE.Quaternion().setFromAxisAngle(tempDir, rollAngle);
            rootJoint.quaternion.premultiply(rollQuat);
        }
    }
    // 4. Wrist lock (handled natively in entities.js)
}
