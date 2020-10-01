/**************************************************
Exercise 2 // DODGE-EM
JUNIOR VIGNEAULT

A fly in a club can pick up cocktails but needs to dodge disco balls
**************************************************/

// Declaring my images for the program, a fly image for the user and a discoball as the obstacle

let flyImage = {
  x:0,
  y:0,
  size:80,
  image:undefined
}

let discoBallImage = {
  x:0,
  y:0,
  size:100,
  vx:0,
  vy:0,
  speed:5,
  image: undefined
}

let discoBallImage2 = {
  x:0,
  y:0,
  size:100,
  vx:0,
  vy:0,
  speed:6,
  image: undefined
}

let discoBallImage3 = {
  x:0,
  y:0,
  size:100,
  vx:0,
  vy:0,
  speed:6,
  image: undefined
}

let martiniImage = {
  x:0,
  y:0,
  size:100,
  image:undefined
}

// Loading the images! Finally...

function preload() {

  flyImage.image = loadImage("assets/images/fly.png");

  discoBallImage.image = loadImage("assets/images/discoball.png");

  discoBallImage2.image = loadImage("assets/images/discoball.png");

  martiniImage.image = loadImage("assets/images/martini.png")
}

// Creating a javascript object for my background to make the colors funky

let bg = {
  r:0,
  g:0,
  b:0
}

function setup() {

  // I want the biggesssssst canvas

createCanvas(windowWidth, windowHeight);

  // Making the disco balls randomly appear on the left

  discoBallImage.y = random(0,height);
  discoBallImage.vx = discoBallImage.speed;

  discoBallImage2.y = random(0,height);
  discoBallImage2.vx = discoBallImage2.speed;

  noCursor();

}

// draw()
//
// Description of draw() goes here.

function draw() {

  bg.r = random(200,255);
  bg.g = random(200,555);
  bg.b = random(200,555);

  background(bg.r, bg.g, bg.b);

// Random noise in the background from the covid19 activity. It adds texture.

for (let i =0; i < 1000; i++) {
  let x = random(0,width);
  let y = random(0,height);
  stroke(255);
  strokeWeight(2);
  point(x,y);
}

// Dropping a martini cocktail in the middle of the screen to be picked up by the fly

  martiniImage.x = width/2;
  martiniImage.y = height/2;

  image(martiniImage.image, martiniImage.x, martiniImage.y, martiniImage.size, martiniImage.size+20);

// The disco ball is moving accross the screen using it's velocity

  discoBallImage.x = discoBallImage.x + discoBallImage.vx;
  discoBallImage.y = discoBallImage.y + discoBallImage.vy;

  discoBallImage2.x = discoBallImage2.x + discoBallImage2.vx;
  discoBallImage2.y = discoBallImage2.y + discoBallImage2.vy;

  // If the disco balls hits the right of the screen, it reappears on the right

  if (discoBallImage.x > width) {
    discoBallImage.x = 0;
    discoBallImage.y = random(0,height);
  }

  if (discoBallImage2.x > width) {
    discoBallImage2.x = 0;
    discoBallImage2.y = random(0,height);
  }

// Making the disco ball appear on screen
  imageMode(CENTER);
  image(discoBallImage.image, discoBallImage.x, discoBallImage.y, discoBallImage.size, discoBallImage.size);

  imageMode(CENTER);
  image(discoBallImage2.image, discoBallImage2.x, discoBallImage2.y, discoBallImage2.size, discoBallImage2.size);

// Making the fly follow the user's mouse

  flyImage.x = mouseX;
  flyImage.y = mouseY;

// Making the fly appear on screen

  imageMode(CENTER);
  image(flyImage.image, flyImage.x, flyImage.y, flyImage.size, flyImage.size);

// determine the distance between the fly and discoball and make the program stop when they touch

  let d = dist(flyImage.x, flyImage.y, discoBallImage.x, discoBallImage.y);
  if (d < discoBallImage.size/3 + flyImage.size/2) {
    noLoop();
  }

// make the disco ball bigger sometimes and slower or smaller and faster depending on it's starting position

  if (discoBallImage.y >= width * 0.4) {
    discoBallImage.size = 200;
    discoBallImage.speed = 1;
  }
  else {
    discoBallImage.size = 300;
    discoBallImage.speed = 8;
  }
}