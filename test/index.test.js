import expect from 'expect';

import {
  NORTH,
  SOUTH,
  EAST,
  WEST,
  LEFT,
  RIGHT
} from './../src/constants/constants';
import { executeCommand } from './../src/index';

describe('Index', () => {
  
  describe('executeCommand', () => {
    it('should handle the PLACE command with spaces', () => {
      const command = 'PLACE 1,   1,   NORTH';
      const action = executeCommand(command);
      
      expect(action).toEqual([{ 
        type: 'PLACE', 
        position: { 
          x: 1, 
          y: 1,
          f: NORTH
        }
      }]);
    });

    it('should handle the PLACE command with lowercase', () => {
      const command = 'place 3,1,east';
      const action = executeCommand(command);
      
      expect(action).toEqual([{ 
        type: 'PLACE', 
        position: { 
          x: 3, 
          y: 1,
          f: EAST
        }
      }]);
    });

    it('should handle the PLACE command without commas', () => {
      const command = 'place 4 4 south';
      const action = executeCommand(command);
      
      expect(action).toEqual([{ 
        type: 'PLACE', 
        position: { 
          x: 4, 
          y: 4,
          f: SOUTH
        }
      }]);
    });

    it('should handle the REPORT command', () => {
      let command = 'REPORT';
      let action = executeCommand(command);
      const expectedAction = [{ type: 'REPORT' }];
      
      expect(action).toEqual(expectedAction);

      command = ' report ';
      action = executeCommand(command);
      
      expect(action).toEqual(expectedAction);
    });

    it('should handle the LEFT command', () => {
      let command = LEFT;
      let action = executeCommand(command);
      const expectedAction = [{ 
        type: 'ROTATE',
        direction: LEFT
      }];

      expect(action).toEqual(expectedAction);

      command = ' Left';
      action = executeCommand(command);
      
      expect(action).toEqual(expectedAction);
    });

    it('should handle the RIGHT command', () => {
      let command = RIGHT;
      let action = executeCommand(command);
      const expectedAction = [{ 
        type: 'ROTATE',
        direction: RIGHT
      }];

      expect(action).toEqual(expectedAction);

      command = ' Right ';
      action = executeCommand(command);
      
      expect(action).toEqual(expectedAction);
    });

    it('should handle wrong commands', () => {
      let command = 'anything';
      let action = executeCommand(command);
      const expectedAction = [];

      command = ' ';
      action = executeCommand(command);
      
      expect(action).toEqual(expectedAction);
    });
  });
});
