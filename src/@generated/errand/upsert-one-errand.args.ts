import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';
import { Type } from 'class-transformer';
import { ErrandCreateInput } from './errand-create.input';
import { ErrandUpdateInput } from './errand-update.input';

@ArgsType()
export class UpsertOneErrandArgs {

    @Field(() => ErrandWhereUniqueInput, {nullable:false})
    @Type(() => ErrandWhereUniqueInput)
    where!: ErrandWhereUniqueInput;

    @Field(() => ErrandCreateInput, {nullable:false})
    @Type(() => ErrandCreateInput)
    create!: ErrandCreateInput;

    @Field(() => ErrandUpdateInput, {nullable:false})
    @Type(() => ErrandUpdateInput)
    update!: ErrandUpdateInput;
}
