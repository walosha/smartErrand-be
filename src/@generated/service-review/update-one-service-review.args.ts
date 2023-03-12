import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceReviewUpdateInput } from './service-review-update.input';
import { Type } from 'class-transformer';
import { ServiceReviewWhereUniqueInput } from './service-review-where-unique.input';

@ArgsType()
export class UpdateOneServiceReviewArgs {

    @Field(() => ServiceReviewUpdateInput, {nullable:false})
    @Type(() => ServiceReviewUpdateInput)
    data!: ServiceReviewUpdateInput;

    @Field(() => ServiceReviewWhereUniqueInput, {nullable:false})
    @Type(() => ServiceReviewWhereUniqueInput)
    where!: ServiceReviewWhereUniqueInput;
}
