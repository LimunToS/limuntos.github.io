let ptica;
let prepreka;
let game = false;
var scl = 100000;
var score = 0;

let img;
function preload() {
  img = loadImage('niedwedz2.png');
}

function setup() {
  frameRate(60);
    
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
    
    ptica.gameOver();
    
  }
  prepreka.show();
  ptica.show();
  if(game){
    prepreka.stop();
  }
  fill(0);
  textSize(32);
  text(score,10,30);
  image(img,0,200);
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
