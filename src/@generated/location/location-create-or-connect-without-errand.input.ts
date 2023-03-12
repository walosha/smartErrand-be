import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Type } from 'class-transformer';
import { LocationCreateWithoutErrandInput } from './location-create-without-errand.input';

@InputType()
export class LocationCreateOrConnectWithoutErrandInput {

    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    where!: LocationWhereUniqueInput;

    @Field(() => LocationCreateWithoutErrandInput, {nullable:false})
    @Type(() => LocationCreateWithoutErrandInput)
    create!: LocationCreateWithoutErrandInput;
}
