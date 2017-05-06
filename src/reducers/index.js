import { PLACE, REPORT, ROTATE, MOVE } from '../actions/types';
import { place, report, rotate, move } from '../core/core';

const INITIAL_STATE = { isPlaced: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PLACE:
      return place(state, action.position);
    case REPORT:
      return report(state);
    case ROTATE:
      return rotate(state, action.direction);
    case MOVE:
      return move(state);
    default:
      return state;
  }
}