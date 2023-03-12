import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutUserInput } from './client-create-without-user.input';
import { Type } from 'class-transformer';
import { ClientCreateOrConnectWithoutUserInput } from './client-create-or-connect-without-user.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientCreateNestedOneWithoutUserInput {

    @Field(() => ClientCreateWithoutUserInput, {nullable:true})
    @Type(() => ClientCreateWithoutUserInput)
    create?: ClientCreateWithoutUserInput;

    @Field(() => ClientCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ClientCreateOrConnectWithoutUserInput)
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    connect?: ClientWhereUniqueInput;
}
