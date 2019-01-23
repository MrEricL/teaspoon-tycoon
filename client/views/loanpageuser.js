import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

import * as loanActions from '../actions/loanActions';
import { TextBox } from './common';
import LoanList from './LoanList';
import RequestLoanForm from './requestloan';

class LoanPageUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opt: this.props.usertype === 'user' ? 'show' : 'pend',
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
      case 'Pending Requests':
        this.setState({opt: 'pend'});
        break;
      case 'Accepted Requests':
        this.setState({opt: 'acc'});
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
        {this.props.usertype === 'user' && (
          <>
          <TextBox type="radio" value="Loan Requests" name="lorr" onchange={e => this.changeMode(e)} set={true}/>
          <TextBox type="radio" value="Request a Loan" name="lorr" onchange={e => this.changeMode(e)} />
          </>
        )}

        {this.props.usertype === 'bank' && (
          <>
          <TextBox type="radio" value="Pending Requests" name="lorr" onchange={e => this.changeMode(e)} set={true}/>
          <TextBox type="radio" value="Accepted Requests" name="lorr" onchange={e => this.changeMode(e)} />
          </>
        )}

        {(this.state.opt === 'show' || this.state.opt === 'pend') && (
          <LoanList title="Pending Requests" loans={this.props.loans.requested} />
        )}

        {(this.state.opt === 'show' || this.state.opt === 'acc') && (
          <LoanList title="Accepted Requests" loans={this.props.loans.accepted} />
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
  usertype: state.session.usertype,
  loans: state.loan.loans,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(loanActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoanPageUser);
