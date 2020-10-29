import { vector } from './vector'

export const particle = (x: number, y: number, speed: number, angle: number, gravity?: number) => {
  return {
    position: vector(x, y),
    velocity: vector(0, 0).setLength(speed).setAngle(angle),
    gravity: vector(0, gravity || 0),

    accelerate(accel) {
      this.velocity.incBy(accel)
    },

    update() {
      this.velocity.incBy(this.gravity)
      this.position.incBy(this.velocity)
    },
  }
}
