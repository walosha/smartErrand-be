import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutServiceReviewInput } from './service-create-without-service-review.input';

@InputType()
export class ServiceCreateOrConnectWithoutServiceReviewInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: ServiceWhereUniqueInput;

    @Field(() => ServiceCreateWithoutServiceReviewInput, {nullable:false})
    @Type(() => ServiceCreateWithoutServiceReviewInput)
    create!: ServiceCreateWithoutServiceReviewInput;
}
