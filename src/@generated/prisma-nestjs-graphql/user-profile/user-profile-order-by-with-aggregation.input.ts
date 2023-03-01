import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserProfileCountOrderByAggregateInput } from './user-profile-count-order-by-aggregate.input';
import { UserProfileMaxOrderByAggregateInput } from './user-profile-max-order-by-aggregate.input';
import { UserProfileMinOrderByAggregateInput } from './user-profile-min-order-by-aggregate.input';

@InputType()
export class UserProfileOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => UserProfileCountOrderByAggregateInput, {nullable:true})
    _count?: UserProfileCountOrderByAggregateInput;

    @Field(() => UserProfileMaxOrderByAggregateInput, {nullable:true})
    _max?: UserProfileMaxOrderByAggregateInput;

    @Field(() => UserProfileMinOrderByAggregateInput, {nullable:true})
    _min?: UserProfileMinOrderByAggregateInput;
}
