import Sequelize from 'sequelize'
import db from '../db';

const Loans  = db.define('loan', {
	userID: {
		type: Sequelize.INTEGER,
		validate: {
			notNull: true
		}
	}, 
	loanID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		validate: {
			notNull: true 
		}
	}, 
	amount: {
		type: Sequelize.DOUBLE,
		validation: {
			notNull: true
		}
	}, 
	desc: {
		type: Sequelize.TEXT,
	}, 
	bankID: {
		type: Sequelize.INTEGER
	}, 
	outstand: {
		type: Sequelize.BOOLEAN
	}
});

Loans.sync();


export default Loans;