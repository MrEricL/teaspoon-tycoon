import Sequelize from 'sequelize'
import db from '../db';
import { hashPassword, comparePassword } from '../services/common';

const Bank = db.define('bank', {
	bankID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	}, 
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			
			notEmpty: true,
		}
	}, 
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true,
			isEmail: true
		}
	},
	pass: {
		type: Sequelize.TEXT,
		allowNull: false,
	},
	money: {
		type: Sequelize.DOUBLE,
		allowNull: false,
		defaultValue: 0
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

Bank.beforeCreate(hashPassword);
Bank.prototype.comparePassword = comparePassword;
Bank.sync();


export default Bank;
