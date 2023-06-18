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
            await Mongoose.connect("mongodb+srv://luis:test@waco-test.zknxhmx.mongodb.net/?retryWrites=true&w=majority");
            console.log("Connected successfully");
        } catch (exception: unknown) {
            console.error(exception);
        }
    }


}