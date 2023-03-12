import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServiceAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    startLocation?: true;

    @Field(() => Boolean, {nullable:true})
    endLocation?: true;
}
