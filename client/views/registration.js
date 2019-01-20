import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { postInternal } from '../common';
import { TextBox } from './common';

class RegistrationForm extends Component {
  register(event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    console.log(formdata);
    postInternal(formdata.get('porb'), formdata, (res, err) => {
      if (err) {
        console.err(err);
      }

      console.log(res);
    });
  }

  render() {
    return (
      <form id="regform" onSubmit={e => this.register(e)}>
        <TextBox type="text" name="name" label="Name" />
        <TextBox type="text" name="email" label="Email" />
        <TextBox type="password" name="pass" label="Password" />
        <p>I am a</p>
        <TextBox type="radio" value="person" name="porb" set={true}/>
        <TextBox type="radio" value="bank" name="porb" />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
