import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { postInternal } from '../common';
import { Link } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <>
      <section className="banner full">
        <article>
          <img src="images/slide01.jpg" alt="" />
          <div className="inner">
            <header>
              <p style={{opacity: "100"}}>microfinance the future</p>
              <h3>All You Need is a Dollar and a Dream</h3>
            </header>
          </div>
        </article>

      </section>

      <section id="one" className="wrapper style2" style={{padding: "120px"}}>
        <div className="content">
          <header className="align-center">
            <h2> Help Eradicate Poverty </h2>
          </header>

          <blockquote style={{color: "black", fontSize: "1.25em"}}>
            Over the last 25 years, <b>more than a billion people</b> have lifted themselves <b>out of extreme poverty</b>, and the global poverty rate is now lower than it has ever been in recorded history.
            This is one of the greatest human achievements of our time, <b>but</b> if we are going to end poverty by 2030, we need much more investment, particularly in <b> building human capital </b>, to help <b>promote the inclusive growth</b> it will take to reach the remaining poor.
            For their sake, we cannot fail.
          </blockquote>

          <cite style={{color: "black", fontSize: "1.25em"}}> - World Bank Group President Jim Yong Kim </cite>

          <footer className="align-center">
            <br/>
            <br/>
            <div style={{color: "black", fontSize: "1.5em"}}> Reach out today so you have a chance at a better future. </div>
            <br/>
            <br/>
            <Link to="/register" className="button alt">Register</Link>
          </footer>
        </div>
      </section>
      </>
    );
  }
}

export default Home;
