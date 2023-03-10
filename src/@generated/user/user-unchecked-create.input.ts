import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { UserCreateroleInput } from './user-createrole.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => String, {nullable:true})
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

    @Field(() => UserCreateroleInput, {nullable:true})
    role?: UserCreateroleInput;

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
