import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutLocationInput } from './client-create-without-location.input';
import { Type } from 'class-transformer';
import { ClientCreateOrConnectWithoutLocationInput } from './client-create-or-connect-without-location.input';
import { ClientUpsertWithoutLocationInput } from './client-upsert-without-location.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithoutLocationInput } from './client-update-without-location.input';

@InputType()
export class ClientUpdateOneWithoutLocationNestedInput {

    @Field(() => ClientCreateWithoutLocationInput, {nullable:true})
    @Type(() => ClientCreateWithoutLocationInput)
    create?: ClientCreateWithoutLocationInput;

    @Field(() => ClientCreateOrConnectWithoutLocationInput, {nullable:true})
    @Type(() => ClientCreateOrConnectWithoutLocationInput)
    connectOrCreate?: ClientCreateOrConnectWithoutLocationInput;

    @Field(() => ClientUpsertWithoutLocationInput, {nullable:true})
    @Type(() => ClientUpsertWithoutLocationInput)
    upsert?: ClientUpsertWithoutLocationInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    connect?: ClientWhereUniqueInput;

    @Field(() => ClientUpdateWithoutLocationInput, {nullable:true})
    @Type(() => ClientUpdateWithoutLocationInput)
    update?: ClientUpdateWithoutLocationInput;
}
