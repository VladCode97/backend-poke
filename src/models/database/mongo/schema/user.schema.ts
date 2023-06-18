import {Schema} from "mongoose";
import {IUserDocumentMongo} from "../documents/user.document";

export const UserSchema: Schema<IUserDocumentMongo> = new Schema({
    idDocument: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    createdAt: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
});