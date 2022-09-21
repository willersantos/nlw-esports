import { IGamesRepository } from "../../Games/repositories/IGamesRepository";
import { SaveAdRequestDTO } from "../dtos/SaveAdRequestDTO copy";
import Ad from "../models/Ad";
import { IAdsRepository } from "../repositories/IAdsRepository";

class SaveAdService{
    private adsRepository: IAdsRepository;
    private gamesRepository: IGamesRepository;

    constructor(adsRepository: IAdsRepository, gamesRepository: IGamesRepository) {
        this.adsRepository = adsRepository;
        this.gamesRepository = gamesRepository;
    }

    public async execute({
        gameId,
        name,
        yearsPlaying,
        discord,
        weekDays,
        hourStart,
        hourEnd,
        useVoiceChannel
    }: SaveAdRequestDTO): Promise <Ad> {
        const game = await this.gamesRepository.findById(gameId);

        if (!game) {
            throw new Error("Game didn't exist")
        }

        // Criar uma camada de validação de dados

        const ad = await this.adsRepository.create({
            gameId,
            name,
            yearsPlaying,
            discord,
            weekDays,
            hourStart,
            hourEnd,
            useVoiceChannel
        })

        await this.adsRepository.save(ad);

        return ad;
    }
}

export default SaveAdService;
