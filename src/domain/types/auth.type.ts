import {IUser} from "../models/user.model";

export type AuthResponseOutput = {
    token: string;
}

export type AuthSignIn = Pick<IUser, "username" | "password">