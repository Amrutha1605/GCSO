var car,wall;
var weight,speed;

function setup() {
  createCanvas(1600,400);

  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,60,100);

  speed=Math.round(random(55,90));
  weight=Math.round (random(400,1500));

  car.velocityX=speed;
  console.log("hi");
}

function draw() {
  background("black");  
  

if(wall.x-car.x<(car.width/2+wall.width/2)){
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  
  if (deformation >180){

    car.shapeColor=("red");
    wall.shapeColor=("white");
  }
  if (deformation<180 && deformation > 100){

    car.shapeColor=("yellow");
    wall.shapeColor=("white");
  }
  if(deformation<100){

    car.shapeColor=("green");
    wall.shapeColor=("white");
  }
}
  drawSprites();
}