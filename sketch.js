const width = 600;
const hight = 600;

var keyFlag = 1;

var car = {
  colorRED: 0,
  colorBLUE: 200,
  colorGREEN: 0,
  size: 50,
  speed: 5,
  position: 0,
};

function setup() {
  createCanvas(width, hight);
}

function draw() {
  if (mouseIsPressed && keyFlag) {
    keyFlag = 0;
    car.speed = random(1, 6);
    car.size = random(10, 80);
    car.position = random(0, hight / 2);
    console.log(car.speed, car.size, car.position);
  }

  background(255);
  circle(width / 2, hight - car.position, car.size);
  fill(car.colorRED, car.colorGREEN, car.colorBLUE);
  car.position += car.speed;
  if (car.position >= hight) {
    car.position = 0;
  }
}

function mouseReleased() {
  keyFlag = 1;
}
