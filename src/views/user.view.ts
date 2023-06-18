import {IRepository} from "../models/interfaces/repository/repository";
import {IUser} from "../models/interfaces/user.model";
import {Body, Get, JsonController, Post, Res} from "routing-controllers";
import {UserController} from "../controllers/user.controller";
import {type} from "os";
import {Response} from "express";

@JsonController('/user')
export class UserView {
    private readonly userController: UserController;

    constructor() {
        this.userController = new UserController();
    }

    @Post('/')
    create(@Body() user: IUser): Promise<IUser> {
        return this.userController.create(user);
    }

    @Get('/')
    async viewAll(@Res() response: Response) {
        return await this.userController.viewAll();
    }


}