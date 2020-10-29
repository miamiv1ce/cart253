"use strict";

/**************************************************
Exercise 5 : Juggling!
Junior Vigneault

Here is a description of this template p5 project.
**************************************************/
let gravityForce = 0.0025;
let paddle;

let balls = [];
let numBalls = 1;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth, windowHeight);

  paddle = new Paddle(300,20);

  for(let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-800,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(100,200,255);

  paddle.move();
  paddle.display();

  for (let i = 0; i < balls.length; i++){
    let ball = balls[i];
    ball.gravity(gravityForce);
    ball.move();
    ball.bounce(paddle);
    ball.display();
  }
}
