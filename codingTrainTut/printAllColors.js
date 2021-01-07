var indexR = 0;
var indexB = 0;
var indexG = 0;

function setup()
{
    createCanvas(1500, 700);
}

function draw()
{
    background(255);
    circle(200, 200, 200);

    if (indexB >= 255)
    {
        indexB = 0;
        if (indexG >= 255)
        {
            indexG = 0;
            if (indexR >= 255)
            {
                indexR = 0;
            }
            else
            {
                indexR++;
            }
        }
        else
        {
            indexG++;
        }
    }
    else
    {
        indexB++;
    }

    fill(indexR, indexG, indexB);
    console.log(indexR, indexG, indexB);
}