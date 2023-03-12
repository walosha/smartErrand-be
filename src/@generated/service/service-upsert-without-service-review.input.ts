import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceUpdateWithoutServiceReviewInput } from './service-update-without-service-review.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutServiceReviewInput } from './service-create-without-service-review.input';

@InputType()
export class ServiceUpsertWithoutServiceReviewInput {

    @Field(() => ServiceUpdateWithoutServiceReviewInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutServiceReviewInput)
    update!: ServiceUpdateWithoutServiceReviewInput;

    @Field(() => ServiceCreateWithoutServiceReviewInput, {nullable:false})
    @Type(() => ServiceCreateWithoutServiceReviewInput)
    create!: ServiceCreateWithoutServiceReviewInput;
}
