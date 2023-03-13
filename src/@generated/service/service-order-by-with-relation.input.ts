import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ErrandOrderByWithRelationInput } from '../errand/errand-order-by-with-relation.input';
import { ClientOrderByWithRelationInput } from '../client/client-order-by-with-relation.input';
import { ServiceReviewOrderByWithRelationInput } from '../service-review/service-review-order-by-with-relation.input';

@InputType()
export class ServiceOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    errandId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startLocation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endLocation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endTime?: keyof typeof SortOrder;

    @Field(() => ErrandOrderByWithRelationInput, {nullable:true})
    errand?: ErrandOrderByWithRelationInput;

    @Field(() => ClientOrderByWithRelationInput, {nullable:true})
    client?: ClientOrderByWithRelationInput;

    @Field(() => ServiceReviewOrderByWithRelationInput, {nullable:true})
    serviceReview?: ServiceReviewOrderByWithRelationInput;
}
