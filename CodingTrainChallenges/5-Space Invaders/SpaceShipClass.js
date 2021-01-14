class SpaceShip
{
    constructor(x = width / 2, y = height - 30, size = 60, speed = 5)
    {
        this.x = x;
        this.y = y;
        this.size = size;
        this.speed = speed;
        this.dir = 0;
    }

    show()
    {
        noStroke();
        fill(150);
        ellipse(this.x, this.y, this.size, 2 * this.size);
    }

    move()
    {
        this.x += (this.dir * this.speed);
        if ((this.x <= 0) || (this.x >= width))
        {
            this.dir = 0;
        }
    }

    setDir(dir)
    {
        this.dir = dir;
    }

    shoot()
    {
        noStroke();
        fill(200);
        rect(this.x, this.y, 5, 5);
    }

    xPos_get()
    {
        return this.x;
    }

    yPos_get()
    {
        return this.y;
    }
}