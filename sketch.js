const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var playerBase,baseImg;
var player,playerImg;
var playerArcher,playerAimg;
var dartboard,dartboardimg;
var arrow,arrowimg; 

function preload() {
  backgroundImg = loadImage("background.png");
  baseImg = loadImage("base.png");  
  playerImg = loadImage("player.png");
  playerAimg = loadImage("playerArcher.png");
  dartboardimg = loadImage("board.png");
  arrowimg= loadImage("arrow.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  
  var options = {
     isStatic:true
  }

  playerBase=Bodies.rectangle(150,350,200,200,options);
  World.add(world,playerBase);  

  player = Bodies.rectangle(209,230,100,150,options);
  World.add(world,player);

  playerArcher=Bodies.rectangle(270,200,100,150,options);
  World.add(world,playerArcher);

  dartboard=Bodies.rectangle(870,200,100,150,options);
  World.add(world,dartboard);
  

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
  rectMode(CENTER);
  image(baseImg,playerBase.position.x,playerBase.position.y,200,200);
  image(playerImg,209,230,100,150);
  image(playerAimg,playerArcher.position.x,playerArcher.position.y,100,150);
  image(dartboardimg,dartboard.position.x,dartboard.position.y,100,150);  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}


