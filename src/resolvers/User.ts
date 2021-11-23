import {TeamModel} from "../models/Team.model";
const DataLoader = require('dataloader')

const User = {
    teams(parent, args, {db}, info) {
        const teamLoader = new DataLoader((keys) => {
            return Promise.resolve(keys.map((teamId) =>
                db.teams.find((team) => team.id === teamId) || {}
            ))
        })
        return teamLoader.loadMany(parent.teamsIds)
    }
}

export default User
