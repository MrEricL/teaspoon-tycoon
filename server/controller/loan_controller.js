import Loans from '../model/loans';

// Loan Endpoints =====================================================
export const getLoans = (req, res) => {
	Loans.findAll().then(function(rows) {
		res.send(rows);
	});	
}

export const createLoan = (req, res) =>{
	Loans.create(req.body);
	res.send(req.body);
}


export const getLoansByID = (req, res) => {
	let bankid = req.params.bankid;

	Loans.findAll({
	  where: {
	    loanID: bankid
	  }
	}).then(function(rows){
		res.send(rows);
	});
}


export const getLoansRequests = (req, res) => {
	Loans.findAll({
	  where: {
	    bankID: null
	  }
	}).then(function(rows){
		res.send(rows);
	});
}

export const getLoansOutstanding = (req, res) => {

	Loans.findAll({
	  where: {
	  	outstand: true
	  }
	}).then(function(rows){
		res.send(rows);
	});
}
