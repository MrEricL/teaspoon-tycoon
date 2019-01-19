import Sequelize from 'sequelize'
import db from '../db';

const Bank = db.define('bank', {
	bankID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		validate: {
			notNull: true
		}
	}, 
	name: {
		type: Sequelize.STRING,
		validate: {
			notNull: true,
			notEmpty: true,
		}
	}, 
	email: {
		type: Sequelize.STRING,
		validate: {
			notNull: true,
			notEmpty: true,
			isEmail: true
		}
	},
	pass: {
		type: Sequelize.STRING,
		validate: {
			notNull: true,
		}		
	},
	money: {
		type: Sequelize.DOUBLE,
		validate: {
			notNull: true,
			defaultValue: 0
		}
	}
});

Bank.sync();


export default Bank;