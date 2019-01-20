import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (<div>
      <h1>hi</h1>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
