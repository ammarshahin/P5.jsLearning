class Enemy
{
    constructor(x, y, speed, size)
    {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
    }

    show()
    {
        noStroke();
        fill(150);
        rectMode(CENTER);
        rect(this.x, this.y + (this.size / 2), this.size, this.size);
    }

    move()
    {
        this.x += random(-1 * this.speed, this.speed);
    }

    xPos_get()
    {
        return this.x;
    }

    yPos_get()
    {
        return this.y;
    }

    size_get()
    {
        return this.size;
    }
}