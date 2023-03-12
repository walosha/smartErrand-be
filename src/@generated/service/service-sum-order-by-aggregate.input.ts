import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ServiceSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    startLocation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endLocation?: keyof typeof SortOrder;
}
