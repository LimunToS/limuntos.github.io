let ptica;
let prepreka;
let game = false;
var scl = 100;
var score = 0;

function setup() {
  frameRate(60);
  createCanvas(480, 400);
  ptica = new Bird();
  prepreka = new Prepreka();
}

function draw() {
  background(255);
  fill('green');
  rect(0,300,width,100);
  

  for(let i = 0;i<scl;i++){
    prepreka.update();
    ptica.update();
    game = ptica.gameOver()||ptica.collision(prepreka);
    
  }
  prepreka.show();
  ptica.show();
  if(game){
    prepreka.stop();
  }
  textSize(32);
  text(score,10,30);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    if(!game){
      prepreka.start()
      game = true;
    }
    ptica.jump();
  }
  return false;
}