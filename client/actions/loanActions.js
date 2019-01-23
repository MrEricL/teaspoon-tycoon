import axios from 'axios';

import * as types from './actionTypes';
import {userGetRequestedLoans, userGetAcceptedLoans, userCreateLoan} from '../services/loanApi';

function getLoanSuccess(requested, accepted) {
  return {
    type: types.GET_LOANS,
    loans: {requested, accepted},
  };
}

export function getLoans(userID) {
  return function(dispatch) {
    axios.all([
      userGetRequestedLoans(userID),
      userGetAcceptedLoans(userID),
    ]).then(axios.spread((reqloans, accloans) => {
      dispatch(getLoanSuccess(reqloans.data, accloans.data))
    }));
  };
}

function createLoanSuccess() {
  return {
    type: types.CREATE_LOAN_REQ,
  }
}

export function createLoan(data) {
  return function(dispatch) {
    return userCreateLoan(data).then(response => {
      dispatch(createLoanSuccess());
    })
  }
}
