import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        required: true,
    },

    rating: {
        type: String,
        required: true,
    },

    duration: {
        type: String,
        required: true,
    },

    imageUrl: {
        type: String,
        required: true,
    },

    videoUrl: {
        type: String,
        required: true,
    }
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;