// https://editor.p5js.org/pmcfarla/sketches/jn0W_NPcv

var canvas;
var h1;

let playing = false;

//https://p5js.org/examples/imported-media-video/
let video;

let gameState = 0;
let hP = 100;
let front, car1, car2, dance, warn, endin;
let c1, c2, c3;
let cPicker;
let pPicker;
let sPicker

let p1, p2;
let s1,s2, s3;
let font;

let showC = false;

function preload(){
  soundFormats('mp3', 'wav');
 //sound
  p1 = loadSound("pouty1.mp3");
  p2 = loadSound("pouty3.mp3");
  s1 = loadSound("unhappy1.mp3");
  s2 = loadSound("unhappy2.mp3");
  s3 = loadSound("unhappy3.mp3");

  front = loadImage("images/start.jpg");
  car1 = loadImage("images/Annoyed.gif");
  car2 = loadImage("images/Angry.gif");
  dance = loadImage("images/xf.gif");
  warn  = loadImage("images/Warning.gif");
  endin = loadImage("images/End.jpg");

  


  //selection
  c1 = loadImage("images/1.gif");
  c2 = loadImage("images/2.gif");
  c3 = loadImage("images/3.gif");

 

  font = loadFont("Caveat-Bold.ttf");
}

function setup() {
  createCanvas(600, 425);


  video = createVideo(['videos/Endin.mp4']);
  video.size(600, 425);
  video.hide();

}

function draw() {
  background(237, 227, 223);



  // image(car1, 10, 10, 600, 400);
  if (gameState == 0){
    startScreen();
   
  } else if (gameState == 1){
     carN1();
    

    textFont(font);
    textAlign(CENTER);
    textSize(30);
    fill(56, 42, 40);
    text("This is Miss Purr, she is in a bad mood today...", 300, 30);
    text("But I'm annoying her anyways >:)", 300, 60);
    textSize(20);
    text("(Click on her face to annoy her & press Spacebar to listen to her meows~)", 300, 85);
    strokeWeight(1);
    

    
    // minusHealth();
    // text(`hP: ${hP}`, 300, 300);
    // image(car1, 10, 10, 600, 400);
    

   if (hP <= 95) gameState = 2; 
  } else if (gameState == 2){
    carN1();
    // minusHealth();
    // text(`hP: ${hP}`, 300, 300);
    // image(car1, 10, 10, 600, 400);
    
    patienceLevel();
    
   if (hP <= 60) gameState = 3; 
  } else if (gameState == 3){
    console.log("angry");
    carN2();
    // minusHealth();
    // text(`hP: ${hP}`, 300, 300);
    
    patienceLevel();

   if (hP <= 10) gameState = 4;
  } else if (gameState == 4) {

    // text(`hP: ${hP}`, 300, 300);
    image(endin, 0,0, width, height);
        // patienceLevel();
      image(video, 0, 0, width, height);
      video.play(); 
      // if (video.isPlaying()){
      //   startScreen();
      // }
      // noLoop();
      // playing = true;
  }

//to check the position of the mouse
  // console.log(mouseX, mouseY);

  // asked chatGPT for help
if (showC) {
  if (cPicker === 1) {
    image(c1, 0, 0, width, height);
    patienceLevel();

  } else if (cPicker === 2) {
    image(c2, 0, 0, width, height);
    patienceLevel();

  } else if (cPicker === 3) {
    image(c3, 0, 0, width, height);
    patienceLevel();
  }
}


}
//////  END OF DRAW FUNCTION  //////


function annoyMeow(){
pPicker = int(random(1,3));
 if (pPicker === 1){
  p1.play();
} else if (pPicker === 2){
  p2.play();
}

}

function angryMeow(){
sPicker = int(random(1,4));
 if (sPicker === 1){
  s1.play();
} else if (sPicker === 2){
  s2.play();
} else if (sPicker === 3){
  s3.play();
}
}

//////  Start Screen //////
function startScreen(){
   image(front, 0, 0, width, height);
   stroke(56, 42, 40);
   strokeWeight(12);
   noFill();
   ellipse(300,350, 80);

   fill(56, 42, 40);
   strokeJoin(ROUND);
   strokeWeight(5);
   triangle(285, 330, 285, 368, 320, 349);

   if(
    mouseX >= 270 &&
    mouseX <= 330 &&
    mouseY >= 310 &&
    mouseY <= 390
   ){
    stroke(56, 42, 40);
   strokeWeight(12);
   fill(56, 42, 40);
   ellipse(300,350, 80);

   fill(225);
   strokeJoin(ROUND);
   strokeWeight(5);
   triangle(285, 330, 285, 368, 320, 349);



   }

}

