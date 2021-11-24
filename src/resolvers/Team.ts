import {userBatchLoader} from "../dataLoader/batchLoaders";

const DataLoader = require('dataloader')

const Team = {
    users(parent, args, {db}, info) {
        const userLoader = new DataLoader(keys => userBatchLoader(keys))
        return userLoader.loadMany(parent.usersIds)
    }
}

export default Team
