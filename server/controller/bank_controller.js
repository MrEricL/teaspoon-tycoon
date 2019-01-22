import Bank from '../model/bank';

// Bank Endpoints =====================================================
export const getBanks = (req, res) => {
	Bank.findAll().then(function(rows) {
		res.send(rows);
	});	
}

export const createBank = (req, res) => {
	Bank.create(req.body);
	res.send(req.body);
}


export const getMoneyByID = (req, res) => {
	let bankID = Number(req.params.bankID);

	console.log(Number(bankID));

	Bank.findAll({
	  where: {
	    bankID: bankID
	  }
	}).then(function(rows){
		res.send({"money" : rows[0].money});
	}).catch(function (err) {
		res.send("Invalid");
    });
}

export const editMoneyByID = (req, res) => {
	let bankID = Number(req.body.bankID);
	let amount = Number(req.body.amount);

	console.log(bankID);

	Bank.findAll({
	  where: {
	    bankID: bankID
	  }
	}).then(function(rows){
		return Number(rows[0].money) + amount	
	}).then(newmoney => (
		Bank.update( { money: newmoney }, 
      				 {where: { bankID : bankID }}
		).then(function(rows){
			console.log(rows);
		}
	)));

	res.send("Money edited!");
}
