import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutServiceReviewInput } from './service-create-without-service-review.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutServiceReviewInput } from './service-create-or-connect-without-service-review.input';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceCreateNestedOneWithoutServiceReviewInput {

    @Field(() => ServiceCreateWithoutServiceReviewInput, {nullable:true})
    @Type(() => ServiceCreateWithoutServiceReviewInput)
    create?: ServiceCreateWithoutServiceReviewInput;

    @Field(() => ServiceCreateOrConnectWithoutServiceReviewInput, {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutServiceReviewInput)
    connectOrCreate?: ServiceCreateOrConnectWithoutServiceReviewInput;

    @Field(() => ServiceWhereUniqueInput, {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: ServiceWhereUniqueInput;
}
