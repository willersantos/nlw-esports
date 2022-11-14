import { Request, Response } from 'express';
import { SaveAdRequestDTO } from '../../../useCases/Ads/dtos/SaveAdRequestDTO copy';
import { ViewAdDTO } from '../../../useCases/Ads/dtos/ViewAdDTO';
import Ad from '../../../useCases/Ads/models/Ad';
import AdsRepository from '../../../useCases/Ads/repositories/AdsRepository';
import SaveAdService from '../../../useCases/Ads/services/SaveAdService';
import SearchDiscordService from '../../../useCases/Ads/services/SearchDiscordService';
import GamesRepository from '../../../useCases/Games/repositories/GamesRepository';
import ListAdsService from '../../../useCases/Games/services/ListAdsService';

class AdsController {
    public async save(request: Request, response: Response<{ad: Ad}>){
        const newAd: SaveAdRequestDTO = request.body;

        const adsRepository = new AdsRepository();
        const gamesRepository = new GamesRepository();
        const saveAd = new SaveAdService(adsRepository, gamesRepository);

        const ad = await saveAd.execute(newAd);

        return response.status(201).json({ad});
    }

    public async getByGame(request: Request, response: Response<{ads: ViewAdDTO[]}>) {
        const { gameId } = request.params;

        const gamesRepository = new GamesRepository();
        const listAds = new ListAdsService(gamesRepository);

        const ads = await listAds.execute(gameId);

        return response.json({ads});
    }

    public async getDiscordByAd(request: Request, response: Response<{discord: string}>) {
        const { adId } = request.params;

        const adsRepository = new AdsRepository();
        const searchDiscord = new SearchDiscordService(adsRepository);

        const { discord } = await searchDiscord.execute(adId);

        return response.json({discord});
    }
};

export default AdsController;
