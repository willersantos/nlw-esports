import { getRepository, Repository } from "typeorm";
import CreateAdDTO from "../dtos/CreateAdDTO";
import Ad from "../models/Ad";
import { IAdsRepository } from "./IAdsRepository";

class AdsRepository implements IAdsRepository{
    private ormRepository: Repository<Ad>;

    constructor() {
        this.ormRepository = getRepository(Ad);
    }
    
    public async findById(id: string): Promise<Ad | null> {
        return await this.ormRepository.findOne({
            where: {id}
        });
    }

    public async create(data: CreateAdDTO): Promise<Ad> {
        const ad = this.ormRepository.create(data);

        return ad;
    }

    public async save(data: Ad): Promise<Ad> {
        const ad = await this.ormRepository.save(data)

        return ad;
    }
}

export default AdsRepository;
