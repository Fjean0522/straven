import mongoose from 'mongoose';
import express from 'express';

const app = express();
const DB_URI = 'mongodb+srv://fjean0522:straven_user123@straven-db.qgu8tgi.mongodb.net/?retryWrites=true&w=majority';


const connectToDb = async () => {
    const connect = await mongoose.connect(DB_URI);
    console.log(`Connected to the database`);
}

connectToDb();


export default app;