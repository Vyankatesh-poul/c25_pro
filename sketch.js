var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "1234567890";
var drop;
var rain = [];




function setup() {
  createCanvas(displayWidth,displayHeight);
  
  for(var i = 0; i<300; i++){
    rain[i] = new Drop();
  }
  
  
}

function draw() {
  background(204,204,204);
  //  drop.fall();
  //  drop.show();
  for(var i = 0; i<300 ; i++){
    rain[i].show();
    rain[i].fall();
  }
  
  drawSprites();
}