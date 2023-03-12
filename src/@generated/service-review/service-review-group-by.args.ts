import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceReviewWhereInput } from './service-review-where.input';
import { Type } from 'class-transformer';
import { ServiceReviewOrderByWithAggregationInput } from './service-review-order-by-with-aggregation.input';
import { ServiceReviewScalarFieldEnum } from './service-review-scalar-field.enum';
import { ServiceReviewScalarWhereWithAggregatesInput } from './service-review-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ServiceReviewCountAggregateInput } from './service-review-count-aggregate.input';
import { ServiceReviewMinAggregateInput } from './service-review-min-aggregate.input';
import { ServiceReviewMaxAggregateInput } from './service-review-max-aggregate.input';

@ArgsType()
export class ServiceReviewGroupByArgs {

    @Field(() => ServiceReviewWhereInput, {nullable:true})
    @Type(() => ServiceReviewWhereInput)
    where?: ServiceReviewWhereInput;

    @Field(() => [ServiceReviewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ServiceReviewOrderByWithAggregationInput>;

    @Field(() => [ServiceReviewScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ServiceReviewScalarFieldEnum>;

    @Field(() => ServiceReviewScalarWhereWithAggregatesInput, {nullable:true})
    having?: ServiceReviewScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ServiceReviewCountAggregateInput, {nullable:true})
    _count?: ServiceReviewCountAggregateInput;

    @Field(() => ServiceReviewMinAggregateInput, {nullable:true})
    _min?: ServiceReviewMinAggregateInput;

    @Field(() => ServiceReviewMaxAggregateInput, {nullable:true})
    _max?: ServiceReviewMaxAggregateInput;
}
