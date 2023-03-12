import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ErrandUpdateManyMutationInput } from './errand-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ErrandWhereInput } from './errand-where.input';

@ArgsType()
export class UpdateManyErrandArgs {

    @Field(() => ErrandUpdateManyMutationInput, {nullable:false})
    @Type(() => ErrandUpdateManyMutationInput)
    data!: ErrandUpdateManyMutationInput;

    @Field(() => ErrandWhereInput, {nullable:true})
    @Type(() => ErrandWhereInput)
    where?: ErrandWhereInput;
}
