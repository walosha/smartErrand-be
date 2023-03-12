import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Location } from '../location/location.model';
import { Service } from '../service/service.model';
import { ClientCount } from './client-count.output';

@ObjectType()
export class Client {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Location, {nullable:false})
    location?: Location;

    @Field(() => String, {nullable:false})
    locationId!: string;

    @Field(() => [Service], {nullable:true})
    categories?: Array<Service>;

    @Field(() => ClientCount, {nullable:false})
    _count?: ClientCount;
}
