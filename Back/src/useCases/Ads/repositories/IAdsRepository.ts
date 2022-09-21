import CreateAdDTO from "../dtos/CreateAdDTO";
import Ad from "../models/Ad";

export interface IAdsRepository{
    findById(id: string): Promise<Ad | null>;
    create(data:CreateAdDTO): Promise<Ad>;
    save(data:Ad): Promise<Ad>;
}
