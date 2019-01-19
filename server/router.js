
import express, { Router} from 'express';
import {getLoans, createLoan, getLoansByID, getLoansRequests, getLoansOutstanding} from './controller/loan_controller'
import {getPersons, createPerson} from './controller/person_controller'
import {getBanks, createBank, getMoneyByID, editMoneyByID} from './controller/bank_controller'

const router = Router();


router.route('/loans')
	.get(getLoans);

router.route('/loans/requests')
	.get(getLoansRequests)
	.post(createLoan);

router.route('/loans/outstanding')
	.get(getLoansOutstanding);

router.route('/loans/:id')
	.get(getLoansByID);


router.route('/person')
	.get(getPersons)
	.post(createPerson);


router.route('/bank')
	.get(getBanks)
	.post(createBank);

router.route('/bank/:bankID/')
	.get(getMoneyByID);

router.route('/bank/money/')
	.post(editMoneyByID);

//router.route('/*').get( (req, res) => res.sendFile(express.static('../dist')));

export default router;
