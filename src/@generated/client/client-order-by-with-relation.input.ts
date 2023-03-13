import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { LocationOrderByWithRelationInput } from '../location/location-order-by-with-relation.input';
import { ServiceOrderByRelationAggregateInput } from '../service/service-order-by-relation-aggregate.input';

@InputType()
export class ClientOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    locationId?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    user?: UserOrderByWithRelationInput;

    @Field(() => LocationOrderByWithRelationInput, {nullable:true})
    location?: LocationOrderByWithRelationInput;

    @Field(() => ServiceOrderByRelationAggregateInput, {nullable:true})
    categories?: ServiceOrderByRelationAggregateInput;
}
