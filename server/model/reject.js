import Sequelize from 'sequelize'
import db from '../db';

const Reject = db.define('reject', {
	bankID: {
		type: Sequelize.INTEGER
	}, 
	loanID:{
		type: Sequelize.INTEGER
	}
});

Reject.sync();


export default Reject;