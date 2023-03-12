import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutErrandInput } from './user-create-without-errand.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutErrandInput } from './user-create-or-connect-without-errand.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutErrandInput {

    @Field(() => UserCreateWithoutErrandInput, {nullable:true})
    @Type(() => UserCreateWithoutErrandInput)
    create?: UserCreateWithoutErrandInput;

    @Field(() => UserCreateOrConnectWithoutErrandInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutErrandInput)
    connectOrCreate?: UserCreateOrConnectWithoutErrandInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
