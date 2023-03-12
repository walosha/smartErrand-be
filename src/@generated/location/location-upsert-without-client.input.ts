import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationUpdateWithoutClientInput } from './location-update-without-client.input';
import { Type } from 'class-transformer';
import { LocationCreateWithoutClientInput } from './location-create-without-client.input';

@InputType()
export class LocationUpsertWithoutClientInput {

    @Field(() => LocationUpdateWithoutClientInput, {nullable:false})
    @Type(() => LocationUpdateWithoutClientInput)
    update!: LocationUpdateWithoutClientInput;

    @Field(() => LocationCreateWithoutClientInput, {nullable:false})
    @Type(() => LocationCreateWithoutClientInput)
    create!: LocationCreateWithoutClientInput;
}
