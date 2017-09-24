import { SELECT_FLIGHT, UNSELECT_FLIGHT } from '../actions/types';

export default function (state = '', action) {
  switch (action.type) {
    case SELECT_FLIGHT:
      return action.payload;
    case UNSELECT_FLIGHT:
      return '';
    default:
      return state;
  }
}
