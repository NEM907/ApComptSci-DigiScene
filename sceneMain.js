//This is the Master File that will be ran in Code.org
//When adding code please add a comment above it explaining what the code does and also your name 
//Good Luck Have Fun (:



function penDefault() { //Sets the pen to default values - Nathan Martin
	penRGB(0, 0, 0);
	penWidth(1);
	penDown();
	show();
	speed(25);
}

function centerTurtle() {  //Centers the Turtle according to grid size and faces the turtle up
  penUp();
  moveTo(160, 230);
  turnTo(0);
}

var i; //Ignore this all it does is declares i to remove errors
var gridSize = 10;
var roadSize = 10;

//Creates fucntion to draw grid for Dev Use Only - Nathan Martin
function drawDevGrid() {
	penUp();
	moveTo(0, 450);
	penDefault();
	for(i = getX(); i < 321; i = getX()) { //Draws vertical lines
	  moveForward(450);
	  turnRight();
	  moveForward(gridSize);
	  turnRight();
	  moveForward(450);
	  turnLeft();
	  moveForward(gridSize);
	  turnLeft();
	}
	penUp();
	moveTo(0, 450);
	penDefault();
	turnRight();
	for(i = getY(); i > 0; i = getY()) { //Draws horizontal lines
	  moveForward(320);
	  turnLeft();
	  moveForward(gridSize);
	  turnLeft();
	  moveForward(320);
	  turnRight();
	  moveForward(gridSize);
	  turnRight();
	}
}

drawDevGrid(); //This will be commented out in the finale version

function drawRoad() { //Draw road function to draw the base module of every road
  penDown();
  penRGB(139, 69, 19);
	dot(roadSize/2); //Fills in the road
	penUp();
}

function drawRoadCenter() { //Draws a road with a outline for the center road
  penDown();
	penRGB(218, 165, 32);
	for(i = 0; i < 4; i++) { //Draw road outline
   moveForward(roadSize);
   turnRight();
	}
	moveForward(roadSize/2);
  turnRight();
  moveForward(roadSize/2);
	drawRoad();
}

function ranDirection() {
  direction = randomNumber(0, 3)
  for() {
    if(direction == 0) {
      turnTo(0);
      moveForward(roadSize);
    } else if(direction == 0) {
      turnTo(90);
      moveForward(roadSize);
    }
  }

}

function drawAllRoads() { //Draws all the roads in a random pattern
  centerTurtle();
  drawRoadCenter();
  centerTurtle();
  turnTo(0);
  moveForward(roadSize/2);
  turnRight();
  moveForward(roadSize/2);
  turnLeft();
  
}

drawAllRoads();
