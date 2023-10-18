import mongoose, { Connection } from 'mongoose';
import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes';  // import router as movieRoutes
dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;
const DB_URI: string = process.env.DB_URI || '';

// Middleware
app.use(cors());


// Movie routes
app.use('/api/movies', movieRoutes)


// Database connection
const connectToDb = async (): Promise<Connection> => {
    try {
        const connect = await mongoose.connect(DB_URI);
        return connect.connection
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};


// Start server upon DB connection
(async () => {
   try {
    await connectToDb();
    app.listen(port, () => console.log(`Connected to the database & Listening on port ${port}`));
   } catch (error) {
        console.log(error);
   }  
})()

export const db = mongoose.connection;