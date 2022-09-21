import { IAdsRepository } from "../repositories/IAdsRepository";

class SearchDiscordService{
    private adsRepository: IAdsRepository;

    constructor(adsRepository: IAdsRepository) {
        this.adsRepository = adsRepository;
    }

    public async execute(adId: string): Promise <{discord: string}> {
        const ad = await this.adsRepository.findById(adId);

        if (!ad) {
            throw new Error("Ad didn't exist")
        }

        return {discord: ad.discord};
    }
}

export default SearchDiscordService;
