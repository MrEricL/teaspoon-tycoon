import Sequelize from 'sequelize'
import db from '../db';

const Loans  = db.define('loan', {
	userID: {
		type: Sequelize.INTEGER,
		allowNull: false,
	}, 
	loanID: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		allowNull: false,
	}, 
	amount: {
		type: Sequelize.DOUBLE,
		allowNull: false,
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