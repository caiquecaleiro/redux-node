import { PLACE, REPORT } from '../actions/types';
import { place, report } from '../core/core';

const INITIAL_STATE = { isPlaced: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PLACE:
      return place(state, action.position);
    case REPORT:
      return report(state);
    default:
      return state;
  }
}