import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as loanActions from '../actions/loanActions';
import { TextBox } from './common';
import { postInternal } from '../common';

class RequestLoanForm extends Component {
  reqloan(event) {
    event.preventDefault();
    let formdata = new FormData(event.target);
    formdata.set('userID', this.props.userID);
    this.props.actions.createLoan(formdata);
  }

  render() {
    return (
      <form id="reqform" onSubmit={e => this.reqloan(e)}>
        <TextBox type="number" name="amount" label="Amount" />

        <label htmlFor="desc">What will the loan be used for?</label>
        <textarea name="desc" id="desc"></textarea>
        <button type="submit">Register</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  userID: state.session.userID,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(loanActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(RequestLoanForm);
