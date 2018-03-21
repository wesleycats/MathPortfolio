const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let position = new Vector2(100,100);
let direction = new Vector2(1,0);
let velocity = new Vector2(1,0);

let player = new Point(position.dx,position.dy,10,"red","A");
let bullets = [];

index = 0;

window.addEventListener('keydown',(evt)=>{
  switch (evt.keyCode) {
    case 37:
      velocity.angle -= 0.1;
      break;
    case 38:
      velocity.r += 1;
      break;
    case 39:
      velocity.angle += 0.1;
      break;
    case 40:
      velocity.r -= 1;
      break;
    case 32:
      let bullet = new Point(position.dx,position.dy,5,"yellow");
      bullet.position = new Vector2(position.dx,position.dy);
      bullet.velocity = new Vector2(0,0);
      bullet.velocity.r = velocity.r * 1.5 || 1;
      bullet.velocity.angle = velocity.angle;
      bullets.push(bullet);
      index++;

      break;
    default:
    console.log(evt.keyCode);
  }
});

function Update() {
  requestAnimationFrame(Update);
  context.clearRect(0,0,800,450);
  player.x = position.dx; player.y = position.dy;
  position.addTo(velocity);
  //direction.draw(context,player.x,player.y,20,"red");
  velocity.draw(context,player.x,player.y,50,"blue");
  player.draw();
  for(let i = 0; i < bullets.length; i++)
  {
    bullets[i].draw();
    bullets[i].x = bullets[i].position.dx; bullets[i].y = bullets[i].position.dy;
    bullets[i].position.addTo(bullets[i].velocity);
  }

  switch(true)
  {
    case position.dx < 0:
      position.dx = 800;
      break;
    case position.dx > 800:
      position.dx = 0;
      break;
  }

  switch(true)
  {
    case position.dy < 0:
      position.dy = 450;
      break;
    case position.dy > 450:
      position.dy = 0;
      break;
  }
}

Update();
