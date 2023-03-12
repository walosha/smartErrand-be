import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { ServiceCountAggregate } from './service-count-aggregate.output';
import { ServiceAvgAggregate } from './service-avg-aggregate.output';
import { ServiceSumAggregate } from './service-sum-aggregate.output';
import { ServiceMinAggregate } from './service-min-aggregate.output';
import { ServiceMaxAggregate } from './service-max-aggregate.output';

@ObjectType()
export class ServiceGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    errandId!: string;

    @Field(() => String, {nullable:false})
    clientId!: string;

    @Field(() => Float, {nullable:false})
    startLocation!: number;

    @Field(() => Float, {nullable:false})
    endLocation!: number;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:false})
    endTime!: Date | string;

    @Field(() => ServiceCountAggregate, {nullable:true})
    _count?: ServiceCountAggregate;

    @Field(() => ServiceAvgAggregate, {nullable:true})
    _avg?: ServiceAvgAggregate;

    @Field(() => ServiceSumAggregate, {nullable:true})
    _sum?: ServiceSumAggregate;

    @Field(() => ServiceMinAggregate, {nullable:true})
    _min?: ServiceMinAggregate;

    @Field(() => ServiceMaxAggregate, {nullable:true})
    _max?: ServiceMaxAggregate;
}
