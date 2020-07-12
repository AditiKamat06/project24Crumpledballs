class Bins {
    constructor(x,y,width,height,options){
        var options={
        'restitution':0.5,
        'friction':1.0,
        'density':1.5,
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, width, height, {isStatic: true});

        World.add(world, this.body);
    }

    display() {

        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill(255);
        strokeWeight(4);
        rect(0, 0, this.width, this.height);
        pop();
    }
}

//this.Visiblity = this.Visiblity - 5;
//tint(255,this.Visiblity);
     