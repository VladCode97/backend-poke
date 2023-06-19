import {Action} from "routing-controllers";
import {JWTController} from "../../controllers/jwt.controller";
import {RoleEnum} from "../../domain/enums/role.enum";
import {IUser} from "../../domain/models/user.model";

export function verifyRolesHandler(action: Action, roles: RoleEnum[]): boolean {
    const token = action.request.headers["authorization"];
    const user: IUser = JWTController.Instance.verify(token) as IUser;
    return roles.includes(user.role);
}
