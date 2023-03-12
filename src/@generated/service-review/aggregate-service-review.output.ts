import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ServiceReviewCountAggregate } from './service-review-count-aggregate.output';
import { ServiceReviewMinAggregate } from './service-review-min-aggregate.output';
import { ServiceReviewMaxAggregate } from './service-review-max-aggregate.output';

@ObjectType()
export class AggregateServiceReview {

    @Field(() => ServiceReviewCountAggregate, {nullable:true})
    _count?: ServiceReviewCountAggregate;

    @Field(() => ServiceReviewMinAggregate, {nullable:true})
    _min?: ServiceReviewMinAggregate;

    @Field(() => ServiceReviewMaxAggregate, {nullable:true})
    _max?: ServiceReviewMaxAggregate;
}
