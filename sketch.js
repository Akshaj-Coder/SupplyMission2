var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dropzoneside1, dropzoneside2, dropzoneside3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);


	dropzoneside1 = createSprite(400,650,200,20);
	dropzoneside1.shapeColor = "red";
	
	dropzoneside2 = createSprite(500,610,20,100);
	dropzoneside2.shapeColor = "red";

	dropzoneside3 = createSprite(300,610,20,100);
	dropzoneside3.shapeColor = "red";

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	dropzoneside1  = Bodies.rectangle(400,600,200,20, {isStatic:true});
	World.add(world,dropzoneside1);
	
	dropzoneside2 = Bodies.rectangle(500,610,20,100, {isStatic: true});
	World.add(world,dropzoneside2);

	dropzoneside3 = Bodies.rectangle(300,610,20,100, {isStatic: true});
	World.add(world, dropzoneside3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}



	


