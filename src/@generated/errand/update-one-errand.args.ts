import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ErrandUpdateInput } from './errand-update.input';
import { Type } from 'class-transformer';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';

@ArgsType()
export class UpdateOneErrandArgs {

    @Field(() => ErrandUpdateInput, {nullable:false})
    @Type(() => ErrandUpdateInput)
    data!: ErrandUpdateInput;

    @Field(() => ErrandWhereUniqueInput, {nullable:false})
    @Type(() => ErrandWhereUniqueInput)
    where!: ErrandWhereUniqueInput;
}
