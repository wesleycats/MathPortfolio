const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const col = ["purple","blue","red","green","brown"];

let g = new GameObject(new Point(0,0,10,"blue"), new Vector2(300,300), new Vector2(3,2), new Vector2(0,0));

g.rad = new Vector2(0,0);
g.tan = new Vector2(0,0);

let P = new Point(400,225,100,"yellow");

function update() {
  context.clearRect(0,0,800,450);
  requestAnimationFrame(update);

  g.rad.dx = P.x - g.pos.dx;
  g.rad.dy = P.y - g.pos.dy;
  g.rad.r = 1;
  g.rad.r = g.rad.dot(g.vel);

  g.tan.dx = -g.rad.dy;
  g.tan.dy = g.rad.dx;
  g.tan.r = 1;
  g.tan.r = g.tan.dot(g.vel);
  if(g.point.distance(P) <= P.r + g.point.r)
  {
    g.rad.angle += Math.PI;
    g.vel.sumVector(g.rad,g.tan);
  }

  P.draw();
  g.update(); g.draw(true,30);
  g.rad.draw(context,g.pos.dx,g.pos.dy,30);
  g.tan.draw(context,g.pos.dx,g.pos.dy,30);
}

update();
