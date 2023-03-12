import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ErrandWhereInput } from './errand-where.input';
import { Type } from 'class-transformer';
import { ErrandOrderByWithAggregationInput } from './errand-order-by-with-aggregation.input';
import { ErrandScalarFieldEnum } from './errand-scalar-field.enum';
import { ErrandScalarWhereWithAggregatesInput } from './errand-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ErrandCountAggregateInput } from './errand-count-aggregate.input';
import { ErrandMinAggregateInput } from './errand-min-aggregate.input';
import { ErrandMaxAggregateInput } from './errand-max-aggregate.input';

@ArgsType()
export class ErrandGroupByArgs {

    @Field(() => ErrandWhereInput, {nullable:true})
    @Type(() => ErrandWhereInput)
    where?: ErrandWhereInput;

    @Field(() => [ErrandOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ErrandOrderByWithAggregationInput>;

    @Field(() => [ErrandScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ErrandScalarFieldEnum>;

    @Field(() => ErrandScalarWhereWithAggregatesInput, {nullable:true})
    having?: ErrandScalarWhereWithAggregatesInput;

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
