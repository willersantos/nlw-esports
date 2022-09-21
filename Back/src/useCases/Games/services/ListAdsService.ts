import { ViewAdDTO } from "../../Ads/dtos/ViewAdDTO";
import { IGamesRepository } from "../repositories/IGamesRepository";


class ListAdsService {
    private gamesRepository: IGamesRepository;

    constructor(gamesRepository: IGamesRepository) {
        this.gamesRepository = gamesRepository;
    }

    public async execute(gameId: string): Promise <ViewAdDTO[]> {
        const game = await this.gamesRepository.findByIdWithAds(gameId);

        if (!game) {
            throw new Error("Game didn't exist")
        }

        const ads: ViewAdDTO[] = game.ads
        .map(({id, name, yearsPlaying, discord, weekDays, hourStart, hourEnd, createdAt, useVoiceChannel, updatedAt }) =>
        {
            return {
                id,
                name,
                yearsPlaying,
                discord,
                weekDays,
                hourStart,
                hourEnd,
                useVoiceChannel,
                createdAt,
                updatedAt
            }
        });

        return ads;
    }
}

export default ListAdsService;
