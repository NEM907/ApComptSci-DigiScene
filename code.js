//This is the Master File that will be ran in Code.org
//When adding code please add a comment above it explaining what the code does and also your name 
//Good Luck Have Fun (:


// Variable Declarations
    var debug = false;

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
    var drawHouse01Color01 = [150, 111, 51]; // HEX: #966f33 - Wood Brown - https://www.colorcodehex.com/966f33/
    var drawHouse01Color02 = [112, 83, 38]; // HEX: #705326 - Dark Wood Brown - https://www.colorcodehex.com/705326/
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
    hide();
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
 * Places the Turtle in a random postion and turns to a random direction.
 */
function ranTurtle() {
    penUp();
    moveTo(randomNumber(0, 320), randomNumber(0,449));
    turnTo(randomNumber(0,359));
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
    centerTurtle();
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
    Collision.newObject(getX(), getY(), (25 / 2) + 5);
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
        dot(randomNumber(1, 2.5));
    }
}

function drawRocks() { //Draws textured rocks in the background -Clayton Ramey
  
  centerTurtle();
  var maxRocks = randomNumber(10, 25);
  for (var g = 0; g < maxRocks; g++) {
      ranPosition();
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
    return [ this.x, this.y, this.radius ];
  },
  
  this.getCollision = function(x, y, radius) {
    var dx = Math.abs(x - this.x),
        dy = Math.abs(y - this.y),
        distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    
    if(debug) { console.log("COLLISION CHECK: dx=" + dx + " dy=" + dy + " distance=" + distance + "...<=...comparator=" + (this.radius + radius)); }
    
    if(distance <= (this.radius + radius)) {
      return true;
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
        if(debug) {
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
      if(debug) { 
        createCanvas("screen1", 320, 450); circle(x, y, radius); circle(x, y, radius + 25);
        console.log("COLLISION OBJ: new collision: " + newCollisionObject.getProperties());
      }
    this.objects.push(newCollisionObject);
  },
  
  getKeys: function() {
		 return Object.keys(this);
	},

	getValues: function() {
	  return this.getKeys().map(function(key) {
	    return this[key];
	  });
	},
	
	getChildObjects: function() {
	  return this.objects;
	}
};

hide();

drawGrass();
drawRocks();
if(debug) { drawDevGrid(); }
drawAllRoads();
drawAllHouses();
drawRoadCenter();
nameTown();
