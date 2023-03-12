import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ErrandWhereInput } from './errand-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyErrandArgs {

    @Field(() => ErrandWhereInput, {nullable:true})
    @Type(() => ErrandWhereInput)
    where?: ErrandWhereInput;
}
