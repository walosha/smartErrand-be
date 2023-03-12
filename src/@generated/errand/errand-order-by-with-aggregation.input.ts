import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ErrandCountOrderByAggregateInput } from './errand-count-order-by-aggregate.input';
import { ErrandMaxOrderByAggregateInput } from './errand-max-order-by-aggregate.input';
import { ErrandMinOrderByAggregateInput } from './errand-min-order-by-aggregate.input';

@InputType()
export class ErrandOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAvailable?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locationId?: keyof typeof SortOrder;

    @Field(() => ErrandCountOrderByAggregateInput, {nullable:true})
    _count?: ErrandCountOrderByAggregateInput;

    @Field(() => ErrandMaxOrderByAggregateInput, {nullable:true})
    _max?: ErrandMaxOrderByAggregateInput;

    @Field(() => ErrandMinOrderByAggregateInput, {nullable:true})
    _min?: ErrandMinOrderByAggregateInput;
}
