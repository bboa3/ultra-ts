-- CreateTable
CREATE TABLE "coordinates" (
    "id" SERIAL NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "address_id" INTEGER NOT NULL,

    CONSTRAINT "coordinates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timezone" (
    "id" SERIAL NOT NULL,
    "offset" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address_id" INTEGER NOT NULL,

    CONSTRAINT "timezone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "street" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "address_id" INTEGER NOT NULL,

    CONSTRAINT "street_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "address" (
    "id" SERIAL NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "coordinates_address_id_key" ON "coordinates"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "timezone_address_id_key" ON "timezone"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "street_address_id_key" ON "street"("address_id");

-- CreateIndex
CREATE UNIQUE INDEX "address_user_id_key" ON "address"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- AddForeignKey
ALTER TABLE "coordinates" ADD CONSTRAINT "coordinates_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "timezone" ADD CONSTRAINT "timezone_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "street" ADD CONSTRAINT "street_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
