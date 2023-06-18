import {IUserDocumentMongo} from "../documents/user.document";
import {MongoRepository} from "./mongo.repository";
import {UserSchema} from "../schema/user.schema";
import {IUser} from "../../../interfaces/user.model";


export class UserRepository extends MongoRepository<IUserDocumentMongo, IUser> {
    constructor() {
        super("users", UserSchema);
    }

}