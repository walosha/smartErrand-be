import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceReviewCreateInput } from './service-review-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneServiceReviewArgs {

    @Field(() => ServiceReviewCreateInput, {nullable:false})
    @Type(() => ServiceReviewCreateInput)
    data!: ServiceReviewCreateInput;
}
