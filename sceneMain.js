//This is the Master File that will be ran in Code.org
//When adding code please add a comment above it explaining what the code does and also your name 
//Good Luck Have Fun (:


//Variable Declarations
var i; //Ignore this all it does is declare i to remove errors
var q; //Ignore this all it does is declare q to remove errors
var r; //Ignore this all it does is declare r to remove errors
var g; //Ignore this all it does is declare g to remove errors
var maxDarkGrass; //Ignore this all it does is declare maxDarkGrass to remove errors
var direction; //Ignore this all it does is delcare direction to remove errors
var gridSize = 10;
var roadSize = 10;
//End of Variable Declarations


function penDefault() { //Sets the pen to default values - Nathan Martin
	penRGB(0, 0, 0);
	penWidth(1);
	penDown();
	show();
	speed(25);
}

function centerTurtle() { //Centers the Turtle according to grid size and faces the turtle up
  penUp();
  moveTo(160, 230);
  turnTo(0);
}

function drawDevGrid() { //Creates fucntion to draw grid for Dev Use Only - Nathan Martin
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

function drawRoadMiddle() { //Draw road function to draw the base module of every road
  penDown();
  penRGB(139, 69, 19);
	dot(roadSize/2); //Fills in the road
	penUp();
}

function drawRoad() { //Draws a whole road block - Nathan Martin
  penDown();
  penRGB(139, 69, 19);
  for(i = 0; i < 4; i++) { //Draw road outline
   moveForward(roadSize);
   turnRight();
	}
	moveForward(roadSize/2);
  turnRight();
  moveForward(roadSize/2);
	drawRoadMiddle();
	moveForward(-roadSize/2);
	turnLeft();
	moveForward(-roadSize/2);
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
	drawRoadMiddle();
}

function ranRoad() { //Random road pathing - Nathan Martin
  
  var roadsPerPath = randomNumber(50, 100); //Random number for the number of roads drawn
  
  for(r = 0; r < roadsPerPath; r++) {
    
    direction = randomNumber(0, 4);
    
    if(direction === 0 || direction === 4) {
      turnTo(0);
      moveForward(roadSize);
      drawRoad();
    } else if(direction === 1) {
      turnTo(90);
      moveForward(roadSize);
      drawRoad();
    } else if(direction === 2) {
      turnTo(180);
      moveForward(roadSize);
      drawRoad();
    } else if(direction === 3) {
      turnTo(270);
      moveForward(roadSize);
      drawRoad();
    }
  }
}

function drawAllRoads() { //Draws all the roads in a random pattern
  centerTurtle();
  drawRoadCenter();
  centerTurtle();
  turnTo(0);
  moveForward(roadSize);
  turnRight();
  moveForward(roadSize);
  turnLeft();
  for(q = 0; q < 4; q++) {
    
    direction = randomNumber(0, 3);
    
    if(direction === 0) {
      turnTo(0);
      centerTurtle();
      ranRoad();
    } else if(direction === 1) {
      turnTo(90);
      centerTurtle();
      ranRoad();
    } else if(direction === 2) {
      turnTo(180);
      centerTurtle();
      ranRoad();
    } else if(direction === 3) {
      turnTo(270);
      centerTurtle();
      ranRoad();
    }
  }
}

function ranPostion() { //Randomizes the postion of the turtle - Nathan Martin
  penUp();
  moveTo(randomNumber(0, 319), randomNumber(0, 449));
}

function drawGrass() { //Draws a grass background - Nathan Martin
  centerTurtle();
  penDown();
  penRGB(0, 255, 0);
  dot(1000);
  maxDarkGrass = randomNumber(200, 300);
  for(g = 0; g < maxDarkGrass; g++) {
    ranPostion();
    penDown();
    penRGB(0, 100, 0, .5);
    dot(randomNumber(1, 2.5));
  }
}


drawGrass();
drawDevGrid(); //This will be commented out in the finale version
drawAllRoads();
