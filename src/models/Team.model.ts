import {UserModel} from "./User.model";

export interface TeamModel {
    id: number,
    name: string,
    usersIds: number[]
}
