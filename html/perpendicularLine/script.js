const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A,B;
var Ax = 200;
var Ay = 220;
var Ar = 15;
var Bx = 600;
var By = 225;
var Br = Ar;
var Cx = 400;
var Cy = 300;
var Cr = Ar;
var Acol = "red";
var Bcol = "blue";
var Ccol = "green";

var slope = (By - Ay) / (Bx - Ax);
var yIntercept = Ay - (Ax * slope);
var perpSlope = -1 / slope;
var perpIntercept = Cy - (Cx * perpSlope);
//var perpSlope = -1 / slope;
//var perpYIntercept = Cy - (Cx * perpSlope);

var Dx = 400;
var Dy = yIntercept;
var Dr = 20;
var Dcol = "black";

A = new Point(Ax, Ay, Ar, Acol);
B = new Point(Bx, By, Br, Bcol);
C = new Point(Cx, Cy, Cr, Ccol);
D = new Point(Dx, Dy, Dr, Dcol);

var l = new Line(slope, yIntercept);
var p = new Line(perpSlope, perpIntercept);
//var p = new Line(perpSlope, perpYIntercept);

setInterval(function () {
  context.clearRect(0,0,800,450);
  update();
}, 10);

function update() {
  //normal line
  l.slope = (B.y - A.y) / (B.x - A.x);
  l.yIntercept = A.y - (A.x * l.slope);
  // perp line
  p.slope = -1 / l.slope;
  p.yIntercept = C.y - (C.x * p.slope);

  //l = new Line(l.slope, l.yIntercept);
  //p = new Line(p.slope, p.yIntercept);
  l.draw(A.x, B.x);
  p.draw(C.x);

  D.x = (p.yIntercept - l.yIntercept) / (l.slope - p.slope);
  D.y = l.slope * D.x + l.yIntercept;

  A.draw();
  A.drag();
  B.draw();
  B.drag();
  C.draw();
  C.drag();
  D.draw();
}
