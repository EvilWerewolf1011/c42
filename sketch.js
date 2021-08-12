var spaceImg,scraft1,scraft2,scraft3,scraft4,issImg;
var iss,spacecraft;
var hasDocked = false;

function preload()
{

  issImg = loadImage("iss.png");
  scraft1 = loadImage("spacecraft1.png");
  scraft2 = loadImage("spacecraft2.png");
  scraft3 = loadImage("spacecraft3.png");
  scraft4 = loadImage("spacecraft4.png");
  spaceImg = loadImage("spacebg.jpg");

}


function setup() {
  createCanvas(800,400);

  spacecraft = createSprite(280,240);
  spacecraft.addImage(scraft1);
  spacecraft.scale = 0.18;

  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.7;

}

function draw() {
  background(spaceImg);

  if(!hasDocked)
  {
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW"))
    {
      spacecraft.y = spacecraft.y - 2;
    }

    if(keyDown("DOWN_ARROW"))
    {
      spacecraft.y = spacecraft.y + 2;
    }

    if(keyDown("LEFT_ARROW"))
    {
      spacecraft.x = spacecraft.x - 2;
    }

    if(keyDown("RIGHT_ARROW"))
    {
      spacecraft.x = spacecraft.x + 2;
    }

  }

  if (keyDown("LEFT_ARROW"))
  {
    spacecraft.addImage(scraft4);
  }

  if (keyDown("RIGHT_ARROW"))
  {
    spacecraft.addImage(scraft3);
  }

  if (keyDown("UP_ARROW"))
  {
    spacecraft.addImage(scraft2);
  }

  if (keyDown("DOWN_ARROW"))
  {
    spacecraft.addImage(scraft1);
  }

  console.log(spacecraft.x);

  if(spacecraft.y = (iss.y+70) && spacecraft.x <= (iss.x-80))
  {
     hasDocked = true;
     textSize(25);
     fill("white")
     text("Docking Successful!", 200, 300); 
    }


  drawSprites();
}