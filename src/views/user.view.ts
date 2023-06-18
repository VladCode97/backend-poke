import { Authorized, Get, JsonController, Res, UseBefore } from "routing-controllers";
import { UserController } from "../controllers/user.controller";
import { UserRepository } from "../database/mongo/repository/user.repository";
import { JWTController } from "../controllers/jwt.controller";
import { RoleEnum } from "../models/enums/role.enum";

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
