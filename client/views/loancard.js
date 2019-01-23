import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LoanCard extends Component {
  render() {
    return (
      <div>
        <div>Loan Request #{this.props.loanID}</div>
        <div>Amount: ${this.props.amount}</div>
        <div>Description: {this.props.desc}</div>
        <div>Bank: {this.props.bankID}</div>
        {this.props.outstand && <div>Outstanding</div>}
      </div>
    );
  }
}

export default LoanCard;
