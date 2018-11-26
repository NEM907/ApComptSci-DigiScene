//This is the Master File that will be ran in Code.org
//When adding code please add a comment above it explaining what the code does and also your name 
//Good Luck Have Fun (:

//Sets the pen to default values - Nathan Martin
function penDefault() {
	penRGB(0, 0, 0);
	penWidth(1);
	penDown();
	show();
	speed(25);
}

var i;

//Creates fucntion to draw grid for Dev Use Only - Nathan Martin
function drawDevGrid() {
	penUp();
	moveTo(0, 450);
	penDefault();
	for(i = getX(); i < 321; i = getX()) {
	  moveForward(450);
	  turnRight();
	  moveForward(20);
	  turnRight();
	  moveForward(450);
	  turnLeft();
	  moveForward(20);
	  turnLeft();
	}
	penUp();
	moveTo(0, 450);
	penDefault();
	turnRight();
	for(i = getY(); i > 0; i = getY()) {
	  moveForward(320);
	  turnLeft();
	  moveForward(20);
	  turnLeft();
	  moveForward(320);
	  turnRight();
	  moveForward(20);
	  turnRight();
	}
}
drawDevGrid();
