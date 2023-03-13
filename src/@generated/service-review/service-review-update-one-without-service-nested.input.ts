import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceReviewCreateWithoutServiceInput } from './service-review-create-without-service.input';
import { Type } from 'class-transformer';
import { ServiceReviewCreateOrConnectWithoutServiceInput } from './service-review-create-or-connect-without-service.input';
import { ServiceReviewUpsertWithoutServiceInput } from './service-review-upsert-without-service.input';
import { ServiceReviewWhereUniqueInput } from './service-review-where-unique.input';
import { ServiceReviewUpdateWithoutServiceInput } from './service-review-update-without-service.input';

@InputType()
export class ServiceReviewUpdateOneWithoutServiceNestedInput {

    @Field(() => ServiceReviewCreateWithoutServiceInput, {nullable:true})
    @Type(() => ServiceReviewCreateWithoutServiceInput)
    create?: ServiceReviewCreateWithoutServiceInput;

    @Field(() => ServiceReviewCreateOrConnectWithoutServiceInput, {nullable:true})
    @Type(() => ServiceReviewCreateOrConnectWithoutServiceInput)
    connectOrCreate?: ServiceReviewCreateOrConnectWithoutServiceInput;

    @Field(() => ServiceReviewUpsertWithoutServiceInput, {nullable:true})
    @Type(() => ServiceReviewUpsertWithoutServiceInput)
    upsert?: ServiceReviewUpsertWithoutServiceInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ServiceReviewWhereUniqueInput, {nullable:true})
    @Type(() => ServiceReviewWhereUniqueInput)
    connect?: ServiceReviewWhereUniqueInput;

    @Field(() => ServiceReviewUpdateWithoutServiceInput, {nullable:true})
    @Type(() => ServiceReviewUpdateWithoutServiceInput)
    update?: ServiceReviewUpdateWithoutServiceInput;
}
