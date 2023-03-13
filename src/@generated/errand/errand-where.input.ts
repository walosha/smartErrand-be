import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { LocationRelationFilter } from '../location/location-relation-filter.input';
import { ServiceListRelationFilter } from '../service/service-list-relation-filter.input';

@InputType()
export class ErrandWhereInput {

    @Field(() => [ErrandWhereInput], {nullable:true})
    AND?: Array<ErrandWhereInput>;

    @Field(() => [ErrandWhereInput], {nullable:true})
    OR?: Array<ErrandWhereInput>;

    @Field(() => [ErrandWhereInput], {nullable:true})
    NOT?: Array<ErrandWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAvailable?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    locationId?: StringFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => LocationRelationFilter, {nullable:true})
    location?: LocationRelationFilter;

    @Field(() => ServiceListRelationFilter, {nullable:true})
    categories?: ServiceListRelationFilter;
}
