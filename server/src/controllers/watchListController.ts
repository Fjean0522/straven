import asyncHandler from "express-async-handler";
import { Request, Response } from "express";



const getUserWatchlist = asyncHandler(async (req: Request, res: Response) => {
  const userId = req.params.userId;

  
});


// Task:   Add movie to watchlist
// Route:  POST /add 
// Access: Private
const addToWatchlist = asyncHandler(async (req: Request, res: Response) => {
    const { userId, movieId } =  req.body;

    
});


// Task:   Remove movie from watchlist
// Route:  POST /remove 
// Access: Private
const removeFromWatchlist = asyncHandler(async (req: Request, res: Response) => {
    const { userId, movieId } =  req.body;

    
});

export { getUserWatchlist, addToWatchlist, removeFromWatchlist };