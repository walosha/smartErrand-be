import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationCreateWithoutErrandInput } from './location-create-without-errand.input';
import { Type } from 'class-transformer';
import { LocationCreateOrConnectWithoutErrandInput } from './location-create-or-connect-without-errand.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';

@InputType()
export class LocationCreateNestedOneWithoutErrandInput {

    @Field(() => LocationCreateWithoutErrandInput, {nullable:true})
    @Type(() => LocationCreateWithoutErrandInput)
    create?: LocationCreateWithoutErrandInput;

    @Field(() => LocationCreateOrConnectWithoutErrandInput, {nullable:true})
    @Type(() => LocationCreateOrConnectWithoutErrandInput)
    connectOrCreate?: LocationCreateOrConnectWithoutErrandInput;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    @Type(() => LocationWhereUniqueInput)
    connect?: LocationWhereUniqueInput;
}
