class Vector2 {
    constructor(dx,dy,label) {
        this._dx = dx;
        this._dy = dy;
        this._r = Math.sqrt(this._dx*this._dx + this._dy*this._dy);
        this._angle = Math.atan2(this._dy, this._dx);
        this.label = label || "";
    }

    draw(context,x,y,length,color) {
      let h = 4;
      let ah = 10;
      let aw = 10;
      context.fillStyle = color || "white";
      context.strokeStyle = "black";

      context.save();
      context.beginPath();
      context.translate(x,y)
      context.rotate(this.angle);
      context.moveTo(0, 0);
      context.lineTo(0, h);
      context.lineTo(this._r * length - aw, h);
      context.lineTo(this._r * length - aw, ah);
      context.lineTo(this._r * length, 0);
      context.lineTo(this._r * length - aw, -ah);
      context.lineTo(this._r * length - aw, -h);
      context.lineTo(0, -h);
      context.closePath();
      context.fill();
      context.stroke();
      context.fillStyle = color || "black";
      context.font = "20px Arial";
      context.fillText(this.label,this.r*length*0.5,-2*h);
      context.restore();
    }

    get r() {
      return Math.sqrt(this._dx*this._dx + this._dy*this._dy);
    }

    get dx() {
      return this._dx;
    }

    get dy() {
      return this._dy;
    }

    // return the angle of the vector in radians
    get angle() {
      return Math.atan2(this._dy, this._dx);
    }

    // return the angle of the vector in radians
    get direction() {
      return Math.atan2(this._dy, this._dx);
    }

    set dx(newDx) {
      this._dx = newDx;
      this._r = Math.sqrt(this._dx*this._dx + this._dy*this._dy);
      this._angle = Math.atan2(this._dy, this._dx);
    }

    set dy(newDy) {
      this._dy = newDy;
      this._r = Math.sqrt(this._dx*this._dx + this._dy*this._dy);
      this._angle = Math.atan2(this._dy, this._dx);
    }

    set r(newR) {
      if (newR < 0)
      {
        this.angle += Math.PI;
      }
      this._r = Math.abs(newR);
      this._dx = this._r * Math.cos(this._angle);
      this._dy = this._r * Math.sin(this._angle);
    }

    set angle(newAngle) {
      this._angle = newAngle;
      this._dx = this._r * Math.cos(this._angle);
      this._dy = this._r * Math.sin(this._angle);
    }

    // add a vector to this one
    addTo(v2) {
      this._dx += v2._dx;
      this._dy += v2._dy;
    }

    // subtract a vector from this one
    subtractFrom(v2) {
        this._dx -= v2.x;
        this._dy -= v2.y;
    }

    sumVector(a,b) {
      this.dx = a.dx + b.dx;
      this.dy = a.dy + b.dy;
    }

    subtractVector(a,b) {
      this.dx = a.dx - b.dx;
      this.dy = a.dy - b.dy;
    }

    divideProduct(num) {
      this.dx /= num;
      this.dy /= num;
    }

    scalarProduct(num) {
      this.dx *= num;
      this.dy *= num;
    }

    dot(b) {
      return this.dx*b.dx + this.dy*b.dy;
    }

    something(a,b) {
      this.dx = a.dx + b.dx + 0.5 * (b.dx - a.dx);
      this.dy = a.dy + b.dy + 0.5 * (b.dy - a.dy);
    }
  }

/*
    // set the direction of the vector in radians
    setDirection(angle) {
        var magnitude = this.getMagnitude();
        this._dx = Math.cos(angle) * magnitude;
        this._dy = Math.sin(angle) * magnitude;
    }

    // get the magnitude of the vector
    getMagnitude() {
        // use pythagoras theorem to work out the magnitude of the vector
        return Math.sqrt(this._dx * this._dx + this._dy * this._dy);
    }

    // set the magnitude of the vector
    setMagnitude(direction) {
        var direction = this.getDirection();
        this._dx = Math.cos(direction) * magnitude;
        this._dy = Math.sin(direction) * magnitude;
    }

    // add two vectors together and return a new one
    add(v2) {
        return new Vector(this._dx + v2.x, this._dy + v2.y);
    }

    // subtract two vectors and return a new one
    subtract(v2) {
        return new Vector(this._dx - v2.x, this._dy - v2.y);
    }

    // multiply this vector by a scalar and return a new one
    multiply(scalar) {
        return new Vector(this._dx * scalar, this._dy * scalar);
    }

    // multiply this vector by the scalar
    multiplyBy(scalar) {
        this._dx *= scalar;
        this._dy *= scalar;
    }

    // scale this vector by scalar and return a new vector
    divide(scalar) {
        return new Vector(this._dx / scalar, this._dy / scalar);
    }

    // scale this vector by scalar
    divideBy(scalar) {
        this._dx /= scalar;
        this._dy /= scalar;
    }

    // // Aliases
    // getLength() = getMagnitude();
    // setLength() = setMagnitude();
    //
    // getAngle() = getDirection();
    // setAngle() = setDirection();

    // Utilities
    copy() {
        return new Vector(this._dx, this._dy);
    }

    toString() {
        return 'x: ' + this._dx + ', y: ' + this._dy;
    }

    draw(x, y, scalar) {
        var scalar = scalar || 5;
        var m = 1 * scalar;
        var arrowHeight = 40;
        var arrowWidth = 50 * m;
        var arrowHeadHeight = 80;
        var arrowHeadWidth = 100 + arrowWidth;
        var point = 0;
        context.save();
        context.translate(x, y);
        context.beginPath();
        context.lineWidth = 5;
        context.moveTo(0, 0);
        context.lineTo(point, point - arrowHeight / 2);
        context.lineTo(point + arrowWidth, point - arrowHeight/ 2);
        context.lineTo(point + arrowWidth, point - arrowHeadHeight / 2);
        context.lineTo(point + arrowHeadWidth, point);
        context.lineTo(point + arrowWidth, point + arrowHeadHeight / 2);
        context.lineTo(point + arrowWidth, point + arrowHeight / 2);
        context.lineTo(point, point + arrowHeight / 2);
        context.lineTo(point, point);
        context.stroke();
        context.closePath();
        context.restore();
    }
}*/
