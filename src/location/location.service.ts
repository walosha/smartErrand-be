import { Injectable } from "@nestjs/common";
import { cellToBoundary, latLngToCell } from "h3-js";
import { PrismaService } from "prisma/prisma.service";
import { featureToH3Set, h3SetToFeature } from "geojson2h3";
import { v4 as uuidv4 } from "uuid";

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async create(items: any) {
    console.log({ items });
    const newLocation = await this.prisma.$queryRawUnsafe(`
    INSERT INTO "Location" (id,coords, latitude, longitude, address)
    VALUES ('${uuidv4()}',ST_SetSRID(ST_MakePoint(${items.longitude},${
      items.latitude
    }), 4326),'${items.latitude}' , '${items.longitude}', '${items.address}')
    RETURNING id, coords::text, latitude, longitude, address;
    `);

    return newLocation[0];
  }

  async findAll() {
    const lat = 37.7753;
    const lng = -122.4189;
    const resolution = 9;
    const h3Index = latLngToCell(lat, lng, resolution);
    return await this.getVehiclesNearby(h3Index, 1);
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
    const passengerIndex = latLngToCell(
      3.099517822265625,
      6.502263597007461,
      10
    );

    const hexBoundary = cellToBoundary(passengerIndex);
    const [Lon, Lat] = hexBoundary[0];
    console.log({ Lon, Lat });

    const result = await this.prisma.$queryRaw`
      SELECT "id","longitude","latitude","address", ST_AsText("coords") AS "coords" FROM "Location" WHERE st_distancesphere(
        ST_AsText("coords"),
        ST_MakePoint(3.3390592,6.604070)  ) <= 4000 -- 1 mile in meters
`;

    // console.log({ vehicles });
    // const result = await this.prisma
    //   .$queryRaw`SELECT "id","longitude","latitude","address", ST_AsText("coords") AS "coords"  FROM "Location"
    //      WHERE ST_DWithin(coords, ST_SetSRID(ST_MakePoint(3.099517822265625,6.502263597007461), 4326), .3)
    // `;

    console.log({ raw: result });
    return result;
  }
}
