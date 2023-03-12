import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneErrandArgs {

    @Field(() => ErrandWhereUniqueInput, {nullable:false})
    @Type(() => ErrandWhereUniqueInput)
    where!: ErrandWhereUniqueInput;
}
