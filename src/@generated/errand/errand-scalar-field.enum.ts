import { registerEnumType } from '@nestjs/graphql';

export enum ErrandScalarFieldEnum {
    id = "id",
    name = "name",
    isAvailable = "isAvailable",
    userId = "userId",
    locationId = "locationId"
}


registerEnumType(ErrandScalarFieldEnum, { name: 'ErrandScalarFieldEnum', description: undefined })
