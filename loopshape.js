// Draw a Shape with a Loop exercise.
// Un-comment code below to see three kinds of shapes drawn with a loop.
// Easily toggle comments on or off with Cmd-/ (Mac) or Ctr-/ (Windows).
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  noLoop(); // This prevents getting stuck in an infinite loop!
}

function draw() {
  background(0);
  /* 1. SPOKES: This example draws a wheel with 36 spokes. */
  push();
 
  fill("hotpink")
  addShape (100,100,0.8)
  fill ("cyan")
  addShape(width/2,height/2,0.5)
  fill("purple")
  addShape(-200,200,0.4)
  pop();
}
function addShape (shapeX,shapeY,size){

  translate(shapeX, shapeY);
  scale(size)
  for (let linesDrawn = 0; linesDrawn < 36; linesDrawn++) {
    rotate(10);
    noStroke()
triangle(0, 0, 1, 100, 70, 100);
 
    
  }
}
