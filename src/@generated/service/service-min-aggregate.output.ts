import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ServiceMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    errandId?: string;

    @Field(() => String, {nullable:true})
    clientId?: string;

    @Field(() => Float, {nullable:true})
    startLocation?: number;

    @Field(() => Float, {nullable:true})
    endLocation?: number;

    @Field(() => Date, {nullable:true})
    startTime?: Date | string;

    @Field(() => Date, {nullable:true})
    endTime?: Date | string;
}
