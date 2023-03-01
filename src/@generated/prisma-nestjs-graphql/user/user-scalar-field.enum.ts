import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    phone = "phone",
    referralCode = "referralCode",
    email = "email",
    firstname = "firstname",
    lastname = "lastname",
    password = "password",
    role = "role",
    isAdmin = "isAdmin",
    emailConfirmed = "emailConfirmed",
    phoneConfirmed = "phoneConfirmed",
    updatedAt = "updatedAt",
    createdAt = "createdAt"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
