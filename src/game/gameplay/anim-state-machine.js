import * as THREE from "three";
import { damp } from "../levels.js";

// [MODULE] anim-state-machine: Advanced layered animation system for Riders and Bikes.
// This is currently designed to drive the procedural THREE.Group rigs but is structured
// so that it can easily map outputs to a THREE.AnimationMixer or IK solver later.

export const ANIM_STATES = {
    IDLE_BALANCE: "idle_balance",
    START_PUSH: "start_push",
    PEDAL: "pedal",
    COAST: "coast",
    SPRINT: "sprint",
    BRAKE: "brake",
    AIR_NEUTRAL: "air_neutral",
    KNOCKDOWN: "knockdown",
    RECOVER: "recover",
};

export class AnimationStateMachine {
    constructor(racer) {
        this.racer = racer;
        this.currentState = ANIM_STATES.IDLE_BALANCE;
        this.stateTime = 0;

        // Blend Tree Weights (0 to 1)
        this.weights = {
            idle: 1,
            pedal: 0,
            coast: 0,
            sprint: 0,
            brake: 0,
            air: 0,
            knockdown: 0,
        };

        // Additive Layers
        this.lookAtTarget = new THREE.Vector3();
        this.lookAtWeight = 0;
        this.microSteerJitter = 0;

        // Rig Outputs (to be applied to the THREE.Group or IK targets)
        this.pose = {
            spinePitch: 0,
            spineYaw: 0,
            neckPitch: 0,
            headYaw: 0,
            headRoll: 0,
            armBasePitch: 0,
            legPower: 1,
            // IK targets offset (for future GLTF or procedural IK)
            pelvisYOffset: 0,
            leftFootZ: 0,
            rightFootZ: 0,
        };
    }

    update(dt, speed, isGrounded, steer, throttle, brake, isDown, recovering) {
        this.stateTime += dt;
        this._determineState(speed, isGrounded, steer, throttle, brake, isDown, recovering);
        this._updateWeights(dt);
        this._evaluateBlendTree(dt, speed, steer, brake, isDown, recovering);
        this._evaluateAdditiveLayers(dt, speed, steer);
    }

    _determineState(speed, isGrounded, steer, throttle, brake, isDown, recovering) {
        if (isDown) {
            this._transition(ANIM_STATES.KNOCKDOWN);
            return;
        }
        if (recovering) {
            this._transition(ANIM_STATES.RECOVER);
            return;
        }

        if (!isGrounded) {
            this._transition(ANIM_STATES.AIR_NEUTRAL);
            return;
        }

        if (brake > 0.1) {
            this._transition(ANIM_STATES.BRAKE);
            return;
        }

        if (speed < 0.5 && throttle < 0.1) {
            this._transition(ANIM_STATES.IDLE_BALANCE);
            return;
        }

        if (speed < 3.0 && throttle > 0.1) {
            this._transition(ANIM_STATES.START_PUSH);
            return;
        }

        if (throttle > 0.1 && speed < this.racer.baseTopSpeed * 0.95) {
            // Sprint when accelerating hard or near top speed? Let's use Sprint for boost/high throttle
            if (this.racer.boostTimer > 0 || (throttle > 0.8 && speed > 15)) {
                this._transition(ANIM_STATES.SPRINT);
            } else {
                this._transition(ANIM_STATES.PEDAL);
            }
            return;
        }

        this._transition(ANIM_STATES.COAST);
    }

    _transition(newState) {
        if (this.currentState !== newState) {
            this.currentState = newState;
            this.stateTime = 0;
        }
    }

    _updateWeights(dt) {
        const blendSpeed = 8.0; // Fast transitions
        const target = {
            idle: this.currentState === ANIM_STATES.IDLE_BALANCE ? 1 : 0,
            pedal: (this.currentState === ANIM_STATES.PEDAL || this.currentState === ANIM_STATES.START_PUSH) ? 1 : 0,
            coast: this.currentState === ANIM_STATES.COAST ? 1 : 0,
            sprint: this.currentState === ANIM_STATES.SPRINT ? 1 : 0,
            brake: this.currentState === ANIM_STATES.BRAKE ? 1 : 0,
            air: this.currentState === ANIM_STATES.AIR_NEUTRAL ? 1 : 0,
            knockdown: (this.currentState === ANIM_STATES.KNOCKDOWN || this.currentState === ANIM_STATES.RECOVER) ? 1 : 0,
        };

        this.weights.idle = damp(this.weights.idle, target.idle, blendSpeed, dt);
        this.weights.pedal = damp(this.weights.pedal, target.pedal, blendSpeed, dt);
        this.weights.coast = damp(this.weights.coast, target.coast, blendSpeed, dt);
        this.weights.sprint = damp(this.weights.sprint, target.sprint, blendSpeed, dt);
        this.weights.brake = damp(this.weights.brake, target.brake, blendSpeed, dt);
        this.weights.air = damp(this.weights.air, target.air, blendSpeed, dt);
        this.weights.knockdown = damp(this.weights.knockdown, target.knockdown, blendSpeed, dt);
    }

    _evaluateBlendTree(dt, speed, steer, brake, isDown, recovering) {
        // 1. Base Locomotion Posture
        // Idle Posture
        let targetSpinePitch = -0.1 * this.weights.idle;
        let targetArmBase = -1.0 * this.weights.idle;

        // Pedal/Coast Posture (Lean forward)
        targetSpinePitch += (-0.3 - speed * 0.005) * (this.weights.pedal + this.weights.coast);
        targetArmBase += (-1.08 + Math.abs(steer) * 0.2) * (this.weights.pedal + this.weights.coast);

        // Sprint Posture (Aggressive forward, out of saddle)
        targetSpinePitch += (-0.45) * this.weights.sprint;
        targetArmBase += (-1.2) * this.weights.sprint;
        let sprintPelvisOffset = 0.15 * this.weights.sprint; // Stand up

        // Brake Posture (Push back, arms straight)
        targetSpinePitch += (-0.1 + brake * 0.3) * this.weights.brake;
        targetArmBase += (-0.8 + brake * 0.4) * this.weights.brake;

        // Air Posture
        targetSpinePitch += (-0.25) * this.weights.air;
        targetArmBase += (-1.0) * this.weights.air;

        // Knockdown/Recover Posture
        if (this.weights.knockdown > 0) {
            const downBend = isDown ? 0.9 : recovering ? 0.42 : 0;
            targetSpinePitch += (-downBend) * this.weights.knockdown;
            targetArmBase += (-1.0) * this.weights.knockdown;
        }

        // Blend everything into the final pose
        this.pose.spinePitch = targetSpinePitch;
        this.pose.armBasePitch = targetArmBase;
        this.pose.pelvisYOffset = sprintPelvisOffset;

        // Leg Power overrides
        this.pose.legPower = isDown ? 0.24 : recovering ? 0.46 : 1.0;
    }

    _evaluateAdditiveLayers(dt, speed, steer) {
        // Look-at layer (Head tracking turns)
        this.pose.headYaw = damp(this.pose.headYaw, steer * 0.35, 6.0, dt);
        this.pose.headRoll = damp(this.pose.headRoll, -steer * 0.1, 5.0, dt);
        this.pose.neckPitch = damp(this.pose.neckPitch, 0.08 + speed * 0.002, 9.0, dt);

        // High-speed micro-corrections (jibbering bars slightly)
        if (speed > 25 && this.weights.air < 0.5) {
            this.microSteerJitter = Math.sin(this.stateTime * 45) * 0.02 * (speed / 40);
        } else {
            this.microSteerJitter = damp(this.microSteerJitter, 0, 10, dt);
        }
    }
}
