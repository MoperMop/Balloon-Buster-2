var balloon, background1, background2, bow, arrow;
var backgroundImage, blueBalloonImage, greenBalloonImage, redBalloonImage, pinkBalloonImage, bowImage, arrowImage;
var gameState;
var AIMING, FIRING;
var score, highScore;
//var balloonGroup;


function preload() {
  backgroundImage = loadImage("background0.png");

  blueBalloonImage = loadImage("blue_balloon0.png");
  greenBalloonImage = loadImage("green_balloon0.png");
  redBalloonImage = loadImage("red_balloon0.png");
  pinkBalloonImage = loadImage("pink_balloon0.png");

  bowImage = loadImage("bow0.png");

  arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(600, 600);


  background1 = createSprite(300, 300, 600, 600);
  background1.addImage("background", backgroundImage);
  background1.scale = 1.5;
  background1.velocityX = -3;
  background2 = createSprite(900, 300, 600, 600);
  background2.addImage("background", backgroundImage);
  background2.scale = 1.5;

  createBalloons();

  bow = createSprite(500,500,20,50);
  bow.addImage("bow", bowImage);
  bow.scale = 1.5;


  //balloonGroup = createGroup();


  FIRING = 0;
  AIMING = 1;

  gameState = AIMING;
}

function draw() {
  background(255);


  background2.x = background1.x + 600;
  if (background1.x === -300) {
    background1.x = 300;
  }


  if(gameState === AIMING){
    bow.y = mouseY;


    if(keyWentDown("SPACE")){
      fireArrow();
    }
  }
  if(gameState === FIRING){
    //arrow.velocityY = arrow.velocityY+0.03;


    //balloon.checkPop();
    

    if(arrow.x <= -60){
      arrow.lifetime = 0;


      gameState = AIMING;
    }
    //console.log(arrow.x);
  }


  drawSprites();
}