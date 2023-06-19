import {UserRepository} from "../database/mongo/repository/user.repository";
import {IRepository} from "../domain/repository/repository";
import {IUser} from "../domain/models/user.model";
import {MessagesSystemEnum} from "../domain/enums/messages.enum";

export class UserController implements IRepository<IUser> {

    constructor(private readonly userRepository: UserRepository) {
    }

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
            return MessagesSystemEnum.USER_UPDATE;
        } catch (exception: unknown) {
            throw new Error(exception as string);
        }
    }

}