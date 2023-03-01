import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { UsersModule } from "./users/users.module";
// import { GraphQLDateTime } from "graphql-iso-date";
import { ApolloDriver } from "@nestjs/apollo";

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: false,
      driver: ApolloDriver,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ["./**/*.graphql"],
      // resolvers: { DateTime: GraphQLDateTime },
      subscriptions: {
        "graphql-ws": true,
        "subscriptions-transport-ws": true,
      },
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
