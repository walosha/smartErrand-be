import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Type } from 'class-transformer';
import { LocationCreateInput } from './location-create.input';
import { LocationUpdateInput } from './location-update.input';

@ArgsType()
export class UpsertOneLocationArgs {

    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    where!: LocationWhereUniqueInput;

    @Field(() => LocationCreateInput, {nullable:false})
    @Type(() => LocationCreateInput)
    create!: LocationCreateInput;

    @Field(() => LocationUpdateInput, {nullable:false})
    @Type(() => LocationUpdateInput)
    update!: LocationUpdateInput;
}
