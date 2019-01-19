import Sequelize from 'sequelize';
import Loans from './model/loans'

const dbURI = process.env.dbURI || 'postgres://localhost/users';
const db = new Sequelize(dbURI);

export default db;