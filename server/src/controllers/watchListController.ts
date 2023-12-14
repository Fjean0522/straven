import Watchlist from "../models/Watchlist";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";


// Task:   Add movie to watchlist
// Route:  POST /add 
// Access: Private
const addToWatchlist = asyncHandler(async (req: Request, res: Response) => {
    const { userId, movieId } =  req.body;

    const watchlist = await Watchlist.findOneAndUpdate(
      { userId },
      { $addToSet: { movies: movieId } },
      { new: true, upsert: true }
    );

    res.json(watchlist);
});


// Task:   Remove movie from watchlist
// Route:  POST /remove 
// Access: Private
const removeFromWatchlist = asyncHandler(async (req: Request, res: Response) => {
    const { userId, movieId } =  req.body;

    const watchlist = await Watchlist.findOneAndUpdate(
      { userId },
      { $pull: { movies: movieId } },
      { new: true }
    );

    res.json(watchlist);
});

export { addToWatchlist, removeFromWatchlist };