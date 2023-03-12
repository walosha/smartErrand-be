import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Errand } from '../errand/errand.model';
import { Client } from '../client/client.model';
import { Float } from '@nestjs/graphql';
import { ServiceReview } from '../service-review/service-review.model';

@ObjectType()
export class Service {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Errand, {nullable:false})
    errand?: Errand;

    @Field(() => String, {nullable:false})
    errandId!: string;

    @Field(() => Client, {nullable:false})
    client?: Client;

    @Field(() => String, {nullable:false})
    clientId!: string;

    @Field(() => Float, {nullable:false})
    startLocation!: number;

    @Field(() => Float, {nullable:false})
    endLocation!: number;

    @Field(() => Date, {nullable:false})
    startTime!: Date;

    @Field(() => Date, {nullable:false})
    endTime!: Date;

    @Field(() => ServiceReview, {nullable:true})
    serviceReview?: ServiceReview | null;
}
