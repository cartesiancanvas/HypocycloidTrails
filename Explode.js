const friction=0.99;
const gravity=0.03;

class Particles {
  constructor(x, y, change, vertex, petal, off) {
    this.x=x;
    this.y=y;
    this.speed=random(1.5, 5);
    this.angle=random(2*PI);
    this.change=change;
    this.vertex=vertex;
    this.petal=petal;
    this.off=off;
    this.vx= 2.5*((5-1)*cos(this.angle) + 1*cos((5/1-1)*this.angle));
    this.vy= 2.5*((5-1)*sin(this.angle) - 1*sin((5/1-1)*this.angle));
    this.size=random(20, 30);
  }
  update() {
    this.vx*=map(this.size, 20, 30, friction, friction-0.02);
    this.vy*=map(this.size, 20, 30, friction, friction-0.02);
    this.vy+=gravity;
    this.x+=this.vx;
    this.y+=this.vy;
    this.size-=0.5;
    this.off+=0.1;
  }
  display() {
    noStroke();
    fill(map(this.x, 0, width, 0, 360), map(this.y, 0, height, 1, 0.1), 1, this.alpha);
    if (this.change==1) {
      stars(this.x, this.y, this.vertex, this.size*2, this.size, this.off);
    } else if (this.change==0) {
      rose(this.x, this.y, this.size*2, this.petal, this.off);
    } else {
      ellipse(this.x, this.y, this.size, this.size);
    }
  }
}

function stars(locx, locy, numVertex, shapeSize_R, shapeSize_r, offset) {
  var angle=0;
  var step= PI/numVertex;
  beginShape();
  noStroke();
  for (let i=0; i<=numVertex; i++) {
    var px = locx+cos(angle+offset) * shapeSize_R;
    var py = locy-sin(angle+offset) * shapeSize_R;
    vertex(px, py);
    angle += step;
    px = locx+cos(angle+offset) * shapeSize_r;
    py = locy-sin(angle+offset) * shapeSize_r;
    angle += step;
    vertex(px, py);
  }
  endShape();
}
function rose(x_loc, y_loc, amp, freq, offset) {
  beginShape();
  for (let phi = 0; phi < 2*PI; phi += 0.05) {
    let r = amp * sin(freq * phi+offset);
    x = x_loc+r * cos(phi+offset);
    y = y_loc+r * sin(phi+offset);
    vertex(x, y);
  }
  endShape();
}
