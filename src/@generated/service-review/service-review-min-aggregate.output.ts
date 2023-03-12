import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RATING } from '../prisma/rating.enum';

@ObjectType()
export class ServiceReviewMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    User?: string;

    @Field(() => String, {nullable:true})
    serviceId?: string;

    @Field(() => String, {nullable:true})
    comments?: string;

    @Field(() => RATING, {nullable:true})
    Rating?: keyof typeof RATING;

    @Field(() => String, {nullable:true})
    Photos?: string;
}
