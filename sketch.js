const width = 400;
const hight = 400;

let canvas, button;

function setup()
{
    canvas = createCanvas(width, hight);
    button = createButton("this is a button. Which I don't know how to use just yet(created in the javascript file)");
}

function draw()
{
    background(150);
    button.mousePressed(() =>
    {
        button.html("Now it's pressed");
    });
}