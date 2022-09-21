import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import Game from '../../Games/models/Game';

@Entity('adsTb')
class Ad{
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    gameId: string;

    @Column()
    name: string;

    @Column()
    yearsPlaying: number;

    @Column()
    discord: string;

    @Column()
    weekDays: number[];

    @Column()
    hourStart: number;

    @Column()
    hourEnd: number;

    @Column()
    useVoiceChannel: string;

    @ManyToOne(() => Game)
    @JoinColumn({ name: 'gameId'})
    game: Game;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export default Ad;
