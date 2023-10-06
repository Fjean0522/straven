import { Movie } from "../models/Movie";
import { Request, Response } from "express";


const addMovies = async (req: Request, res: Response): Promise<void> => {    
    try {
       const movies: Movie[] = req.body;
       const newMovies = await Movie.insertMany(movies)
       res.status(201).json(newMovies);

    } catch (error) {
        res.status(500).json({ error: 'Movie data upload failed' });
    }
};

export default addMovies;


/* try {
  const insertedMovies = await Movie.insertMany(moviesToAdd);
  console.log('Movies added successfully:', insertedMovies);
} catch (error) {
  console.error('Error adding movies:', error); */
