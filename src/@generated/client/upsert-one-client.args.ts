import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Type } from 'class-transformer';
import { ClientCreateInput } from './client-create.input';
import { ClientUpdateInput } from './client-update.input';

@ArgsType()
export class UpsertOneClientArgs {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    @Type(() => ClientWhereUniqueInput)
    where!: ClientWhereUniqueInput;

    @Field(() => ClientCreateInput, {nullable:false})
    @Type(() => ClientCreateInput)
    create!: ClientCreateInput;

    @Field(() => ClientUpdateInput, {nullable:false})
    @Type(() => ClientUpdateInput)
    update!: ClientUpdateInput;
}
