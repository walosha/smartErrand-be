import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutLocationInput } from './client-create-without-location.input';
import { Type } from 'class-transformer';
import { ClientCreateOrConnectWithoutLocationInput } from './client-create-or-connect-without-location.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientUncheckedCreateNestedOneWithoutLocationInput {

    @Field(() => ClientCreateWithoutLocationInput, {nullable:true})
    @Type(() => ClientCreateWithoutLocationInput)
    create?: ClientCreateWithoutLocationInput;

    @Field(() => ClientCreateOrConnectWithoutLocationInput, {nullable:true})
    @Type(() => ClientCreateOrConnectWithoutLocationInput)
    connectOrCreate?: ClientCreateOrConnectWithoutLocationInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    connect?: ClientWhereUniqueInput;
}
