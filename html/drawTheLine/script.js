const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A,B;
var Ax = 200;
var Ay = 225;
var Ar = 15;
var Bx = 600;
var By = 225;
var Br = Ar;
var Acol = "red";
var Bcol = "blue";

A = new Point(Ax, Ay, Ar, Acol);
B = new Point(Bx, By, Br, Bcol);

var slope = (By - Ay) / (Bx - Ax);
var yIntercept = Ay - (Ax * slope);

var l = new Line(slope, yIntercept);

setInterval(function () {
  context.clearRect(0,0,800,450);
  update();
}, 10);

function update() {
  Ax = A.x;
  Ay = A.y;
  Bx = B.x;
  By = B.y;
  slope = (By - Ay) / (Bx - Ax);
  yIntercept = Ay - (Ax * slope);
  l = new Line(slope, yIntercept);
  l.draw(Ax, Bx);

  A.draw();
  A.drag();
  B.draw();
  B.drag();
}
