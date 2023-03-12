import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ErrandOrderByWithRelationInput } from '../errand/errand-order-by-with-relation.input';
import { ClientOrderByWithRelationInput } from '../client/client-order-by-with-relation.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    referralCode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    firstname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastname?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAdmin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    emailConfirmed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phoneConfirmed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => ErrandOrderByWithRelationInput, {nullable:true})
    errand?: ErrandOrderByWithRelationInput;

    @Field(() => ClientOrderByWithRelationInput, {nullable:true})
    client?: ClientOrderByWithRelationInput;
}
