import { UserRepository } from "../database/mongo/repository/user.repository";
import {IRepository} from "../models/interfaces/repository/repository";
import {IUser} from "../models/interfaces/user.model";

export class UserController implements IRepository<IUser> {

    constructor(private readonly userRepository: UserRepository) {}

    async viewAll(): Promise<IUser[]> {
        try {
            return await this.userRepository.viewAll();
        } catch (exception: unknown) {
            throw new Error(exception as string);
        }
    }

    async updateInformationUser(criteria: IUser, data: IUser): Promise<string> {
        try {
            await this.userRepository.updateInformationUser(criteria, data);
            return "User updated";
        } catch (exception: unknown) {
            throw new Error(exception as string);
        }
    }

}