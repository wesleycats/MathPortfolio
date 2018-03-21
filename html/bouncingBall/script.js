const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let amountOfBalls = 20;
let balls = [amountOfBalls];
let positions = [amountOfBalls];
let velocitys = [amountOfBalls];
let accelerations = [amountOfBalls];
let Epot = 450 - positions[0].dy;

for (let i = 0; i < amountOfBalls; i++)
{
  balls[i] = new Point(Math.floor(Math.random() * 100) + 1, Math.floor(Math.random() * 100) + 1);
  positions[i] = new Vector2(Math.floor(Math.random() * 730) + 20, Math.floor(Math.random() * 380) + 20);
  velocitys[i] = new Vector2(0,0);//new Vector2(Math.floor(Math.random() * 5) + 1, Math.floor(Math.random() * 5) + 1);
  accelerations[i] = new Vector2(0,0.1);//new Vector2(Math.floor(Math.random() * 1) + 0, Math.floor(Math.random() * 1) + 0.3);
}

function Update() {
  requestAnimationFrame(Update);

  context.clearRect(0,0,800,450);

  for (let i = 0; i < amountOfBalls; i++)
  {
    balls[i].x = positions[i].dx;
    balls[i].y = positions[i].dy;

    positions[i].addTo(velocitys[i]);
    velocitys[i].addTo(accelerations[i]);

    if (positions[i].dx <= 0 || positions[i].dx >= 800)
    {
      velocitys[i].dx = -velocitys[i].dx;
    }

    if (positions[i].dy >= 450)
    {
      //velocitys[i].dy = Math.sqrt(2 * Epot);
      velocitys[i].dy -= 0.1;
    }

    if (positions[i].dy <= 0 || positions[i].dy >= 450)
    {
      //velocitys[i].dy = Math.sqrt(2 * Epot);
      velocitys[i].dy = -velocitys[i].dy;
    }

    balls[i].draw();
    velocitys[i].draw(context, balls[i].x, balls[i].y, velocitys[i].r);
  }
}

Update();
