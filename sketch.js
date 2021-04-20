var stageImg,girlImg,bck;

function preload(){

stageImg = loadImage("stage.png");
girlImg = loadImage("girldancing.png")

}

function setup() {
  createCanvas(1600,750);

  bck = createSprite(800,225,800,450);
  bck.addImage(stageImg);
  bck.scale = 3;

  girl = createSprite(400,330, 50, 50);
  girl.addImage(girlImg);
  girl.scale = 0.5;

  ground = createSprite(400,700,1600,20)
  ground.visible = false;
}
  

function draw() {
  background(0);  
  drawSprites();

  textSize(25);
  stroke("black");
  fill ("red");
  text ("Press space,up,left and right arrows to follow the girl",10,50);

  if (keyDown("space") &&  girl.y !== 500) {
    girl.velocityY = -5;
    camera.position.y = girl.y;
  }
  if (keyDown(LEFT_ARROW)){

    girl.velocityX = -5;
    camera.position.x = girl.x;
  }
  if (keyDown(RIGHT_ARROW)){

    girl.velocityX = +5;
    camera.position.x = girl.x;
  }
  if (keyDown(UP_ARROW)) {
    girl.velocityY = -5;
    camera.position.y = girl.y;
  }
  
 girl.velocityY = 0.8 + girl.velocityY;
 girl.collide(ground);

  
}
