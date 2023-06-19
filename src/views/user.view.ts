import {Authorized, Get, JsonController, UseBefore} from "routing-controllers";
import {UserController} from "../controllers/user.controller";
import {UserRepository} from "../database/mongo/repository/user.repository";
import {JWTController} from "../controllers/jwt.controller";
import {RoleEnum} from "../domain/enums/role.enum";

@JsonController("/user")
@UseBefore(JWTController.Instance.verifyToken)
@Authorized(RoleEnum.ADMIN)
export class UserView {
    private readonly userController: UserController;

    constructor() {
        this.userController = new UserController(new UserRepository());
    }

    @Get("/")
    async viewAll() {
        return await this.userController.viewAll();
    }
}
