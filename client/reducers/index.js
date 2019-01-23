import { combineReducers } from 'redux';

import session from './sessionReducer';
import loan from './loanReducer';

const rootReducer = combineReducers({
  session,
  loan
});

export default rootReducer;
