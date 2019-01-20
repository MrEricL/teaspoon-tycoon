import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './views/home.js';
import RegistrationForm from './views/registration.js';

class App extends Component {
  render() {
    return (<Router>
      <div>
        <ul>
          <li><Link to='register'>Register</Link></li>
        </ul>

        <hr />
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={RegistrationForm} />
      </div>
    </Router>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
