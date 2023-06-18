import { Body, JsonController, Post } from "routing-controllers";
import { AuthController } from "../controllers/auth.controller";
import { UserRepository } from "../database/mongo/repository/user.repository";
import { IUser } from "../models/interfaces/user.model";
import { AuthResponseOutput } from "../models/types/auth.type";

@JsonController("/auth")
export class AuthView {
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController(new UserRepository());
  }

  @Post("/signIn")
  singIn(@Body() user: IUser): Promise<AuthResponseOutput | string> {
    return this.authController.singIn(user);
  }

  @Post("/signUp")
  registerUser(user: IUser): Promise<IUser | string> {
    return this.authController.registerUser(user);
  }
}
