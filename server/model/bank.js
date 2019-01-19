import Sequelize from 'sequelize'
import db from '../db';

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
		type: Sequelize.STRING,
		allowNull: false,
	},
	money: {
		type: Sequelize.DOUBLE,
		allowNull: false,
		defaultValue: 0
	}
});

Bank.sync();


export default Bank;