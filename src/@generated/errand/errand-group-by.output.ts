import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ErrandCountAggregate } from './errand-count-aggregate.output';
import { ErrandMinAggregate } from './errand-min-aggregate.output';
import { ErrandMaxAggregate } from './errand-max-aggregate.output';

@ObjectType()
export class ErrandGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false})
    isAvailable!: boolean;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    locationId!: string;

    @Field(() => ErrandCountAggregate, {nullable:true})
    _count?: ErrandCountAggregate;

    @Field(() => ErrandMinAggregate, {nullable:true})
    _min?: ErrandMinAggregate;

    @Field(() => ErrandMaxAggregate, {nullable:true})
    _max?: ErrandMaxAggregate;
}
