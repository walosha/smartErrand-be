import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { LocationRelationFilter } from '../location/location-relation-filter.input';
import { ServiceListRelationFilter } from '../service/service-list-relation-filter.input';

@InputType()
export class ClientWhereInput {

    @Field(() => [ClientWhereInput], {nullable:true})
    AND?: Array<ClientWhereInput>;

    @Field(() => [ClientWhereInput], {nullable:true})
    OR?: Array<ClientWhereInput>;

    @Field(() => [ClientWhereInput], {nullable:true})
    NOT?: Array<ClientWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => LocationRelationFilter, {nullable:true})
    location?: LocationRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    locationId?: StringFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    categories?: ServiceListRelationFilter;
}
