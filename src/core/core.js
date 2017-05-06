import { 
  INCREASE, 
  DECREASE,
  NORTH,
  SOUTH,
  EAST,
  WEST,
  LEFT,
  RIGHT
} from '../constants/constants';

/**
 * Checks whether the selected position is valid and
 * updates the state.
 * @param {Object} state 
 * @param {Object} object 
 * @return {Object}
 */
export function place(state, object) {
  const { x, y, f } = object;
  const isPlaced = true;
  
  if (!isValidPosition(x) || !isValidPosition(y) || !isValidFace(f)) {
    return state;
  }

  return { ...state, x, y, f, isPlaced };
}

/**
 * Prints the current coordinates based on the state.
 * @param {Object} state 
 * @return {Object} 
 */
export function report(state) {
  if (!isRobotPlaced(state)) {
    return state;
  }
  
  console.log('Robot coordinates:');
  console.log(`X: ${state.x}, Y: ${state.y}, F: ${state.f}`);

  return state;
}

/**
 * Checks whether the robot is placed and if the command is a valid direction.
 * Then returns the new direction state.
 * @param {Object} state 
 * @param {String} 'LEFT or RIGHT' 
 * @return {Object} 
 */
export function rotate(state, command) {
  if (!isRobotPlaced(state)) {
    return state;
  }

  switch (command) {
    case LEFT:
    case RIGHT:
      const f = getNewDirection(state.f, command);
      return { ...state, f };
    default:
      return state;
  }
}

/**
 * Checks whether the robot is placed and if the command is a valid direction.
 * Then returns the new position state.
 * @param {Object} state 
 * @return {Object} 
 */
export function move(state) {
  if (!isRobotPlaced(state)) {
    return state;
  }

  const { x, y, f } = state;

  switch (f) {
    case WEST:
      return { ...state, x: getNewCoordinate(x, DECREASE) };
    case EAST:
      return { ...state, x: getNewCoordinate(x, INCREASE) };
    case SOUTH:
      return { ...state, y: getNewCoordinate(y, DECREASE) };
    case NORTH:
      return { ...state, y: getNewCoordinate(y, INCREASE) };
    default:
      return state;
  }
}

function isRobotPlaced(state) {
  if (!state.isPlaced) {
    console.log('Robot is not placed yet. Please use PLACE X, Y, F.');
    return false;
  }
  return true;
}

/**
 * Checks whether the new position valid and then returns
 * the new position. Otherwise, it will just return the current one. 
 * @param {Number} currentPosition 
 * @param {String} 'INCREASE or DECREASE' 
 * @return {Number} 
 */
function getNewCoordinate(currentPosition, type) {
  let newValue = 0;

  switch (type) {
    case INCREASE:
      newValue = currentPosition + 1;
      if (isValidPosition(newValue)) {
        return newValue;
      }
      break;
    case DECREASE:
      newValue = currentPosition - 1;
      if (isValidPosition(newValue)) {
        return newValue;
      } 
      break;
  }
  return currentPosition;
}

/**
 * Returns the new directions based on the current one.
 * @param {String} current
 * @param {String} newDirection 
 * @return {String} 
 */
function getNewDirection(current, newDirection) {
  if (newDirection === LEFT) {
    return rotateLeft(current);
  }
  return rotateRight(current);
}

/**
 * Returns a new direction to left based on the current one.
 * Ex: current = NORTH, returns = WEST.
 * @param {String} current
 * @return {String}
 */
function rotateLeft(current){
	switch(current){
		case NORTH:
			return WEST;
		case SOUTH:
			return EAST;
		case EAST:
			return NORTH;
		case WEST:
			return SOUTH;
	}
}

/**
 * Returns a new direction to right based on the current one.
 * Ex: current = NORTH, returns = EAST.
 * @param {String} current
 * @return {String}
 */
function rotateRight(current){
	switch(current){
		case NORTH:
			return EAST;
		case SOUTH:
			return WEST;
		case EAST:
			return SOUTH;
		case WEST:
			return NORTH;
	}
}

/**
 * Checks whether number is a valid position 
 * between 0 and 4 (5x5 table).
 * @param {Number} number
 * @return {Boolean}
 */
function isValidPosition(number) {
  if (isValidInteger(number) && number <= 4 && number >= 0) {
    return true;
  };
  
  console.log(`${number} is not a valid position.`);
  return false;
}

/**
 * Checks whether if the number is a valid integer or not.
 * @param {Number} number 
 */
function isValidInteger(number) {
	if (typeof number === 'number' && number % 1 === 0) {
		return true;
	}

	console.log(`${number} is not a valid integer.`);
	return false;
}

/**
 * Checks whether face is between NORTH, SOUTH, WEST or EAST.
 * @param {String} face 
 * @return {Boolean}
 */
function isValidFace(face) {
  switch (face) {
    case NORTH:
    case SOUTH:
    case WEST:
    case EAST:
      return true;
    default:
      console.log(`${face} is not a valid direction.`);
      return false;
  }
}