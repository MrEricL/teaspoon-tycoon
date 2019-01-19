import Person from '../model/person';

// Person Endpoints =====================================================
export const getPersons = (req, res) => {
	Person.findAll().then(function(rows) {
		res.send(rows);
	});	
}


export const createPerson = (req, res) => {
	Person.create(req.body);
	res.send(req.body);
}

