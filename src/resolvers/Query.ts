import {UserModel} from "../models/User.model";

const Query = {
  getAllUsers(parent, args, {db}, info): UserModel[] {
    return db.users
  }
}
export default Query
