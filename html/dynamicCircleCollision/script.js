const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const col = ["purple","blue","red","green","brown"];

let g = new GameObject(new Point(0,0,100,col[0]), new Vector2(100,200), new Vector2(0,0), new Vector2(0,0));
let p = new GameObject(new Point(0,0,100,col[2]), new Vector2(700,200), new Vector2(10,0), new Vector2(0,0));

let l = new Line(0,0);

g.rad = new Vector2(0,0);
g.tan = new Vector2(0,0);
p.rad = new Vector2(0,0);
p.tan = new Vector2(0,0);

//let P = new Point(400,225,100,"yellow");

function update() {
  context.clearRect(0,0,800,450);
  requestAnimationFrame(update);

  l.slope = (p.point.y - g.point.y) / (p.point.x - g.point.x);
  l.yIntercept = g.point.y - (g.point.x * l.slope);

  g.rad.dx = p.point.x - g.pos.dx;
  g.rad.dy = p.point.y - g.pos.dy;
  g.rad.r = 1;
  g.rad.r = g.rad.dot(g.vel);

  g.tan.dx = -g.rad.dy;
  g.tan.dy = g.rad.dx;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);

  if(g.point.distance(p.point) < p.point.r + g.point.r)
  {
    /*g.rad.angle += Math.PI;
    g.vel.sumVector(g.rad,g.tan);*/
    let temp = new Vector2();
    temp.dx = g.rad.dx;
    temp.dy = g.rad.dy;

    g.rad.dx = p.rad.dx;
    g.rad.dy = p.rad.dy;

    p.rad.dx = temp.dx;
    p.rad.dy = temp.dy;

    g.vel.sumVector(g.rad,g.tan);
    p.vel.sumVector(p.rad,p.tan);
  }

  g.update(); g.draw(false,30);
  g.rad.draw(context,g.pos.dx,g.pos.dy,30);
  g.tan.draw(context,g.pos.dx,g.pos.dy,30);

  p.rad.dx = g.point.x - p.pos.dx;
  p.rad.dy = g.point.y - p.pos.dy;
  p.rad.r = 1;
  p.rad.r = p.rad.dot(p.vel);

  p.tan.dx = -p.rad.dy;
  p.tan.dy = p.rad.dx;
  p.tan.r = 1;
  p.tan.r = p.tan.dot(p.vel);

  p.update(); p.draw(false,30);
  p.rad.draw(context,p.pos.dx,p.pos.dy,30);
  p.tan.draw(context,p.pos.dx,p.pos.dy,30);


  l.draw(g.point.x, p.point.x);
  //P.draw();
}

update();
