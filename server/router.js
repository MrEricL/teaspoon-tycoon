
import express, { Router} from 'express';
import {getLoans, createLoan, getLoansByID, getLoansRequests, getLoansOutstanding, acceptLoanRequest, payLoanOutstanding, getRequestedLoansByBank, getRequestedLoansByPerson, getAcceptedLoansByPerson, getAcceptedLoansByBank} from './controller/loan_controller'
import {getPersons, createPerson} from './controller/person_controller'
import {getBanks, createBank, getMoneyByID, editMoneyByID} from './controller/bank_controller'
import {rejectLoan} from './controller/reject_controller'
import {getCountryCount} from './controller/location_controller'

import { requireLoginUser } from './services/passport-user';
import { requireLoginBank } from './services/passport-bank';
import * as Login from './controller/login_controller';

const router = Router();

// Loan Endpoints ============================================================
router.route('/loans')
	.get(getLoans);

router.route('/loans/accept')
	.post(acceptLoanRequest);

router.route('/loans/pay')
	.post(payLoanOutstanding);

router.route('/loans/requests')
	.get(getLoansRequests)
	.post(createLoan);

router.route('/loans/outstanding')
	.get(getLoansOutstanding);

router.route('/loans/:id')
	.get(getLoansByID);

router.route('/loans/bank/requested/:bankID')
	.get(getRequestedLoansByBank);

router.route('/loans/bank/accepted/:bankID')
	.get(getAcceptedLoansByBank);

router.route('/loans/person/requested/:userID')
	.get(getRequestedLoansByPerson);

router.route('/loans/person/accepted/:userID')
	.get(getAcceptedLoansByPerson);


// Person Endpoints ============================================================
router.route('/person')
	.get(getPersons)
	.post(createPerson);

router.post('/person/login', requireLoginUser(), Login.loginPerson);

// Bank Endpoints ============================================================
router.route('/bank')
	.get(getBanks)
	.post(createBank);

router.route('/bank/:bankID/')
	.get(getMoneyByID);

router.route('/bank/money/')
	.post(editMoneyByID);

router.post('/bank/login', requireLoginBank(), Login.loginBank);

// Reject Endpoints ============================================================
router.route('/reject')
	.post(rejectLoan);

// Location Endpoints ============================================================
router.route('/location/country')
	.get(getCountryCount);

// End =========================================================================
export default router;
