import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceReviewWhereInput } from './service-review-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyServiceReviewArgs {

    @Field(() => ServiceReviewWhereInput, {nullable:true})
    @Type(() => ServiceReviewWhereInput)
    where?: ServiceReviewWhereInput;
}
