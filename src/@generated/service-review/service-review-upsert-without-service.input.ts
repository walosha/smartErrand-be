import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceReviewUpdateWithoutServiceInput } from './service-review-update-without-service.input';
import { Type } from 'class-transformer';
import { ServiceReviewCreateWithoutServiceInput } from './service-review-create-without-service.input';

@InputType()
export class ServiceReviewUpsertWithoutServiceInput {

    @Field(() => ServiceReviewUpdateWithoutServiceInput, {nullable:false})
    @Type(() => ServiceReviewUpdateWithoutServiceInput)
    update!: ServiceReviewUpdateWithoutServiceInput;

    @Field(() => ServiceReviewCreateWithoutServiceInput, {nullable:false})
    @Type(() => ServiceReviewCreateWithoutServiceInput)
    create!: ServiceReviewCreateWithoutServiceInput;
}
