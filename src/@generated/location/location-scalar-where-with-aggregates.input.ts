import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LocationScalarWhereWithAggregatesInput {

    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LocationScalarWhereWithAggregatesInput>;

    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LocationScalarWhereWithAggregatesInput>;

    @Field(() => [LocationScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LocationScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    latitude?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    longitude?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    address?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
