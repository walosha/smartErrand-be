import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { UserModule } from "./user/user.module";
import { GraphQLDateTime } from "graphql-iso-date";
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ["./**/*.graphql"],
      resolvers: { DateTime: GraphQLDateTime },
      subscriptions: {
        "graphql-ws": true,
        "subscriptions-transport-ws": true,
      },
    }),
    UserModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
