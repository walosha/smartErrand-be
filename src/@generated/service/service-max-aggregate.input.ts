import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ServiceMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    errandId?: true;

    @Field(() => Boolean, {nullable:true})
    clientId?: true;

    @Field(() => Boolean, {nullable:true})
    startLocation?: true;

    @Field(() => Boolean, {nullable:true})
    endLocation?: true;

    @Field(() => Boolean, {nullable:true})
    startTime?: true;

    @Field(() => Boolean, {nullable:true})
    endTime?: true;
}
