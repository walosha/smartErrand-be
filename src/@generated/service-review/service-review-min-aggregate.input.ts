import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServiceReviewMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    User?: true;

    @Field(() => Boolean, {nullable:true})
    serviceId?: true;

    @Field(() => Boolean, {nullable:true})
    comments?: true;

    @Field(() => Boolean, {nullable:true})
    Rating?: true;

    @Field(() => Boolean, {nullable:true})
    Photos?: true;
}
