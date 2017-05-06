import expect from 'expect';

import {
  NORTH,
  SOUTH,
  WEST,
  EAST,
  LEFT,
  RIGHT
} from '../../src/constants/constants';
import reducers from '../../src/reducers';
import { PLACE, ROTATE } from '../../src/actions/types';


describe('reducers', () => { 
  it('should have an initial state', () => {
    const nextState = reducers(undefined, 'fakeAction');
	  expect(nextState).toEqual({
	  	isPlaced: false
	  });
  });

  it('should be able to PLACE the robot', () => {
    const action = {
      type: PLACE, 
      position: {
        x: 1,
        y: 1,
        f: EAST
      }
    };
 
    const nextState = reducers(undefined, action);
	  expect(nextState).toEqual({
	  	isPlaced: true,
      x: 1,
      y: 1,
      f: EAST
	  });
  });

  it('should be able to ROTATE the robot to LEFT', () => {
    const state = {
      isPlaced: true,
      x: 0,
      y: 0,
      f: NORTH
    };

    const action = {
      type: ROTATE, 
      direction: LEFT
    };
 
    const nextState = reducers(state, action);

	  expect(nextState).toEqual({
	  	isPlaced: true,
      x: 0,
      y: 0,
      f: WEST
	  });
  });

  it('should be able to ROTATE the robot to RIGHT', () => {
    const state = {
      isPlaced: true,
      x: 4,
      y: 4,
      f: NORTH
    };

    const action = {
      type: ROTATE, 
      direction: RIGHT
    };
 
    const nextState = reducers(state, action);

	  expect(nextState).toEqual({
	  	isPlaced: true,
      x: 4,
      y: 4,
      f: EAST
	  });
  });
  
});


