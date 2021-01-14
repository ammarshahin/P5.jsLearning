const width = 600;
const height = 600;

let spaceShip;
let enemies = [];

function setup()
{
    createCanvas(width, height);
    spaceShip = new SpaceShip();
    for (let index = 0; index < (width / 20); index++)
    {
        enemies[index] = new Enemy(index * 30, 0, 0, 20);
    }
}

function draw()
{
    background(0);
    spaceShip.show();
    for (let index = 0; index < enemies.length; index++)
    {
        enemies[index].show();
        enemies[index].move();
    }
    keyIsHeldPressed();
}

function keyIsHeldPressed()
{
    if (keyIsPressed && (keyCode.LEFT_ARROW == true) && (keyCode.RIGHT_ARROW == true))
    {
        // Do nothing
    }
    if (keyIsPressed && (keyCode == RIGHT_ARROW))
    {
        spaceShip.move(1);
    }
    else if (keyIsPressed && (keyCode == LEFT_ARROW))
    {
        spaceShip.move(-1);
    }
}