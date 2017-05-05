import expect from 'expect';

import { rotate } from '../../src/core/core';

describe('Core', () => {

  describe('rotate', () => {
    it('should rotate the robot from NORTH to WEST when rotates the LEFT', () => {
      const state = {
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'NORTH'
      };
      const nextState = rotate(state, 'LEFT');
      expect(nextState).toEqual({
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'WEST'
      });
    });

    it('should rotate the robot from NORTH to EAST when rotates the RIGHT', () => {
      const state = {
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'NORTH'
      };
      const nextState = rotate(state, 'RIGHT');
      expect(nextState).toEqual({
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'EAST'
      });
    });

    it('should rotate the robot from WEST to NORTH when rotates the RIGHT', () => {
      const state = {
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'WEST'
      };
      const nextState = rotate(state, 'RIGHT');
      expect(nextState).toEqual({
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'NORTH'
      });
    });

    it('should rotate the robot from EAST to NORTH when rotates the LEFT', () => {
      const state = {
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'EAST'
      };
      const nextState = rotate(state, 'LEFT');
      expect(nextState).toEqual({
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'NORTH'
      });
    });

    it('should rotate the robot from EAST to SOUTH when rotates the RIGHT', () => {
      const state = {
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'EAST'
      };
      const nextState = rotate(state, 'RIGHT');
      expect(nextState).toEqual({
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'SOUTH'
      });
    });

    it('should rotate the robot from SOUTH to EAST when rotates the LEFT', () => {
      const state = {
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'SOUTH'
      };
      const nextState = rotate(state, 'LEFT');
      expect(nextState).toEqual({
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'EAST'
      });
    });

    it('should rotate the robot from WEST to SOUTH when rotates the LEFT', () => {
      const state = {
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'WEST'
      };
      const nextState = rotate(state, 'LEFT');
      expect(nextState).toEqual({
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'SOUTH'
      });
    });

    it('should rotate the robot from SOUTH to WEST when rotates the RIGHT', () => {
      const state = {
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'SOUTH'
      };
      const nextState = rotate(state, 'RIGHT');
      expect(nextState).toEqual({
        isPlaced: true,
        x: 0,
        y: 0,
        f: 'WEST'
      });
    });
  });

});
