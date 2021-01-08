/**
 * @file movingVariables.js
 * @author Ammar Shahin (Ammar0Shahin@gmail.com)
 * @brief 
 * @version 0.1
 * @date 2021-01-08
 * 
 * @copyright Copyright (c) 2021
 * 
 */

const width = 600;
const hight = 600;

var car = {
    colorRED: 0,
    colorBLUE: 200,
    colorGREEN: 0,
    size: 50,
    speed: 5,
    position: 0,
};

function setup()
{
    createCanvas(width, hight);
}

function draw()
{
    if (mouseIsPressed)
    {
        background(255);
        square(width / 2, hight - car.position, car.size);
        fill(car.colorRED, car.colorGREEN, car.colorBLUE);
        console.log(hight - car.position);
        car.position += car.speed;
        if (car.position >= hight)
        {
            car.position = 0;
        }
    }
}