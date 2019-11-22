// We are sending a rover to Mars, and we need to be able to move it through a series
// of instructions sent from the Earth.

// the rover can't move and turn at the same time
// test mission (10 x 10 grid)
// create a function to turn the rover
// create a function to move the rover forward or backward based on its direction
// create a function to receive a list of commands and move based off of those commands

// Iteration 1 - The Rover Object

// Rover Object Goes Here
// ======================

let marsRover = {
  // adding the rover objects inside the object holding them together
  // the direction property can contain one of four values: 'N', 'S', 'E' or 'W'
  // default = 'N'
  rover1: {
    direction: 'N',
    // add two properties to your rover called x and y
    // default = 0
    x: 0,
    y: 0,
    travelLog: [{ x: 0, y: 0 }],
  },
  rover2: {
    direction: 'S',
    x: 1,
    y: 1,
    travelLog: [{ x: 1, y: 1 }],
  },
};

// ======================

// Iteration 2 - Turning the Rover
// turn the rover in the appropriate direction based off of its current direction

function turnLeft(rover) {
  console.log('turnLeft was called!');
  let currentDirection = rover.direction;

  switch (currentDirection) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'W':
      rover.direction = 'S';
      break;
    default:
      console.log('Invalid direction!');
      break;
  }
  console.log(rover.direction);
}

function turnRight(rover) {
  console.log('turnRight was called!');
  let currentDirection = rover.direction;

  switch (currentDirection) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'W':
      rover.direction = 'N';
      break;
    default:
      console.log('Invalid direction!');
      break;
  }
  console.log(rover.direction);
}

// Iteration 3 - Moving the Rover
// the rover's position
// keep track of the rover's position -> pair of coordinates (x, y)

// function to move forward
function moveForward(rover) {
  console.log('moveForward was called');
  let currentDirection = rover.direction;

  // print current position and direction
  console.log(`current direction ${rover.direction} and current position x=${rover.x} y=${rover.y}`);
  movingRover(rover, currentDirection);
}

// Bonus 2 - Move Backwards
// create another function called moveBackward() that will move the rover back

function moveBackward(rover) {
  console.log('moveBackward was called');
  let currentDirection = rover.direction;

  // define the direction to move backwards

  let directionBack;

  switch (currentDirection) {
    case 'N':
      directionBack = 'S';
      break;
    case 'S':
      directionBack = 'N';
      break;
    case 'W':
      directionBack = 'E';
      break;
    case 'E':
      directionBack = 'W';
      break;
    default:
      console.log('Not a valid direction!');
      break;
  }

  // print current position and direction backwards
  console.log(`direction backwards ${directionBack} and current position x=${rover.x} y=${rover.y}`);

  // refactoring the function to be in less lines
  // removing scenarios and leaving the conditions inside the switch statement

  movingRover(rover, directionBack);
}

// creating a separate function to do the move, so it will not be
// repeated depending on the direction it moves
// refactoring the function to be in less lines
// removing scenarios and leaving the conditions inside the switch statement

function movingRover(rover, direction) {

  switch (direction) {
    case 'N':
      if (rover.y - 1 >= 0) {
        rover.y--;
        newPosition(rover);
      } else {
        console.log('NO CAN DO! Board size error');
      }
      break;
    case 'S':
      if (rover.y + 1 <= 9) {
        rover.y++;
        newPosition(rover);
      } else {
        console.log('NO CAN DO! Board size error');
      }
      break;
    case 'W':
      if (rover.x - 1 >= 0) {
        rover.x--;
        newPosition(rover);
      } else {
        console.log('NO CAN DO! Board size error');
      }
      break;
    case 'E':
      if (rover.x + 1 <= 9) {
        rover.x++;
        newPosition(rover);
      } else {
        console.log('NO CAN DO! Board size error');
      }
      break;
    default:
      console.log('Not a valid direction!');
      break;
  }
}

// function to print the new position and return the new log
function newPosition(rover) {
  console.log(`new position x=${rover.x} y=${rover.y}`);

  let newPosition = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPosition);
  //console.log(rover.travelLog)
}

// Iteration 4 - Commands

// first part of the for just to validate the orders input

function command(rover, orders, grid) {
  setRoverGrid(rover, grid);
  console.log(grid.join('\n'));

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];

    if (order !== 'b' || order !== 'f' || order !== 'r' || order !== 'l') {
      console.log('Invalid direction! Please review your orders!');
    } else {
      switch (order) {
        case 'f':
          moveForward(rover);
          break;
        case 'b':
          moveBackward(rover);
          break;
        case 'r':
          turnRight(rover);
          break;
        case 'l':
          turnLeft(rover);
          break;
        default:
          break;
      }
    }
  }
  console.log(`The rover has made ${rover.travelLog.length} moves: `);
  // for (let i = 0; i < rover.travelLog.length; i++) {
  // console.log(`Move ${i + 1} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
  // }
}

// Bonus 4 - Obstacles
// creating a grid for the rover to move around on (2D arrays)
// empty spaces are represented by TRUE, obstacles by FALSE and the rover by 'R'

let marsRoverGrid = [
  [true, true, false, true, false, true, true, true, true, true],
  [true, true, true, false, true, true, true, false, true, true],
  [true, true, true, true, false, true, false, true, true, true],
  [true, false, true, true, true, true, true, false, true, true],
  [true, true, true, true, false, true, true, true, false, true],
  [true, true, true, false, true, true, true, true, true, false],
  [true, true, false, true, true, false, true, true, true, true],
  [true, false, true, true, true, true, true, false, true, true],
  [true, true, false, true, false, true, true, true, true, true],
  [true, true, true, false, true, true, true, true, false, true],
];

