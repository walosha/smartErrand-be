import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutClientInput } from './user-create-without-client.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutClientInput } from './user-create-or-connect-without-client.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutClientInput {

    @Field(() => UserCreateWithoutClientInput, {nullable:true})
    @Type(() => UserCreateWithoutClientInput)
    create?: UserCreateWithoutClientInput;

    @Field(() => UserCreateOrConnectWithoutClientInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutClientInput)
    connectOrCreate?: UserCreateOrConnectWithoutClientInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
