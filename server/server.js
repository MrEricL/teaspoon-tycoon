import express from 'express';
import Sequelize from 'sequelize';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import formidableMiddleware from 'express-formidable';
import apiRouter from './router';

const app = express();
app.use(cors());

app.use(formidableMiddleware());
app.use(express.static('dist'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.disable('x-powered-by');
app.use(apiRouter);

app.use('*', (req, res) => res.sendFile(path.join(__dirname , '..' , 'dist/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`))
