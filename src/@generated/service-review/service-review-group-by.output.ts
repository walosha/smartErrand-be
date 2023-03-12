import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RATING } from '../prisma/rating.enum';
import { ServiceReviewCountAggregate } from './service-review-count-aggregate.output';
import { ServiceReviewMinAggregate } from './service-review-min-aggregate.output';
import { ServiceReviewMaxAggregate } from './service-review-max-aggregate.output';

@ObjectType()
export class ServiceReviewGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    User!: string;

    @Field(() => String, {nullable:false})
    serviceId!: string;

    @Field(() => String, {nullable:false})
    comments!: string;

    @Field(() => RATING, {nullable:false})
    Rating!: keyof typeof RATING;

    @Field(() => String, {nullable:false})
    Photos!: string;

    @Field(() => ServiceReviewCountAggregate, {nullable:true})
    _count?: ServiceReviewCountAggregate;

    @Field(() => ServiceReviewMinAggregate, {nullable:true})
    _min?: ServiceReviewMinAggregate;

    @Field(() => ServiceReviewMaxAggregate, {nullable:true})
    _max?: ServiceReviewMaxAggregate;
}
