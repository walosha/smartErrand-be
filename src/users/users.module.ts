import { Module } from "@nestjs/common";
import * as dotenv from "dotenv";
import { UsersService } from "./users.service";
import { UsersResolver } from "./users.resolver";
import { JwtService } from "@nestjs/jwt";

import { RolesGuard } from "src/common/guards/roles.guard";
import { PrismaService } from "prisma/prisma.service";

dotenv.config();
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
