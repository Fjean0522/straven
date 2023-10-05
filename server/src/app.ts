import mongoose, { Connection } from 'mongoose';
import express, { Express } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port: number = 3000;
const DB_URI: string = process.env.DB_URI || ''


const connectToDb = async (): Promise<Connection | undefined> => {
    try {
        const connect = await mongoose.connect(DB_URI);
        return connect.connection
    } catch (error) {
        console.log(error);
        return undefined
    }
};

(async () => {
   try {
    await connectToDb();
    app.listen(port, () => console.log(`Connected to the database & Listening on port ${port}`));
   } catch (error) {
        console.log(error);
   }  
})()
