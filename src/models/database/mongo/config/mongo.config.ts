import {config} from 'dotenv';
import Mongoose from 'mongoose';

config();

export class MongoSingleton {
    private static mongoSingleton: MongoSingleton;

    private constructor() {
    }

    static get Instance(): MongoSingleton {
        if (MongoSingleton.mongoSingleton === undefined) {
            MongoSingleton.mongoSingleton = new MongoSingleton();
        }
        return MongoSingleton.mongoSingleton;
    }


    public async establishConnection() {
        try {
            await Mongoose.connect(String(process.env.URL_CONNECTION_MONGO));
            console.log("Connected successfully");
        } catch (exception: unknown) {
            //const message = (exception as string);
            console.error(exception);
            //throw new Error(message);
        }
    }


}