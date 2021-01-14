class Bullet
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.speed = -5;
        this.size = 10;
    }

    show()
    {
        noStroke();
        fill(255, 0, 0);
        circle(this.x, this.y, this.size);
    }

    update()
    {
        this.y += this.speed;
    }

    missed()
    {
        if (this.y < 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    hits(enemy)
    {
        let d = dist(this.x, this.y, enemy.xPos_get(), enemy.yPos_get());
        if (d < ((this.size / 2) + enemy.size_get()))
        {
            return true;
        }
        return false;
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