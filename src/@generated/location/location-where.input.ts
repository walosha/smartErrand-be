import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ErrandRelationFilter } from '../errand/errand-relation-filter.input';
import { ClientRelationFilter } from '../client/client-relation-filter.input';

@InputType()
export class LocationWhereInput {

    @Field(() => [LocationWhereInput], {nullable:true})
    AND?: Array<LocationWhereInput>;

    @Field(() => [LocationWhereInput], {nullable:true})
    OR?: Array<LocationWhereInput>;

    @Field(() => [LocationWhereInput], {nullable:true})
    NOT?: Array<LocationWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    latitude?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    longitude?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ErrandRelationFilter, {nullable:true})
    errand?: ErrandRelationFilter;

    @Field(() => ClientRelationFilter, {nullable:true})
    client?: ClientRelationFilter;
}
