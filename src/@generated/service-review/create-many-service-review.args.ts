import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceReviewCreateManyInput } from './service-review-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyServiceReviewArgs {

    @Field(() => [ServiceReviewCreateManyInput], {nullable:false})
    @Type(() => ServiceReviewCreateManyInput)
    data!: Array<ServiceReviewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
