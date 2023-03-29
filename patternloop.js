function setup() {
  createCanvas(600, 500);
 angleMode(DEGREES);
  Width = 100;
  Height = 100;
  patternsPerRow = 6;
  patternsPerColumn = 4;
  horizontalSpace = -5;
  verticalSpace = 25;
  noLoop()
  
}

function draw() {
  background("black");
  for (let rowsDrawn = 0; rowsDrawn < patternsPerColumn; rowsDrawn++) {
    for (let columnsDrawn = 0; columnsDrawn < patternsPerRow; columnsDrawn++) {
      let offsetRight = columnsDrawn * (Width + horizontalSpace);
      let offsetDown = rowsDrawn * (Height + verticalSpace);
     push()
      addPattern(offsetRight, offsetDown,0.3);
      pop()
    }
  }
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
function addPattern(x,y,size){
  translate(x,y)
  scale(size)
   push();
 
  fill("hotpink")
  addShape (100,100,0.8)
  fill ("cyan")
  addShape(width/2,height/2,0.5)
  fill("purple")
  addShape(-200,200,0.4)
  pop();
}
