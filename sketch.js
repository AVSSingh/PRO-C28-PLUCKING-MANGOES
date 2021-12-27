const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//const Constraint = Matter.Constraint;


var boy1, boy_img;
var ground1;
var tree1;
var stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11;
var thrower;

function preload() {
  boy_img=loadImage("boy.png");
}

function setup() {
  createCanvas(800,700);
 
  engine = Engine.create();
  world = engine.world;

  boy1= Bodies.rectangle(200,630,10,10);

  ground1= new Ground(400,690,800,20);

  tree1 = new Tree(600,490,2,2);

  stone1=new Stone(175,650,30,30);
  mango1=new Mango(600,350,30,30);
  mango2=new Mango(540,370,40,40);
  mango3=new Mango(550,450,30,30);
  mango4=new Mango(500,450,30,30);
  mango5=new Mango(710,460,30,30);
  mango6=new Mango(580,380,30,30);
  mango7=new Mango(610,400,30,30);
  mango8=new Mango(650,460,20,20);
  mango9 = new Mango(600,440,20,20);
  mango10= new Mango(720,400,30,30);
  mango11= new Mango(740,440,30,30);

  

  thrower= new Constraint(stone1.body,{x:170,y:580});
  
}

function draw() {
  background(225);  

  Engine.update(engine);
 
  imageMode(CENTER);
  image(boy_img,boy1.position.x,boy1.position.y,100,200);

  tree1.display();

  ground1.display();

  stone1.display();

  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  
  thrower.display();

  

  
  DetectCollision(stone1,mango1);
  DetectCollision(stone1,mango2);
  DetectCollision(stone1,mango3);
  DetectCollision(stone1,mango4);
  DetectCollision(stone1,mango5);
  DetectCollision(stone1,mango6);
  DetectCollision(stone1,mango7);
  DetectCollision(stone1,mango8);
  DetectCollision(stone1,mango9);
  DetectCollision(stone1,mango10);
  DetectCollision(stone1,mango11);
  

  
  
  fill("black")
  stroke(255);
  textSize(40)
  text("Press spacebar to throw the stone again",50,50)
  
 
}

function mouseDragged()
{
  Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  thrower.fly();
}

function keyPressed()
{
  if(keyCode===1)
  {
    Matter.Body.setPosition(stone1.body,{x:140,y:315});
    thrower.attach(stone1.body);
  }
}