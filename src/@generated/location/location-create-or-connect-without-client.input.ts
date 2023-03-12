import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Type } from 'class-transformer';
import { LocationCreateWithoutClientInput } from './location-create-without-client.input';

@InputType()
export class LocationCreateOrConnectWithoutClientInput {

    @Field(() => LocationWhereUniqueInput, {nullable:false})
    @Type(() => LocationWhereUniqueInput)
    where!: LocationWhereUniqueInput;

    @Field(() => LocationCreateWithoutClientInput, {nullable:false})
    @Type(() => LocationCreateWithoutClientInput)
    create!: LocationCreateWithoutClientInput;
}
