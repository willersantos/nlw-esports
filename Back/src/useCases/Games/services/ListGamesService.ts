import { ViewGameDTO } from "../dtos/ViewGameDTO";
import { IGamesRepository } from "../repositories/IGamesRepository";

class ListGamesService{
    private gamesRepository: IGamesRepository;

    constructor(gamesRepository: IGamesRepository) {
        this.gamesRepository = gamesRepository;
    }

    public async execute(): Promise <{games: ViewGameDTO[], total: number}> {
        const gamesTable = await this.gamesRepository.find();
        const games: ViewGameDTO[] = gamesTable.map(({bannerUrl, title}) => {
            return {bannerUrl, title}
        });
        const response = {games, total: games.length};

        return response;
    }
}

export default ListGamesService;
