import expect from 'expect';

import {
  NORTH,
  SOUTH,
  WEST,
  EAST
} from '../../src/constants/constants';
import { move } from '../../src/core/core';

describe('Core', () => {

  describe('move', () => {
    it('should not move the robot if it is not placed yet', () => {
      const state = {
        x: 0,
        y: 0,
        f: NORTH
      };

      const nextState = move(state);
      expect(nextState).toEqual(
        {
          x: 0,
          y: 0,
          f: NORTH
        }
      );
    });

    it('should move the robot to NORTH for one unit', () => {
      const state = {
        x: 0,
        y: 0,
        f: NORTH,
        isPlaced: true
      };

      const nextState = move(state);
      expect(nextState).toEqual(
        {
          x: 0,
          y: 1,
          f: NORTH,
          isPlaced: true
        }
      );
    });

    it('should move the robot to SOUTH for one unit', () => {
      const state = {
        x: 4,
        y: 3,
        f: SOUTH,
        isPlaced: true
      };

      const nextState = move(state);
      expect(nextState).toEqual(
        {
          x: 4,
          y: 2,
          f: SOUTH,
          isPlaced: true
        }
      );
    });

    it('should move the robot to EAST for one unit', () => {
      const state = {
        x: 3,
        y: 3,
        f: EAST,
        isPlaced: true
      };

      const nextState = move(state);
      expect(nextState).toEqual(
        {
          x: 4,
          y: 3,
          f: EAST,
          isPlaced: true
        }
      );
    });

    it('should move the robot to WEST for one unit', () => {
      const state = {
        x: 1,
        y: 3,
        f: WEST,
        isPlaced: true
      };

      const nextState = move(state);
      expect(nextState).toEqual(
        {
          x: 0,
          y: 3,
          f: WEST,
          isPlaced: true
        }
      );
    });

    it('should ignore when facing WEST and x = 0', () => {
      const state = {
        x: 0,
        y: 3,
        f: WEST,
        isPlaced: true
      };

      const nextState = move(state);
      expect(nextState).toEqual(
        {
          x: 0,
          y: 3,
          f: WEST,
          isPlaced: true
        }
      );
    });

    it('should ignore when facing EAST and x = 4', () => {
      const state = {
        x: 4,
        y: 2,
        f: EAST,
        isPlaced: true
      };

      const nextState = move(state);
      expect(nextState).toEqual(
        {
          x: 4,
          y: 2,
          f: EAST,
          isPlaced: true
        }
      );
    });

    it('should ignore when facing NORTH and y = 4', () => {
      const state = {
        x: 0,
        y: 4,
        f: NORTH,
        isPlaced: true
      };

      const nextState = move(state);
      expect(nextState).toEqual(
        {
          x: 0,
          y: 4,
          f: NORTH,
          isPlaced: true
        }
      );
    });

    it('should ignore when facing SOUTH and y = 0', () => {
      const state = {
        x: 2,
        y: 0,
        f: SOUTH,
        isPlaced: true
      };

      const nextState = move(state);
      expect(nextState).toEqual(
        {
          x: 2,
          y: 0,
          f: SOUTH,
          isPlaced: true
        }
      );
    });
  });

});
