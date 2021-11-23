import { GraphQLServer } from "graphql-yoga";
import db from './db'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
import User from "./resolvers/User";

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        // Mutation,
        User
    },
    context: {
        db,
    }
})

server.start(() => {
    console.log('the server is up')
})
