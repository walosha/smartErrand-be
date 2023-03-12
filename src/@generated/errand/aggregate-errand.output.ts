import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ErrandCountAggregate } from './errand-count-aggregate.output';
import { ErrandMinAggregate } from './errand-min-aggregate.output';
import { ErrandMaxAggregate } from './errand-max-aggregate.output';

@ObjectType()
export class AggregateErrand {

    @Field(() => ErrandCountAggregate, {nullable:true})
    _count?: ErrandCountAggregate;

    @Field(() => ErrandMinAggregate, {nullable:true})
    _min?: ErrandMinAggregate;

    @Field(() => ErrandMaxAggregate, {nullable:true})
    _max?: ErrandMaxAggregate;
}
