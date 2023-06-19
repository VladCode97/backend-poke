import {IUser} from "./user.model";
import {IAggregate} from "./aggregate.model";

export interface IPokemon extends IAggregate {
    name: string;
    versionPokemon: string;
    photo: string;
    user: IUser;
}
