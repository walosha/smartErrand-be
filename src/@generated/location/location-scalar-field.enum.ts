import { registerEnumType } from '@nestjs/graphql';

export enum LocationScalarFieldEnum {
    id = "id",
    latitude = "latitude",
    longitude = "longitude",
    address = "address",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(LocationScalarFieldEnum, { name: 'LocationScalarFieldEnum', description: undefined })
