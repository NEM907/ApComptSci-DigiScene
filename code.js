//This is the Master File that will be ran in Code.org
//When adding code please add a comment above it explaining what the code does and also your name 
//Good Luck Have Fun (:


// Variable Declarations
    var gridSize = 10;
    var roadSize = 10;

    var roadsPerPath = randomNumber(200, 500); // Number of roads to draw.
    var maxDarkGrass = randomNumber(200, 300); // Amount of dark grass to draw on background layer.

    // Colors
    var backgroundColor = [0, 255, 0]; // HEX: #00FF00 - Bright green - https://www.colorcodehex.com/00ff00/
    var roadCenterColor = [218, 165, 32];  // HEX: #DAA520 - Light brown - https://www.colorcodehex.com/daa520/
    var penDefaultColor = [0, 0, 0]; // HEX: #000000 - Black - https://www.colorcodehex.com/000000/
    var roadMiddleColor = [139, 69, 19]; // HEX: #8B4513 - Dark brown - https://www.colorcodehex.com/8b4513/
    var darkGrassColorA = [0, 100, 0, 0.5]; // HEX: #006400 - Dark green, 50% opacity - https://www.colorcodehex.com/006400/
    var wellColor01 = [97, 97, 97]; // HEX: #616161 - Gray - https://www.colorcodehex.com/616161/
    var wellColor02 = [41, 41, 96]; // HEX: #292960 - Dark Blue - https://www.colorcodehex.com/292960/
// End of Variable Declarations



/**
 * Sets the pen color to default values.
 * 
 * @author: Nathan
 */
function penDefault() {
    penRGB(penDefaultColor[0], penDefaultColor[1], penDefaultColor[2]);
    penWidth(1);
    penDown();
    show();
    speed(100);
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
 * @deprecated
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
    for (i = getY(); i > 0; i = getY()) { //Draws horizontal lines
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
    penRGB(roadMiddleColor[0], roadMiddleColor[1], roadMiddleColor[2]);
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
    penWidth(3);
    penRGB(roadMiddleColor[0], roadMiddleColor[1], roadMiddleColor[2]);
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
 * Draws a center peice for the town.
 */
function drawRoadCenter() {
    penDown();
    penRGB(roadCenterColor[0], roadCenterColor[1], roadCenterColor[2]);
    for (var i = 0; i < 4; i++) { // Draw road outline
        moveForward(roadSize);
        turnRight();
    }
    moveForward(roadSize / 2);
    turnRight();
    moveForward(roadSize / 2);
    drawRoadMiddle();
    penRGB(roadMiddleColor[0], roadMiddleColor[1], roadMiddleColor[2]);
    dot(25);
    penRGB(wellColor01[0], wellColor01[1], wellColor01[2]);
    dot(10);
    penRGB(wellColor02[0], wellColor02[1], wellColor02[2]);
    dot(7.5);
}

/**
 * Random road pathing.
 * 
 * @author: Nathan
 */
function ranRoad() {
    for (var r = 0; r < roadsPerPath; r++) {
        var direction = randomNumber(0, 3);
        turnTo(90 * direction);
        moveForward(roadSize);
        drawRoad();
    }
}

/**
 * Draws all the roads in a random pattern.
 * 
 * @author: Nathan
 */
function drawAllRoads() {
    centerTurtle();
    turnTo(0);
    moveForward(roadSize);
    turnRight();
    moveForward(roadSize);
    turnLeft();
    for (var q = 0; q < 4; q++) {
        turnTo(90 * q);
        centerTurtle();
        ranRoad();
    }
    centerTurtle();
    drawRoadCenter();
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


function drawGrass() { //Draws a grass background - Clayton Ramey
    centerTurtle();
    penDown();
    penRGB(0, 220, 0);
    dot(1000);
    maxDarkGrass = randomNumber (200,300);
    for (g =0; g < maxDarkGrass; g++)  {
        ranPosition();
        penDown();
        penRGB(0, 70, 0, .8);
        dot (randomNumber(1.5, 3));
    }
}
function drawRocks() { //Draws textured rocks in the background -Clayton Ramey
  
  centerTurtle();
  var maxRocks = randomNumber(10, 25);
  for (var g = 0; g < maxRocks; g++) {
 ranPostion();
 penDown();
 penRGB(randomNumber(20, 40), randomNumber(20, 40), randomNumber(20, 40));
 dot(randomNumber(2, 12));
  }
}
/**
 * Function to simplify the drawing of the house background for House01.
 * 
 * @author: Nathan
 * @WIP
 */
function drawHouse01Inside(len) {
    for (var i = 0; i < len; i++) {
        moveForward(roadSize/2);
        dot(roadSize/2);
   }
    moveForward(-roadSize*len/2);
    dot(roadSize/2);
    for (i = 0; i < len; i++) {
        moveForward(-roadSize/2);
        dot(roadSize/2);
    }
    moveForward(roadSize*len/2);
    turnRight();
    moveForward(roadSize);
    turnLeft();
}

function fillHouse01() {
    for (h = 0; h < 2; h++) {
        moveForward(roadSize/2);
        penUp();
        turnLeft();
        drawHouse01Inside(5);
        drawHouse01Inside(3);
        drawHouse01Inside(1);
        turnRight();
        moveForward(-roadSize*3.5);
        turnRight(180);
    }
}
/**
 * Draws a house.
 * 
 * @author: Nathan
 * @WIP
 */
function drawHouse01() {
    var buildStart = [getX()-roadSize*2, getY()+roadSize*2]; //The start point of building the house.
    var house01Half = Math.sqrt(Math.pow(roadSize*2, 2)*2); //The distance from buildStart point to center for House01
    penUp();
    turnRight(45);
    moveForward(house01Half);
    var buildCenter = [getX(), getY()]; //The center of the house.
    moveForward(-house01Half);
    turnLeft(45);
    penDefault();
    fillHouse01();
    moveTo(buildStart[0], buildStart[1]);
    penColor("red");
    penDown();
    for (var h = 0; h < 4; h++) {
        turnRight(45);
        moveForward(house01Half);
        penUp();
        moveForward(-house01Half);
        turnLeft(45);
        penDown();
        moveForward(roadSize);
        turnLeft();
        moveForward(roadSize);
        turnRight();
        moveForward(roadSize*2);
        turnRight();
        moveForward(roadSize);
        turnLeft();
        moveForward(roadSize);
        turnRight();
    }
    penUp();
    turnRight(45);
    moveForward(roadSize*2);
    turnLeft(45);
    penDown();
    moveForward(roadSize*0.575);
    turnRight();
    moveForward(roadSize*0.575);
    dot(roadSize*0.55);
    penUp();
    moveForward(-roadSize*0.575);
    turnLeft();
    moveForward(-roadSize*0.575);
    penDown();
    for (h = 0; h < 4; h++) {
        moveForward(roadSize*1.1);
        turnRight();
    }
    penUp();
    moveTo(buildStart[0], buildStart[1]);
    turnRight(45);
    moveForward(house01Half);
    turnLeft(45);
    


}

//drawGrass();
drawDevGrid(); //This will be commented out in the finale version
//drawAllRoads();
centerTurtle();
drawHouse01();
//hide();


