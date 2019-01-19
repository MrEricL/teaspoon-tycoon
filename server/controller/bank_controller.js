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


