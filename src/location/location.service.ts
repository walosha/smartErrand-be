import { Injectable } from "@nestjs/common";
// import { edgeLength, geoToH3, kRing } from "h3-js";
import { PrismaService } from "prisma/prisma.service";
// import { featureToH3Set, h3SetToFeature } from "geojson2h3";
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
    const lat = 6.6536046;
    const lng = 3.4746117;
    return this.getErrandsNearby({ lat, lng });
  }

  findOne(id: number) {
    return `This action returns a #${id} location`;
  }

  update(id: number) {
    return `This action updates a #${id} location`;
  }

  remove(id: number) {
    return `This action removes a #${id} location`;
  }

  async getErrandsNearby({ lng, lat }) {
    const meters = 13906.560375;
    // const radiusInMeters = 1000;
    // const resolution = 9;
    // const centerH3Index = geoToH3(lat, lng, resolution);
    // const h3IndexesWithinRadius = kRing(
    //   centerH3Index,
    //   Math.floor(radiusInMeters / edgeLength(resolution, "m"))
    // );

    const result = await this.prisma.$queryRaw`
        SELECT "id", "longitude", "latitude", "address", ST_AsText("coords") AS "coords"
            FROM "Location"
            WHERE st_distancesphere(
              ST_AsText("coords"),
              ST_MakePoint(${lng}, ${lat})
            ) <= ${meters} -- 30 km in meters
        LIMIT 30;
    `;

    return result;
  }
}
