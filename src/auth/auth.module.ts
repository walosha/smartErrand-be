import { join } from "path";
import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { PrismaService } from "prisma/prisma.service";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import * as dotenv from "dotenv";

dotenv.config();
const env = `${(process.env.NODE_ENV || "development").toLowerCase()}`;
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(process.cwd(), `.env.${env}`),
      isGlobal: true,
    }),
    PassportModule,
    JwtModule.register({
      signOptions: { expiresIn: "12h" },
      secret: "secret",
    }),
  ],
  providers: [
    AuthResolver,
    AuthService,
    PrismaService,
    LocalStrategy,
    JwtStrategy,
  ],
})
export class AuthModule {}
