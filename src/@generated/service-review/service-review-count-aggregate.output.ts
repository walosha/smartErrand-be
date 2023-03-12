import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServiceReviewCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    User!: number;

    @Field(() => Int, {nullable:false})
    serviceId!: number;

    @Field(() => Int, {nullable:false})
    comments!: number;

    @Field(() => Int, {nullable:false})
    Rating!: number;

    @Field(() => Int, {nullable:false})
    Photos!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
