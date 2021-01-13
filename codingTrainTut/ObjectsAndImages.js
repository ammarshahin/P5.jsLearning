/**
 * @file Objects and Images .js
 * @author Ammar Shahin (Ammar0Shahin@gmail.com)
 * @brief 
 * @version 0.1
 * @date 2021-01-08
 * 
 * @copyright Copyright (c) 2021
 * 
 */
let width = 600;
let hight = 600;

let array = [];
let bubble, arraySize = 400;

function preload()
{
    bubble = loadImage("Images/bubble.jpg");
}

function setup()
{
    createCanvas(width, hight);
    for (let index = 0; index < arraySize; index++)
    {
        array[index] = new Bubble(random(width), random(hight), random(10, 50), [5, -5], random(50, 255));
    }
}

function draw()
{
    background(245);
    for (let index = 0; index < arraySize; index++)
    {
        array[index].move();
        array[index].show();
    }
}