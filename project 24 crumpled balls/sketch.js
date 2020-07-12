var binBase, binRight, binLeft,ball,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
}

function setup() {
	createCanvas(1600,800);
	engine = Engine.create();
	world = engine.world;

	ball = new Balls(100,600,30,30);
	ball.shapeColor = color(0,255,0);
	World.add(world, ball);
	
	ground =  Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	  
	bin = new Bins(800,600,100,100);
	World.add(world, bin);

	Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
	background(0);
	
	ball.display();
	bin.display();
	//ground.display();

    drawSprites();																
 }

function keyPressed() {
	if (keyCode === 32) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-45});
	}	
}

