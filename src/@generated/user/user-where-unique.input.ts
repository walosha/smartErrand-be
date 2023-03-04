import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => String, {nullable:true})
    @Validator.IsUUID('4', { message: 'Invalid UUID' })
    id?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsString()
    @Validator.MinLength(11)
    phone?: string;

    @Field(() => String, {nullable:true})
    referralCode?: string;

    @Field(() => String, {nullable:true})
    @Validator.IsEmail()
    email?: string;
}
