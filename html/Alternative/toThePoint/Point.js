class Point {
  constructor(x,y,r,color) {
    this.x = x;
    this.y = y;
    this.r = r || 20;
    this.color = color || "#ffff00";
  }

  draw() {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.x,this.y,this.r,0,2*Math.PI);
    context.stroke();
    context.fill();
    context.closePath();
  }

  drag() {
    let drag = false;
    let mouseX, mouseY;

    canvas.addEventListener('mousedown', (evt)=> {
      let rect = canvas.getBoundingClientRect();
      mouseX = evt.clientX - rect.left;
      mouseY = evt.clientY - rect.top;

      if (mouseX - this.x <= this.r && mouseY - this.y <= this.r && this.x - mouseX <= this.r && this.y - mouseY <= this.r)
      {
        drag = true;
      }
    });

    canvas.addEventListener('mousemove', (evt)=> {
      let rect = canvas.getBoundingClientRect();
      mouseX = evt.clientX - rect.left;
      mouseY = evt.clientY - rect.top;

      if (drag)
      {
        this.x = mouseX;
        this.y = mouseY;
      }
    });

    canvas.addEventListener('mouseup', (evt)=> {
      drag = false;
    });
  }
}
