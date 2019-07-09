var x = 0;
var y = 0;
var dx = 0;
var dy = 0;
var MAX_SPEED = 30;
var FROG_SIZE = 128;
var FLOOR = 400;
var IsJumping;

var FrogTexture = new Image(); 
FrogTexture.src = "img/frog.png";

var CocaTexture = new Image();
CocaTexture.src = "img/coca_plant.png";

var GrassTexture = new Image();
GrassTexture.src = "img/grass.png";

function DrawFrame()
{
  canvas.width = canvas.width;
  ctx.fillStyle = "#99f48b";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  DrawGrass();
  DrawFrog();
  DrawHUD();
}

function DrawGrass()
{
  ctx.beginPath();
  ctx.rect(scrollX - 100, FLOOR + scrollY, 1000, 400);
  ctx.fillStyle = "#1cbf04";
  ctx.fill();
  ctx.closePath();
  ctx.drawImage(GrassTexture, 40 + scrollX, FLOOR - 128 + scrollY, 1028, 128);
}

function DrawHUD()
{
  ctx.font = "bold 12px sans-serif";
  ctx.fillText("pos (" + x + "|" + y + ")", 20, 40);
}

function DrawPlants()
{
  ctx.drawImage(CocaTexture, 40 + scrollX, FLOOR + scrollY, FROG_SIZE, FROG_SIZE);
}

function DrawFrog()
{
  ctx.drawImage(FrogTexture, x + scrollX, y + scrollY, FROG_SIZE, FROG_SIZE);
}

function DoControls()
{
  if (IsKeyRight == true && IsKeyLeft == false)
  {
    dx += 2;
  }
  else if (IsKeyLeft == true && IsKeyRight == false)
  {
    dx -= 2;
  }
  else
  {
    dx = 0;
  }

  if (IsKeyJump && IsJumping == false)
  {
    IsJumping = true;
    dy = -30;
  }
  else
  {
    if (y + FROG_SIZE < 400)
    {
      dy += 2;
    }
    else
    {
      dy = 0;
      y = FLOOR - FROG_SIZE;
      IsJumping = false;
    }
  }

  if (dx > MAX_SPEED) { dx = MAX_SPEED; }
  if (dx < -MAX_SPEED) { dx = -MAX_SPEED; }
  if (dy > MAX_SPEED) { dy = MAX_SPEED; }
  if (dy < -MAX_SPEED) { dy = -MAX_SPEED; }

  new_x = x + dx;
  new_y = y + dy;
  x = new_x;
  y = new_y;
  scrollX = -x + canvas.width / 2;
  scrollY = -y + canvas.height / 2;
}

function GameLoop()
{
  DoControls();
  DrawFrame();
  requestAnimationFrame(GameLoop);
}

requestAnimationFrame(GameLoop);
