const width = 600;
const height = 600;

let spaceShip;
let enemies = [];
let bullets = [];

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

    for (let j = enemies.length - 1; j >= 0; j--)
    {
        enemies[j].show();
        enemies[j].move();
    }

    for (let i = bullets.length - 1; i >= 0; i--)
    {
        bullets[i].show();
        bullets[i].update();
        if (bullets[i].missed())
        {
            bullets.splice(i, 1);
            break;
        }

        for (let j = enemies.length - 1; j >= 0; j--)
        {
            if (bullets[i].hits(enemies[j]))
            {
                bullets.splice(i, 1);
                enemies.splice(j, 1);
                break;
            }
        }
    }

    spaceShip.show();
    spaceShip.move();
}

function keyPressed()
{
    if (key === ' ')
    {
        bullets.push(new Bullet(spaceShip.xPos_get(), spaceShip.yPos_get()));
    }

    if (keyCode == RIGHT_ARROW)
    {
        spaceShip.setDir(1);
    }
    else if (keyCode == LEFT_ARROW)
    {
        spaceShip.setDir(-1);
    }
}

function keyReleased()
{
    spaceShip.setDir(0);
}