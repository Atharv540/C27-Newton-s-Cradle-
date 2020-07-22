
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(300,200,20);
	ball2 = new Ball(350,200,20);
	ball3 = new Ball(400,200,20);
	ball4 = new Ball(450,200,20);
	ball5 = new Ball(500,200,20);

	string1 = new Sling(ball1.body,{x:300,y:100});
	string2 = new Sling(ball2.body,{x:350,y:100});
	string3 = new Sling(ball3.body,{x:400,y:100});
	string4 = new Sling(ball4.body,{x:450,y:100});
	string5 = new Sling(ball5.body,{x:500,y:100});

stable1 =  new Stabley(400,100,400,10);
	//stable2 = new Stable(400,400,800,10);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

  stable1.display();
 // stable2.display();

 if(keyDown("space")){
   Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-20,y:0});
   Matter.Body.applyForce(ball2.body,ball1.body.position,{x:-20,y:0});
 }

  drawSprites();
 
}
//function mouseDragged(){
  //  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
//}
/*function mouseReleased(){
    string1.fly();
}*/



