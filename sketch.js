
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plant;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	plant = new trees(170,70,30,90);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


  drawSprites();
 plant.display();


}



