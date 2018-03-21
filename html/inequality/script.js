const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A,B,C;
var col;
var Ax = 200;
var Ay = 225;
var Ar = 15;
var Bx = 600;
var By = 225;
var Br = Ar;
var Cx = 400;
var Cy = 300;
var Cr = 20;

col = "red";
A = new Point(Ax, Ay, Ar, col);
col = "blue";
B = new Point(Bx, By, Br, col);
col = "black";
C = new Point(Cx, Cy, Cr, col);

var slope = (By - Ay) / (Bx - Ax);
var yIntercept = Ay - (Ax * slope);

var l = new Line(slope, yIntercept);

setInterval(function () {
  context.clearRect(0,0,800,450);
  update();
}, 10);

function update() {
  l.slope = (B.y - A.y) / (B.x - A.x);
  l.yIntercept = A.y - (A.x * l.slope);
  l.draw();

  A.draw();
  A.drag();
  B.draw();
  B.drag();
  C.draw();
  C.drag();
  CheckPos(C,l);
}

function CheckPos(point, line) {
  if (point.y < line.slope * point.x + line.yIntercept)
  {
    point.color = "red";
  }

  if (point.y >= line.slope * point.x + line.yIntercept)
  {
    point.color = "green";
  }
}
