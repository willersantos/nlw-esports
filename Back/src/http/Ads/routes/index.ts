import Router from 'express';
import AdsController from '../controller/adsController';

const adsController = new AdsController();

const adsRoutes = Router();

adsRoutes.post('/', adsController.save);
adsRoutes.get('/by-game/:gameId', adsController.getByGame);
adsRoutes.get('/discord-by-ad/:adId', adsController.getDiscordByAd);

export default adsRoutes;
