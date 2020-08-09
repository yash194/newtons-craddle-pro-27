
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobDiametr;


function setup() {
	createCanvas(1200, 700);
bobDiametr=40;

	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("red");
  ground = Bodies.rectangle(width/2, 665, width, 10 , {isStatic:true} );
  World.add(world, ground);

  
  log=new box(360,200,350,20);
	//Create the Bodies Here.
  
    b1 = new bob(360-80,400,40);
    b2 = new bob(360-40,400,40);
    b3 = new bob(360,400,40);
    b4 = new bob(360+40,400,40);
    b5 = new bob(360+80,400,40);
  
	r1 = new Rope(b1.body,log.body,-bobDiametr*2,0);
	r2 = new Rope(b2.body,log.body,-bobDiametr,0);
	r3 = new Rope(b3.body,log.body,0,0);
	r4 = new Rope(b4.body,log.body,bobDiametr,0);
	r5 = new Rope(b5.body,log.body,bobDiametr*2,0);
  Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
  b5.display();
  b1.display();
b2.display();
b3.display();
    b4.display();
    
log.display();
  r1.display();
  r2.display();
  r3.display();
r4.display();
r5.display();



 
}


function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(b1.body,b1.body.position,{x:-90,y:90});
  
  }
}




