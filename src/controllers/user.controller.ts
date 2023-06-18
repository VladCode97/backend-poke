import {IRepository} from "../models/interfaces/repository/repository";
import {IUser} from "../models/interfaces/user.model";
import {UserRepository} from "../models/database/mongo/repository/user.repository";

export class UserController implements IRepository<IUser> {

    private readonly userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(user: IUser): Promise<IUser> {
        try {
            user.createdAt = new Date();
            user.updatedAt = new Date();
            return await this.userRepository.create(user);
        } catch (exception: unknown) {
            throw new Error(exception as string);
        }
    }

    async viewAll(): Promise<IUser[]> {
        try {
            return await this.userRepository.viewAll();
        } catch (exception: unknown) {
            throw new Error(exception as string);
        }
    }
}