import express from 'express';
import {ApolloServer, gql } from 'apollo-server-express';
import {authors,books,publishers} from './data.js'; 
import typeDefs from './gqlVariables/typeDefs.js';
import resolvers from './gqlVariables/resolvers.js';


async function startServer() {
  const app = express();
  const server = new ApolloServer({ 
    typeDefs, resolvers
 });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();