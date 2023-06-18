import {Document} from 'mongoose';
import {IUser} from "../../../interfaces/user.model";

export interface IUserDocumentMongo extends IUser, Document {}