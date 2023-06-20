import {UserRepository} from "../database/mongo/repository/user.repository";
import {MessagesSystemEnum} from "../domain/enums/messages.enum";
import {IUser} from "../domain/models/user.model";
import {AuthResponseOutput, AuthSignIn} from "../domain/types/auth.type";
import {JWTController} from "./jwt.controller";

export class AuthController {
    constructor(private readonly userRepository: UserRepository) {
    }

    async singIn(user: AuthSignIn): Promise<AuthResponseOutput | string> {
        try {
            const userResponse = await this.userRepository.viewByUsernamePassword(
                user.username,
                user.password,
            );
            if (userResponse) {
                const token = JWTController.Instance.singToken(
                    JSON.stringify(userResponse)
                );
                return {
                    token,
                    idDocument: userResponse.idDocument
                };
            }
            return MessagesSystemEnum.USER_NOT_FOUND;
        } catch (exception: unknown) {
            throw exception;
        }
    }

    async registerUser(user: IUser): Promise<IUser | string> {
        try {
            const userResponse = await this.userRepository.viewByUsername(
                user.username
            );
            if (!userResponse) {
                user.idDocument = Math.floor((Math.random() + 1) * 423);
                user.createdAt = new Date();
                user.updatedAt = new Date();
                return await this.userRepository.create(user);
            }
            return MessagesSystemEnum.USER_ALREADY_EXISTS;
        } catch (exception: unknown) {
            throw new Error(exception as string);
        }
    }
}
