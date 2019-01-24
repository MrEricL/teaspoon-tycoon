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
      <>
      <section className="banner part">
        <article>
          <img src="images/slide04.jpg" alt="" />
          <div className="inner">
            <header>
              <p style={{opacity: "100"}}>microfinance the future</p>
              <h3 style={{fontSize: "3em"}}>
                Loans
              </h3>
            </header>
          </div>
        </article>
      </section>


      <section id="one" className="wrapper style2" style={{paddingTop: "20px", paddingRight: "150px", paddingLeft: "150px"}}>
        <div>
          {this.props.usertype === 'user' && (
            <select name="lorr" onChange={e => this.changeMode(e)}>
              <option value="Loan Requests">Loan Requests</option>
              <option value="Request a Loan">Request a Loan</option>
            </select>
          )}

          {this.props.usertype === 'bank' && (
            <select name="lorr" onChange={e => this.changeMode(e)}>
              <option value="Pending Requests">Pending Requests</option>
              <option value="Accepted Requests">Accepted Requests</option>
            </select>
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
      </section>
      </>
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
