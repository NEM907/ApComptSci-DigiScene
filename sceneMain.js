//This is the Master File that will be ran in Code.org
//When adding code please add a comment above it explaining what the code does and also your name 
//Good Luck Have Fun (:

//Sets the pen to default values - Nathan Martin
function penDefault() {
	penRGB(0, 0, 0);
	penWidth(1);
	penDown();
	show();
}
x = getX();
penDefault();

//Creates fucntion to draw grid for Dev Use Only - Nathan Martin
function drawDevGrid() {
	penUp();
	moveTo(0, 450);
	for(i = x; i < 321; i = x) {
	  moveForward(450);
	}
}
drawDevGrid();
