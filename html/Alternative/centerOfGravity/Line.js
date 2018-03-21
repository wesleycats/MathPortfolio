class Line {
  constructor(slope, yIntercept) {
    this.slope = slope;
    this.yIntercept = yIntercept;
  }

  calcY(x) {
    return this.slope * x + this.yIntercept;
  }

  draw(startX, endX) {
    context.beginPath();
    context.moveTo(startX, this.calcY(startX));
    context.lineTo(endX, this.calcY(endX));
    context.lineWidth = 5;
    context.strokeStyle = "black"
    context.stroke();
    context.closePath();
  }

  drawCenter() {
    context.beginPath();
    context.moveTo(0, this.calcY(0));
    context.lineTo(800, this.calcY(800));
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.stroke();
    context.closePath();
  }
}
