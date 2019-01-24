import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
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
      <>
      <section className="banner part">
        <article>
          <img src="images/slide03.jpg" alt="" />
          <div className="inner">
            <header>
              <p style={{opacity: "100"}}>microfinance the future</p>
              <h3 style={{fontSize: "3em"}}>Login</h3>
            </header>
          </div>
        </article>
      </section>

      <section id="one" className="wrapper style2" style={{paddingTop: "20px", paddingRight: "150px", paddingLeft: "150px"}}>
        <label>Don't have an account?</label>
        <Link to="/register" className="button alt">Register Instead</Link>

        <form id="loginform" onSubmit={e => this.login(e)}>
          <TextBox type="text" name="email" label="Email" />
          <TextBox type="password" name="pass" label="Password" />

          <label>I registered as a</label>
          <select name="porb" id="porb">
            <option value="person">Person</option>
            <option value="bank">Bank</option>
          </select>
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </section>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(LoginForm);
