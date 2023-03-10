import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import * as dotenv from "dotenv";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";
import { PassportModule } from "@nestjs/passport";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { LocalStrategy } from "../auth/strategies/local.strategy";
import { JwtStrategy } from "../auth/strategies/jwt.strategy";
import { join } from "path";
import { RolesGuard } from "src/common/guards/roles.guard";
import { PrismaService } from "prisma/prisma.service";

dotenv.config();
const env = `${(process.env.NODE_ENV || "development").toLowerCase()}`;
@Module({
  providers: [
    UsersResolver,
    UsersService,
    PrismaService,
    JwtService,
    RolesGuard,
  ],
})
export class UsersModule {}
