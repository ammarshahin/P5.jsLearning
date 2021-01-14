class SpaceShip
{
    constructor(x = width / 2, y = height - 60, size = 60, speed = 5)
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
        imageMode(CENTER)
        image(spaceVehicle, this.x, this.y, this.size, 2 * this.size);
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

    xPos_get()
    {
        return this.x;
    }

    yPos_get()
    {
        return this.y;
    }
}