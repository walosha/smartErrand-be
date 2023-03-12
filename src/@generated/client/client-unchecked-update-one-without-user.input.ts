import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutUserInput } from './client-create-without-user.input';
import { Type } from 'class-transformer';
import { ClientCreateOrConnectWithoutUserInput } from './client-create-or-connect-without-user.input';
import { ClientUpsertWithoutUserInput } from './client-upsert-without-user.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithoutUserInput } from './client-update-without-user.input';

@InputType()
export class ClientUncheckedUpdateOneWithoutUserInput {

    @Field(() => ClientCreateWithoutUserInput, {nullable:true})
    @Type(() => ClientCreateWithoutUserInput)
    create?: ClientCreateWithoutUserInput;

    @Field(() => ClientCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ClientCreateOrConnectWithoutUserInput)
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput;

    @Field(() => ClientUpsertWithoutUserInput, {nullable:true})
    @Type(() => ClientUpsertWithoutUserInput)
    upsert?: ClientUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    connect?: ClientWhereUniqueInput;

    @Field(() => ClientUpdateWithoutUserInput, {nullable:true})
    @Type(() => ClientUpdateWithoutUserInput)
    update?: ClientUpdateWithoutUserInput;
}
