
import {Router} from 'express';
import {getLoans, createLoan, getLoansByID, getLoansRequests, getLoansOutstanding} from './controller/loan_controller'

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




export default router;
