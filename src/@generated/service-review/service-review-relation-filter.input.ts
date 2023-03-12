import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceReviewWhereInput } from './service-review-where.input';

@InputType()
export class ServiceReviewRelationFilter {

    @Field(() => ServiceReviewWhereInput, {nullable:true})
    is?: ServiceReviewWhereInput;

    @Field(() => ServiceReviewWhereInput, {nullable:true})
    isNot?: ServiceReviewWhereInput;
}
