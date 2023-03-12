import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationCreateWithoutErrandInput } from './location-create-without-errand.input';
import { Type } from 'class-transformer';
import { LocationCreateOrConnectWithoutErrandInput } from './location-create-or-connect-without-errand.input';
import { LocationUpsertWithoutErrandInput } from './location-upsert-without-errand.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { LocationUpdateWithoutErrandInput } from './location-update-without-errand.input';

@InputType()
export class LocationUpdateOneRequiredWithoutErrandInput {

    @Field(() => LocationCreateWithoutErrandInput, {nullable:true})
    @Type(() => LocationCreateWithoutErrandInput)
    create?: LocationCreateWithoutErrandInput;

    @Field(() => LocationCreateOrConnectWithoutErrandInput, {nullable:true})
    @Type(() => LocationCreateOrConnectWithoutErrandInput)
    connectOrCreate?: LocationCreateOrConnectWithoutErrandInput;

    @Field(() => LocationUpsertWithoutErrandInput, {nullable:true})
    @Type(() => LocationUpsertWithoutErrandInput)
    upsert?: LocationUpsertWithoutErrandInput;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: LocationWhereUniqueInput;

    @Field(() => LocationUpdateWithoutErrandInput, {nullable:true})
    @Type(() => LocationUpdateWithoutErrandInput)
    update?: LocationUpdateWithoutErrandInput;
}
