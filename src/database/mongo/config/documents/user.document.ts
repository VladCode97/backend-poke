import {Document} from 'mongoose';
import {IUser} from '../../../../domain/models/user.model';

export interface IUserDocumentMongo extends IUser, Document {
}