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
    const client_h3_index = await this.prisma.$queryRaw`
   SELECT ST_GeoHash(ST_SetSRID(ST_AsText("coords"), 4326), 9) AS h3_index FROM "Location" WHERE id='fd220017-0da7-4f93-a6b9-6d9a19dc7645';
`;
    console.log("client_h3_index------------", client_h3_index[0]);

    const errand_h3_index = await this.prisma.$queryRaw`
    SELECT "id", "address", ST_X("coords") as longitude, ST_Y("coords") as latitude, ST_GeoHash("coords", 9) as vehicle_h3_index
    FROM "Location" WHERE st_distancesphere(
        ST_AsText("coords"),
        ST_MakePoint(7.0000,4.7500)  ) <= 30000 LIMIT  10 -- 1 mile in meters
  `;

    console.log("errand_h3_index------------", errand_h3_index);

    const res = await this.prisma.$queryRaw`;
             SELECT
  v.id,
  ST_Distance(
    ST_SetSRID(ST_MakePoint(v.longitude, v.latitude), 4326),
    ST_SetSRID(ST_MakePoint(p.passenger_longitude, p.passenger_latitude), 4326)
  ) AS distance
FROM
  (
    SELECT
      id,
      ST_X(coords) AS longitude,
      ST_Y(coords) AS latitude
    FROM
      "Location"
    WHERE
      ST_Contains(
        ST_SetSRID(
          ST_GeomFromGeoHash(${client_h3_index[0].h3_index})::geometry,
          4326
        ),
        coords
      )
  ) AS v
  CROSS JOIN (
    SELECT
      ST_X(coords) AS passenger_longitude,
      ST_Y(coords) AS passenger_latitude
    FROM
      "Location"
    WHERE
      id = 'fd220017-0da7-4f93-a6b9-6d9a19dc7645'
  ) AS p
ORDER BY
  distance
LIMIT
  10;

    `;

    console.log("res------------", res);

    const closestVehicle = await this.prisma.$queryRaw`
  SELECT vehicle_id, ST_Distance(
    ST_SetSRID(ST_Point("longitude", latitude), 4326),
    ST_SetSRID(ST_Point("longitude", latitude), 4326)
  ) AS distance
  FROM (
    SELECT "id", ST_X("coords") as longitude, ST_Y("coords") as latitude
    FROM "Location"
    WHERE  ST_Contains(
        ST_SetSRID(
          ST_GeomFromGeoHash(${client_h3_index[0].h3_index})::geometry,
          4326
        ),
        coords
      )
  ) as data
  CROSS JOIN (
    SELECT ST_X(ST_SetSRID(ST_MakePoint("longitude", "latitude"), 4326)) as longitude,
           ST_Y(ST_SetSRID(ST_MakePoint("longitude", "latitude"), 4326)) as latitude
    FROM "Location"
    WHERE passenger_id =${res[0].id}
  ) as passenger_data
  ORDER BY distance
  LIMIT 1;
`;

    console.log("closestVehicle------------", closestVehicle);

    const result = await this.prisma.$queryRaw`
      SELECT "id","longitude","latitude","address", ST_AsText("coords") AS "coords" FROM "Location" WHERE st_distancesphere(
        ST_AsText("coords"),
        ST_MakePoint(7.0000,4.7500)  ) <= 30000 LIMIT  10 -- 1 mile in meters
`;

    // console.log({ vehicles });
    // const result = await this.prisma
    //   .$queryRaw`SELECT "id","longitude","latitude","address", ST_AsText("coords") AS "coords"  FROM "Location"
    //      WHERE ST_DWithin(coords, ST_SetSRID(ST_MakePoint(3.099517822265625,6.502263597007461), 4326), .3)
    // `;

    return result;
  }
}
