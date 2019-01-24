import Person from '../model/person';

// Person Endpoints =====================================================
export const getPersons = (req, res) => {
	Person.findAll().then(function(rows) {
		res.send(rows);
	}).catch(function (err) {
  		res.send(err);
	});	
}


export const createPerson = (req, res) => {
	Person.create(req.body).catch(function (err) {
  		res.send(err);
	});
	res.send(req.body);
}
