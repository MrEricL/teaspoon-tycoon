import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router-dom';

import { logOutUser } from '../actions/sessionActions';
import history from '../history';
import Home from './home';
import RegistrationForm from './registration';
import LoginForm from './login';
import LoanPageUser from './loanpageuser';

const App = ({loggedin, logOut}) => (
  <Router history={history}>
    <div>
      <ul>
        {loggedin ?
            (
              <>
              <li><Link to='loan'>Loans</Link></li>
              <a href="/logout" onClick={(e) => {e.preventDefault(); logOut()}}>Log out</a>
              </>
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
      <Route exact path='/loan' component={LoanPageUser} />
    </div>
  </Router>
)

const mapStateToProps = (state, ownProps) => ({
  loggedin: state.session.usertype !== '',
})

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
