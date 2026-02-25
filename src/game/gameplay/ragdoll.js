import * as THREE from "three";
import { GRAVITY } from "../config.js";

// [MODULE] ragdoll: Custom lightweight Verlet physics for rider crashes
// Used because the base game does not use a physics engine like Cannon.js
// This creates a series of point masses connected by distance constraints

export class RagdollSystem {
    constructor(racer, scene) {
        this.racer = racer;
        this.scene = scene;
        this.active = false;
        this.nodes = [];
        this.constraints = [];
        this.activeTime = 0;

        // We only need a few key nodes to simulate a tumbling body
        this.nodeMap = {
            head: null,
            torso: null,
            pelvis: null,
            leftHand: null,
            rightHand: null,
            leftFoot: null,
            rightFoot: null
        };
    }

    activate(initialVelocity) {
        this.active = true;
        this.activeTime = 0;
        this.nodes = [];
        this.constraints = [];

        // 1. Detach rider from bike visually to simulate falling off
        // Note: In Three.js, to keep global transform we must attach to scene
        const riderRoot = this.racer.riderRoot;
        const bodyWorldPos = new THREE.Vector3();
        riderRoot.getWorldPosition(bodyWorldPos);

        // Instead of actually re-parenting (which might break the procedural rig resets later),
        // we take direct control of the rig rotations and global positions of the nodes.

        this._createNode("head", this.racer.rig.headPivot, 0.5, initialVelocity);
        this._createNode("torso", this.racer.rig.spinePivot, 1.2, initialVelocity);
        this._createNode("pelvis", riderRoot, 1.5, initialVelocity); // Root of the rider
        this._createNode("leftHand", this.racer.rig.leftWrist, 0.3, initialVelocity);
        this._createNode("rightHand", this.racer.rig.rightWrist, 0.3, initialVelocity);
        this._createNode("leftFoot", this.racer.rig.leftAnkle, 0.4, initialVelocity);
        this._createNode("rightFoot", this.racer.rig.rightAnkle, 0.4, initialVelocity);

        // Spine
        this._addConstraint("head", "torso", 0.3);
        this._addConstraint("torso", "pelvis", 0.4);

        // Arms (simplified distance to torso instead of full elbow chain to save perf)
        this._addConstraint("torso", "leftHand", 0.6);
        this._addConstraint("torso", "rightHand", 0.6);

        // Legs 
        this._addConstraint("pelvis", "leftFoot", 0.7);
        this._addConstraint("pelvis", "rightFoot", 0.7);

        // To prevent total collapse, add some cross constraints
        this._addConstraint("leftHand", "rightHand", 0.5, true); // soft
        this._addConstraint("leftFoot", "rightFoot", 0.4, true); // soft
    }

    deactivate() {
        this.active = false;

        // Snap riderRoot back onto the bike so the rider isn't floating in space
        this.racer.riderRoot.position.set(0, 1.12, 0.15);

        // Reset all rig bone rotations that _applyToRig / lookAt may have scrambled
        const rig = this.racer.rig;
        const zero = { x: 0, y: 0, z: 0 };
        for (const boneName of [
            'spinePivot', 'neckPivot', 'headPivot',
            'leftShoulder', 'leftElbow', 'leftWrist',
            'rightShoulder', 'rightElbow', 'rightWrist',
            'leftHip', 'leftKnee', 'leftAnkle',
            'rightHip', 'rightKnee', 'rightAnkle',
        ]) {
            if (rig[boneName]) rig[boneName].rotation.set(0, 0, 0);
        }

        this.nodes = [];
        this.constraints = [];
    }


