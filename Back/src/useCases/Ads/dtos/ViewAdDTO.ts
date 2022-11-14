export interface ViewAdDTO
{
    id: string;
    name: string;
    yearsPlaying: number;
    discord: string;
    weekDays: number[];
    hourStart: number;
    hourEnd: number;
    useVoiceChannel: string;
    createdAt: Date;
    updatedAt: Date;
}