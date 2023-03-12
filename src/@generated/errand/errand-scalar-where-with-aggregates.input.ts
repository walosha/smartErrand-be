import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class ErrandScalarWhereWithAggregatesInput {

    @Field(() => [ErrandScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ErrandScalarWhereWithAggregatesInput>;

    @Field(() => [ErrandScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ErrandScalarWhereWithAggregatesInput>;

    @Field(() => [ErrandScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ErrandScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isAvailable?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    locationId?: StringWithAggregatesFilter;
}
