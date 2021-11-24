import {GraphQLServer} from "graphql-yoga";
import db from './db'
import Query from './resolvers/Query'
import User from "./resolvers/User";
import Team from "./resolvers/Team";

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        // Mutation,
        User,
        Team
    },
    context: {
        db,
    }
})

server.start(() => {
    console.log('the server is up')
})
