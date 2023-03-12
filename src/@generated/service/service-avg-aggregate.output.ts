import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ServiceAvgAggregate {

    @Field(() => Float, {nullable:true})
    startLocation?: number;

    @Field(() => Float, {nullable:true})
    endLocation?: number;
}
