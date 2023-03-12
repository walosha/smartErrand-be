import { Module } from "@nestjs/common";
import { LocationService } from "./location.service";
import { LocationResolver } from "./location.resolver";
import { PrismaService } from "prisma/prisma.service";

@Module({
  providers: [LocationResolver, LocationService, PrismaService],
})
export class LocationModule {}
