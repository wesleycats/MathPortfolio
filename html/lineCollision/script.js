const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const col = ["purple","blue","red","green","brown"];

var A = new Point(0,0,15,"","A");
var B = new Point(0,0,15,"","B");
RanPointVar(A); RanPointVar(B);

var g = {};
g.point = new Point(0,0,10,"white");
g.pos = new Vector2(100,100);
g.vel = new Vector2(2,2);
RanPointVar(g.point,"white");
g.update = () =>{
  g.pos.addTo(g.vel);
  g.point.x = g.pos.dx;
  g.point.y = g.pos.dy;
  if (g.pos.dx > 800 - g.point.r || g.pos.dx < 0 + g.point.r)
  {
    g.vel.dx = -g.vel.dx;
  }
  if (g.pos.dy > 450 - g.point.r || g.pos.dy < 0 + g.point.r)
  {
    g.vel.dy = -g.vel.dy;
  }
};

var h = {};
h.point = new Point(0,0,10,"black");
h.pos = new Vector2(0,0);
h.rad = new Vector2(0,0);
h.tan = new Vector2(0,0);
h.update = () =>{
  h.point.x = h.pos.dx;
  h.point.y = h.pos.dy;
  h.rad.dx = 1;
  h.rad.dy = l.slope;
  h.rad.r = 1;
  h.rad.r = h.rad.dot(g.vel);
  h.tan.dx = 1;
  h.tan.dy = m.slope;
  h.tan.r = 1;
  h.tan.r = h.tan.dot(g.vel);
}

var l = new Line(0,0);
var m = new Line(0,0);

setInterval(function () {
  context.clearRect(0,0,800,450);
  update();
}, 10);

function update() {

  h.pos.dx = l.intersection(m).x;
  h.pos.dy = l.intersection(m).y;

  if (g.point.distance(h.point) <= 4)
  {
    //console.log("HIT");
    //g.vel.dx = 1 / g.vel.dx;
    //g.vel.dy = 1 / g.vel.dx;
  }

  g.vel.draw(context,g.pos.dx,g.pos.dy,50,g.point.color);
  h.rad.draw(context,h.pos.dx,h.pos.dy,50,h.point.color);
  h.tan.draw(context,h.pos.dx,h.pos.dy,50,h.point.color);
  l.draw(); m.draw();
  A.draw(); B.draw();
  g.point.draw(); h.point.draw();
  updateFunctions();
}

function updateFunctions()
{
  A.drag(); B.drag();
  LineBetween(A,B,l);
  PerpLine(g.point,l,m)
  g.update(); h.update();
  Collision(g,l);
}

function RanPointVar(point,color)
{
  point.x = Math.floor((Math.random() * canvas.width - point.r*2) + point.r*2);
  point.y = Math.floor((Math.random() * canvas.height - point.r*2) + point.r*2);
  point.color = color || col[Math.floor((Math.random() * col.length))];
}

function LineBetween(startPoint,endPoint,line)
{
  line.slope = (endPoint.y - startPoint.y) / (endPoint.x - startPoint.x);
  line.yIntercept = startPoint.y - (startPoint.x * line.slope);
}

function PerpLine(startPoint,normLine,perpLine)
{
  perpLine.slope = -1 / normLine.slope;
  perpLine.yIntercept = startPoint.y - (startPoint.x * perpLine.slope);
}

function Collision(p, line)
{
  if (p.pos.dy >= line.slope * p.pos.dx + line.yIntercept)
  {
    p.point.color = "green";
    h.tan.angle += Math.PI;
    g.vel.sumVector(h.tan,h.rad);
  }

  if (p.pos.dy < line.slope * p.pos.dx + line.yIntercept)
  {
    p.point.color = "red";
    //h.tan.angle += Math.PI;
    //g.vel.sumVector(h.tan,h.rad);
  }
}
