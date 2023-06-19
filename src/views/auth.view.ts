import {Body, JsonController, Post} from "routing-controllers";
import {AuthController} from "../controllers/auth.controller";
import {UserRepository} from "../database/mongo/repository/user.repository";
import {AuthResponseOutput} from "../domain/types/auth.type";
import {AuthDTO} from "./DTO/user.dto";
import {IUser} from "../domain/models/user.model";

@JsonController("/auth")
export class AuthView {
    private authController: AuthController;

    constructor() {
        this.authController = new AuthController(new UserRepository());
    }

    @Post("/signIn")
    singIn(@Body() user: AuthDTO): Promise<AuthResponseOutput | string> {
        return this.authController.singIn(user);
    }

    @Post("/signUp")
    registerUser(@Body() user: IUser): Promise<IUser | string> {
        return this.authController.registerUser(user);
    }
}
