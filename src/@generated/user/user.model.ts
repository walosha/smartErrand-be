import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    referralCode!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    firstname!: string;

    @Field(() => String, {nullable:false})
    lastname!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => Role, {nullable:false,defaultValue:'USER'})
    role!: keyof typeof Role;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isAdmin!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    emailConfirmed!: boolean;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    phoneConfirmed!: boolean;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
