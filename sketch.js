var bath1, bath2;
var eat1, eat2;
var gym1, gym2, gym11, gym12;
var move, modrink1, drink2;
var eat1,ve1;
var iss, brush, sleep;


function preload(){
  
bg = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
eat = loadAnimation("eat1.png", "eat2.png");
drink = loadAnimation("drink1.png", "drink2.png");
bath = loadAnimation("bath1.png", "bath2.png");
move = loadAnimation("move.png","move1.png");
}
function setup() {
  createCanvas(800,400);

  bgg = createSprite(400, 200);
  bgg.addImage(bg);
  bgg.scale = 0.2;

  astronaut = createSprite(300, 200);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

  createEdgeSprites();

}

function draw() {

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bath", bath);
    astronaut.changeAnimation("bath");
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eat", eat);
    astronaut.changeAnimation("eat");
  }
  if(keyDown("D")){
    astronaut.addAnimation("drink", drink);
    astronaut.changeAnimation("drink");
  }
  if(keyDown("m")){ astronaut.addAnimation("moving", move); 
  astronaut.changeAnimation("moving"); 
  astronaut.velocityX = 1; 
  astronaut.velocityY = 1; 

  astronaut.bounceOff(edges);
}

  drawSprites();
}