// console.log(marsRoverGrid.join('\n'));

function setRoverGrid(rover, grid) {
  // set rover in his first position
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === rover.y && j === rover.x) {
        grid[i][j] = 'R';
      }
    }
  }
}

// setRoverGrid(marsRover, marsRoverGrid);

// function to calculate next move
// ---------- receber o board na funcao em cima e checar

function nextMove(rover) {
  let currentDirection = rover.direction;
  // console.log(currentDirection);

  let moveY;
  let moveX;
  let arr = [];

  switch (currentDirection) {
    case 'N':
      moveY = rover.y - 1;
      moveX = rover.x;
      break;
    case 'S':
      moveY = rover.y + 1;
      moveX = rover.x;
      break;
    case 'E':
      moveX = rover.x + 1;
      moveY = rover.y;
      break;
    case 'W':
      moveX = rover.x - 1;
      moveY = rover.y;
      break;
    default:
      console.log('Invalid direction!');
      break;
  }
  // console.log(moveX);
  // console.log(moveY);
  arr.push(moveX, moveY);
  // console.log(arr);
  return (arr);
}

// function to check the obstacles and rovers on the grid and move each of them

// separate function to move rovers

function moveRover(grid, rover, orders) {

  // --------- validacao de comandos
  // ---------- reaproveitar funcao anterior

  for (let i = 0; i < orders.length; i++) {
    let order = orders[i];
    let coordinates = [];

    switch (order) {
      case 'l':
        turnLeft(rover);
        break;
      case 'r':
        turnRight(rover);
        break;
      case 'f':
        coordinates = nextMove(rover);
        // console.log(coordinates);
        // console.log(coordinates[1])
        if (typeof grid[coordinates[1]] === 'undefined' || typeof grid[coordinates[0]] === 'undefined') {
          console.log('Not possible, out of range!');          
        } else if (grid[coordinates[1]][coordinates[0]] === '.') {
          moveForward(rover);
        } else if (grid[coordinates[1]][coordinates[0]] === 'X') {
          console.log ('You will crush into another rover');
        } else {
          console.log('Not possible, obstacle!');
          // console.log(rover.travelLog);
        }
        break;
      case 'b':
        coordinates = nextMove(rover);
        console.log(coordinates);
        // console.log(coordinates[1])
        if (typeof grid[coordinates[1]] === 'undefined' || typeof grid[coordinates[0]] === 'undefined') {
          console.log('Not possible, out of range!');
        } else if (grid[coordinates[1]][coordinates[0]] === '.') {
          moveForward(rover);
        } else if (grid[coordinates[1]][coordinates[0]] === 'X') {
          console.log ('You will crush into another rover');
        } else {
          console.log('Not possible, obstacle!');
          // console.log(rover.travelLog);
        }
        break;
      default:
        console.log('Invalid command!');
        break;
    }
  }
}

function checkObstacles(grid, rover1, rover2, orders1, orders2) {

  // save rovers' initial position
  let initialPositionRover1 = [];
  initialPositionRover1.push(rover1.x);
  initialPositionRover1.push(rover1.y);
  console.log(`Rover1 initial position: ${initialPositionRover1}`);

  let initialPositionRover2 = [];
  initialPositionRover2.push(rover2.x);
  initialPositionRover2.push(rover2.y);
  console.log(`Rover1 initial position: ${initialPositionRover2}`);

  // generate the grid with the obstacles
  setRoverGrid(rover1, grid);
  setRoverGrid(rover2, grid);

  // ------ imprimir aqui

  // read the map where the rover is
  // see the next command and check the cell where it should go
  // if cell = ., good to go, if the cell = o or cell = X, not good to go
  // receive the list of commands and execute one at a time

  // now that we have two simultaneous rovers, check where each of them is and move accordingly
  // to avoid repeating, separated the functions

  // first rover
  console.log('Moving rover1');
  moveRover(grid, rover1, orders1);

  // update grid with new position of rover1


  // second rover
  console.log('Moving rover2');
  moveRover(grid, rover2, orders2);

  // update grid with the new position of rover2
  // reset initial position to empty space
  grid[initialPositionRover1[1]][initialPositionRover1[0]] = '.';
  grid[initialPositionRover2[1]][initialPositionRover2[0]] = '.';

  // update new position
  setRoverGrid(rover1, grid);
  setRoverGrid(rover2, grid);

  // -------- imprimir board

  // show end of moves
  console.log('Finished moving rovers!')

  // show new set of the grid
}

// ------------------------------------------------

// TESTING:

// test turnRight
// turnRight(marsRover);

// test turnLeft
// turnLeft(marsRover);

// test moveForward
// moveForward(marsRover);

// test moveBackward
// moveBackward(marsRover);

// command function + forward
// command(marsRover, 'rfrfflflff');
// command(marsRover, 'rfrffl1fl2ff');

// command function + backward
// command(marsRover, 'brffrfflfrfffffffffbbbbb');
// command(marsRover, 'brfffffffffffrffflfrf3fffffbbbbb1');

// test checking obstacles
// checkObstacles(marsRover, marsRoverGrid, 'r');
// checkObstacles(marsRover, marsRoverGrid, 'rrflf');
// checkObstacles(marsRoverGrid, marsRover, marsRover2, 'rrflf', 'lfrf');

// console.log(marsRoverGrid[10][8]);
// console.log(typeof marsRoverGrid[10] === 'undefined');
// console.log(typeof marsRoverGrid[8] === 'undefined');
