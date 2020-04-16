class Drop{
    constructor(){
        this.x = Math.round(random(0,displayWidth));
        this.y = Math.round(random(0,displayHeight));
        this.ySpeed = 30;

    }
   fall(){
       this.y = this.y+ this.ySpeed;
       if(this.y>displayHeight){
            this.y = Math.round(random(0,displayHeight));
       }
       this.show();   
   }
   

   show(){
      var rand = Math.round(random(0,letters.length));
      fill("red");
     text(letters[rand],this.x+20,this.y-80);
     line(this.x ,this.y,this.x,this.y+10);
   }
}