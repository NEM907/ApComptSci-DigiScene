//This is the Master File that will be ran in Code.org
//When adding code please add a comment above it explaining what the code does and also your name 
//Good Luck Have Fun (:
/**
 *      //////////////////// RUNTIME VARIABLE DECLARATIONS ////////////////////
 **/
    var debug               = false;

    var gridSize            = 10;
    var roadSize            = 10;

    var roadsPerPath        = randomNumber(200, 500); // Number of roads to draw.
    var maxDarkGrass        = randomNumber(200, 300); // Amount of dark grass to draw on background layer.

    // Colors
    var backgroundColor     = [0, 175, 0];      // HEX: #00FF00 - Bright green            - https://www.colorcodehex.com/00ff00/
    var roadCenterColor     = [218, 165, 32];   // HEX: #DAA520 - Light brown             - https://www.colorcodehex.com/daa520/
    var penDefaultColor     = [0, 0, 0];        // HEX: #000000 - Black                   - https://www.colorcodehex.com/000000/
    var roadMiddleColor     = [139, 69, 19];    // HEX: #8B4513 - Dark brown              - https://www.colorcodehex.com/8b4513/
    var darkGrassColorA     = [0, 100, 0, 0.7]; // HEX: #006400 - Dark green, 70% opacity - https://www.colorcodehex.com/006400/
    var wellColor01         = [97, 97, 97];     // HEX: #616161 - Gray                    - https://www.colorcodehex.com/616161/
    var wellColor02         = [41, 41, 96];     // HEX: #292960 - Dark Blue               - https://www.colorcodehex.com/292960/
    var drawHouse01Color01  = [150, 111, 51];   // HEX: #966f33 - Wood Brown              - https://www.colorcodehex.com/966f33/
    var drawHouse01Color02  = [112, 83, 38];    // HEX: #705326 - Dark Wood Brown         - https://www.colorcodehex.com/705326/

/** /////////////////////////////////////////////////////////////////////////// **/



/**
 * Sets the pen color to default values.
 * 
 * @author: Nathan
 */
function penDefault() {
    penRGB(
        penDefaultColor[0],         //
        penDefaultColor[1],         // Set the pen to the default color
        penDefaultColor[2]          //
    );
    penWidth(1);                    // Set the pen width to the default value (1)
    penDown();                      // Enable the pen to draw
    hide();                         // Hide the turtle itself
    speed(100);                     // Enable full speed runtime execution
}


/**
 * Centers the Turtle according to the grid size and faces the turtle up.
 */
function centerTurtle() {
    penUp();                        // Disable drawing
    moveTo(160, 230);               // Move to center of workspace environment
    turnTo(0);                      // Turn to starting position (0 deg, North)
}

/**
 * Places the Turtle in a random postion and turns to a random direction.
 */
function ranTurtle() {
    penUp();                        // Disable drawing
    moveTo(
        randomNumber(0, 320),       // Move to a random position in the workspace
        randomNumber(0,449)
    );
    turnTo(randomNumber(0,359));    // Turn to a random angle
}

/**
 * Creates function to draw grid (development use only)
 * 
 * @deprecated
 * @author: Nathan
 */
function drawDevGrid() {
    
        // Vertical grid
    
    penUp();                                        // Disable drawing
    moveTo(0, 450);                                 // Move to top left of screen
    penDefault();                                   // Set pen to default values and enable drawing
    
    for (var i = getX(); i < 321; i = getX()) {     // Draws vertical lines
        moveForward(450);                           //  Moves up by the height of the screen
        
        turnRight();                                //
        moveForward(gridSize);                      //  Move turtle right based on gridSize on the top of the screen
        turnRight();                                //
        
        moveForward(450);                           //  Move down by the height of the screen
        
        turnLeft();                                 //
        moveForward(gridSize);                      //  Move turtle right based on gridSize on the bottom of the screen
        turnLeft();                                 //
    }
    
        // Horizontal grid
    
    penUp();                                        // Disable drawing
    moveTo(0, 450);                                 // Move to top left of screen
    penDefault();                                   // Set pen to default values and enable drawing
    turnRight();                                    // Turn right, this rotates the grid by 90 degrees to generate horizontal lines
    
    for (i = getY(); i > 0; i = getY()) {           // Draws horizontal lines
        moveForward(320);                           //  Moves across the width of the screen
        
        turnLeft();                                 //
        moveForward(gridSize);                      //  Move turtle down based on the gridSize on the left side of the screen
        turnLeft();                                 //
        
        moveForward(320);                           //  Moves across the width of the screen
        
        turnRight();                                //
        moveForward(gridSize);                      //  Move turtle down based on the gridSize on the right side of the screen
        turnRight();                                //
    }
}

