import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Role } from '../prisma/role.enum';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:true})
    @Validator.IsUUID('4', { message: 'Invalid UUID' })
    id?: string;

    @Field(() => String, {nullable:false})
    @Validator.IsString()
    @Validator.MinLength(11)
    phone!: string;

    @Field(() => String, {nullable:false})
    referralCode!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsEmail()
    email!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    firstname!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(3)
    lastname!: string;

    @Field(() => String, {nullable:false})
    @Validator.MinLength(6)
    password!: string;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => Boolean, {nullable:true})
    isAdmin?: boolean;

    @Field(() => Boolean, {nullable:true})
    emailConfirmed?: boolean;

    @Field(() => Boolean, {nullable:true})
    phoneConfirmed?: boolean;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
