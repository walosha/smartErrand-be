import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateNestedOneWithoutCategoriesInput } from '../client/client-create-nested-one-without-categories.input';
import { Float } from '@nestjs/graphql';
import { ServiceReviewCreateNestedOneWithoutServiceInput } from '../service-review/service-review-create-nested-one-without-service.input';

@InputType()
export class ServiceCreateWithoutErrandInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ClientCreateNestedOneWithoutCategoriesInput, {nullable:false})
    client!: ClientCreateNestedOneWithoutCategoriesInput;

    @Field(() => Float, {nullable:false})
    startLocation!: number;

    @Field(() => Float, {nullable:false})
    endLocation!: number;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:false})
    endTime!: Date | string;

    @Field(() => ServiceReviewCreateNestedOneWithoutServiceInput, {nullable:true})
    serviceReview?: ServiceReviewCreateNestedOneWithoutServiceInput;
}
