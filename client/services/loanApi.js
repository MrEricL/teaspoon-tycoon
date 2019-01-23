import axios from 'axios';

import { getInternal, postInternal } from '../common';

export function userGetRequestedLoans(userid) {
  return getInternal('loans/person/requested/' + userid);
}

export function userGetAcceptedLoans(userid) {
  return getInternal('loans/person/accepted/' + userid);
}

export function userCreateLoan(data) {
  return postInternal('loans/requests', data);
}

export function bankAcceptLoan(data) {
  return postInternal('loans/accept', data);
}

export function bankRejectLoan(data) {
  return postInternal('reject', data);
}
