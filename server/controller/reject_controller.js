import Reject from '../model/reject';

export const rejectLoan = (req, res) => {
	Reject.create(req.body).catch(function (err) {
  		res.send(err);
	});	
	res.send(req.body);
}
