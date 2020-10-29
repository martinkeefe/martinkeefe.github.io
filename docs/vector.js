export const vector = (x = 1, y = 0) => ({
  setX(value) {
    x = value;
    return this;
  },
  getX() {
    return x;
  },
  setY(value) {
    y = value;
    return this;
  },
  getY() {
    return y;
  },
  setAngle(angle) {
    var length = this.getLength();
    x = Math.cos(angle) * length;
    y = Math.sin(angle) * length;
    return this;
  },
  getAngle() {
    return Math.atan2(y, x);
  },
  setLength(length) {
    var angle = this.getAngle();
    x = Math.cos(angle) * length;
    y = Math.sin(angle) * length;
    return this;
  },
  getLength() {
    return Math.sqrt(x * x + y * y);
  },
  add(v2) {
    return vector(x + v2.getX(), y + v2.getY());
  },
  sub(v2) {
    return vector(x - v2.getX(), y - v2.getY());
  },
  mul(val) {
    return vector(x * val, y * val);
  },
  div(val) {
    return vector(x / val, y / val);
  },
  incBy(v2) {
    x += v2.getX();
    y += v2.getY();
    return this;
  },
  decBy(v2) {
    x -= v2.getX();
    y -= v2.getY();
    return this;
  },
  mulBy(val) {
    x *= val;
    y *= val;
    return this;
  },
  divBy(val) {
    x /= val;
    y /= val;
    return this;
  }
});
