import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ErrandOrderByWithRelationInput } from '../errand/errand-order-by-with-relation.input';
import { ClientOrderByWithRelationInput } from '../client/client-order-by-with-relation.input';

@InputType()
export class LocationOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => ErrandOrderByWithRelationInput, {nullable:true})
    errand?: ErrandOrderByWithRelationInput;

    @Field(() => ClientOrderByWithRelationInput, {nullable:true})
    client?: ClientOrderByWithRelationInput;
}
