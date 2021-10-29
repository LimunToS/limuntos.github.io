class Bird{
    constructor(){
      this.setStartValues();
    }

    setStartValues(){
      this.X = 350;
      this.Y = 350;
      this.V = 0;
      this.A = 0;

      this.L = 24
      this.R = -24

      this.lagControler = true;
    }
    
    show(img){


      
      fill(255);
      circle(this.X,this.Y,50);
      line(this.X,this.Y+25,this.X,this.Y+90); // telo
      line(this.X,this.Y+90,this.X+this.L,this.Y+150); //leva noga
      line(this.X,this.Y+90,this.X+this.R,this.Y+150); //desna noga

      if(this.canJump){
        if(this.lagControler){
          this.L -=3;
          this.R +=3;
        }
        else{
          this.L +=3;
          this.R -=3; 
        }
      }
      if(this.L === 24 || this.L === -24){ 
        this.lagControler = !this.lagControler;
      }

      //ruke
      if(this.canJump){
        line(this.X,this.Y+45,this.X-25,this.Y+90);
        line(this.X,this.Y+45,this.X+25,this.Y+90);
      }else{
        line(this.X,this.Y+45,this.X-40,this.Y+60);
        line(this.X,this.Y+45,this.X+40,this.Y+60);
      }

      image(img,this.X-30,this.Y-30,70,70);  
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
        console.log(`${this.V} ${this.A}`)
        this.canJump = false;
      }
      
    }
    checkGround(){
        if(this.Y>=350){
            this.V = 0;
            this.A = 0;
            this.Y = 350;
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
        this.setStartValues();
      }
      setStartValues(){
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
            this.V = this.V +  (0.5/scl);
            console.log(this.V)  
            score++;
          }
        }
      }
  }
