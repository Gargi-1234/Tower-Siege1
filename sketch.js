const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ground;
var stand1,stand2;
var wall1,wall2
var wallS1,wallS2
var slingShot,ufo;
var rock_img,ufo_Img;
var ball2,bg2, ufoBody
var planet1,planet2,planet3,planet4,planet5,planet6,planet7,planet8,planet9,planet10,planet11,planet12;
var img1,img2,img3,img4,img5,img6,img7,img2,img10,img11,img12
var spaceBlock1, spaceBlock2

function preload(){
  rock_img = loadImage("images/hexagon.png");
  ufo_Img = loadImage("images/ufo.png")
  bg2 = loadImage("images/space.png")
  img1 = loadImage("images/planet/1.png")
  img2 = loadImage("images/planet/2.png")
  img3 = loadImage("images/planet/3.png")
  img4 = loadImage("images/planet/4.png")
  img5 = loadImage("images/planet/5.png")
  img6 = loadImage("images/planet/6.png")
  img7 = loadImage("images/planet/7.png")
  img8 = loadImage("images/planet/8.png")
  img9 = loadImage("images/planet/9.png")
  img10 = loadImage("images/planet/10.png")
  img11 = loadImage("images/planet/11.png")
  img12 = loadImage("images/planet/12.png")
}
function setup() {

  createCanvas(1250,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  
  ufoBody = new Block(0,0,10,10)

  spaceBlock1 = new Block(250,100,50,50)
  Matter.Body.setStatic(spaceBlock1.body, true)
  spaceBlock2 = new Block(700,300,50,50)
  Matter.Body.setStatic(spaceBlock2.body, true)

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //top
  blocks9 = new Block(700,95,30,40);

  wall1 = new Stand(900,200,10,400)
  wall2 = new Stand(5,200,10,400)
  wall3 = new Stand(1245,200,10,400)
  /*//ball holder with slings
  ball = Bodies.circle(10,200,20);
  World.add(world,ball);
*/

  ball2 = new Ball(100,200,20);
  Matter.Body.setStatic(ball2.body, false)

  slingShot = new Slingshot(ball2.body,{x:100,y:200});

  wallS1 = createSprite(900,50,10,50)
  wallS1.visible = false
  ufoSprite = createSprite(955,50,50,50)
  ufoSprite.addImage(ufo_Img)
  ufoSprite.velocityX = 1
  ufoSprite.scale = 0.5
  //ufoSprite.visible = false
  wallS2 = createSprite(1245,50,10,50)
  wallS2.visible = false

  planet1 = new Ball(1100,300,15);
  
  planet2 = new Ball(1170,330,15);
	planet3 = new Ball(1010,100,15);
	planet4 = new Ball(1000,170,15);
	planet5 = new Ball(1100,170,15);
	planet6 = new Ball(1000,230,15);
	planet7 = new Ball(950,230,15);
	planet8 = new Ball(1140,150,15);
	planet9 = new Ball(1100,230,15);
	planet10 = new Ball(1200,200,15);
	planet11 = new Ball(950,300,15);
	planet12 = new Ball(1200,160,15);


}

function draw() {
  background(56,44,44); 
 // Engine.update(engine);
 image(bg2 ,900,0,400,500);
 
  ufoBody.body.position.x = ufoSprite.x
  ufoBody.body.position.y = ufoSprite.y

  imageMode(CENTER);
  // write image() to display the polygon image 
  //use the same x and y position as ball
  image(rock_img,ball2.body.position.x,ball2.body.position.y,ball2.body.radius/2, ball2.body.radius/2)

  image(img1,planet1.body.position.x,planet1.body.position.y,planet1.body.radius/10, planet1.body.radius/10)
  image(img2,planet2.body.position.x,planet2.body.position.y,planet2.body.radius/10, planet2.body.radius/10)
  image(img3,planet3.body.position.x,planet3.body.position.y,planet3.body.radius/10, planet3.body.radius/10)
  image(img4,planet4.body.position.x,planet4.body.position.y,planet4.body.radius/10, planet4.body.radius/10)
  image(img5,planet5.body.position.x,planet5.body.position.y,planet5.body.radius/10, planet5.body.radius/10)
  image(img6,planet6.body.position.x,planet6.body.position.y,planet6.body.radius/10, planet6.body.radius/10)
  image(img7,planet7.body.position.x,planet7.body.position.y,planet7.body.radius/10, planet7.body.radius/10)
  image(img8,planet8.body.position.x,planet8.body.position.y,planet8.body.radius/10, planet8.body.radius/10)
  image(img9,planet9.body.position.x,planet9.body.position.y,planet9.body.radius/10, planet9.body.radius/10)
  image(img10,planet10.body.position.x,planet10.body.position.y,planet10.body.radius/10, planet10.body.radius/10)
  image(img12,planet11.body.position.x,planet11.body.position.y,planet11.body.radius/10, planet11.body.radius/10)
  image(img12,planet12.body.position.x,planet12.body.position.y,planet12.body.radius/10, planet12.body.radius/10)
/*
  image(bg2,spaceBlock1.body.position.x,spaceBlock1.body.position.y,spaceBlock1.body.width/100, spaceBlock1.body.height/10)
  image(bg2,spaceBlock2.body.position.x,spaceBlock2.body.position.y,spaceBlock2.body.width/10, spaceBlock2.body.height/10)
*/
  stroke(1,1,1);
  //strokeWeight(5)
  fill(149, 222, 183);
  textSize(20);
  fill("lightYellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();

  strokeWeight(2);
  stroke(0,0,0);
  
  ufoSprite.bounceOff(wallS2)
  ufoSprite.bounceOff(wallS1)

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue");
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  ufoBody.display()
  wall1.display()
  wall2.display()
  wall3.display()
  ball2.display()
  fill("black")
  spaceBlock1.display()
  spaceBlock2.display()
  
  planet1.display()
  planet2.display()
  planet3.display()
  planet4.display()
  planet5.display()
  planet6.display()
  planet7.display()
  planet8.display()
  planet9.display()
  planet10.display()
  planet11.display()
  planet12.display()


  slingShot.display();

  if(detectollision(ball2,spaceBlock2)||detectollision(ball2,spaceBlock1)){
    ball2.body.position.x = ufoSprite.x
    ball2.body.position.y = ufoSprite.y
  }

  drawSprites()
}

function keyPressed(){
  if(keyCode === 32){
    
    slingShot.attach(ball2.body);
    
 }
}

function mouseDragged(){
  Matter.Body.setPosition(ball2.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}

function sinkOnCollision(lobject1,lobject2){

  lobject2Pos=lobject2.body.position
  lobject1Pos=lobject1.body.position
  
  var distance=dist(lobject1Pos.x, lobject1Pos.y, lobject2Pos.x, lobject2Pos.y)
  	if(distance<=lobject2.r+lobject1.r)
    {
  	  Matter.Body.setStatic(lobject2.body,false);
    }

  }

  function detectollision2(object1,object2){

    object1pos=object1.body.position
    object2pos=object2.body.position
    
    var distance=dist(object2pos.x, object2pos.y, object1pos.x, object1pos.y)
      if(distance<=object1.r+object2.r){
        return true;
      }
    else {return false;}
    }


    function detectollision(object1,object2){
  
      object1pos=object1.body.position
    object2pos=object2.body.position

      if (object1pos.x - object2pos.x < object2pos.width/2 + object1pos.width/2
        && object2pos.x - object1pos.x < object2pos.width/2 + object1pos.width/2) {
          return true;
    }
    if (object1pos.y - object2pos.y < object2pos.height/2 + object1pos.height/2
      && object2pos.y - object1pos.y < object2pos.height/2 + object1pos.height/2){
        return true;
    }
    }