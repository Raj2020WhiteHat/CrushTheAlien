var bow , arrow,  bkg, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var boss;

function preload(){
  
 
  bkgI = loadImage("background0.png");
  arrowImage = loadImage("missile (2).PNG");
  bowImage = loadImage("UdanKhatola.png");
  red_balloonImage = loadImage("marpitai.png");
  green_balloonImage = loadImage("marpitai.png");
  pink_balloonImage = loadImage("marpitai.png");
  blue_balloonImage = loadImage("marpitai.png");
  
}



function setup() {
  createCanvas(400, 500);
  
  //creating background
  bkg = createSprite(200,250,400,500);
  bkg.addImage(bkgI);
  bkg.scale = 1.8;
  
  // creating bow to shoot arrow
  bow = createSprite(330,450,20,50);
  bow.addImage(bowImage); 
  bow.scale = 0.2;
  
   score = 0  
  redB= new Group();
  greenB= new Group();
   blueB= new Group();
  pinkB= new Group();
  arrowGroup= new Group();
 
  
}

function draw() {

  // moving ground
    background.velocityX = -2       

    if (background.x < 0){
      background.x = background.width/2;
    }
  
  //moving bow
  bow.x = World.mouseX
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 40 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }
  
  if (arrowGroup.isTouching(redB)) {
  redB.destroyEach();
  arrowGroup.destroyEach();
    score=score+50;
}




 if (arrowGroup.isTouching(greenB)) {
  greenB.destroyEach();
  arrowGroup.destroyEach();
  score=score+50;
}



 if (arrowGroup.isTouching(blueB)) {
  blueB.destroyEach();
  arrowGroup.destroyEach();
  score=score+50;
}



if (arrowGroup.isTouching(pinkB)) {
  pinkB.destroyEach();
  arrowGroup.destroyEach();
  score=score+50;
}

  
  drawSprites();
    text("YOUR SCORE:-"+ score, 50,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 250)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 5;
  red.lifetime = 150;
  red.scale = 0.2;
  redB.add(red);
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 250)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 7;
  blue.lifetime = 150;
  blue.scale = 0.2;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 250)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 5;
  green.lifetime = 150;
  green.scale = 0.2;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 250)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 12;
  pink.lifetime = 150;
  pink.scale = 0.2;
  pinkB.add(pink);
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(330,480,20,50);
  arrow.addImage(arrowImage);
  
  arrow.x=bow.x;
  arrow.velocityY = -15;
  arrow.lifetime = 100;
  arrow.scale = 0.2      ;
  arrowGroup.add(arrow);
   
}
