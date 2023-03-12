import { registerEnumType } from '@nestjs/graphql';

export enum ServiceScalarFieldEnum {
    id = "id",
    errandId = "errandId",
    clientId = "clientId",
    startLocation = "startLocation",
    endLocation = "endLocation",
    startTime = "startTime",
    endTime = "endTime"
}


registerEnumType(ServiceScalarFieldEnum, { name: 'ServiceScalarFieldEnum', description: undefined })
