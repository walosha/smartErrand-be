import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceReviewWhereInput } from './service-review-where.input';
import { Type } from 'class-transformer';
import { ServiceReviewOrderByWithRelationInput } from './service-review-order-by-with-relation.input';
import { ServiceReviewWhereUniqueInput } from './service-review-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServiceReviewCountAggregateInput } from './service-review-count-aggregate.input';
import { ServiceReviewMinAggregateInput } from './service-review-min-aggregate.input';
import { ServiceReviewMaxAggregateInput } from './service-review-max-aggregate.input';

@ArgsType()
export class ServiceReviewAggregateArgs {

    @Field(() => ServiceReviewWhereInput, {nullable:true})
    @Type(() => ServiceReviewWhereInput)
    where?: ServiceReviewWhereInput;

    @Field(() => [ServiceReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ServiceReviewOrderByWithRelationInput>;

    @Field(() => ServiceReviewWhereUniqueInput, {nullable:true})
    cursor?: ServiceReviewWhereUniqueInput;

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
