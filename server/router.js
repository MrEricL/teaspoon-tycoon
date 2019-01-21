
import express, { Router} from 'express';
import {getLoans, createLoan, getLoansByID, getLoansRequests, getLoansOutstanding, acceptLoanRequest, payLoanOutstanding, getRequestedLoansByBank} from './controller/loan_controller'
import {getPersons, createPerson, validatePerson} from './controller/person_controller'
import {getBanks, createBank, getMoneyByID, editMoneyByID, validateBank} from './controller/bank_controller'
import {rejectLoan} from './controller/reject_controller'


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

router.route('/loans/bank')
	.post(getRequestedLoansByBank)

// Person Endpoints ============================================================
router.route('/person')
	.get(getPersons)
	.post(createPerson);

router.route('/person/:email/:pass')
	.get(validatePerson);

// Bank Endpoints ============================================================
router.route('/bank')
	.get(getBanks)
	.post(createBank);

router.route('/bank/:bankID/')
	.get(getMoneyByID);

router.route('/bank/money/')
	.post(editMoneyByID);


router.route('/bank/:email/:pass')
	.get(validateBank);

// Reject Endpoints ============================================================
router.route('/reject')
	.post(rejectLoan);



// End =========================================================================
export default router;
