class Line {
  constructor(slope, yIntercept) {
    this.slope = slope;
    this.yIntercept = yIntercept;
  }

  calcY(x) {
    return this.slope * x + this.yIntercept;
  }

  draw() {
    context.beginPath();
    context.moveTo(0, l.calcY(0));
    context.lineTo(800, l.calcY(800));
    context.stroke();
    context.closePath();
  }
}
