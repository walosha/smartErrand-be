import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class ServiceScalarWhereWithAggregatesInput {

    @Field(() => [ServiceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ServiceScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ServiceScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ServiceScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    errandId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    clientId?: StringWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    startLocation?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    endLocation?: FloatWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    startTime?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    endTime?: DateTimeWithAggregatesFilter;
}
