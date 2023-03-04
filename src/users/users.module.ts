import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as dotenv from "dotenv";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";
import { PrismaService } from "prisma/prisma.service";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { LocalStrategy } from "./strategies/local.strategy";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { RolesGuard } from "./guards/roles.guard";
import { join } from "path";

dotenv.config();
const env = `${(process.env.NODE_ENV || "development").toLowerCase()}`;
console.log({ env });
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: join(process.cwd(), `.env.${env}`),
      isGlobal: true,
    }),
    PassportModule,
    UsersModule,
    JwtModule.register({
      signOptions: { expiresIn: "3h" },
      secret: "secret",
    }),
  ],
  providers: [
    UsersResolver,
    UsersService,
    PrismaService,
    LocalStrategy,
    JwtStrategy,
    RolesGuard,
  ],
})
export class UsersModule {}
