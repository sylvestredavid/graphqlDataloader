import {TeamModel} from "../models/Team.model";
import db from "../db";
import {UserModel} from "../models/User.model";

export const teamBatchLoader = async (keys) => {
    const teams = db.teams.filter(team => keys.includes(team.id));
    const teamsMap: {[key: number]: TeamModel} = {};
    teams.forEach(team => {
        teamsMap[team.id] = team;
    });
    return keys.map((key) => teamsMap[key] || {})
}

export const userBatchLoader = async (keys) => {
    const users = db.users.filter(user => keys.includes(user.id));
    const usersMap: {[key: number]: UserModel} = {};
    users.forEach(user => {
        usersMap[user.id] = user;
    });
    return keys.map((key) => usersMap[key] || {})
}
