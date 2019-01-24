import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
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
      <>
      <section className="banner part">
        <article>
          <img src="images/slide02.jpg" alt="" />
          <div className="inner">
            <header>
              <p style={{opacity: "100"}}>microfinance the future</p>
              <h3 style={{fontSize: "3em"}}>Register</h3>
            </header>
          </div>
        </article>
      </section>

      <section id="one" className="wrapper style2" style={{paddingTop: "20px", paddingRight: "150px", paddingLeft: "150px"}}>
        <label>Aleady have an account?</label>
        <Link to="/login" className="button alt">Login Instead</Link>

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

          <TextBox type="number" name="postal" label="Postal Code"
            style={{background: "rgba(0, 0, 0, 0.075)", borderColor: "rgba(0, 0, 0, 0.15)"}}/>
          <TextBox type="text" name="town" label="Town" />

          <div style={{color: "black"}}>
            <label htmlFor="porb">I am registering as a</label>
          </div>

          <select name="porb" id="porb">
            <option value="person">Person</option>
            <option value="bank">Bank</option>
          </select>
          <br />
          <br />
          <button type="submit">Register</button>
        </form>
      </section>
      </>
    );
  }
}

export default RegistrationForm;
