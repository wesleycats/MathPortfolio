const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const col = ["purple","blue","red","green","black","brown"];

var A = new Point(300,300,0,"red","A");
var B = new Point(200,100,0,"blue","B");
var C = new Point(100,301,0,"green","C");

//RanPointVar(A); RanPointVar(B); RanPointVar(C);

var v =           new Vector2(0,0);
var lineVector =  new Vector2(0,0);
var perpVector =  new Vector2(0,0);
var l =           new Line(0,0,"red");
var m =           new Line(0,0,"green");

var slope; var yIntercept;

var vectorLength = 1;

setInterval(function () {
  context.clearRect(0,0,800,450);
  update();
}, 10);

function update() {

  LineBetween(A,C,l);
  PerpLine(C,l,m)

  v.dx = B.x - A.x;
  v.dy = B.y - A.y;

  lineVector.dx = 1;
  lineVector.dy = l.slope;
  lineVector.r = 1;
  lineVector.r = lineVector.dot(v);

  perpVector.dx = lineVector.dy;
  perpVector.dy = lineVector.dx;
  perpVector.r = 1;
  perpVector.r = perpVector.dot(v);

  A.draw(); B.draw(); C.draw(); l.draw(); m.draw(); v.draw(context,A.x,A.y,1,B.color);
  lineVector.draw(context,A.x,A.y,vectorLength,l.color); perpVector.draw(context,A.x,A.y,vectorLength,m.color);
  A.drag(); B.drag(); C.drag();
}

function RanPointVar(point)
{
  point.x = Math.floor((Math.random() * canvas.width - point.r*2) + point.r*2);
  point.y = Math.floor((Math.random() * canvas.height - point.r*2) + point.r*2);
  point.color = col[Math.floor((Math.random() * col.length))];
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
