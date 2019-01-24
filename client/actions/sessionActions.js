import * as types from './actionTypes';
import {register, login} from '../services/sessionApi';

function getUserType(userinfo) {
  for (let i of ['user', 'bank']) {
    if (userinfo.hasOwnProperty(i + 'ID')) {
      return i;
    }
  }

  return '';
}

export function loginSuccess(userinfo) {
  return {
    type: types.LOGIN_SUCCESS,
    usertype: getUserType(userinfo),
    userID: userinfo[getUserType(userinfo) + 'ID'],
  };
}

export function logInUser(credentials) {
  return function(dispatch) {
    return login(credentials).then(response => {
      sessionStorage.setItem('jwt', response.data.token);
      dispatch(loginSuccess(response.data.user));
    }).catch(err => {
      throw(err);
    })
  }
}

export function logOutUser() {
  sessionStorage.removeItem('jwt');
  return {
    type: types.LOG_OUT,
  };
}

export function registrationSuccess() {
  return {
    type: types.REGISTER_SUCCESS,
  };
}

export function registerUser(credentials) {
  return function(dispatch) {
    return register(credentials).then(response => {
      dispatch(registrationSuccess());
    });
  }
}
