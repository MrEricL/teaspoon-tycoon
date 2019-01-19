
import {Router} from 'express';
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

router.route('/money/:bankID/')
	.get(getMoneyByID);

router.route('/money/')
	.post(editMoneyByID);



export default router;
