import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionActions';
import { postInternal } from '../common';
import { TextBox } from './common';

class LoginForm extends Component {
  login(event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    this.props.actions.logInUser(formdata);
  }

  render() {
    return (
      <form id="regform" onSubmit={e => this.login(e)}>
        <TextBox type="text" name="email" label="Email" />
        <TextBox type="password" name="pass" label="Password" />

        <p>I am a</p>
        <TextBox type="radio" value="person" name="porb" set={true}/>
        <TextBox type="radio" value="bank" name="porb" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LoginForm);
