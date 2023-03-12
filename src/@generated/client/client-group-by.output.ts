import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ClientCountAggregate } from './client-count-aggregate.output';
import { ClientMinAggregate } from './client-min-aggregate.output';
import { ClientMaxAggregate } from './client-max-aggregate.output';

@ObjectType()
export class ClientGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    locationId!: string;

    @Field(() => ClientCountAggregate, {nullable:true})
    _count?: ClientCountAggregate;

    @Field(() => ClientMinAggregate, {nullable:true})
    _min?: ClientMinAggregate;

    @Field(() => ClientMaxAggregate, {nullable:true})
    _max?: ClientMaxAggregate;
}
