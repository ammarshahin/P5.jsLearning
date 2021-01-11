/**
 * @file classesAndObjects.js
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

let bubble;
let array = [];
const arraySize = 200;

function setup()
{
    createCanvas(width, hight);
    for (let index = 0; index < arraySize; index++)
    {
        array[index] = new Bubble(random(width), random(hight), random(10, 50), [random(5, 10), 0], random(50, 255));
    }
}

function draw()
{
    background(255);
    for (let index = 0; index < arraySize; index++)
    {
        array[index].move();
        array[index].show();
    }
}

function mousePressed()
{
    for (let index = 0; index < arraySize; index++)
    {
        array[index].color_set(random(20, 255));
    }
}