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
  
  if (!isValidPosition(x, y) || !isValidFace(f)) {
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
  if (!state.isPlaced) {
    console.log('Robot is not placed yet. Please use PLACE X, Y, F');
    return state;
  }
  
  console.log('Robot coordinates:');
  console.log(`X: ${state.x}, Y: ${state.y}, F: ${state.f}`);

  return state;
}

/**
 * Checks whether the X and Y are a valid position 
 * between 0 and 5 (5x5 table).
 * @param {Number} x 
 * @param {Number} y 
 * @return {Boolean}
 */
function isValidPosition(x, y) {
  return isValidInteger(x) && isValidInteger(y) 
    && x <= 5 && y <= 5 
    && x >= 0 && y >= 0;
}

/**
 * Checkes whether if the number is a valid integer or not.
 * @param {Number} number 
 */
function isValidInteger(number) {
	if (number % 1 === 0) {
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
    case 'NORTH':
    case 'SOUTH':
    case 'WEST':
    case 'EAST':
      return true;
    default:
      return false;
  }
}