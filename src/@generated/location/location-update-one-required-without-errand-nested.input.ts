import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Type } from 'class-transformer';
import { LocationUpdateWithoutErrandInput } from './location-update-without-errand.input';

@InputType()
export class LocationUpdateOneRequiredWithoutErrandNestedInput {

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: LocationWhereUniqueInput;

    @Field(() => LocationUpdateWithoutErrandInput, {nullable:true})
    @Type(() => LocationUpdateWithoutErrandInput)
    update?: LocationUpdateWithoutErrandInput;
}
