import { Request, Response } from "express";
import { Movie } from "../models/Movie";


// GET all movies
export const getAllMovies = async (req: Request, res: Response) => {
    try {
        const movies = await Movie.aggregate(
            [ { $sample: { size: 20 } } ]
        );

        res.status(200).json(movies);
    } catch (error) {       
        console.log(error);
        res.status(500).json({ message: 'Server Error: Unable to fetch movies' });
    };
};

// GET all movies of a specific category
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

// GET a single movie
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
