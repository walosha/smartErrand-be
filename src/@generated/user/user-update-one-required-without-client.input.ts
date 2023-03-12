import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClientInput } from './user-create-without-client.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutClientInput } from './user-create-or-connect-without-client.input';
import { UserUpsertWithoutClientInput } from './user-upsert-without-client.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutClientInput } from './user-update-without-client.input';

@InputType()
export class UserUpdateOneRequiredWithoutClientInput {

    @Field(() => UserCreateWithoutClientInput, {nullable:true})
    @Type(() => UserCreateWithoutClientInput)
    create?: UserCreateWithoutClientInput;

    @Field(() => UserCreateOrConnectWithoutClientInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutClientInput)
    connectOrCreate?: UserCreateOrConnectWithoutClientInput;

    @Field(() => UserUpsertWithoutClientInput, {nullable:true})
    @Type(() => UserUpsertWithoutClientInput)
    upsert?: UserUpsertWithoutClientInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutClientInput, {nullable:true})
    @Type(() => UserUpdateWithoutClientInput)
    update?: UserUpdateWithoutClientInput;
}
