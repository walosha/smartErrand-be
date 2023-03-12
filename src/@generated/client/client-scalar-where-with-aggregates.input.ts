import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class ClientScalarWhereWithAggregatesInput {

    @Field(() => [ClientScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ClientScalarWhereWithAggregatesInput>;

    @Field(() => [ClientScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ClientScalarWhereWithAggregatesInput>;

    @Field(() => [ClientScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ClientScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    locationId?: StringWithAggregatesFilter;
}
