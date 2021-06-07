var car,wall;
var speed,weight;
function setup(){
  createCanvas(1600,400);
  car = createSprite(200,200,50,50);
  wall = createSprite(1200,200,60,100);
  car.velocityX=5;
  speed=random(25,31);
  weight=random(400,1500);

function draw() {
  background("white");
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180)
  {
   car.shapeColor=color("yellow");
   wall.shapeColour("white");
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=colour("green");
  wall.shapeColour=colour("white");
}
if(deformation<100)
  {
    car.shapeColor=colour("red");
    wall.shapeColor=colour("white")
  }
}
  
  drawSprites();
}