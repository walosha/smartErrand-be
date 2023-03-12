import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ClientCountOrderByAggregateInput } from './client-count-order-by-aggregate.input';
import { ClientMaxOrderByAggregateInput } from './client-max-order-by-aggregate.input';
import { ClientMinOrderByAggregateInput } from './client-min-order-by-aggregate.input';

@InputType()
export class ClientOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locationId?: keyof typeof SortOrder;

    @Field(() => ClientCountOrderByAggregateInput, {nullable:true})
    _count?: ClientCountOrderByAggregateInput;

    @Field(() => ClientMaxOrderByAggregateInput, {nullable:true})
    _max?: ClientMaxOrderByAggregateInput;

    @Field(() => ClientMinOrderByAggregateInput, {nullable:true})
    _min?: ClientMinOrderByAggregateInput;
}
