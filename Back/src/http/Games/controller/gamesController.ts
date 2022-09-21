import { Request, Response } from 'express';
import { ViewGameDTO } from '../../../useCases/Games/dtos/ViewGameDTO';
import GamesRepository from '../../../useCases/Games/repositories/GamesRepository';
import ListGamesService from '../../../useCases/Games/services/ListGamesService';

class GamesController {
    public async getAll(response: Response<{games: ViewGameDTO[], total: number}>){
        const gamesRepository = new GamesRepository();

        const listGames = new ListGamesService(gamesRepository);

        const { games, total } = await listGames.execute();

        return response.json({games, total});
    }
};

export default GamesController;
