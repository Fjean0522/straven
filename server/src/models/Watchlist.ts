import mongoose from "mongoose";

type Watchlist = {
    userId: string
    movies: string[]
}

const Schema = mongoose.Schema;

const watchListSchema = new Schema<Watchlist>({
    userId: {
        type: String,
        required: true
    },

    movies: [{
        type: String,
        ref: 'Movie'
    }]
});

const Watchlist = mongoose.model<Watchlist>('Watchlist', watchListSchema);

export default Watchlist;