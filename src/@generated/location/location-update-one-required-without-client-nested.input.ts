import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Type } from 'class-transformer';
import { LocationUpdateWithoutClientInput } from './location-update-without-client.input';

@InputType()
export class LocationUpdateOneRequiredWithoutClientNestedInput {

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: LocationWhereUniqueInput;

    @Field(() => LocationUpdateWithoutClientInput, {nullable:true})
    @Type(() => LocationUpdateWithoutClientInput)
    update?: LocationUpdateWithoutClientInput;
}
