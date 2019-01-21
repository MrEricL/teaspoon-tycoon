import Sequelize from 'sequelize'
import db from '../db';

const Person  = db.define('person', {
	userID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	}, 
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	}, 
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			isEmail: true
		}
	},
	pass: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	town:{
		type: Sequelize.STRING,
		allowNull: false,
	},
	postal :{
		type: Sequelize.INTEGER,
		allowNull: false,
	},
	country: {
		type: Sequelize.STRING,
		allowNull: false,
	}

});

Person.sync();


export default Person;