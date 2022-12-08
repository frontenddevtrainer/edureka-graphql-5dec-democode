const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

const Schema = require("./schema");
const Resolvers = require("./resolvers");

async function main(){
    // GraphQL
    const server = new ApolloServer({ typeDefs:Schema, resolvers: Resolvers  });

    // Rest API, Static
    const app = express();

    await server.start()

    server.applyMiddleware({ app });

    app.listen({ port: 5000 }, ()=>{
        console.log("Server started at port 5000.")
    })
}

main();