import mongoose from 'mongoose';
import { Episode } from './SeriesEpisode';

const Schema = mongoose.Schema;

export type Season = {
    title: string,
    episodes: Episode[]
};


const seasonSchema = new Schema<Season>({
    title: {
        type: String,
        required: true
    },
    
    episodes: [Episode] 
});

export const Season = mongoose.model('Season', seasonSchema);
