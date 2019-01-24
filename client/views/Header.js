import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Link } from 'react-router-dom';

import { logOutUser } from '../actions/sessionActions';

class Header extends Component {
  render() {
    return (
      <header id="header" className="alt">
        <div className="logo"><Link to="index.html">Teaspoon Tycoon</Link></div>

        {this.props.loggedin ?
            (
              <>
              <Link to='/loan'>Loans</Link>
              <a href="/logout" onClick={(e) => {e.preventDefault(); logOut()}}>Log out</a>
              </>
            ) : (
              <>
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
              </>
            )
        }
      </header>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  loggedin: state.session.usertype !== '',
})

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOutUser()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
