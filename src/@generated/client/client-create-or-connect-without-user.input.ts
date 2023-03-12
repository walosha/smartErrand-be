import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Type } from 'class-transformer';
import { ClientCreateWithoutUserInput } from './client-create-without-user.input';

@InputType()
export class ClientCreateOrConnectWithoutUserInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    @Type(() => ClientWhereUniqueInput)
    where!: ClientWhereUniqueInput;

    @Field(() => ClientCreateWithoutUserInput, {nullable:false})
    @Type(() => ClientCreateWithoutUserInput)
    create!: ClientCreateWithoutUserInput;
}
