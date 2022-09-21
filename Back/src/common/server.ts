import 'reflect-metadata';
import './database/connection';

import express from 'express';
import routes from '../http/index.routes';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333)