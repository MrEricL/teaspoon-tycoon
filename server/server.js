import express from 'express';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import apiRouter from './router';


const dbURI = process.env.dbURI || 'postgres://localhost/users';
const db = new Sequelize(dbURI);

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.disable('x-powered-by');
app.use(apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`))

