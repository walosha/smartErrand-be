import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ServiceOrderByWithRelationInput } from '../service/service-order-by-with-relation.input';

@InputType()
export class ServiceReviewOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    User?: keyof typeof SortOrder;

    @Field(() => ServiceOrderByWithRelationInput, {nullable:true})
    service?: ServiceOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    serviceId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    comments?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    Rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    Photos?: keyof typeof SortOrder;
}
