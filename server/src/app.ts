import mongoose, { Connection } from 'mongoose';
import express, { Express } from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import movieRoutes from './routes/movieRoutes';  // import router as movieRoutes
import userRoutes from './routes/userRoutes';  // import router as userRoutes
import watchListRoutes from './routes/watchListRoutes';  // import router as watchListRoutes
import { errorHandler, notFound } from './middleware/errorMiddleware';

dotenv.config();

const app: Express = express();
const port: string | number = process.env.PORT || 3000;
const DB_URI: string = process.env.DB_URI || '';

// Middleware
app.use(cors({
    origin: ['https://straven.onrender.com', 'http://localhost:5173'],
    methods: 'GET, POST, PUT',
    credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// Routes
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/watchlist', watchListRoutes);


// Error Middleware
app.use(notFound);
app.use(errorHandler);


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
