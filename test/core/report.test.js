import expect from 'expect';

import { report } from '../../src/core/core';

describe('Core', () => {

  describe('report', () => {
    it('should not change the state', () => {
      const state = { 
        x: 1,
        y: 2,
        f: 'NORTH',
        isPlaced: true 
      };
      const nextState = report(state);
      expect(nextState).toEqual({ 
        x: 1,
        y: 2,
        f: 'NORTH',
        isPlaced: true 
      });
    });
  });

});
