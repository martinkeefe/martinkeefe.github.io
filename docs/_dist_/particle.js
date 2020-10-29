import {vector as vector2} from "./vector.js";
export const particle = (x, y, speed, angle, gravity) => {
  return {
    position: vector2(x, y),
    velocity: vector2(0, 0).setLength(speed).setAngle(angle),
    gravity: vector2(0, gravity || 0),
    accelerate(accel) {
      this.velocity.incBy(accel);
    },
    update() {
      this.velocity.incBy(this.gravity);
      this.position.incBy(this.velocity);
    }
  };
};
