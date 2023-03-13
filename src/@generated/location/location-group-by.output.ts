import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LocationCountAggregate } from './location-count-aggregate.output';
import { LocationMinAggregate } from './location-min-aggregate.output';
import { LocationMaxAggregate } from './location-max-aggregate.output';

@ObjectType()
export class LocationGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    latitude!: string;

    @Field(() => String, {nullable:false})
    longitude!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => LocationCountAggregate, {nullable:true})
    _count?: LocationCountAggregate;

    @Field(() => LocationMinAggregate, {nullable:true})
    _min?: LocationMinAggregate;

    @Field(() => LocationMaxAggregate, {nullable:true})
    _max?: LocationMaxAggregate;
}
