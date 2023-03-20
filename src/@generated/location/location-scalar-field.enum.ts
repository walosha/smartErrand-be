import { registerEnumType } from '@nestjs/graphql';

export enum LocationScalarFieldEnum {
    id = "id",
    latitude = "latitude",
    longitude = "longitude",
    address = "address",
    locationindex = "locationindex",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LocationScalarFieldEnum, { name: 'LocationScalarFieldEnum', description: undefined })
