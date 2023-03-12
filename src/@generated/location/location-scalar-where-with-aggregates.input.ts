import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

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
    location?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    address?: StringNullableWithAggregatesFilter;
}
