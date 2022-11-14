import './database/connection';
import 'reflect-metadata';

import express from 'express';
import routes from '../http/index.routes';

import cors from 'cors';
import AdsRepository from '../useCases/Ads/repositories/AdsRepository';
import GamesRepository from '../useCases/Games/repositories/GamesRepository';
import { connectionSource } from './ormconfig';

connectionSource
    .initialize()
    .then(async () => {
        console.log("Data Source has been initialized!");
    })
    .catch((err: any) => {
        console.error("Error during Data Source initialization:", err);
    });

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3333, () => console.log('server is running on port 3333'))
