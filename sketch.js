let backgroundColor = 0
let freddyButton = true;
let foxyButton = true;
let chicaButton = true;
let bonnieButton = true;
let randomButton = true;
let clearButton = true;
let randomImage = [];

function preload() {
  img1 = loadImage('/assets/freddyfaz.png');
  img2 = loadImage('/assets/foxy.png');
  img3 = loadImage('/assets/bonnie.png');
  img4 = loadImage('/assets/chica.png');
  randomImage[0] = loadImage('/assets/cupcake.png');
  randomImage[1] = loadImage('/assets/gametheory.jpg');
  randomImage[2] = loadImage('/assets/joshhuterson.jpg');
  randomImage[3] = loadImage('/assets/markiplier.jpg');
  whistle = loadSound("whistlesong.mp3");
  
}

function setup(){
  rectMode(CENTER);
  imageMode(CENTER);
  let canvas = createCanvas(400, 400);
  background(backgroundColor);
  canvas.parent('sketch-holder');
  
  //MUSIC
  let musicButton = createButton('Play/Pause');
  musicButton.parent('button-holder-top');
  musicButton.mousePressed(playMusic);
  
  //FREDDY
  let button1 = createButton('Freddy!');
  button1.parent('button-holder1');
  button1.mousePressed(drawFreddy);
  
  //FOXY
  let button2 = createButton('Foxy!');
  button2.parent('button-holder1');
  button2.mousePressed(drawFoxy);
  
  //CHICA
  let button3 = createButton('Chica!');
  button3.parent('button-holder1');
  button3.mousePressed(drawChica);
  
  //BONNIE
  let button4 = createButton('Bonnie!');
  button4.parent('button-holder1');
  button4.mousePressed(drawBonnie);
  
  //RANDOM IMAGE
  let button5 = createButton('Surprise :)');
  button5.parent('button-holder1');
  button5.mousePressed(drawRandom);
  
  //CLEAR
  let button6 = createButton('Clear Canvas');
  button6.parent('button-holder2');
  button6.mousePressed(clearCanvas);
  
  //SAVE
  let button7 = createButton('Save Image');
  button7.parent('button-holder2');
  button7.mousePressed(saveImage);
  
}

function draw(){
}

function drawFreddy(){
  let freddyX = random (0,400);
  let freddyY = random (0,400);
   if (freddyButton) {
    image(img1, freddyX,freddyY, 130, 130);
    freddyButton = true;
    console.log(freddyButton);

  }
}

function drawFoxy(){
  let foxyX = random (0,400);
  let foxyY = random (0,400);
   if (foxyButton) {
    image(img2, foxyX,foxyY, 130, 130);
    foxyButton = true;
    console.log(foxyButton);
  }
}

function drawChica(){
  let chicaX = random (0,400);
  let chicaY = random (0,400);
    if (chicaButton) {
      image (img4, chicaX, chicaY, 130, 130);
      chicaButton = true;
      console.log(chicaButton);
    }
}

function drawBonnie(){
  let bonnieX = random (0,400);
  let bonnieY = random (0,400);
    if (bonnieButton) {
      image (img3, bonnieX, bonnieY, 130, 130);
      chicaButton = true;
      console.log(bonnieButton);
    }
  
}

function drawRandom(){
  let randomX = random (0,400);
  let randomY = random (0,400);
  let ranImg = int (random(randomImage.length))
    image(randomImage[ranImg], randomX, randomY, 200, 200)
  
}

function clearCanvas(){
  if (clearCanvas){
    background(backgroundColor);
    console.log (clearCanvas);
    
  }
}

function mousePressed(){
  
  if (mouseY > 0 && mouseY < 400) {

  strokeWeight(3)
  fill (235, 210, 21)
  stroke (148, 136, 43)
  textSize(32)
  ellipse (mouseX, mouseY, 40, 40)
  text ('$', mouseX-8, mouseY+11)
      
  } else if (mouseY > 400 && mouseY < 0){ 
  
  }
}

function saveImage(){
   saveCanvas('supercoolcanvas.jpg');
  
}

function playMusic(){
  
  if (!whistle.isPlaying()){
    whistle.setVolume(0.3);
    whistle.play();
  } else {
    whistle.pause();
  }
}