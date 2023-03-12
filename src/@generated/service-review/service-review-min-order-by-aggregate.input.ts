import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ServiceReviewMinOrderByAggregateInput {

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
}
