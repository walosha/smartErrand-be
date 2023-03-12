import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RATING } from '../prisma/rating.enum';

@InputType()
export class ServiceReviewUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    User!: string;

    @Field(() => String, {nullable:false})
    serviceId!: string;

    @Field(() => String, {nullable:false})
    comments!: string;

    @Field(() => RATING, {nullable:true})
    Rating?: keyof typeof RATING;

    @Field(() => String, {nullable:false})
    Photos!: string;
}
