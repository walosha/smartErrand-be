import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class LocationCreateNestedOneWithoutClientInput {

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: LocationWhereUniqueInput;
}
