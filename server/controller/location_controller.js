import Person from '../model/person';
import Bank from '../model/bank';

export const getCountryCount = (req, res) => {
	let p = Person.findAll();	
	let b = Bank.findAll();
	
	ret = {}

	Promise.all([p,b]).then(obj => {
		obj[0].forEach((e) =>{
			if (e[country] in ret){
				ret[e[country]] = ret[e[country]]+1;
			} else {
				ret[e[country]]  = 1;
			}
		})
		obj[1].forEach((e) =>{
			if (e[country] in ret){
				ret[e[country]] = ret[e[country]]+1;
			} else {
				ret[e[country]]  = 1;
			}
		})
	}).catch(function (err) {
  		res.send(err);
	});

	res.send(ret);
}