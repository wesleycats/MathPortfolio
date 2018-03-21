const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A,B,C,D,E,F,G,H;
var col;
var Ax = 300;
var Ay = 290;
var Ar = 10;
var Bx = 500;
var By = 291;
var Br = Ar;
var Cx = 400;
var Cy = 150;
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
var Gr = Dr / 2;
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
col = "trans";
H = new Point(Hx, Hy, Hr, col);

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
  // outercircle
  H.x = G.x;
  H.y = G.y;
  H.r = Math.sqrt((G.x - A.x) * (G.x - A.x) + (G.y - A.y) * (G.y - A.y)); //+ Math.sqrt((G.x - H.x) * (C.x - H.x) + (C.y - H.y) * (C.y - H.y)) + Math.sqrt((B.x - H.x) * (B.x - H.x) + (B.y - H.y) * (B.y - H.y))) / 3;
  //H.r = G.distance(A);

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
  d.slope = -1 / a.slope;
  d.yIntercept = D.y - (D.x * d.slope);

  // from point E to A
  e.slope = -1 / b.slope;
  e.yIntercept = E.y - (E.x * e.slope);

  // from point F to B
  f.slope = -1 / c.slope;
  f.yIntercept = F.y - (F.x * f.slope);

  D.x = (A.x + B.x) / 2;
  D.y = a.slope * D.x + a.yIntercept;
  E.x = (B.x + C.x) / 2;
  E.y = b.slope * E.x + b.yIntercept;
  F.x = (C.x + A.x) / 2;
  F.y = c.slope * F.x + c.yIntercept;
  G.x = (e.yIntercept - d.yIntercept) / (d.slope - e.slope);
  G.y = d.slope * G.x + d.yIntercept;

  a.drawInner(A.x, B.x);
  b.drawInner(C.x, B.x);
  c.drawInner(A.x, C.x);
  d.drawInnerCenter();
  e.drawInnerCenter();
  f.drawInnerCenter();

  A.drawInner();
  A.drag();
  B.drawInner();
  B.drag();
  C.drawInner();
  C.drag();
  D.drawInner();
  E.drawInner();
  F.drawInner();
  G.drawInner();

  // outercircle
  H.drawInner();
}
