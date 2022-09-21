import Game from "../models/Game";

export interface IGamesRepository{
    findById(id: string): Promise<Game | null>;
    find(): Promise<Game[]>;
    findByIdWithAds(id: string): Promise<Game | null>;
}
