var font = [0, 0, 0];

function setup()
{
    createCanvas(1500, 700);
    console.log("Ammar Shahin");
    font[0] = 100;
    font[1] = 100;
    font[2] = 100;
}

function draw()
{
    background(255);
    circle(200, 200, 200);
    fill(font[0], font[1], font[2]);
}