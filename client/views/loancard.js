import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as loanActions from '../actions/loanActions';

class LoanCard extends Component {
  accept(event) {
    event.preventDefault();
    this.props.actions.acceptLoan(this.props.userID, this.props.loanID);
  }

  reject(event) {
    event.preventDefault();
    this.props.actions.rejectLoan(this.props.userID, this.props.loanID);
  }

  render() {
    return (
      <div className={this.props.bankID ? "card-accept" : "card-pend"}>
        <div>Loan Request #{this.props.loanID}</div>
        <div>Amount: ${this.props.amount}</div>
        <div>Description: {this.props.desc}</div>
        {this.props.outstand && <div>Outstanding</div>}

        {this.props.usertype === 'bank' && (
          <div>
            <button type="submit" onClick={e => this.accept(e)}>Accept</button>
            <button type="submit" onClick={e => this.reject(e)}>Reject</button>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userID: state.session.userID,
  usertype: state.session.usertype,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(loanActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoanCard);
