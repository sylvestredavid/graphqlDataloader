import {TeamModel} from "../models/Team.model";
import db from "../db";

export const teamBatchLoader = async (keys) => {
    const teams = db.teams.filter(team => keys.includes(team.id));
    const teamsMap: {[key: number]: TeamModel} = {};
    teams.forEach(team => {
        teamsMap[team.id] = team;
    });
    return keys.map((key) => teamsMap[key] || {})
}
