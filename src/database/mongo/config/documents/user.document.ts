import {Document} from 'mongoose';
import { IUser } from '../../../../models/interfaces/user.model';

export interface IUserDocumentMongo extends IUser, Document {}