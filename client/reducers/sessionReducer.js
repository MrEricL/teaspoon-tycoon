import { browserHistory } from 'react-router-dom';

import * as types from '../actions/actionTypes';
import history from '../history';

const initialState = {
  usertype: '',
  userID: -1,
}

export default function sessionReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      history.push('/');
      return Object.assign({}, state, {session: !!sessionStorage.jwt}, action);
    case types.LOG_OUT:
      history.push('/');
      return Object.assign({}, state, {usertype: '', userID: -1});
    default:
      return state;
  }
}
