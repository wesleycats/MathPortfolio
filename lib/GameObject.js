// This is for Doxygen and MiKTeX documentation
/// Info
/**
  gameobject with a point, position, speed and acceleration
*/
class GameObject {
  /**
  @param point Point
  @param pos Vector2
  @param vel Vector2
  @param acc Vector2
  */
  constructor(point,pos,vel,acc) {
    this.point = point;
    this.pos = pos;
    this.vel = vel;
    this.acc = acc;
    this.box = [0,850,0,450];
  }

  update() {
    if (this.pos.dx < 0 + this.point.r || this.pos.dx > 800 - this.point.r)
    {
      this.vel.dx = -this.vel.dx;
    }

    if (this.pos.dy < 0 + this.point.r || this.pos.dy > 450 - this.point.r)
    {
      this.vel.dy = -this.vel.dy;
    }

    this.pos.addTo(this.vel);
    this.vel.addTo(this.acc);
    this.point.x = this.pos.dx;
    this.point.y = this.pos.dy;
  }

  draw(vel,r) {
    this.point.draw();
    if (vel)
    {
      this.vel.draw(context,this.pos.dx,this.pos.dy,r);
    }
  }

}
