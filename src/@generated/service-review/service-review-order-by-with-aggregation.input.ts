import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ServiceReviewCountOrderByAggregateInput } from './service-review-count-order-by-aggregate.input';
import { ServiceReviewMaxOrderByAggregateInput } from './service-review-max-order-by-aggregate.input';
import { ServiceReviewMinOrderByAggregateInput } from './service-review-min-order-by-aggregate.input';

@InputType()
export class ServiceReviewOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    User?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    serviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comments?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    Rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    Photos?: keyof typeof SortOrder;

    @Field(() => ServiceReviewCountOrderByAggregateInput, {nullable:true})
    _count?: ServiceReviewCountOrderByAggregateInput;

    @Field(() => ServiceReviewMaxOrderByAggregateInput, {nullable:true})
    _max?: ServiceReviewMaxOrderByAggregateInput;

    @Field(() => ServiceReviewMinOrderByAggregateInput, {nullable:true})
    _min?: ServiceReviewMinOrderByAggregateInput;
}