function keyPressed(){
  if ((gameState == 1 || gameState == 2) && (keyCode === ' ' || keyCode === 32)){
    annoyMeow();

  } if (gameState == 3  && (keyCode === ' ' || keyCode === 32)){
      angryMeow();
  
  }
}

////// Deal Damage//////
function mousePressed(){
  if (gameState == 0){ 
    startScreen();
    if (
    mouseX >= 270 &&
    mouseX <= 330 &&
    mouseY >= 310 &&
    mouseY <= 390 ){
    gameState = 1;
    }
}

//deals dmg once 
if (gameState == 1){
  if ( 
    mouseX >=  62 &&
    mouseX <= 348 &&
    mouseY >= 126 &&
    mouseY <= 295 
    // mouseIsPressed
  ){
    console.log("ow")
    
     hP -= 3;
      // shuffleC();

      cPicker = int(random(1, 4)); // 1..3
      showC = true;

      if (hP <= 95){
      gameState = 2; 
    } 
  }
}
if (gameState == 2){
  if ( 
    mouseX >=  62 &&
    mouseX <= 348 &&
    mouseY >= 126 &&
    mouseY <= 295 
    // mouseIsPressed
  ){
    console.log("ow")

    hP -= int(random(1, 5));
  
    // shuffleC();

      cPicker = int(random(1, 4)); // 1..3
      showC = true;
      patienceLevel();

      if (hP <= 60){
      gameState = 3; 
    } 
  }
}
if (gameState == 3){
  if ( 
    mouseX >=  62 &&
    mouseX <= 348 &&
    mouseY >= 126 &&
    mouseY <= 295 
    // mouseIsPressed
  ){
  console.log("angry")

  hP -= int(random(1, 5));
  
 
  // shuffleC();

      cPicker = int(random(1, 4)); // 1..3
      showC = true;
      patienceLevel();

      if (hP <= 10){
      gameState = 4;
 }
}
} 
if (gameState == 4){
  if ( 
   mouseX >=  62 &&
    mouseX <= 348 &&
    mouseY >= 126 &&
    mouseY <= 295 
    // mouseIsPressed
  ){
  //   image(endin, 0,0, width, height);
  // video.play();
  //  videoStarted = true;
  //  video.show();

  // hP -= int(random(1, 5));

  // shuffleC();

}
}
}
//////  END OF MOUSEPRESS //////


function carN1(){
  image(car1, 0, 0, width, height);
}


function carN2(){
  image(car2, 0, 0, width, height);

}

// function end(){
//   image(scream, 50, 50, 50, 50);
// }


// function minusHealth(){
//   if ( 
//     mouseX >=  0 &&
//     mouseX <= 600 &&
//     mouseY >= 200 &&
//     mouseY <= 600 &&
//     mouseIsPressed
//   ){
//     //hP -= int(random(5, 10));
//     // imageMode(CENTER);
//     // shuffleC();
//     // cPicker = int(random(1,4));
//   }
// } 

function mouseReleased() {
  // hide the c* image when the mouse is released
  showC = false;
}



// function shuffleC(){
//   cPicker = int(random(1,4));
// }

function patienceLevel(){
  // rectMode(CENTER);
  
  // fill(255,0,0);
  if (hP <= 95){
    fill(207, 191, 112);
  } if (hP <= 90){
    fill(207, 177, 112);
  } if (hP <= 80){
    fill(207, 169, 112);
  } if (hP <= 70){
    fill (207, 155, 112);
  } if(hP <= 60){
    fill(207, 141, 112);
  } if(hP <= 50){
    fill(212, 111, 89);
  } if(hP <= 40){
    fill(194, 69, 60);
  } if(hP <= 30){
    fill(166, 33, 33);
  } if (hP <= 20){
    fill(128, 19, 19);
  }
  strokeWeight(2);
  rect(80, 60, hP*4, 30, 15);
  // strokeWeight(5);
  noFill();
  rect(80, 60, 430, 30, 15);
  
  
  strokeWeight(1);
  fill(56, 42, 40);
  textSize(30);
  text("Patience Level", 150, 50);
  
}
