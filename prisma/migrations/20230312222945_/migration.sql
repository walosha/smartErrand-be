CREATE EXTENSION postgis;

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'ERRAND', 'CLIENT');

-- CreateEnum
CREATE TYPE "RATING" AS ENUM ('ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', '5');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "referralCode" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT[],
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,
    "emailConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "phoneConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "coords" geometry(Point, 4326) NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "long" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" TEXT NOT NULL,
    "errandId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "startLocation" DOUBLE PRECISION NOT NULL,
    "endLocation" DOUBLE PRECISION NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ServiceReview" (
    "id" TEXT NOT NULL,
    "User" TEXT NOT NULL,
    "serviceId" TEXT NOT NULL,
    "comments" TEXT NOT NULL,
    "Rating" "RATING" NOT NULL DEFAULT 'ZERO',
    "Photos" TEXT NOT NULL,

    CONSTRAINT "ServiceReview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Errand" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true,
    "userId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,

    CONSTRAINT "Errand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "locationId" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_referralCode_key" ON "User"("referralCode");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "location_idx" ON "Location" USING GIST ("coords");

-- CreateIndex
CREATE UNIQUE INDEX "ServiceReview_serviceId_key" ON "ServiceReview"("serviceId");

-- CreateIndex
CREATE UNIQUE INDEX "Errand_userId_key" ON "Errand"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Errand_locationId_key" ON "Errand"("locationId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_userId_key" ON "Client"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Client_locationId_key" ON "Client"("locationId");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_errandId_fkey" FOREIGN KEY ("errandId") REFERENCES "Errand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServiceReview" ADD CONSTRAINT "ServiceReview_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Errand" ADD CONSTRAINT "Errand_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Errand" ADD CONSTRAINT "Errand_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
