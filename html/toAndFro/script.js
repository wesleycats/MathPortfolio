const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A = new Point(100,175,15,"red","A");
var B = new Point(700,225,15,"red","B");
var C = new Point(300,100,15,"red","C");
var D = new Point(640,300,15,"red","D");

const targets = [A,B,C,D];
const col = ["purple","blue","yellow","green","black","brown"];

var PLAYER = new Point(A.x,A.y,10,"white");

var a = new Line(0,0);
var b = new Line(0,0);
var c = new Line(0,0);
var d = new Line(0,0);

var play = new Vector2(0,0);

var target;
var index = 0;
var points = [];

window.addEventListener('keydown',(evt)=>{
  let randCol = Math.floor(Math.random() * (col.length));
  switch (evt.keyCode) {
    case 32:
      let indexPoints = Math.floor(Math.random() * (targets.length));
      let point = new Point(targets[indexPoints].x,targets[indexPoints].y,10,col[randCol]);
      point.direction = Math.floor(Math.random() * 4);
      if (point.direction <= 1)
      {
        point.direction = 1;
      }
      else
      {
        point.direction = 2;
      }
      console.log(point.direction);
      point.index = indexPoints;
      point.vector = new Vector2(0,0);
      points.push(point);
      break;
    default:
    console.log(evt.keyCode);
  }
});

setInterval(function () {
  context.clearRect(0,0,800,450);
  update();
}, 10);

function update() {

  a.slope = (B.y - A.y) / (B.x - A.x);
  a.yIntercept = A.y - (A.x * a.slope);

  b.slope = (C.y - B.y) / (C.x - B.x);
  b.yIntercept = B.y - (B.x * b.slope);

  c.slope = (D.y - C.y) / (D.x - C.x);
  c.yIntercept = C.y - (C.x * c.slope);

  d.slope = (A.y - D.y) / (A.x - D.x);
  d.yIntercept = D.y - (D.x * d.slope);

  target = targets[index];

  switch(target)
  {
    case A:
    {
      play.dx = target.x - PLAYER.x; play.dy = target.y - PLAYER.y; play.r = 1;
    }
    break;

    case B:
    {
      play.dx = target.x - PLAYER.x; play.dy = target.y - PLAYER.y; play.r = 1;
    }
    break;

    case C:
    {
      play.dx = target.x - PLAYER.x; play.dy = target.y - PLAYER.y; play.r = 1;
    }
    break;

    case D:
    {
      play.dx = target.x - PLAYER.x; play.dy = target.y - PLAYER.y; play.r = 1;
    }
    break;
  }

  PLAYER.x += play.dx; PLAYER.y += play.dy;

  a.drawInner(A.x, B.x, 2); b.drawInner(B.x, C.x, 2); c.drawInner(C.x, D.x, 2);  d.drawInner(A.x, D.x, 2);
  ChangeTarget(PLAYER);
  A.draw(); B.draw(); C.draw(); D.draw(); play.draw(context,PLAYER.x,PLAYER.y,50,PLAYER.color); PLAYER.draw();
  A.drag(); B.drag(); C.drag(); D.drag();

  for(let i = 0; i < points.length; i++)
  {
    points[i].target = targets[points[i].index];
    switch(points[i].target)
    {
      case A:
      {
        points[i].vector.dx = points[i].target.x - points[i].x; points[i].vector.dy = points[i].target.y - points[i].y;
      }
      break;

      case B:
      {
        points[i].vector.dx = points[i].target.x - points[i].x; points[i].vector.dy = points[i].target.y - points[i].y;
      }
      break;

      case C:
      {
        points[i].vector.dx = points[i].target.x - points[i].x; points[i].vector.dy = points[i].target.y - points[i].y;
      }
      break;

      case D:
      {
        points[i].vector.dx = points[i].target.x - points[i].x; points[i].vector.dy = points[i].target.y - points[i].y;
      }
      break;
    }

    points[i].vector.r = 1;
    points[i].x += points[i].vector.dx; points[i].y += points[i].vector.dy;
    points[i].vector.draw(context,points[i].x,points[i].y,50,points[i].color);
    points[i].draw();
    ChangePointTarget(points[i]);
  }
}

function ChangeTarget(point) {
  if (point.distance(target) < 1)
  {
    //targets[index].color = "green";
    // PLAYER
    if (index == 0)
    {
      //targets[targets.length-1].color = "red";
    }
    else if (index > 0) {
      //targets[index-1].color = "red";
    }
    index++;

    if (index == targets.length)
    {
      index = 0;
    }
  }
}

function ChangePointTarget(point) {
  if (point.distance(point.target) < 1)
  {
    //console.log(point.color + " index: " + point.index);
    console.log(point.color + " direction: " + point.direction);

    if (point.direction = 1)
    {
      if (point.index == targets.length - 1)
      {
        point.index = 0;
      }
      else
      {
        point.index++;
      }
      //console.log(point.color + " direction: " + point.direction);
    } else if (point.direction = 2)
    {
      if (point.index == 0)
      {
        point.index = targets.length;
      }
      else
      {
        point.index--;
      }
    }
  }
}
