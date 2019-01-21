import Person from '../model/person';

// Person Endpoints =====================================================
export const getPersons = (req, res) => {
	Person.findAll().then(function(rows) {
		res.send(rows);
	});	
}


export const createPerson = (req, res) => {
	Person.create(req.fields);
	res.send(req.fields);
}


export const validatePerson = (req, res) => {

	let email = req.params.email;
	let password = req.params.pass;

	Person.findAll({
	  where: {
	    email: email,
	    pass: password
	  }
	}).then(function(rows){
		res.send(rows);
	});
}



