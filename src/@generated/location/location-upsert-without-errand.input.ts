import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationUpdateWithoutErrandInput } from './location-update-without-errand.input';
import { Type } from 'class-transformer';
import { LocationCreateWithoutErrandInput } from './location-create-without-errand.input';

@InputType()
export class LocationUpsertWithoutErrandInput {

    @Field(() => LocationUpdateWithoutErrandInput, {nullable:false})
    @Type(() => LocationUpdateWithoutErrandInput)
    update!: LocationUpdateWithoutErrandInput;

    @Field(() => LocationCreateWithoutErrandInput, {nullable:false})
    @Type(() => LocationCreateWithoutErrandInput)
    create!: LocationCreateWithoutErrandInput;
}