/**
 * Draw road function to draw the base module of every road.
 */
function drawRoadMiddle() {
    penDown();                      // Enable drawing
    penRGB(
        roadMiddleColor[0],         //
        roadMiddleColor[1],         // Set the pen color to the middle of the road color
        roadMiddleColor[2]          //
    );
    dot(roadSize / 2);              // Flood fills center of road using the color
    penUp();                        // Lifts pen and disables drawing
}

/**
 * Draws a whole road block.
 * 
 * @author: Nathan
 */
function drawRoad() {
    penDown();                      // Place the pen down and enable drawing
    penWidth(3);                    // Set the pen width to three, this is three times the default value
    penRGB(
        roadMiddleColor[0],         //
        roadMiddleColor[1],         // Set the pen color to the road middle color
        roadMiddleColor[2]          //
    );
    for (var i = 0; i < 4; i++) {   // Draw road outline (a square)
        moveForward(roadSize);      //  Move forward by the size of a road tile
        turnRight();                //  Turn right
    }
    
    moveForward(roadSize / 2);      //
    turnRight();                    // Center turtle in middle of individual road tile
    moveForward(roadSize / 2);      //
    
    drawRoadMiddle();               // Draw middle of the road once turtle is centered in middle of road tile
    
    moveForward( -(roadSize / 2) ); //
    turnLeft();                     // Move back to origin from center of road tile
    moveForward( -(roadSize / 2) ); //
}

/**
 * Draws a center peice for the town.
 */
function drawRoadCenter() {
    centerTurtle();                 // Center turtle in workspace
    penDown();                      // Enable drawing
    penRGB(
        roadCenterColor[0],         //
        roadCenterColor[1],         // Set the pen color to the road center color
        roadCenterColor[2]          //
    );
    
    for (var i = 0; i < 4; i++) {   //
        moveForward(roadSize);      // Draw road outline
        turnRight();                //
    }
    
    moveForward(roadSize / 2);      //
    turnRight();                    // Center turtle inside center road tile
    moveForward(roadSize / 2);      //
    
    drawRoadMiddle();               // Fill the road tile
    
    penRGB(
        roadMiddleColor[0],         //
        roadMiddleColor[1],         // Set the pen color to the road middle color
        roadMiddleColor[2]          //
    );
    dot(25);                        // Make a dot with a diameter of twenty-five to insure that the area around the well has road
    penRGB(
        wellColor01[0],             //
        wellColor01[1],             // Set the pen color to the primary well color
        wellColor01[2]              //
    );
    dot(10);                        // Make a dot with a diameter of ten, this is the stone surrounding the water
    penRGB(
        wellColor02[0],             //
        wellColor02[1],             // Set the pen color to the secondary well color (the water)
        wellColor02[2]              //
    );
    dot(7.5);                       // Make a dot with a diameter of seven-point-five, this is the water inside the well
    
    Collision.newObject(            // Create a new call to the collision subsystem...
        getX(),                     //  Use our current X coordinate as the X value
        getY(),                     //               ^^ Y coordinate as the Y value
        (25 / 2) + 5                //  Calculate the radii from the diameter (25) and add a buffer of five units around the well
    );    
    
}

/**
 * Draw the castle walls.
 */
