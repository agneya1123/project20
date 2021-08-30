
var garden,gardenImg;
var cat,catImg;
var cat1,cat1Img;
var cat2,cat2Img;
var mouse,mouseImg;
var mouse1,mouse1Img;
var mouse2,mouse2Img;
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
   catImg=loadAnimation("images/cat1.png");
   cat1Img=loadAnimation("images/cat2.png","images/cat3.png");
   cat2Img=loadAnimation("images/cat4.png");
   mouseImg=loadAnimation("images/mouse1.png");
   mouse1Img=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouse2Img=loadAnimation("images/jerry.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden = createSprite(400,400);
garden.addImage(gardenImg);
garden.scale = 1.1;

cat = createSprite(700,550);
cat.addAnimation("cat",catImg);
cat.scale = 0.2;

mouse = createSprite(120,550);
mouse.addAnimation("mouse",mouseImg);
mouse.scale = 0.2;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/9){
    mouse.addAnimation("collide",mouse2Img);
    mouse.changeAnimation("collide");
    cat.addAnimation("touch",cat2Img);
    cat.changeAnimation("touch");
    cat.x = 700;
    cat.velocityX=0;
   
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===RIGHT_ARROW){
   cat.addAnimation("move",cat1Img);
   cat.changeAnimation("move");
   cat.frameDelay= 10;
   cat.velocityX = -2;
  }

  if(keyCode===LEFT_ARROW){
    mouse.addAnimation("teasing",mouse1Img);
    mouse.changeAnimation("teasing");
    mouse.frameDelay= 10;

   }

}

