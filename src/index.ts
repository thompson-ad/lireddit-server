import "reflect-metadata";
import { MikroORM } from "@mikro-orm/core";
import mikroConfig from "./mikro-orm.config";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { HelloResolver } from "./resolvers/hello";
import { PostResolver } from "./resolvers/post";

const main = async () => {
  // create db connection
  const orm = await MikroORM.init(mikroConfig);
  await orm.getMigrator().up();
  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver, PostResolver],
      validate: false,
    }),
    context: () => ({ em: orm.em }), // special object accessible by all resolvers
  });

  // create a graphql endpoint for us on express
  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on localhost: 4000");
  });
};

main();
