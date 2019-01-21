import Loans from '../model/loans';
import Reject from '../model/reject';

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

export const acceptLoanRequest = (req, res) => {
	let loanID = req.body.loanID;
	let bankID = req.body.bankID;

	Loans.update(
		{bankID: bankID, outstand: true},
		{where: {loanID}}
		)
	.then(function(rows){
		console.log(rows);
		res.send(rows);
	});
}

export const payLoanOutstanding = (req, res) => {
	let loanID = req.body.loanID;

	Loans.update(
		{outstand: false},
		{where: {loanID}}
		)
	.then(function(rows){
		console.log(rows);
		res.send(rows);
	});
}

export const getRequestedLoansByBank = (req, res) =>{
	let bankID = Number(req.body.bankID);

	var loans = Loans.findAll({
	  where: {
	    bankID: null
	  }
	});

	var rejects = Reject.findAll({
	  	where: {
	    	bankID: bankID
	  	}
	});

	Promise.all([loans, rejects]).then(obj =>{
		
		let ret = [];
		let flag = false;
		for(var i = 0; i < obj[0].length; i++) {
			flag = false;
			for(var j = 0; j < obj[1].length; j++) {
				if (obj[0][i].loanID == obj[1][j].loanID){
					flag = true;
					break;
				}
			}
			if (!flag){
				ret.push(obj[0][i])
			}
		}
		res.send(ret);
		
	});	

}




