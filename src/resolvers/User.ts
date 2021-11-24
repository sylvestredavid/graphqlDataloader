import {teamBatchLoader} from "../dataLoader/batchLoaders";

const DataLoader = require('dataloader')

const User = {
    teams(parent, args, {db}, info) {
        const teamLoader = new DataLoader(keys => teamBatchLoader(keys))
        return teamLoader.loadMany(parent.teamsIds)
    }
}

export default User
