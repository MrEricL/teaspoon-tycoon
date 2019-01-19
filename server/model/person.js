import Sequelize from 'sequelize'
import db from '../db';

const Person  = db.define('person', {
	userID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		validate: {
			notNull: true
		}
	}, 
	name: {
		type: Sequelize.STRING,
		validate: {
			notNull: true 
		}
	}, 
	email: {
		type: Sequelize.STRING,
		validate: {
			notNull: true,
			isEmail: true
		}
	},
	pass: {
		type: Sequelize.STRING,
		validate: {
			notNull: true,
		}		
	}
});

Person.sync();


export default Person;