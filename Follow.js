var particles =[]; 
let xPos;
let yPos;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 1, 1, 255);
}
function draw() {
  background(0, 0, 0);
  for (var i=particles.length-1; i>=0; i--) {
    particles[i].update();
    particles[i].display();
    if (particles[i].y>height || particles[i].y<0 || particles[i].x>width || particles[i].x<0 || particles[i].size<=1) {
      particles.splice(i, 1);
    }
  }
}
function init(count) {
  for (var j=0; j<count; j++) {
    particles.push(new Particles(xPos, yPos, int(random(8)), int(random(3, 8)), int(random(3, 8)), random(-2*PI, 2*PI)));
  }
}
function mouseDragged() {
  xPos = mouseX;
  yPos = mouseY;
  init(7);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  setup();
  draw();
}
