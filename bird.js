class Bird{
    constructor(){
      this.X = 350;
      this.Y = 350;
      this.V = 0;
      this.A = 0;
    }
    
    show(img){
      image(img,this.X-30,this.Y-5);  
      fill(255);
      circle(this.X,this.Y,50);
      line(this.X,this.Y+25,this.X,this.Y+90); // telo
      line(this.X,this.Y+90,this.X-25,this.Y+150); //leva noga
      line(this.X,this.Y+90,this.X+25,this.Y+150); //desna noga

      line(this.X,this.Y+45,this.X-25,this.Y+90);
      line(this.X,this.Y+45,this.X+25,this.Y+90);
      //rect(this.X,this.Y,15,150);
    }
    
    update(){
      this.Y -= this.V;
      this.V -= this.A;
    }
    
    jump(){
      if(this.canJump){
        this.V = 10/scl;
        this.A = 0.25/(scl*scl);
        this.canJump = false;
      }
      
    }
    gameOver(){
        if(this.Y>=350){
            this.V = 0;
            this.A = 0;
            this.canJump = true;
        }
    }
    collision(prepreke){
      for(let prep of prepreke.Arr){
        if(this.X+25>prep.x && this.X-25<prep.x+40 &&
          (this.Y+150>500-prep.y)) return true;
      }
      return false;
    }
  }

  class Prepreka{
      constructor(){
          this.Arr = [];
          this.Arr.push(createVector(1300,125));
          this.Arr.push(createVector(1800,125));
          this.Arr.push(createVector(2300,125));
          this.Arr.push(createVector(2800,125));
          this.udaljenost = 500;
          this.V = 0;
      }
      start(){
        this.V = 5/scl;
      }
      stop(){
        this.V = 0;
      }
      show(){
        for(let prep of this.Arr){
          //fill('red');
          //rect(prep.x,500-prep.y,40,prep.y);
          fill('orange');
          circle(prep.x+20,500-prep.y+24,48);
          fill('brown');
          arc(prep.x-10,525,50,50,4*QUARTER_PI-0.65539816339,0.65539816339,CHORD);
          arc(prep.x+50,525,50,50,4*QUARTER_PI-0.65539816339,0.65539816339,CHORD);
          rect(prep.x,500-prep.y+40,40,prep.y);
          fill('black')
          line(prep.x+20,500-prep.y,prep.x+20,500-prep.y+15);
        }
      }

      update(){
        for(let prep of this.Arr){
          prep.x-=this.V;
        }
        let maxx=0;
        for(let prep of this.Arr){
          if(prep.x>maxx)maxx=prep.x;
        }
        //console.log(maxx);
        for(let prep of this.Arr){
          if(prep.x<-40){
            let rand = 125;
            prep.x = maxx+this.udaljenost;
            prep.y = rand;
            //console.log(rand);
            this.udaljenost+=17.5;
            this.V+=0.5/scl;  
            score++;
          }
        }
      }
  }
