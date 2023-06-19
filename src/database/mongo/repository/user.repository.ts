import {IUserDocumentMongo} from "../config/documents/user.document";
import {MongoManager} from "../manager/mongo.repository";
import {IUser} from "../../../domain/models/user.model";
import {UserSchema} from "../config/schema/user.schema";
import {SchemaMongoEnum} from "../../../domain/enums/schema-mongo.enum";


export class UserRepository extends MongoManager<IUserDocumentMongo, IUser> {
    constructor() {
        super(SchemaMongoEnum.USER, UserSchema);
    }

    viewByUsernamePassword(username: string, password: string) {
        return this.Model.findOne({username, password})
    }

    viewByUsername(username: string) {
        return this.Model.findOne({username})
    }

    async updateInformationUser(criteria: IUser, data: IUser) {
        return this.Model.findOneAndUpdate({...criteria}, {...data});
    }

}