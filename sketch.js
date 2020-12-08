var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var zombie_1,zombie_1Image;
var zombie_2,zombie_2Image;
var redBox_1,redBox_1Sprite,redBox_2,redBox_2Sprite,redBox_3,redBox_3Sprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	zombie_1Image=loadImage("zombie_1.jpg")
	zombie_2Image=loadImage("zombie_2.jpg")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	zombie_1 = createSprite(200,575,20,20);
	zombie_1.addImage(zombie_1Image);
	zombie_1.scale = 0.3;
	
	zombie_2 = createSprite(600,575,20,20);
	zombie_2.addImage(zombie_2Image);
    zombie_2.scale = 0.3;

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redBox_1Sprite = createSprite(width/2,660,200,20);
	redBox_1Sprite.shapeColor="red";

	redBox_2Sprite = createSprite(310,620,20,100);
	redBox_2Sprite.shapeColor="red";

	redBox_3Sprite = createSprite(490,620,20,100);
	redBox_3Sprite.shapeColor="red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 redBox_1 = Bodies.rectangle(width/2,660,200,20,{isStatic: true} );
	 World.add(world,redBox_1);
	 
	 redBox_2 = Bodies.rectangle(310,620,20,100,{isStatic: true} );
	 World.add(world,redBox_2);

	 redBox_3 = Bodies.rectangle(490,620,20,100,{isStatic: true} );
	 World.add(world,redBox_3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === 40) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
     Matter.Body.setStatic(packageBody,false);
  }
}