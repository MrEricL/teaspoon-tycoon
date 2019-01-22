import jwt from 'jsonwebtoken';
import Person from '../model/person';
import Bank from '../model/bank';

export const loginPerson = (req, res) => {
	Person.findById(req.user.userID)
		.then(user => {
			genToken(res, user);
		})
}

export const loginBank = (req, res) => {
	Bank.findById(req.user.bankID)
		.then(user => {
			genToken(res, user);
		})
}

function genToken(res, user) {
	jwt.sign({ sub: user.id }, process.env.AUTH_SECRET, (err, tok) => {
		res.json({ token: tok, user });
	});
}
