import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export type Episode = {
    title: string,
    episodeNumber: number,
    duration: string,
    videoUrl: string
};


const episodeSchema = new Schema<Episode>({
    title: {
        type: String,
        required: true
    },
    
    episodeNumber: {
        type: Number,
        required: true
    },

    duration: {
        type: String,
        required: true
    },

    videoUrl: {
        type: String,
        required: true
    }
});

export const Episode = mongoose.model('Episode', episodeSchema);
