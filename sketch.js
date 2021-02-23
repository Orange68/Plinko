const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ball;
var plinko;
var ground;
var column1;



function setup() {
  createCanvas(800,400);


  engine = Engine.create();
	world = engine.world;
  ball=new ball
  plinko=new plinko
  ground=new ground
  column1 = new column
  
  Engine.run(engine);
}

function draw() {
  background("black");  
  drawSprites();
}