    update(dt, level) {
        if (!this.active) return;
        this.activeTime += dt;

        if (this.racer.knockdownTimer <= 0) { // Sync tumble time with logical knockdown timer
            this.deactivate();
            return;
        }

        // 1. Verlet Integration
        for (const node of this.nodes) {
            // Add gravity
            node.acc.y -= GRAVITY;

            // Verlet step
            const tempX = node.pos.x;
            const tempY = node.pos.y;
            const tempZ = node.pos.z;

            node.pos.x += (node.pos.x - node.oldPos.x) * 0.98 + node.acc.x * dt * dt;
            node.pos.y += (node.pos.y - node.oldPos.y) * 0.98 + node.acc.y * dt * dt;
            node.pos.z += (node.pos.z - node.oldPos.z) * 0.98 + node.acc.z * dt * dt;

            node.oldPos.set(tempX, tempY, tempZ);
            node.acc.set(0, 0, 0); // Reset forces

            // Ground Collision
            const groundY = level.heightFn(node.pos.x, node.pos.z);
            if (node.pos.y < groundY + 0.1) {
                node.pos.y = groundY + 0.1;

                // Friction / Bounce
                const vx = node.pos.x - node.oldPos.x;
                const vz = node.pos.z - node.oldPos.z;

                node.oldPos.x += vx * 0.2; // 80% friction loss
                node.oldPos.z += vz * 0.2;
                node.oldPos.y = node.pos.y + (tempY - node.pos.y) * 0.3; // Small bounce
            }
        }

        // 2. Solve Constraints (Iterate a few times for stability)
        for (let i = 0; i < 3; i++) {
            for (const c of this.constraints) {
                const dx = c.n2.pos.x - c.n1.pos.x;
                const dy = c.n2.pos.y - c.n1.pos.y;
                const dz = c.n2.pos.z - c.n1.pos.z;
                const dist = Math.hypot(dx, dy, dz);
                if (dist < 0.001) continue;

                const diff = (dist - c.length) / dist;
                const adjustX = dx * 0.5 * diff;
                const adjustY = dy * 0.5 * diff;
                const adjustZ = dz * 0.5 * diff;

                if (!c.soft || dist > c.length) {
                    c.n1.pos.x += adjustX;
                    c.n1.pos.y += adjustY;
                    c.n1.pos.z += adjustZ;

                    c.n2.pos.x -= adjustX;
                    c.n2.pos.y -= adjustY;
                    c.n2.pos.z -= adjustZ;
                }
            }
        }

        // 3. Apply results back to visual bones
        this._applyToRig();
    }

    _createNode(id, threeObj, mass, initialVelocity) {
        const worldPos = new THREE.Vector3();
        threeObj.getWorldPosition(worldPos);

        // Randomize velocity slightly so the body tumbles
        const scatter = 3.0;
        const v = initialVelocity.clone().add(new THREE.Vector3(
            (Math.random() - 0.5) * scatter,
            (Math.random() - 0.1) * scatter, // bias UP slightly
            (Math.random() - 0.5) * scatter
        ));

        const node = {
            id,
            obj: threeObj,
            mass,
            pos: worldPos.clone(),
            oldPos: worldPos.clone().sub(v.multiplyScalar(1 / 60)),
            acc: new THREE.Vector3()
        };
        this.nodeMap[id] = node;
        this.nodes.push(node);
    }

    _addConstraint(id1, id2, length, soft = false) {
        this.constraints.push({
            n1: this.nodeMap[id1],
            n2: this.nodeMap[id2],
            length,
            soft
        });
    }

    _applyToRig() {
        // For the core root, move it relative to the bike position
        // In Three.js, if rider is child of alignRoot, we must map world -> local
        const pelvis = this.nodeMap.pelvis;
        const localPelvis = this.racer.alignRoot.worldToLocal(pelvis.pos.clone());
        this.racer.riderRoot.position.copy(localPelvis);

        // Procedural limb twisting based on hand/foot positions relative to torso
        // This is highly simplified since it's just a visual effect
        const tPos = this.nodeMap.torso.pos;
        const lhPos = this.nodeMap.leftHand.pos;

        // Calculate a rough lookAt vector for the shoulder to point to the hand
        this.racer.rig.leftShoulder.lookAt(lhPos);
        this.racer.rig.rightShoulder.lookAt(this.nodeMap.rightHand.pos);
        this.racer.rig.spinePivot.lookAt(this.nodeMap.head.pos);
    }
}
