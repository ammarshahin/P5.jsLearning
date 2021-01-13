/**
 * @file random.js
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
    background(255);
    circle(width / 2, hight - car.position, car.size);
    fill(car.colorRED, car.colorGREEN, car.colorBLUE);
    car.position += car.speed;
    if (car.position >= hight)
    {
        car.position = 0;
    }
}

/**
 * The function mousePressed is an edge trigger (Event trigger) when the mouse is pressed and it executes only once when it pressed. 
 */
function mouseReleased()
{
    car.speed = round(random(1, 6));
    car.size = round(random(10, 80));
    car.position = round(random(0, hight / 2));
    console.log(car.speed, car.size, car.position);
}