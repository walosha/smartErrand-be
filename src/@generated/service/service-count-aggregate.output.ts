import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServiceCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    errandId!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:false})
    startLocation!: number;

    @Field(() => Int, {nullable:false})
    endLocation!: number;

    @Field(() => Int, {nullable:false})
    startTime!: number;

    @Field(() => Int, {nullable:false})
    endTime!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
