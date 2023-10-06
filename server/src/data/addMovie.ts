import { Movie } from "../models/Movie";
import movieData from "./movieData";

const addMovies = async (): Promise<void> => {    
    try {
        const newMovies = await Movie.insertMany(movieData);
        console.log('Movie data successfully uploaded', newMovies);

    } catch (error) {
        console.log(`Failed to upload movie data | Error: ${error}`);
    }
};

export default addMovies;