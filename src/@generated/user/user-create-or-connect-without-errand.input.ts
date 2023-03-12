import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutErrandInput } from './user-create-without-errand.input';

@InputType()
export class UserCreateOrConnectWithoutErrandInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutErrandInput, {nullable:false})
    @Type(() => UserCreateWithoutErrandInput)
    create!: UserCreateWithoutErrandInput;
}
