import mongoose from "mongoose";
import { Movie } from "./Movie";

type Watchlist = {
    userId: string
    movies: Movie[]
}

const Schema = mongoose.Schema;

const watchListSchema = new Schema<Watchlist>({
    userId: {
        type: String,
        required: true
    },

    movies: [{
        type: Movie,
        ref: 'Movie'
    }]
});

const Watchlist = mongoose.model<Watchlist>('Watchlist', watchListSchema);

export default Watchlist;