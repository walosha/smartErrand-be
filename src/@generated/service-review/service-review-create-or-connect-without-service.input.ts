import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceReviewWhereUniqueInput } from './service-review-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceReviewCreateWithoutServiceInput } from './service-review-create-without-service.input';

@InputType()
export class ServiceReviewCreateOrConnectWithoutServiceInput {

    @Field(() => ServiceReviewWhereUniqueInput, {nullable:false})
    @Type(() => ServiceReviewWhereUniqueInput)
    where!: ServiceReviewWhereUniqueInput;

    @Field(() => ServiceReviewCreateWithoutServiceInput, {nullable:false})
    @Type(() => ServiceReviewCreateWithoutServiceInput)
    create!: ServiceReviewCreateWithoutServiceInput;
}
