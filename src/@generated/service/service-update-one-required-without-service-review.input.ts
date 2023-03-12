import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutServiceReviewInput } from './service-create-without-service-review.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutServiceReviewInput } from './service-create-or-connect-without-service-review.input';
import { ServiceUpsertWithoutServiceReviewInput } from './service-upsert-without-service-review.input';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateWithoutServiceReviewInput } from './service-update-without-service-review.input';

@InputType()
export class ServiceUpdateOneRequiredWithoutServiceReviewInput {

    @Field(() => ServiceCreateWithoutServiceReviewInput, {nullable:true})
    @Type(() => ServiceCreateWithoutServiceReviewInput)
    create?: ServiceCreateWithoutServiceReviewInput;

    @Field(() => ServiceCreateOrConnectWithoutServiceReviewInput, {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutServiceReviewInput)
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceReviewInput;

    @Field(() => ServiceUpsertWithoutServiceReviewInput, {nullable:true})
    @Type(() => ServiceUpsertWithoutServiceReviewInput)
    upsert?: ServiceUpsertWithoutServiceReviewInput;

    @Field(() => ServiceWhereUniqueInput, {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: ServiceWhereUniqueInput;

    @Field(() => ServiceUpdateWithoutServiceReviewInput, {nullable:true})
    @Type(() => ServiceUpdateWithoutServiceReviewInput)
    update?: ServiceUpdateWithoutServiceReviewInput;
}
