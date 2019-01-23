import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as loanActions from '../actions/loanActions';
import { TextBox } from './common';
import LoanCard from './loancard';
import RequestLoanForm from './requestloan';

class LoanPageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opt: 'show',
      loans: {requested: [], accepted: []},
    }
  }

  componentDidMount() {
    this.props.actions.getLoans(this.props.userID);
  }

  changeMode(event) {
    switch(event.target.value) {
      case 'Loan Requests':
        this.setState({opt: 'show'});
        this.componentDidMount();
        break;
      case 'Request a Loan':
        this.setState({opt: 'req'});
        break;
      default:
        break;
    }
  }

  //this.setState({opt: ['loans/person/requested', 'loans/person/accepted']});
  //this.setState({opt: ['loans/request']});

  render() {
    return (
      <div>
        <TextBox type="radio" value="Loan Requests" name="lorr" onchange={e => this.changeMode(e)} set={true}/>
        <TextBox type="radio" value="Request a Loan" name="lorr" onchange={e => this.changeMode(e)} />

        {this.state.opt === 'show' && (
          <>
          <div>
            Pending Requests
            <div>
              {this.props.loans.requested.map((e) => <LoanCard {...e} />)}
            </div>
          </div>
          <div>
            Accepted Requests
            <div>
              {this.props.loans.accepted.map((e) => <LoanCard {...e} />)}
            </div>
          </div>
          </>
        )}

        {this.state.opt === 'req' && (
          <RequestLoanForm />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userID: state.session.userID,
  loans: state.loan.loans,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(loanActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoanPageUser);
