import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientUpdateWithoutUserInput } from './client-update-without-user.input';
import { Type } from 'class-transformer';
import { ClientCreateWithoutUserInput } from './client-create-without-user.input';

@InputType()
export class ClientUpsertWithoutUserInput {

    @Field(() => ClientUpdateWithoutUserInput, {nullable:false})
    @Type(() => ClientUpdateWithoutUserInput)
    update!: ClientUpdateWithoutUserInput;

    @Field(() => ClientCreateWithoutUserInput, {nullable:false})
    @Type(() => ClientCreateWithoutUserInput)
    create!: ClientCreateWithoutUserInput;
}
