const width = 1200;
const height = 600;

let spaceShip;
let enemies = [];
let enemySize = 40;
let bullets = [];
let backgroundImg, spaceVehicle, enemyShip;
let paragraph, score;

function preload()
{
    backgroundImg = loadImage("images/background.png");
    spaceVehicle = loadImage("images/spaceShip.png");
    enemyShip = loadImage("images/enemy.png");
}

function setup()
{
    score = 0;
    createCanvas(width, height);
    paragraph = createP("Score: " + score);
    spaceShip = new SpaceShip();
    for (let index = 0; index < (width / (enemySize * 2)); index++)
    {
        enemies[index] = new Enemy((index * enemySize * 2) + (enemySize), 0, 0, enemySize);
    }
}

function draw()
{
    image(backgroundImg, 0, 0, 2400, 1200);

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
                score++;
                paragraph.html("Score: " + score);
                if (enemies.length == 0)
                {
                    paragraph.html("You Win!!!!, Press r to play again >> Score: " + score);
                    for (let k = bullets.length - 1; k >= 0; k--)
                    {
                        bullets.splice(k, 1);
                    }
                    image(backgroundImg, 0, 0, 2400, 1200);
                    noLoop();
                }
                break;
            }
        }
    }

    spaceShip.show();
    spaceShip.move();
}

function keyPressed()
{

    if (keyCode == RIGHT_ARROW)
    {
        spaceShip.setDir(1);
    }
    else if (keyCode == LEFT_ARROW)
    {
        spaceShip.setDir(-1);
    }

    if (key == ' ')
    {
        bullets.push(new Bullet(spaceShip.xPos_get(), spaceShip.yPos_get()));
    }
    else if ((key == 'r') && (score == (width / (enemySize * 2))))
    {
        loop();
        score = 0;
        paragraph.html("Score: " + score);
        for (let index = 0; index < (width / (enemySize * 2)); index++)
        {
            enemies[index] = new Enemy((index * enemySize * 2) + (enemySize), 0, 0, enemySize);
        }
    }
}

function keyReleased()
{
    if ((keyCode == RIGHT_ARROW) || (keyCode == LEFT_ARROW))
        spaceShip.setDir(0);
}