var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

var rihanna, bruno, hobi, mj, mj2;
var rihannaIMG, brunoIMG, hobiIMG, mjIMG;
var correct;

function preload(){
  rihannaIMG = loadImage("Images/riri.jpg");
  brunoIMG = loadImage("Images/Bruno_Mars.jpg");
  hobiIMG = loadImage("Images/Jung_Hoseok.jpg");
  mjIMG = loadImage("Images/Mj.jpg");
}

function setup(){
  canvas = createCanvas(400,500);
 
  database = firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();

  rihanna = createSprite(300,320,20,20);
  rihanna.addImage(rihannaIMG);

  hobi = createSprite(300,180,20,20);
  hobi.addImage(hobiIMG);
  
  mj = createSprite(100,320,20,20);
  mj.addImage(mjIMG);

  bruno = createSprite(100,180,20,20);
  bruno.addImage(brunoIMG);

}


function draw(){
  background("pink");

  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();

    correct = createSprite(100,305,150,140);
    correct.shapeColor = "lightGreen";
    mj2 = createSprite(100,320,20,20);
    mj2.addImage(mjIMG);
  }

  drawSprites();
}
