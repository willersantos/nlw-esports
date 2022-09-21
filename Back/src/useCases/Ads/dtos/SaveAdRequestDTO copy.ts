export interface SaveAdRequestDTO{
    gameId: string;
    name: string;
    yearsPlaying: number;
    discord: string;
    weekDays: number[];
    hourStart: number;
    hourEnd: number;
    useVoiceChannel: string;
}