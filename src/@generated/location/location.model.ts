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
    latitude!: string;

    @Field(() => String, {nullable:false})
    longitude!: string;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Errand, {nullable:true})
    errand?: Errand | null;

    @Field(() => Client, {nullable:true})
    client?: Client | null;
}
