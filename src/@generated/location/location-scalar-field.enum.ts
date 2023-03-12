import { registerEnumType } from '@nestjs/graphql';

export enum LocationScalarFieldEnum {
    id = "id",
    location = "location",
    address = "address"
}


registerEnumType(LocationScalarFieldEnum, { name: 'LocationScalarFieldEnum', description: undefined })
