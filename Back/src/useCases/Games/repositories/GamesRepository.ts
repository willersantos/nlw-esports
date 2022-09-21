import { getRepository, Repository } from "typeorm";
import Game from "../models/Game";
import { IGamesRepository } from "./IGamesRepository";

class GamesRepository implements IGamesRepository{
    private ormRepository: Repository<Game>;

    constructor() {
        this.ormRepository = getRepository(Game);
    }

    public async findById(id: string): Promise<Game | null> {
        return await this.ormRepository.findOne({
            where: {id}
        });
    }

    public async find(): Promise<Game[]> {
        return await this.ormRepository.find();
    }

    public async findByIdWithAds(id: string): Promise<Game | null> {
        return await this.ormRepository.findOneOrFail({
            where: {id},
            relations: ['ads'],
        });
    }
}

export default GamesRepository;
