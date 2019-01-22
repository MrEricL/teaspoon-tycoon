import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { COUNTRIES } from '../data/countries';
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

        <label htmlFor="country">Country</label>
        <select name="country" id="country">
          {Object.entries(COUNTRIES).map(x => (
            <option value={x[0]}>{x[1]}</option>
          ))}
        </select>

        <TextBox type="number" name="postal" label="Postal Code" />
        <TextBox type="text" name="town" label="Town" />

        <p>I am a</p>
        <TextBox type="radio" value="person" name="porb" set={true}/>
        <TextBox type="radio" value="bank" name="porb" />
        <button type="submit">Register</button>
      </form>
    );
  }
}

export default RegistrationForm;
