import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneLocationArgs {

    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    where!: LocationWhereUniqueInput;
}
