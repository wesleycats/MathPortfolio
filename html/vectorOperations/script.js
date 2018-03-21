const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let num = document.getElementById("num").value;
let num2 = document.getElementById("num2").value;
let A = new Point(100,100,20,"red","A");
let B = new Point(200,200,20,"blue","B");
let C = new Point(300,100,20,"green","C");

let a = new Vector2(1,1,"a");
let b = new Vector2(1,1,"b");
//let c = new Vector2();
let ab = new Vector2(1,1,"a+b");
let ba = new Vector2(1,1,"a-b");
let a2 = new Vector2();
let a3 = new Vector2();

let abDraw,baDraw,a2Draw,a3Draw;

function Check(checkbox) {
  switch(checkbox.value)
  {
    case "add":
      abDraw = checkbox.checked;
    break;
    case "sub":
      baDraw = checkbox.checked;
    break;
    case "sca":
      a2Draw = checkbox.checked;
    break;
    case "div":
      a3Draw = checkbox.checked;
    break;
  }
}

A.drag();B.drag();C.drag();

function Update() {
  requestAnimationFrame(Update);
  num = document.getElementById("num").value;
  num2 = document.getElementById("num2").value;
  a2.label = "a*" + num;
  a3.label = "a/" + num2;

  context.clearRect(0,0,800,450);

  a2.dx = a.dx;
  a2.dy = a.dy;
  a2.scalarProduct(num);
  if (a2Draw)
  {
    a2.draw(context,A.x,A.y,1,"purple");
  }

  a3.dx = a.dx;
  a3.dy = a.dy;
  a3.divideProduct(num2);
  if (a3Draw)
  {
    a3.draw(context,A.x,A.y,1,"purple");
  }

  a.dx = B.x - A.x;
  a.dy = B.y - A.y;
  a.draw(context,A.x,A.y,1,B.color);

  b.dx = C.x - A.x;
  b.dy = C.y - A.y;
  b.draw(context,A.x,A.y,1,C.color);

  /*
  c.dx = A.x - C.x;
  c.dy = A.y - C.y;
  c.draw(context,C.x,C.y,1,C.color);
  */

  ab.sumVector(a,b);
  if (abDraw)
  {
    ab.draw(context,A.x,A.y,1,A.color);
  }

  ba.subtractVector(a,b);
  if (baDraw)
  {
    ba.draw(context,A.x,A.y,1,A.color);
  }


  A.draw();B.draw();C.draw();
}

Update();
