const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var gameState = "onSling";

var world,engine;
var polygon1;
var box1,box2,box3,box4,box5,box6;
var ground1;
var ground2,ground3,ground4;
var block1,block2,block3;
var polgon1;
var chain1;


function preload(){
}

function setup() {
createCanvas(800, 800);

engine = Engine.create();
world = engine.world;

Engine.run(engine);

box1 = new Box(400,440,50,60);
box2 = new Box(350,440,50,60);
box3 = new Box(435,440,50,60);
box4 = new Box(360,420,50,60);
box5 = new Box(425,420,50,60);
box6 = new Box(410,400,50,60);

block1 = new Block(420,370,50,60);
block2 = new Block(360,370,50,60);
block3 = new Block(380,320,50,60);

ground1 = new Ground(400,650,800,15);
ground2 = new Ground(400,550,240,15);
ground3 = new Ground(100,585,200,120);

polygon1= new Polygon(200,200,40);

chain1 = new Chain(polygon1.body,{x:180,y:300});


}

function draw() {
    background("lightgreen");
   rectMode(CENTER);
   
   ground1.display();
   ground2.display();
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
block1.display();
block2.display();
block3.display();
ground3.display();
polygon1.display();
chain1.display();

   drawSprites();
   
}

function mouseDragged(){
   if (gameState!=="launched"){
       Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
   }
}



function mouseReleased(){
   chain1.fly();
   gameState = "launched";
}