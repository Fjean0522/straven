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
app.use(cors({
    origin: ['https://straven.onrender.com/', 'https://straven.netlify.app/', 'http://localhost:5173/'],
    methods: 'GET',
    credentials: true
}));


// Movie routes
app.use('/', movieRoutes)


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