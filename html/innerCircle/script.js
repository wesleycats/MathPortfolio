const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A,B,C,D,E,F,G;
var col;
var Ax = 300;
var Ay = 290;
var Ar = 15;
var Bx = 301;
var By = 100;
var Br = Ar;
var Cx = 501;
var Cy = 291;
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
var yInterceptD = -1 / slopeA;//Dy - (Dx * slopeD);
var yInterceptE = Ey - (Ex * slopeE);
var yInterceptF = Fy - (Fx * slopeF);

col = "red";
A = new Point(Ax,Ay,Ar,col,"A");
col = "blue";
B = new Point(Bx,By,Br,col,"B");
col = "green";
C = new Point(Cx, Cy, Cr, col,"C");
col = "white";
D = new Point(Dx, Dy, Dr, col,"d");
col = "white";
E = new Point(Ex, Ey, Er, col,"e");
col = "white";
F = new Point(Fx, Fy, Fr, col,"f");
col = "black";
G = new Point(Gx, Gy, Gr, col,"g");
col = "trans";
H = new Point(Hx, Hy, Hr, col);

var a = new Line(slopeA, yInterceptA);
var b = new Line(slopeB, yInterceptB);
var c = new Line(slopeC, yInterceptC);
var d = new Line(slopeD, yInterceptD);
var e = new Line(slopeE, yInterceptE);
var f = new Line(slopeF, yInterceptF);

var a1 = new Vector2(1,1,"a1");
var a2 = new Vector2(1,1,"a2");
var a3 = new Vector2(1,1,"a3");
var b1 = new Vector2(1,1,'b1');
var b2 = new Vector2(1,1,'b2');
var b3 = new Vector2(1,1,'b3');
var c1 = new Vector2(1,1,'c1');
var c2 = new Vector2(1,1,'c2');
var c3 = new Vector2(1,1,'c3');
var magnitude = 100;

window.addEventListener('keydown',(evt)=>{
    console.log(e.slope);
    console.log(a3.angle);
});

setInterval(function () {
  context.clearRect(0,0,800,450);
  update();
}, 10);

function update() {
  H.x = G.x;
  H.y = G.y;
  H.r = Math.sqrt((G.x - E.x) * (G.x - E.x) + (G.y - E.y) * (G.y - E.y));

  // from point A to B
  a.slope = (B.y - A.y) / (B.x - A.x);
  a.yIntercept = A.y - (A.x * a.slope);

  // from point B to C
  b.slope = (C.y - B.y) / (C.x - B.x);
  b.yIntercept = B.y - (B.x * b.slope);

  // from point C to A
  c.slope = (A.y - C.y) / (A.x - C.x);
  c.yIntercept = C.y - (C.x * c.slope);

  // from point C to D
  d.slope = ((C.y + c3.dy) - C.y) / ((C.x + c3.dx) - C.x);
  d.yIntercept = C.y - (C.x * d.slope);

  // from point A to E
  e.slope = ((A.y + a3.dy) - A.y) / ((A.x + a3.dx) - A.x);
  e.yIntercept = A.y - (A.x * e.slope);

  // from point B to F
  f.slope = ((B.y + b3.dy) - B.y) / ((B.x + b3.dx) - B.x);
  f.yIntercept = B.y - (B.x * f.slope);

  D.x = (d.yIntercept - a.yIntercept) / (a.slope - d.slope);
  D.y = a.slope * D.x + a.yIntercept;
  E.x = (e.yIntercept - b.yIntercept) / (b.slope - e.slope);
  E.y = b.slope *E.x + b.yIntercept;
  F.x = (f.yIntercept - c.yIntercept) / (c.slope - f.slope);
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
  H.drawInner();

  a1.dx = B.x - A.x; a1.dy = B.y - A.y;
  a1.r = magnitude;
  //a1.draw(context,A.x,A.y,1,A.color);

  a2.dx = C.x - A.x; a2.dy = C.y - A.y;
  a2.r = magnitude;
  //a2.draw(context,A.x,A.y,1,A.color);

  a3.sumVector(a1, a2);
  a3.r = magnitude;
  // a3.draw(context,A.x,A.y,1,A.color);

  // draws vector from a1 to a2
  // a3.dx = a2.dx - a1.dx; a3.dy = a2.dy - a1.dy;
  // a3.draw(context,A.x + a1.dx,A.y + a1.dy,1,A.color);

  b1.dx = C.x - B.x; b1.dy = C.y - B.y;
  b1.r = magnitude;
  // b1.draw(context,B.x,B.y,1,B.color);

  b2.dx = A.x - B.x; b2.dy = A.y - B.y;
  b2.r = magnitude;
  // b2.draw(context,B.x,B.y,1,B.color);

  b3.sumVector(b1, b2);
  b3.r = magnitude;
  // b3.draw(context,B.x,B.y,1,B.color);

  c1.dx = A.x - C.x; c1.dy = A.y - C.y;
  c1.r = magnitude;
  // c1.draw(context,C.x,C.y,1,C.color);

  c2.dx = B.x - C.x; c2.dy = B.y - C.y;
  c2.r = magnitude;
  // c2.draw(context,C.x,C.y,1,C.color);

  c3.sumVector(c1, c2);
  c3.r = magnitude;
  // c3.draw(context,C.x,C.y,1,C.color);
}
