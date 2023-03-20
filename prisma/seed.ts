import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { data } from "../t";
import { geoToH3 } from "h3-js";

const prisma = new PrismaClient();
async function main() {
  await data.forEach(
    async ({ latitude = "", longitude = "", address = "" }) => {
      const locationIndex = await geoToH3(+latitude, +longitude, 9);
      await prisma.$queryRawUnsafe(`
    INSERT INTO "Location" (id,coords, latitude, longitude, address, locationindex)
    VALUES ('${uuidv4()}',ST_SetSRID(ST_MakePoint(${longitude},${latitude}), 4326),'${latitude}' , '${longitude}', '${address}', '${
        locationIndex || ""
      }')
    `);
    }
  );
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
