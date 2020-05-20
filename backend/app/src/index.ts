import "reflect-metadata";
import {ApolloServer, gql} from "apollo-server-express";
import {createConnection, getRepository, Raw, ConnectionOptions, Repository} from "typeorm";
import {DBConfig} from "./database/db.config";
import {Schema} from "./graphql/schema";
import {Resolvers} from "./resolvers/resolvers";

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

var conn;
async function bootstrap() {
  conn = createConnection(DBConfig);

  const server = new ApolloServer({
                        typeDefs: Schema,
                        resolvers: Resolvers,
                        playground: true,
                      });

  server.applyMiddleware({app});
  app.listen({port: 4000}, () => {
    console.log(`server on http://localhost:4000${server.graphqlPath}`);
  });
};

bootstrap();
