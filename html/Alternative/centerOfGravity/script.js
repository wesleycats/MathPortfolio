const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A,B,C,D,E,F,G,H;
var col;
var Ax = 200;
var Ay = 220;
var Ar = 15;
var Bx = 600;
var By = 225;
var Br = Ar;
var Cx = 380;
var Cy = 100;
var Cr = Ar;
var Dx = (Ax + Bx) / 2;
var Dy = (Ay + By) / 2;
var Dr = Ar / 2;
var Ex = (Bx + Cx) / 2;
var Ey = (By + Cy) / 2;
var Er = Dr;
var Fx = Ax - Cx;
var Fy = Ay - Cy;
var Fr = Dr;
var Gx = 0;
var Gy = 0;
var Gr = Dr;
var Hx = Gx;
var Hy = Gy;
var Hr = Math.sqrt((Ex - Gx) * (Ex - Gx) + (Ey - Gy) * (Ey - Gy));

var slopeA = (By - Ay) / (Bx - Ax);
var slopeB = (Cy - By) / (Cx - Bx);
var slopeC = (Ay - Cy) / (Ax - Cx);
var slopeD = (Cy - Dy) / (Cx - Dx);
var slopeE = (Ay - Ey) / (Ax - Ex);
var slopeF = (By - Fy) / (Bx - Fx);
var yInterceptA = Ay - (Ax * slopeA);
var yInterceptB = By - (Bx * slopeB);
var yInterceptC = Cy - (Cx * slopeC);
var yInterceptD = Dy - (Dx * slopeD);
var yInterceptE = Ey - (Ex * slopeE);
var yInterceptF = Fy - (Fx * slopeF);

col = "red";
A = new Point(Ax, Ay, Ar, col);
col = "blue";
B = new Point(Bx, By, Br, col);
col = "green";
C = new Point(Cx, Cy, Cr, col);
col = "white";
D = new Point(Dx, Dy, Dr, col);
col = "white";
E = new Point(Ex, Ey, Er, col);
col = "white";
F = new Point(Fx, Fy, Fr, col);
col = "black";
G = new Point(Gx, Gy, Gr, col);
H = new Point(Hx, Hy, Hr);

var a = new Line(slopeA, yInterceptA);
var b = new Line(slopeB, yInterceptB);
var c = new Line(slopeC, yInterceptC);
var d = new Line(slopeD, yInterceptD);
var e = new Line(slopeE, yInterceptE);
var f = new Line(slopeF, yInterceptF);

setInterval(function () {
  context.clearRect(0,0,800,450);
  update();
}, 10);

function update() {
  // from point A to B
  a.slope = (B.y - A.y) / (B.x - A.x);
  a.yIntercept = A.y - (A.x * a.slope);

  // from point B to C
  b.slope = (C.y - B.y) / (C.x - B.x);
  b.yIntercept = B.y - (B.x * b.slope);

  // from point C to A
  c.slope = (A.y - C.y) / (A.x - C.x);
  c.yIntercept = C.y - (C.x * c.slope);

  // from point D to C
  d.slope = (C.y - D.y) / (C.x - D.x);
  d.yIntercept = D.y - (D.x * d.slope);

  // from point E to A
  e.slope = (A.y - E.y) / (A.x - E.x);
  e.yIntercept = E.y - (E.x * e.slope);

  // from point F to B
  f.slope = (B.y - F.y) / (B.x - F.x);
  f.yIntercept = F.y - (F.x * f.slope);

  D.x = (A.x + B.x) / 2;
  D.y = a.slope * D.x + a.yIntercept;
  E.x = (B.x + C.x) / 2;
  E.y = b.slope * E.x + b.yIntercept;
  F.x = (C.x + A.x) / 2;
  F.y = c.slope * F.x + c.yIntercept;
  G.x = (D.x + E.x + F.x) / 3;
  G.y = (D.y + E.y + F.y) / 3;
  H.x = G.x;
  H.y = G.y;
  H.r = Math.sqrt((E.x - G.x) * (E.x - G.x) + (E.y - G.y) * (E.y - G.y));

  a.draw(A.x, B.x);
  b.draw(C.x, B.x);
  c.draw(A.x, C.x);
  d.drawCenter();
  e.drawCenter();
  f.drawCenter();

  A.draw();
  A.drag();
  B.draw();
  B.drag();
  C.draw();
  C.drag();
  D.draw();
  E.draw();
  F.draw();
  G.draw();
  //H.drawCenterCirle();
}
