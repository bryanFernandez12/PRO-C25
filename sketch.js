
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin, dustbinImage
function preload()
{
dustbinImage = loadImage("dustbingreen.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		paper = new Paper(50,630, 30)
		ground = new Ground(400, 650, 800,20)
		containerLeft = new Container(570,575, 20,100)
		containerRight = new Container(679,575,20,100)
		containerCenter = new Container(625,630,130,20);
		dustbin = createSprite(625,570)
		dustbin.addImage(dustbinImage)
		dustbin.scale = 0.5
		Engine.run(engine);

}


function draw() {
	background("blue");
	rectMode(CENTER);
  text(mouseX+","+mouseY, mouseX, mouseY)
paper.display(); 
ground.display();
containerLeft.display();
containerRight.display();
containerCenter.display();
drawSprites();

}

function keyPressed() {
	if (keyCode === RIGHT_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:49,y:-95})
	 }
   }

