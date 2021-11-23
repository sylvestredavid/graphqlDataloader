import {TeamModel} from "./Team.model";

export interface UserModel {
    id: number,
    name?: string,
    firstName: string,
    email: string
    teamsIds: number[]
}
