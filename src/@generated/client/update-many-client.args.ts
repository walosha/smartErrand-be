import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientUpdateManyMutationInput } from './client-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ClientWhereInput } from './client-where.input';

@ArgsType()
export class UpdateManyClientArgs {

    @Field(() => ClientUpdateManyMutationInput, {nullable:false})
    @Type(() => ClientUpdateManyMutationInput)
    data!: ClientUpdateManyMutationInput;

    @Field(() => ClientWhereInput, {nullable:true})
    @Type(() => ClientWhereInput)
    where?: ClientWhereInput;
}
