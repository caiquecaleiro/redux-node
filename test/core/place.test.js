import expect from 'expect';

import {
  NORTH,
  SOUTH,
  WEST,
  EAST
} from '../../src/constants/constants';
import { place } from '../../src/core/core';

describe('Core', () => {

  describe('place', () => {
    it('should place the robot on the correct coordinates', () => {
      const state = {};
      const object = {
        x: 1,
        y: 1,
        f: WEST,
        isPlaced: false
      };
      const nextState = place(state, object);
      expect(nextState).toEqual(
        {
          x: 1,
          y: 1,
          f: WEST,
          isPlaced: true
        }
      );
    });

    it('should ignore when the coordinates are bigger than the table', () => {
      const state = {};
      const xInvalid = {
        x: 6,
        y: 1,
        f: WEST,
        isPlaced: false
      };
      const yInvalid = {
        x: 1,
        y: 6,
        f: NORTH,
        isPlaced: false
      };

      const nextStateX = place(state, xInvalid);
      const nextStateY = place(state, yInvalid);
      expect(nextStateX).toEqual(state);
      expect(nextStateY).toEqual(state);
    });

    it('should ignore when the coordinates are negatives', () => {
      const state = {};
      const xInvalid = {
        x: -1,
        y: 1,
        f: WEST,
        isPlaced: false
      };
      const yInvalid = {
        x: 1,
        y: -1,
        f: NORTH,
        isPlaced: false
      };

      const nextStateX = place(state, xInvalid);
      const nextStateY = place(state, yInvalid);
      expect(nextStateX).toEqual(state);
      expect(nextStateY).toEqual(state);
    });


    it('should ignore when the face is not valid', () => {
      const state = {};
      const object = {
        x: 1,
        y: 1,
        f: 'W',
        isPlaced: false
      };

      const nextState = place(state, object);
      expect(nextState).toEqual(state);
    });

    it('should ignore when it is not a valid number', () => {
      const state = {};
      const objectX = {
        x: 1.1,
        y: 1,
        f: EAST,
        isPlaced: false
      };
      const objectY = {
        x: 1,
        y: 2.3,
        f: EAST,
        isPlaced: false
      };

      const nextStateX = place(state, objectX);
      const nextStateY = place(state, objectY);
      expect(nextStateX).toEqual(state);
      expect(nextStateY).toEqual(state);
    });
  });

});
