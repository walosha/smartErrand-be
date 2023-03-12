import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ServiceReviewUncheckedCreateNestedOneWithoutServiceInput } from '../service-review/service-review-unchecked-create-nested-one-without-service.input';

@InputType()
export class ServiceUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    errandId!: string;

    @Field(() => String, {nullable:false})
    clientId!: string;

    @Field(() => Float, {nullable:false})
    startLocation!: number;

    @Field(() => Float, {nullable:false})
    endLocation!: number;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:false})
    endTime!: Date | string;

    @Field(() => ServiceReviewUncheckedCreateNestedOneWithoutServiceInput, {nullable:true})
    serviceReview?: ServiceReviewUncheckedCreateNestedOneWithoutServiceInput;
}
