import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import User from "../models/User";
import { Movie } from "../models/Movie";


// Task:   Get user watchlist
// Route:  GET /:userId
// Access: Private
const getUserWatchlist = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.userId;

  // Find the user and populate the watchlist with the added movies
  const user = await User.findById(userId).populate('watchList');

  if (user) {
    const watchList = user.watchList;

    res.status(200).json(watchList);
  }
});


// Task:   Add movie to watchlist
// Route:  POST /add/:userId/:movieId
// Access: Private
const addToWatchlist = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const movieId = req.params.movieId;

  const movie = await Movie.findById(movieId);

  // Add the movie to the user's watchlist
  await User.findByIdAndUpdate(userId, { $push: { watchList: movie } });

  res.status(200).json({ message: `${movie?.title} was added to the watchlist` });
});


// Task:   Remove movie from watchlist
// Route:  DELETE /remove/:userId/:movieId
// Access: Private
const removeFromWatchlist = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const movieId = req.params.movieId;

  const movie = await Movie.findById(movieId);

  // Remove movie from the user's watchlist
  await User.findByIdAndUpdate(userId, { $pull: { watchList: movieId } });

  res.status(200).json({ message: `${movie?.title} was removed from watchlist` });
});

export { getUserWatchlist, addToWatchlist, removeFromWatchlist };