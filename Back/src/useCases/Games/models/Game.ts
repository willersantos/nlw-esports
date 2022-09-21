import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import Ad from '../../Ads/models/Ad';

@Entity('game')
class Game{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    bannerUrl: string;

    @OneToMany(() => Ad, ad => ad.game)
    ads: Ad[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default Game;
