import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { data } from "../text";

console.log({ data });

const prisma = new PrismaClient();
async function main() {
  data.forEach(
    async ({ latitude, longitude, address }) =>
      await prisma.$queryRawUnsafe(`
    INSERT INTO "Location" (id,coords, latitude, longitude, address)
    VALUES ('${uuidv4()}',ST_SetSRID(ST_MakePoint(${longitude},${latitude}), 4326),'${latitude}' , '${longitude}', '${address}')
    RETURNING id, coords::text, latitude, longitude, address;
    `)
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
