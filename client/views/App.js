import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router-dom';

import history from '../history';
import Header from './Header';
import Footer from './Footer';
import Home from './home';
import RegistrationForm from './registration';
import LoginForm from './login';
import LoanPageUser from './loanpageuser';

const App = ({loggedin, logOut}) => (
  <Router history={history}>
    <>
    <Header />
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/index.html' component={Home} />
      <Route exact path='/login' component={LoginForm} />
      <Route exact path='/register' component={RegistrationForm} />
      <Route exact path='/loan' component={LoanPageUser} />
    </div>
    <Footer />
  </>
  </Router>
)

export default App;
