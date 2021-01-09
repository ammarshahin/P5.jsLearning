class Bubble
{
    constructor(x, y, size, speed, color)
    {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
        this.color = color;
    }

    move()
    {
        this.x += this.speed[0];
        this.y += this.speed[1];
        if (this.x > width)
        {
            this.x = 0;
        }

        if (this.y > hight)
        {
            this.y = 0;
        }
    }

    show()
    {
        noStroke();
        fill(this.color);
        circle(this.x, this.y, this.size);
    }

    x_position_set(x)
    {
        this.x = x;
    }

    x_position_get()
    {
        return x;
    }

    y_position_set(y)
    {
        this.y = y;
    }

    y_position_get()
    {
        return y;
    }

    speed_set(speed)
    {
        this.speed = speed;
    }

    speed_get()
    {
        return this.speed;
    }

    size_set(size)
    {
        this.size = size;
    }

    size_get()
    {
        return this.size;
    }

    color_set(color)
    {
        this.color = color;
    }

    color_get()
    {
        return this.color;
    }
}