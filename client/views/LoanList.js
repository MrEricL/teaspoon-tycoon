import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LoanCard from './loancard';

class LoanList extends Component {
  render() {
    return (
      <>
      {this.props.title}
      <div class="cardbox">
        {this.props.loans.map((e) => <LoanCard {...e} />)}
      </div>
      </>
    );
  }
}

export default LoanList;
