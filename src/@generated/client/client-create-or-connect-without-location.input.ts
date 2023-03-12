import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Type } from 'class-transformer';
import { ClientCreateWithoutLocationInput } from './client-create-without-location.input';

@InputType()
export class ClientCreateOrConnectWithoutLocationInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    @Type(() => ClientWhereUniqueInput)
    where!: ClientWhereUniqueInput;

    @Field(() => ClientCreateWithoutLocationInput, {nullable:false})
    @Type(() => ClientCreateWithoutLocationInput)
    create!: ClientCreateWithoutLocationInput;
}
