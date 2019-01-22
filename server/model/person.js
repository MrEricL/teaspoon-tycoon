import Sequelize from 'sequelize'
import db from '../db';
import { hashPassword, comparePassword } from '../services/common';

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
		type: Sequelize.TEXT,
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

Person.beforeCreate(hashPassword);
Person.prototype.comparePassword = comparePassword;
Person.sync();


export default Person;
