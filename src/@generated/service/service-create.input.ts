import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ErrandCreateNestedOneWithoutCategoriesInput } from '../errand/errand-create-nested-one-without-categories.input';
import { ClientCreateNestedOneWithoutCategoriesInput } from '../client/client-create-nested-one-without-categories.input';
import { ServiceReviewCreateNestedOneWithoutServiceInput } from '../service-review/service-review-create-nested-one-without-service.input';

@InputType()
export class ServiceCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Float, {nullable:false})
    startLocation!: number;

    @Field(() => Float, {nullable:false})
    endLocation!: number;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:false})
    endTime!: Date | string;

    @Field(() => ErrandCreateNestedOneWithoutCategoriesInput, {nullable:false})
    errand!: ErrandCreateNestedOneWithoutCategoriesInput;

    @Field(() => ClientCreateNestedOneWithoutCategoriesInput, {nullable:false})
    client!: ClientCreateNestedOneWithoutCategoriesInput;

    @Field(() => ServiceReviewCreateNestedOneWithoutServiceInput, {nullable:true})
    serviceReview?: ServiceReviewCreateNestedOneWithoutServiceInput;
}
