import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceReviewCreateWithoutServiceInput } from './service-review-create-without-service.input';
import { Type } from 'class-transformer';
import { ServiceReviewCreateOrConnectWithoutServiceInput } from './service-review-create-or-connect-without-service.input';
import { ServiceReviewWhereUniqueInput } from './service-review-where-unique.input';

@InputType()
export class ServiceReviewUncheckedCreateNestedOneWithoutServiceInput {

    @Field(() => ServiceReviewCreateWithoutServiceInput, {nullable:true})
    @Type(() => ServiceReviewCreateWithoutServiceInput)
    create?: ServiceReviewCreateWithoutServiceInput;

    @Field(() => ServiceReviewCreateOrConnectWithoutServiceInput, {nullable:true})
    @Type(() => ServiceReviewCreateOrConnectWithoutServiceInput)
    connectOrCreate?: ServiceReviewCreateOrConnectWithoutServiceInput;

    @Field(() => ServiceReviewWhereUniqueInput, {nullable:true})
    @Type(() => ServiceReviewWhereUniqueInput)
    connect?: ServiceReviewWhereUniqueInput;
}
