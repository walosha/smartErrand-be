import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Location } from '../location/location.model';
import { Service } from '../service/service.model';
import { ErrandCount } from './errand-count.output';

@ObjectType()
export class Errand {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:false,defaultValue:true})
    isAvailable!: boolean;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    locationId!: string;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => Location, {nullable:false})
    location?: Location;

    @Field(() => [Service], {nullable:true})
    categories?: Array<Service>;

    @Field(() => ErrandCount, {nullable:false})
    _count?: ErrandCount;
}
