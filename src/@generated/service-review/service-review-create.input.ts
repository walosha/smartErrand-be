import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RATING } from '../prisma/rating.enum';
import { ServiceCreateNestedOneWithoutServiceReviewInput } from '../service/service-create-nested-one-without-service-review.input';

@InputType()
export class ServiceReviewCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    User!: string;

    @Field(() => String, {nullable:false})
    comments!: string;

    @Field(() => RATING, {nullable:true})
    Rating?: keyof typeof RATING;

    @Field(() => String, {nullable:false})
    Photos!: string;

    @Field(() => ServiceCreateNestedOneWithoutServiceReviewInput, {nullable:false})
    service!: ServiceCreateNestedOneWithoutServiceReviewInput;
}
