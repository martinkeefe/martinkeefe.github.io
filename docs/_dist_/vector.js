export const vector = (x = 1, y = 0) => {
  let _x = x
  let _y = y

  // create: function (x, y) {
  //     var obj = Object.create(this);
  //     obj.setX(x);
  //     obj.setY(y);
  //     return obj;
  // },

  return {
    setX: function (value) {
      _x = value
      return this
    },

    getX: function () {
      return _x
    },

    setY: function (value) {
      _y = value
      return this
    },

    getY: function () {
      return _y
    },

    setAngle: function (angle) {
      var length = this.getLength()
      _x = Math.cos(angle) * length
      _y = Math.sin(angle) * length
      return this
    },

    getAngle: function () {
      return Math.atan2(_y, _x)
    },

    setLength: function (length) {
      var angle = this.getAngle()
      _x = Math.cos(angle) * length
      _y = Math.sin(angle) * length
      return this
    },

    getLength: function () {
      return Math.sqrt(_x * _x + _y * _y)
    },

    add: function (v2) {
      return vector.create(_x + v2.getX(), _y + v2.getY())
    },

    subtract: function (v2) {
      return vector.create(_x - v2.getX(), _y - v2.getY())
    },

    multiply: function (val) {
      return vector.create(_x * val, _y * val)
    },

    divide: function (val) {
      return vector.create(_x / val, _y / val)
    },

    addTo: function (v2) {
      _x += v2.getX()
      _y += v2.getY()
      return this
    },

    subtractFrom: function (v2) {
      _x -= v2.getX()
      _y -= v2.getY()
      return this
    },

    multiplyBy: function (val) {
      _x *= val
      _y *= val
      return this
    },

    divideBy: function (val) {
      _x /= val
      _y /= val
      return this
    },
  }
}
