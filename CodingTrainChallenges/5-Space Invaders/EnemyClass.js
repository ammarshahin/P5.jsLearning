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
        rect(this.x, this.y, this.size, this.size);
    }

    move()
    {
        this.x += random(-1 * this.speed, this.speed);
    }
}