function castle() {
    var castleRed,
        castleGreen,
        castleBlue;
    
    function setCastleColor(red, green, blue) {
        castleRed = red;
        castleGreen = green;
        castleBlue = blue;
    }
    
    turnTo(0);
    
    switch (randomNumber(1, 3)) {
        case 1:
            setCastleColor(0, 0, 0);
            break;
        case 2:
            setCastleColor(105, 140, 139);
            break;
        case 3:
            setCastleColor(89, 29, 29);
            break;
    }

    if (randomNumber(1, 3) >= 2) {
        moveTo(0, 0);
        penDown();
        penWidth(25);
        penRGB(castleRed, castleGreen, castleBlue);
        for (var i = 0; i < 4; i++) {
            moveForward(-450);
            turnRight(90);
            moveForward(320);
            turnRight(90);
        }
        penDefault();
        penUp();
    }
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
}

/**
 * Randomizes the position of the turtle.
 * 
 * @author: Nathan
 */
function ranPosition() {
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
    penRGB(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
    dot(1000);
    for (var g = 0; g < maxDarkGrass; g++) {
        ranPosition();
        penDown();
        penRGB(darkGrassColorA[0], darkGrassColorA[1], darkGrassColorA[2], darkGrassColorA[3]);
        var dotBaseSize = randomNumber(1, 2.1);
        for(var i = 1; i < 5; i++) {
          dot((dotBaseSize * (i/dotBaseSize))*dotBaseSize);
        }
    }
}

function drawRocks() { //Draws textured rocks in the background -Clayton Ramey
  centerTurtle();
  var maxRocks = randomNumber(10, 25);
  for (var g = 0; g < maxRocks; g++) {
      ranPosition();
      penDown();
      penRGB(randomNumber(50, 70), randomNumber(80, 90), randomNumber(90, 115));
      dot(randomNumber(5, 15));
      rockChance();
  }
}

function rockChance() { //Creates a chance for unique rocks -Clayton Ramey
    var chance = randomNumber(1, 8);
    if (chance === 1) {
      turnRight(randomNumber(1, 360));
      moveForward(randomNumber(6, 10));
      dot(randomNumber(5, 15));
      turnTo(0);
    }
}

/**
 * Function to simplify the drawing of the house background for House01.
 * 
 * @author: Nathan
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
    for (var h = 0; h < 2; h++) {
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
 * @author: Nathan, Tanner
 * @returns Boolean true if house was successfully made, false if it couldn't be made in that position.
 * @WIP
 */
function drawHouse01() {
    var buildStartDirection = getDirection();
    var buildStart = [getX(), getY()]; //The start point of building the house.
    var house01Half = Math.sqrt(Math.pow(roadSize*2, 2)*2); //The distance from buildStart point to center for House01
    penUp();
    turnRight(45);
    moveForward(house01Half);
    var buildCenter = [getX(), getY()]; //The center of the house.

    if(Collision.isCollision(getX(), getY(), (house01Half / 2) + 25)) {
      if(debug) { console.log("HOUSE C-CHECK: failed, house collision at " + getX() + ", " + getY()); }
      return false; 
    } else {
      if(debug) { console.log("HOUSE C-CHECK: created new house at " + getX() + ", " + getY()); }
      Collision.newObject(getX(), getY(), house01Half / 2);
    }

    turnLeft(45);
    moveTo(buildCenter[0], buildCenter[1]);
    penRGB(drawHouse01Color02[0], drawHouse01Color02[1], drawHouse01Color02[2]);
    fillHouse01();
    for (var q = 0; q < 2; q++) {
        penUp();
        moveTo(buildStart[0], buildStart[1]);
        if (q === 0) {
            turnTo(buildStartDirection);
        } else if (q === 1) {
            turnTo(buildStartDirection);
        }
        penRGB(drawHouse01Color01[0], drawHouse01Color01[1], drawHouse01Color01[2]);
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
    }
    penUp();
    turnRight(45);
    moveForward(roadSize*2);
    turnLeft(45);
    penDown();
    moveTo(buildCenter[0], buildCenter[1]);
    dot(roadSize*0.20);
    penUp();
    moveTo(buildStart[0], buildStart[1]);
    turnRight(45);
    moveForward(house01Half);
    turnLeft(45);
    moveTo(buildStart[0], buildStart[1]);
    return true;

}

function drawAllHouses() {
    penWidth(3);
    var maxHouses = randomNumber(1, 10);
    for (var q = 0; q < maxHouses; q++) {
        ranTurtle();
        var houseSuccess = drawHouse01();
        if(!houseSuccess) {
          ranTurtle();
          while(!drawHouse01()) {
            ranTurtle();
          }
        }
    }
}

function nameTown() {
    var nameListPart01 = ["Stone", "Fire", "Gold", "Steel", "Dirt", "Grain", "Feild"];
    var nameListPart02 = ["Town", "City", "Hearth", "Farm", "Home"];
    var randomName = nameListPart01[randomNumber(0, nameListPart01.length-1)] + nameListPart02[randomNumber(0, nameListPart02.length-1)];
    setText("townTrueName", "Town name: " + randomName);
  
}

/**
 * Object to contain details about an object with collision.
 * 
 * @author: Tanner
 */
function CollisionObject(x, y, radius) {
  this.x = x,
  this.y = y,
  this.radius = radius,

  this.setProperties = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  },

  this.getProperties = function() {
    return [this.x, this.y, this.radius];
  },

  this.getCollision = function(x, y, radius) {
    var dx = Math.abs(x - this.x),                                  // Distance between the provided X point and the collision X point
        dy = Math.abs(y - this.y),                                  //                            ^^ Y point                ^^ Y point
        distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));    // Distance formula: sqrt((dx^2) + (dy^2))
                                                                    // ^ This is the distance between the origin of each circle

    if (debug) {
      console.log("COLLISION CHECK:" + 
                  " dx=" + dx +
                  " dy=" + dy +
                  " distance=" + distance +
                  "...<=...comparator=" + (this.radius + radius)
                 );
    }

    if (distance <= (this.radius + radius)) {                       // If the distance between the two circles is less than or equal
      return true;                                                  // to their combined radii, a collision must occur
    } else {
      return false;
    }
  };
}

