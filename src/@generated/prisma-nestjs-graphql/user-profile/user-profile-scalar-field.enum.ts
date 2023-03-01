import { registerEnumType } from '@nestjs/graphql';

export enum UserProfileScalarFieldEnum {
    id = "id"
}


registerEnumType(UserProfileScalarFieldEnum, { name: 'UserProfileScalarFieldEnum', description: undefined })
