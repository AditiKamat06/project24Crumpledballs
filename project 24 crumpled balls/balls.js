class Balls {
  constructor(x, y,diametre) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':1.5
    } 
    this.x = x;
    this.y = y;
    this.diametre=diametre;
    this.body = Bodies.circle(x, y, diametre/2, options);

    this.image=loadImage("tissuePaper.png");


    World.add(world, this.body);
  }

  display(){
    var pos =this.body.position;
    var angle = this.body.angle;

    image(this.image, this.body.position.x, this.body.position.y, 70, 70);

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill(255);
    strokeWeight(4);
    ellipse(0, 0, this.diametre, this.diametre);
    pop();
  }
} 