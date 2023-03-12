import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientUpdateWithoutLocationInput } from './client-update-without-location.input';
import { Type } from 'class-transformer';
import { ClientCreateWithoutLocationInput } from './client-create-without-location.input';

@InputType()
export class ClientUpsertWithoutLocationInput {

    @Field(() => ClientUpdateWithoutLocationInput, {nullable:false})
    @Type(() => ClientUpdateWithoutLocationInput)
    update!: ClientUpdateWithoutLocationInput;

    @Field(() => ClientCreateWithoutLocationInput, {nullable:false})
    @Type(() => ClientCreateWithoutLocationInput)
    create!: ClientCreateWithoutLocationInput;
}
