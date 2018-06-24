var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Dora Granera"); // enter your name here!
}

 /*
  full reference: https://p5js.org/reference/
  line: https://p5js.org/reference/#/p5/line
  rectangle: https://p5js.org/reference/#/p5/rect
  ellipse: https://p5js.org/reference/#/p5/ellipse
  arc: https://p5js.org/reference/#/p5/arc
  background color: https://p5js.org/reference/#/p5/background
  shape color: https://p5js.org/reference/#/p5/fill
  line color, weight, etc: https://p5js.org/reference/#/p5/stroke
 */

// Write all your code inside the draw() function below!
function draw() {
  // Example. You can remove when you're ready!
  background(0, 255, 0); // try changing this to a blue background
  fill(255, 204, 0);    // Always call fill() before the shape you want to fill in.
  rect(30, 20, 55, 55); // Draw a 30x20 pixel rectangle at coordinate (55,55)
 drawThreeYellowCircles();
    drawTriangle();
 
}

function drawThreeYellowCircles(){
    fill("yellow");
    ellipse(100, 100, 100, 100);
    ellipse(150, 150, 100, 100);
    ellipse(200, 200, 100, 100);
    
    
}

function drawTriangle(){
    fill("yellow");
     triangle(300, 100, 320, 100, 310, 80);
}


var angle = 0.0;
var jitter = 0.0;

function setup() {
  createCanvas(720, 400);
  noStroke();
  fill(255);
  //Draw the rectangle from the center and it will also be the
  //rotate around that center
  rectMode(CENTER);
}

function draw() {
  background(131);

  // during even-numbered seconds (0, 2, 4, 6...) add jitter to
  // the rotation
  if (second() % 2 == 0) {  
    jitter = random(-0.1, 0.1);
  }
  //increase the angle value using the most recent jitter value
  angle = angle + jitter;
  //use cosine to get a smooth CW and CCW motion when not jittering3
  var c = cos(angle);
  //move the shape to the center of the canvas
  translate(width/2, height/2);
  //apply the final rotation
  rotate(c);
  rect(0, 0, 180, 180); 
    
    fill("red");
}


 


