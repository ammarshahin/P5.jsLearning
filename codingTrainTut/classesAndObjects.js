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
let arraySize = 40;

let count = 0;

function setup() {
  createCanvas(width, hight);
  for (let index = 0; index < arraySize; index++) {
    array[index] = new Bubble(
      random(10, 600), // xPos
      random(10, 600), // yPos
      random(10, 20), // size
      [0, 0], // speed
      random(50, 255) // color
    );
  }

  noOverLap();
  console.log(count);
}

function draw() {
  background(255);
  for (let index = 0; index < arraySize; index++) {
    array[index].move();
    array[index].show();
  }

  for (let i = 0; i < arraySize; i++) {
    for (let j = 0; j < arraySize; j++) {
      let xPos = array[j].x_position_get();
      let yPos = array[j].y_position_get();
      if (array[i].contains(xPos, yPos) && i != j) {
        console.log(i, j);
      }
    }
  }
}

function mousePressed() {
  for (let index = 0; index < arraySize; index++) {
    if (array[index].contains(mouseX, mouseY)) {
      array.splice(index, 1);
      index--;
      let temp = new Bubble(
        random(10, 600), // xPos
        random(10, 600), // yPos
        random(10, 20), // size
        [0, 0], // speed
        random(0, 255)
      ); // color
      array.push(temp);
    }
  }
}

function noOverLap() {
  /* no overlap between circles */
  for (let i = 0; i < arraySize - 1; i++) {
    for (let j = i + 1; j < arraySize; j++) {
      let xPos = array[j].x_position_get();
      let yPos = array[j].y_position_get();
      if (array[i].contains(xPos, yPos)) {
        console.log(i, j);
        console.log(count);
        i = 0;
        j = 0;
        array.splice(j, 1);
        let temp = new Bubble(
          random(10, 600), // xPos
          random(10, 600), // yPos
          random(10, 20), // size
          [0, 0], // speed
          random(0, 255)
        ); // color
        array.push(temp);
        count++;
        if (count >= 1000) {
          return 0;
        }
      }
    }
  }
}
