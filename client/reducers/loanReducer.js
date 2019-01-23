import * as types from '../actions/actionTypes';

const initialState = {
  loans: {
    accepted: [],
    requested: [],
  },
}

export default function loanReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_LOANS:
      return Object.assign({}, state, action);
    default:
      return state;
  }
}
