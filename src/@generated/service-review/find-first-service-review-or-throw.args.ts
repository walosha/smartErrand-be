import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceReviewWhereInput } from './service-review-where.input';
import { Type } from 'class-transformer';
import { ServiceReviewOrderByWithRelationInput } from './service-review-order-by-with-relation.input';
import { ServiceReviewWhereUniqueInput } from './service-review-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ServiceReviewScalarFieldEnum } from './service-review-scalar-field.enum';

@ArgsType()
export class FindFirstServiceReviewOrThrowArgs {

    @Field(() => ServiceReviewWhereInput, {nullable:true})
    @Type(() => ServiceReviewWhereInput)
    where?: ServiceReviewWhereInput;

    @Field(() => [ServiceReviewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ServiceReviewOrderByWithRelationInput>;

    @Field(() => ServiceReviewWhereUniqueInput, {nullable:true})
    cursor?: ServiceReviewWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ServiceReviewScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ServiceReviewScalarFieldEnum>;
}
