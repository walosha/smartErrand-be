import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { UsersModule } from "./users/users.module";
// import { GraphQLDateTime } from "graphql-iso-date";
import { ApolloDriver } from "@nestjs/apollo";
import { NigeriaPhoneNumberValidator } from "./utils/nigeria-phone-number.validator";

@Module({
  imports: [
    GraphQLModule.forRoot({
      sortSchema: true,
      context: ({ req }) => ({ headers: req.headers }),
      formatError: (error) => {
        const graphQLFormattedError = {
          message: error?.extensions?.response?.message || error.message,
          code:
            error.extensions?.response?.statusCode ||
            error.extensions?.code ||
            "SERVER_ERROR",
          name: error.extensions?.exception?.name || error.name,
        };
        return graphQLFormattedError;
      },
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
  providers: [AppService, NigeriaPhoneNumberValidator],
  exports: [NigeriaPhoneNumberValidator],
})
export class AppModule {}
