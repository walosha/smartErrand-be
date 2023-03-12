import { registerEnumType } from '@nestjs/graphql';

export enum ClientScalarFieldEnum {
    id = "id",
    name = "name",
    userId = "userId",
    locationId = "locationId"
}


registerEnumType(ClientScalarFieldEnum, { name: 'ClientScalarFieldEnum', description: undefined })
