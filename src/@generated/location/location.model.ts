import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Errand } from '../errand/errand.model';
import { Client } from '../client/client.model';

@ObjectType()
export class Location {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => Errand, {nullable:true})
    errand?: Errand | null;

    @Field(() => Client, {nullable:true})
    client?: Client | null;
}
