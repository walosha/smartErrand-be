import { Injectable } from "@nestjs/common";
import { latLngToCell } from "h3-js";
import { PrismaService } from "prisma/prisma.service";
import { h3SetToFeature } from "geojson2h3";

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async create(createLocationInput: any) {
    const result = await this.prisma.location.create(createLocationInput);
    console.log({ result });
    return result;
  }

  async findAll() {
    console.log("----------------------------------");
    const lat = 37.7753;
    const lng = -122.4189;
    const resolution = 9;
    const h3Index = latLngToCell(lat, lng, resolution);
    return await this.getVehiclesNearby(h3Index, 1000);
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number, updateLocationInput: any) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }

  async getVehiclesNearby(location, radius) {
    // console.log("location", h3SetToFeature(location));
    // console.log("location", h3SetToFeature(location).geometry.coordinates);
    const result = await this.prisma.$queryRaw`SELECT * FROM "Location" 
       WHERE ST_Intersects(
    ST_GeomFromGeoJSON(${JSON.stringify(h3SetToFeature(location))}
),
    ST_GeomFromText('LINESTRING(-71.160281 42.258729,-71.160837 42.259113,-71.161144 42.25932)')
  )`;

    console.log({ raw: result });
    return result;
  }
}
