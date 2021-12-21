var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var redgroup,blugroup,greengroup,pinkgroup,arrowgroup
var count = 0
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage=loadImage("green_balloon0.png");
  blue_balloonImage=loadImage("blue_balloon0.png");
  pink_balloonImage=loadImage("pink_balloon0.png")
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  redgroup=new Group()
  bluegroup=new Group()
  greengroup=new Group()
  pinkgroup=new Group()
arrowgroup=new Group()

}

function draw() {
 background(0);
  // moving ground
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous balloons
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    else if(select_balloon==2) {
      greenBalloon()

    }
    else if(select_balloon==3){
blueBalloon()
    }
    else{
      pinkBalloon()
    }
  }
  if(arrowgroup.isTouching(redgroup)){
redgroup.destroyEach()
arrowgroup.destroyEach()
count=count+2
  }

  if(arrowgroup.isTouching(greengroup)){
    greengroup.destroyEach()
    arrowgroup.destroyEach()
    count=count+4
      }

      if(arrowgroup.isTouching(bluegroup)){
        bluegroup.destroyEach()
        arrowgroup.destroyEach()
        count=count+6
          }

          if(arrowgroup.isTouching(pinkgroup)){
            pinkgroup.destroyEach()
            arrowgroup.destroyEach()
            count=count+10
              }

  drawSprites();
  fill("red")
  text("score="+count,50,80)
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowgroup.add(arrow)
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
redgroup.add(red)
}

function blueBalloon() {
  //write code for spwaning blue balloons
  var blue = createSprite(0,Math.round(random(0,400)))
  blue.addImage("blue",blue_balloonImage);
  blue.velocityX=5
  blue.scale=0.1
  bluegroup.add(blue)
}

function greenBalloon() {
  //write code for spwaning green balloons
  var green = createSprite(0,Math.round(random(0,400)))
  green.addImage("green",green_balloonImage)
  green.velocityX=5
  green.scale=0.1
  greengroup.add(green)
}

function pinkBalloon() {
  //write code for spwaning pink balloons
  var pink = createSprite(0,Math.round(random(0,400)))
pink.addImage("pink",pink_balloonImage);
pink.velocityX=5
pinkgroup.add(pink)
}
