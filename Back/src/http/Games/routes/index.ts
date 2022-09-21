import Router from 'express';
import GamesController from '../controller/gamesController';

const gamesController = new GamesController();

const gamesRoutes = Router();

gamesRoutes.get('/all', gamesController.getAll);

export default gamesRoutes;
