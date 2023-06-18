import { Action } from "routing-controllers";
import { JWTController } from "../../controllers/jwt.controller";
import { RoleEnum } from "../../models/enums/role.enum";
import { IUser } from "../../models/interfaces/user.model";

export function verifyRolesHanlder(action: Action, roles: RoleEnum[]): boolean {
  const token = action.request.headers["authorization"];
  const user: IUser = JWTController.Instance.verify(token) as IUser;
  if (roles.includes(user.role)) {
    return true;
  }
  return false;
}
