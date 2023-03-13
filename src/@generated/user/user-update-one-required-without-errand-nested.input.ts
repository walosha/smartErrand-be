import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutErrandInput } from './user-create-without-errand.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutErrandInput } from './user-create-or-connect-without-errand.input';
import { UserUpsertWithoutErrandInput } from './user-upsert-without-errand.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutErrandInput } from './user-update-without-errand.input';

@InputType()
export class UserUpdateOneRequiredWithoutErrandNestedInput {

    @Field(() => UserCreateWithoutErrandInput, {nullable:true})
    @Type(() => UserCreateWithoutErrandInput)
    create?: UserCreateWithoutErrandInput;

    @Field(() => UserCreateOrConnectWithoutErrandInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutErrandInput)
    connectOrCreate?: UserCreateOrConnectWithoutErrandInput;

    @Field(() => UserUpsertWithoutErrandInput, {nullable:true})
    @Type(() => UserUpsertWithoutErrandInput)
    upsert?: UserUpsertWithoutErrandInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutErrandInput, {nullable:true})
    @Type(() => UserUpdateWithoutErrandInput)
    update?: UserUpdateWithoutErrandInput;
}
