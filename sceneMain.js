//This is the Master File that will be ran in Code.org
//When adding code please add a comment above it explaining what the code does and also your name 
//Good Luck Have Fun (:


// Variable Declarations
    var gridSize = 10;
    var roadSize = 10;
// End of Variable Declarations


/**
 * Sets the pen color to default values.
 * 
 * @author: Nathan
 */
function penDefault() {
    penRGB(0, 0, 0);
    penWidth(1);
    penDown();
    show();
    speed(25);
}

/**
 * Centers the Turtle according to the grid size and faces the turtle up.
 */
function centerTurtle() {
    penUp();
    moveTo(160, 230);
    turnTo(0);
}

/**
 * Creates function to draw grid (development use only)
 * 
 * @author: Nathan
 */
function drawDevGrid() {
    penUp();
    moveTo(0, 450);
    penDefault();
    for (var i = getX(); i < 321; i = getX()) { //Draws vertical lines
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
    for (var i = getY(); i > 0; i = getY()) { //Draws horizontal lines
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

/**
 * Draw road function to draw the base module of every road.
 */
function drawRoadMiddle() {
    penDown();
    penRGB(139, 69, 19);
    dot(roadSize / 2); //Fills in the road
    penUp();
}

/**
 * Draws a whole road block.
 * 
 * @author: Nathan
 */
function drawRoad() {
    penDown();
    penRGB(139, 69, 19);
    for (var i = 0; i < 4; i++) { //Draw road outline
        moveForward(roadSize);
        turnRight();
    }
    moveForward(roadSize / 2);
    turnRight();
    moveForward(roadSize / 2);
    drawRoadMiddle();
    moveForward(-roadSize / 2);
    turnLeft();
    moveForward(-roadSize / 2);
}

/**
 * Draws a road with an outline for the center road.
 */
function drawRoadCenter() {
    penDown();
    penRGB(218, 165, 32);
    for (var i = 0; i < 4; i++) { // Draw road outline
        moveForward(roadSize);
        turnRight();
    }
    moveForward(roadSize / 2);
    turnRight();
    moveForward(roadSize / 2);
    drawRoadMiddle();
}

/**
 * Random road pathing.
 * 
 * @author: Nathan
 */
function ranRoad() {

    var roadsPerPath = randomNumber(50, 100); // Random number for the number of roads drawn

    for (var r = 0; r < roadsPerPath; r++) {

        var direction = randomNumber(0, 4);
        turnTo(90 * direction);
        moveForward(roadSize);
        drawRoad();
    }
}

/**
 * Draws all the roads in a random pattern.
 */
function drawAllRoads() {
    centerTurtle();
    drawRoadCenter();
    centerTurtle();
    turnTo(0);
    moveForward(roadSize);
    turnRight();
    moveForward(roadSize);
    turnLeft();
    for (var q = 0; q < 4; q++) {

        direction = randomNumber(0, 3);

        if (direction === 0) {
            turnTo(0);
            centerTurtle();
            ranRoad();
        } else if (direction === 1) {
            turnTo(90);
            centerTurtle();
            ranRoad();
        } else if (direction === 2) {
            turnTo(180);
            centerTurtle();
            ranRoad();
        } else if (direction === 3) {
            turnTo(270);
            centerTurtle();
            ranRoad();
        }
    }
}

/**
 * Randomizes the position of the turtle.
 * 
 * @author: Nathan
 */
function ranPostion() {
    penUp();
    moveTo(randomNumber(0, 319), randomNumber(0, 449));
}

/**
 * Draws a grass background.
 * 
 * @author: Nathan
 */
function drawGrass() {
    centerTurtle();
    penDown();
    penRGB(0, 255, 0);
    dot(1000);
    var maxDarkGrass = randomNumber(200, 300);
    for (var g = 0; g < maxDarkGrass; g++) {
        ranPostion();
        penDown();
        penRGB(0, 100, 0, .5);
        dot(randomNumber(1, 2.5));
    }
}


drawGrass();
drawDevGrid(); //This will be commented out in the finale version
drawAllRoads();
