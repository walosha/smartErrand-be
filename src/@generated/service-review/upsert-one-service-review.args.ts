import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceReviewWhereUniqueInput } from './service-review-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceReviewCreateInput } from './service-review-create.input';
import { ServiceReviewUpdateInput } from './service-review-update.input';

@ArgsType()
export class UpsertOneServiceReviewArgs {

    @Field(() => ServiceReviewWhereUniqueInput, {nullable:false})
    @Type(() => ServiceReviewWhereUniqueInput)
    where!: ServiceReviewWhereUniqueInput;

    @Field(() => ServiceReviewCreateInput, {nullable:false})
    @Type(() => ServiceReviewCreateInput)
    create!: ServiceReviewCreateInput;

    @Field(() => ServiceReviewUpdateInput, {nullable:false})
    @Type(() => ServiceReviewUpdateInput)
    update!: ServiceReviewUpdateInput;
}
