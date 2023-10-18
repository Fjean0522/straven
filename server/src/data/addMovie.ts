import { db } from "../app";
import { Movie } from "../models/Movie";
import movieData from "./movieData";


db.on('open', () => {
    const addMovies = async (): Promise<void> => {    
        try {
            for (const movie of movieData) {
                const existingMovie = await Movie.findOne({ title: movie.title });

                if (!existingMovie) {
                    const newMovie = new Movie(movie);
                    await newMovie.save();
                    console.log('Movie data successfully uploaded', newMovie);
                }
            }

        } catch (error) {
            console.log(`Failed to upload movie data | Error: ${error}`);
        }
    };

    addMovies();  
})
