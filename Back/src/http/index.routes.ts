import Router from 'express';
import adsRoutes from './Ads/routes';
import gamesRoutes from './Games/routes';

const routes = Router();

routes.use('/ads', adsRoutes);
routes.use('/games', gamesRoutes);

export default routes;
