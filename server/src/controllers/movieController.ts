import { Request, Response } from "express";
import { Movie } from "../models/Movie";


// Task:   Get all movies
// Route:  GET /movies 
// Access: Private
export const getAllMovies = async (req: Request, res: Response) => {
    try {
        // get movies in random order
        const movies = await Movie.aggregate(
            [ { $sample: { size: 30 } } ]
        );

        res.status(200).json(movies);
    } catch (error) {       
        console.log(error);
        res.status(500).json({ message: 'Server Error: Unable to fetch movies' });
    };
};


// Task:   Get all movies of a specific category
// Route:  GET /movies/category/:category
// Access: Private
export const getMoviesByCategory = async (req: Request, res: Response) => {
    try {
        const {category} = req.params;
        const movies = await Movie.find({ category: category });
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error: Unable to fetch movies' });
    };
};


// Task:   Get a single movie
// Route:  GET /movies/:title
// Access: Private
export const getMovie = async (req: Request, res: Response) => {
    try {
        const { title } = req.params;
        const movies = await Movie.find({ title: title });
        res.status(200).json(movies);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error: Unable to fetch movie' });
    };
};


// Task:   Get a single movie randomly
// Route:  GET /movies/randomMovie
// Access: Private
export const getRandomMovie = async (req: Request, res: Response) => {
    try {
        const randomMovie = await Movie.aggregate(
            [ { $sample: { size: 1 } } ]
        );

        res.status(200).json(randomMovie);
    } catch (error) {       
        console.log(error);
        res.status(500).json({ message: 'Server Error: Unable to fetch movies' });
    };
};
