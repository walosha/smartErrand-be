import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationCreateWithoutClientInput } from './location-create-without-client.input';
import { Type } from 'class-transformer';
import { LocationCreateOrConnectWithoutClientInput } from './location-create-or-connect-without-client.input';
import { LocationUpsertWithoutClientInput } from './location-upsert-without-client.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationUpdateWithoutClientInput } from './location-update-without-client.input';

@InputType()
export class LocationUpdateOneRequiredWithoutClientInput {

    @Field(() => LocationCreateWithoutClientInput, {nullable:true})
    @Type(() => LocationCreateWithoutClientInput)
    create?: LocationCreateWithoutClientInput;

    @Field(() => LocationCreateOrConnectWithoutClientInput, {nullable:true})
    @Type(() => LocationCreateOrConnectWithoutClientInput)
    connectOrCreate?: LocationCreateOrConnectWithoutClientInput;

    @Field(() => LocationUpsertWithoutClientInput, {nullable:true})
    @Type(() => LocationUpsertWithoutClientInput)
    upsert?: LocationUpsertWithoutClientInput;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: LocationWhereUniqueInput;

    @Field(() => LocationUpdateWithoutClientInput, {nullable:true})
    @Type(() => LocationUpdateWithoutClientInput)
    update?: LocationUpdateWithoutClientInput;
}
