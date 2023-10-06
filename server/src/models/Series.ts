import mongoose from 'mongoose';
import { Season } from './SeriesSeason';

const Schema = mongoose.Schema;

export type Series = {
    title: string,
    description: string,
    category: string,
    imageUrl: string
    seasons: Season[]
};


const seriesSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    imageUrl: {
        type: String,
        required: true
    },

    seasons: [Season]
});

export const Series = mongoose.model('Series', seriesSchema);
