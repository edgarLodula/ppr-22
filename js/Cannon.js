class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image = loadImage("assets/canon.png");
    this.imag3 = loadImage("assets/cannonBase.png");
  }
  display(){
    image(this.imag3,80,20,200,200)
    push()
    imageMode(CENTER)
    image(this.image,this.x,this.y,this.width,this.height)
    pop()
  
  }
}