/**
 * Object container for CollisionObjects.
 * 
 * @author: Tanner
 */
var Collision = {
  objects: [],

  isCollision: function(x, y, radius) {
    var collisionDetected = false;
    this.objects.forEach(function(object) {
      if(object.getCollision(x, y, radius)) {
        collisionDetected = true;
        if (debug) {
          createCanvas("screen1");
          circle(x, y, radius);
          circle(x, y, radius + 25);
        }
      }
    });

    return collisionDetected;
  },

  newObject: function(x, y, radius) {
    var newCollisionObject = new CollisionObject(x, y, radius);
    if (debug) {
      createCanvas("screen1", 320, 450);
      circle(x, y, radius);
      circle(x, y, radius + 25);
      console.log("COLLISION OBJ: new collision: " + newCollisionObject.getProperties());
    }
    this.objects.push(newCollisionObject);
  },

  getKeys: function() {
    return Object.keys(this);
  },

  getValues: function() {
    return this.getKeys()
      .map(function(key) {
        return this[key];
      });
  },

  getChildObjects: function() {
    return this.objects;
  }
};

hide();                         // Hide the turtle body
drawGrass();                    // Draw the grass background
if(debug) { drawDevGrid(); }    // (DEBUG) Draw grid over the viewplane
drawAllRoads();                 // Activate the road drawing algorithm
drawRocks();                    // Draw rocks
drawRoadCenter();               // Draw the well in the center of the town
drawAllHouses();                // Draw all the houses

centerTurtle();                 // Return turtle to center
castle();                       // Draw castle while turtle is still in the center of the scene

nameTown();                     // Generate a random name for the town.
