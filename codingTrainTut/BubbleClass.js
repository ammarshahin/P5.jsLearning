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
        this.x += random(this.speed[0], -this.speed[0]);
        this.y += random(this.speed[1], -this.speed[1]);
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
        image(bubble, this.x, this.y, this.size, this.size)
    }

    contains(px, py)
    {
        let d = dist(px, py, this.x, this.y);
        if (d < 0.5 * this.size)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    x_position_get()
    {
        return this.x;
    }

    x_position_set(x)
    {
        this.x = x;
    }

    y_position_get()
    {
        return this.y;
    }

    y_position_set(y)
    {
        this.y = y;
    }

    y_position_get()
    {
        return this.y;
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

    crash(other)
    {
        let d = dist(this.x, this.y, other.x_position_get(), other.y_position_get());
        return (d < (this.size + other.size_get()));
    }
}