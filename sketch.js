let ptica;
let prepreka;
let game = false;
let trajeGame = false;
var scl = 100;
var score = 0;
let button

let img2;
let img;
function preload() {
  img = loadImage('./niedwedz2.png');
  img2 = loadImage('./misic.png');
}

function setup() {

  

  frameRate(60);
  button = createButton('restart');
  button.position(500,200);
  button.mousePressed(restart);
  button.hide();
  
  console.log(button)
  createCanvas(windowWidth, windowHeight);

  ptica = new Bird();
  prepreka = new Prepreka();

}

function draw() {
  background(255);
  fill('green');
  rect(0,500,width,windowHeight-500); //tlo

  for(let i = 0;i<scl;i++){
    if(game = ptica.collision(prepreka)){
      
      ptica.V = 0;
      ptica.A = 0;
    }
    prepreka.update();
    ptica.update();
    
    ptica.checkGround();
    
  }
  prepreka.show();
  ptica.show(img2);
  if(game){
    prepreka.stop();
    button.show();
  }
  fill(0);
  textSize(32);
  text(score,10,30);
  image(img,-10,260,150,150);
}

function keyPressed(){

  if(keyCode === UP_ARROW || keyCode === 32){
    if(!game){
      prepreka.start()
      game = true;
    }
    ptica.jump();
  }
  return false;
}

// function mousePressed() {
//   if(!game) {
//     prepreka.start()
//     game = true;
//   } 
//   console.log(ptica.canJump)
//   ptica.jump(); 
// } 

function restart(){
  ptica.setStartValues();
  prepreka.setStartValues();
  button.hide();
  score = 0;
}
