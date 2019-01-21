import Reject from '../model/reject';

export const rejectLoan = (req, res) => {
	Reject.create(req.body);	
	res.send(req.body);
}
