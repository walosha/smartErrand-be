import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandCreateNestedOneWithoutCategoriesInput } from '../errand/errand-create-nested-one-without-categories.input';
import { Float } from '@nestjs/graphql';
import { ServiceReviewCreateNestedOneWithoutServiceInput } from '../service-review/service-review-create-nested-one-without-service.input';

@InputType()
export class ServiceCreateWithoutClientInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => ErrandCreateNestedOneWithoutCategoriesInput, {nullable:false})
    errand!: ErrandCreateNestedOneWithoutCategoriesInput;

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
