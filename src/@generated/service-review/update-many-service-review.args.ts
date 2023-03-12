import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceReviewUpdateManyMutationInput } from './service-review-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ServiceReviewWhereInput } from './service-review-where.input';

@ArgsType()
export class UpdateManyServiceReviewArgs {

    @Field(() => ServiceReviewUpdateManyMutationInput, {nullable:false})
    @Type(() => ServiceReviewUpdateManyMutationInput)
    data!: ServiceReviewUpdateManyMutationInput;

    @Field(() => ServiceReviewWhereInput, {nullable:true})
    @Type(() => ServiceReviewWhereInput)
    where?: ServiceReviewWhereInput;
}
