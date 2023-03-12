import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ErrandWhereInput } from './errand-where.input';
import { Type } from 'class-transformer';
import { ErrandOrderByWithRelationInput } from './errand-order-by-with-relation.input';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ErrandCountAggregateInput } from './errand-count-aggregate.input';
import { ErrandMinAggregateInput } from './errand-min-aggregate.input';
import { ErrandMaxAggregateInput } from './errand-max-aggregate.input';

@ArgsType()
export class ErrandAggregateArgs {

    @Field(() => ErrandWhereInput, {nullable:true})
    @Type(() => ErrandWhereInput)
    where?: ErrandWhereInput;

    @Field(() => [ErrandOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ErrandOrderByWithRelationInput>;

    @Field(() => ErrandWhereUniqueInput, {nullable:true})
    cursor?: ErrandWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ErrandCountAggregateInput, {nullable:true})
    _count?: ErrandCountAggregateInput;

    @Field(() => ErrandMinAggregateInput, {nullable:true})
    _min?: ErrandMinAggregateInput;

    @Field(() => ErrandMaxAggregateInput, {nullable:true})
    _max?: ErrandMaxAggregateInput;
}
