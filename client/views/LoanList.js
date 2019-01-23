import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import LoanCard from './loancard';

class LoanList extends Component {
  render() {
    return (
      <div>
        {this.props.title}
        <div>
          {this.props.loans.map((e) => <LoanCard {...e} />)}
        </div>
      </div>
    );
  }
}

export default LoanList;
