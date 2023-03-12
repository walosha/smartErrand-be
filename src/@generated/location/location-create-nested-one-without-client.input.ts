import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationCreateWithoutClientInput } from './location-create-without-client.input';
import { Type } from 'class-transformer';
import { LocationCreateOrConnectWithoutClientInput } from './location-create-or-connect-without-client.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';

@InputType()
export class LocationCreateNestedOneWithoutClientInput {

    @Field(() => LocationCreateWithoutClientInput, {nullable:true})
    @Type(() => LocationCreateWithoutClientInput)
    create?: LocationCreateWithoutClientInput;

    @Field(() => LocationCreateOrConnectWithoutClientInput, {nullable:true})
    @Type(() => LocationCreateOrConnectWithoutClientInput)
    connectOrCreate?: LocationCreateOrConnectWithoutClientInput;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: LocationWhereUniqueInput;
}
