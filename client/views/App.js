import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router-dom';

import Home from './home';
import RegistrationForm from './registration';
import LoanPageUser from './loanpageuser';

const App = ({loggedin, logOut}) => (
  <Router history={history}>
    <div>
      <ul>
        {loggedin ?
            (
              <a href="/logout" onClick={(e) => {e.preventDefault(); logOut()}}>Log out</a>
            ) : (
              <>
              <li><Link to='register'>Register</Link></li>
              <li><Link to='login'>Login</Link></li>
              </>
            )
        }
      </ul>

      <hr />
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/register' component={RegistrationForm} />
    </div>
  </Router>
)

function mapStateToProps(state, ownProps) {
  return {
    loggedin: state.session,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => logOutUser(),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
