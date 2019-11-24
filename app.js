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

const marsRover = [
  // adding the rover objects inside the array holding them together
  // the direction property can contain one of four values: 'N', 'S', 'E' or 'W'
  // default = 'N'
  {
    direction: 'N',
    // add two properties to your rover called x and y
    // default = 0
    x: 0,
    y: 0,
    travelLog: [{ x: 0, y: 0 }],
  },
  // new rover with random values
  {
    direction: 'S',
    x: 1,
    y: 1,
    travelLog: [{ x: 1, y: 1 }],
  },
];

// ======================

// Iteration 2 - Turning the Rover
// turn the rover in the appropriate direction based off of its current direction

function turnLeft(rover) {
  console.log('turnLeft was called!');
  const currentDirection = rover.direction;

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
  const currentDirection = rover.direction;

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
function moveForward(rover, grid) {
  console.log('moveForward was called');
  const currentDirection = rover.direction;

  // print current position and direction
  console.log(`current direction ${rover.direction} and current position x=${rover.x} y=${rover.y}`);

  // call function to move rover
  moveRover(rover, currentDirection, grid);
}

// Bonus 2 - Move Backwards
// create another function called moveBackward() that will move the rover back

function moveBackward(rover, grid) {
  console.log('moveBackward was called');
  const currentDirection = rover.direction;
  console.log(currentDirection);

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

  // calling function to move
  moveRover(rover, directionBack, grid);
}

// creating a separate function to do the move, so it will not be
// repeated depending on the direction it moves
// refactoring the function to be in less lines
// removing scenarios and leaving the conditions inside the switch statement

function moveRover(rover, direction, grid) {
  // console.log(grid.join('\n'));
  switch (direction) {
    case 'N':
      if (rover.y - 1 >= 0) {
        // console.log(grid[rover.y - 1][rover.x]);
        // console.log(rover.x);
        // console.log(rover.y);
        if (grid[rover.y - 1][rover.x] === 'R') {
          console.log('You will crush into another rover!!!');
        } else if (grid[rover.y - 1][rover.x]) {
          rover.y -= 1;
          newPosition(rover);
        } else {
          console.log('Not possible, obstacle!');
        }
      } else {
        console.log('NO CAN DO! Board size error');
      }
      break;
    case 'S':
      if (rover.y + 1 <= 9) {
        // console.log(grid[rover.y + 1][rover.x]);
        // console.log(rover.x);
        // console.log(rover.y);
        if (grid[rover.y + 1][rover.x] === 'R') {
          console.log('You will crush into another rover!!!');
        } else if (grid[rover.y + 1][rover.x]) {
          rover.y += 1;
          newPosition(rover);
        } else {
          console.log('Not possible, obstacle!');
        }
      } else {
        console.log('NO CAN DO! Board size error');
      }
      break;
    case 'W':
      if (rover.x - 1 >= 0) {
        // console.log(grid[rover.y][rover.x - 1]);
        // console.log(rover.x);
        // console.log(rover.y);
        if (grid[rover.y][rover.x - 1] === 'R') {
          console.log('You will crush into another rover!!!');
        } else if (grid[rover.y][rover.x - 1]) {
          rover.x -= 1;
          newPosition(rover);
        } else {
          console.log('Not possible, obstacle!');
        }
      } else {
        console.log('NO CAN DO! Board size error');
      }
      break;
    case 'E':
      if (rover.x + 1 <= 9) {
        // console.log(grid[rover.y][rover.x + 1]);
        // console.log(rover.x);
        // console.log(rover.y);
        if (grid[rover.y][rover.x + 1] === 'R') {
          console.log('You will crush into another rover!!!');
        } else if (grid[rover.y][rover.x + 1]) {
          rover.x += 1;
          newPosition(rover);
        } else {
          console.log('Not possible, obstacle!');
        }
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

  let newPos = { x: rover.x, y: rover.y };
  rover.travelLog.push(newPos);
  // console.log(rover.travelLog)
}

// Iteration 4 - Commands

// first part of the for just to validate the orders input

function command(arrayRover, arrayOrders, grid) {
  let numRovers = arrayRover.length;
  console.log(numRovers);

  // save rover's initial position

  for (let i = 0; i < numRovers; i++) {
    let initialPositionRover = [];
    initialPositionRover.push(arrayRover[i].x, arrayRover[i].y);

    console.log(`Rover${i + 1} initial position: ${initialPositionRover}`);

    // generate the grid with the obstacles and set rover
    setRoverGrid(arrayRover[i], grid);
  }
  console.log(grid.join('\n'));

  // read the map where the rover is
  // see the next command and check the cell where it should go
  // if cell = 1, good to go, if the cell = 0 or cell = R, not good to go
  // receive the list of commands and execute one at a time

  // now that we have two simultaneous rovers, check where each of them is and move accordingly
  // to avoid repeating, separated the functions

  // function to check the obstacles and rovers on the grid and move each of them

  for (let i = 0; i < numRovers; i++) {
    let startPos = [];
    let endPos = [];
    startPos.push(arrayRover[i].x, arrayRover[i].y);
    console.log(startPos);

    console.log(`Moving rover${i + 1}`);
    if (arrayOrders.length === arrayRover.length) {
      for (let j = 0; j < arrayOrders[i].length; j++) {
        let order = arrayOrders[i][j];
        console.log(order);

        if (order !== 'b' && order !== 'f' && order !== 'r' && order !== 'l') {
          console.log('Invalid direction! Please review your orders!');
        } else {
          switch (order) {
            case 'l':
              turnLeft(arrayRover[i]);
              break;
            case 'r':
              turnRight(arrayRover[i]);
              break;
            case 'f':
              moveForward(arrayRover[i], grid);
              break;
            case 'b':
              moveBackward(arrayRover[i], grid);
              break;
            default:
              console.log('Invalid command!');
              break;
          }
        }
      }
    } else {
      console.log('Review orders\' array: the number of orders and rovers do not match');
    }
    console.log(`Rover${i + 1}: End of moves!`);
    console.log(`The rover has made ${arrayRover[i].travelLog.length} moves: `);
    for (let k = 0; k < arrayRover[i].travelLog.length; k++) {
      console.log(`Move ${k + 1} ==> x=${arrayRover[i].travelLog[k].x}, y=${arrayRover[i].travelLog[k].y}`);
    }
    // reset grid, changing rovers position and deleting initial position
    endPos.push(arrayRover[i].x, arrayRover[i].y);
    console.log(endPos);

    // update grid with the new position of rover1 and 2
    updateGrid(grid, startPos, endPos);
  }
  // show end of moves
  console.log('Finished moving rovers!');

  // print new version of board
  console.log(grid.join('\n'));
}

// function to reset the grid
function updateGrid(grid, startPos, endPos) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === startPos[1] && j === startPos[0]) {
        grid[i][j] = 1;
      } else if (i === endPos[1] && j === endPos[0]) {
        grid[i][j] = 'R';
      }
    }
  }
}

// Bonus 4 - Obstacles
// creating a grid for the rover to move around on (2D arrays)
// empty spaces are represented by 1, obstacles by 0 and the rover by 'R'

let marsRoverGrid = [
  [1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 0],
  [1, 1, 0, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
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

// ------------------------------------------------

// TESTING:

let ordersArray = ['rrffffffffff', 'lrlfflflbblff'];

command(marsRover, ordersArray, marsRoverGrid);

// test turnRight
// turnRight(marsRover);

// test turnLeft
// turnLeft(marsRover);

// test moveForward
// moveForward(marsRover.rover1);

// test moveBackward
// moveBackward(marsRover.rover1);

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
