let width, hight, backgroundColor;
let canvas, buttonObject, sliderObject, paragraphObject, inputFieldObject;

function setup()
{
    width = 400;
    hight = 400;
    backgroundColor = 150;
    canvas = createCanvas(width, hight);
    buttonObject = createButton("Change background color");
    sliderObject = createSlider(0, 255, backgroundColor, 5);
    inputFieldObject = createInput('');
    paragraphObject = createP(backgroundColor);
}

function draw()
{
    buttonObject.mousePressed(startButtonPressed); // Call back function

    inputFieldObject.changed(() =>
    {
        backgroundColor = int(inputFieldObject.value());
        paragraphObject.html(backgroundColor);
        inputFieldObject.html('');
    });

    sliderObject.changed(() =>
    {
        backgroundColor = sliderObject.value();;
        paragraphObject.html(backgroundColor);
    });

    background(backgroundColor);
}

function startButtonPressed(name, value)
{
    buttonObject.html("Change background color again!!");
    backgroundColor = round(random(255));
    paragraphObject.html(backgroundColor);
}