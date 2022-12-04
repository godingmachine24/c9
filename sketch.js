var box,box1;
function setup() {
  createCanvas(800,800);
  box = createSprite(400,400,30,30);
  box.shapeColor = 'red';

  box1 = createSprite(400,238,25,14);
  box1.shapeColor = 'blue';
}

function draw() 
{
background('gold');
  if(keyIsDown(RIGHT_ARROW)){
    box1.position.x = box1.position.x + 5;
  }

  if(keyIsDown(LEFT_ARROW)){
    box1.position.x = box1.position.x - 5;
  }

  if(keyIsDown(DOWN_ARROW)){
    box1.position.y = box1.position.y + 5;
  }

  if(keyIsDown(UP_ARROW)){
    box1.position.y = box1.position.y - 5;
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    box1.position.x = box1.position.x + 5;
  }

  if(keyIsDown(LEFT_ARROW)){
    box1.position.x = box1.position.x - 5;
  }

  if(keyIsDown(DOWN_ARROW)){
    box1.position.y = box1.position.y + 5;
  }

  if(keyIsDown(UP_ARROW)){
    box1.position.y = box1.position.y - 5;
  }
  

  drawSprites();

}






