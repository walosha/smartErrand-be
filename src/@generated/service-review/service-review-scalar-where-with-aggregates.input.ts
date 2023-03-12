import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumRATINGWithAggregatesFilter } from '../prisma/enum-rating-with-aggregates-filter.input';

@InputType()
export class ServiceReviewScalarWhereWithAggregatesInput {

    @Field(() => [ServiceReviewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ServiceReviewScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceReviewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ServiceReviewScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceReviewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ServiceReviewScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    User?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    serviceId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    comments?: StringWithAggregatesFilter;

    @Field(() => EnumRATINGWithAggregatesFilter, {nullable:true})
    Rating?: EnumRATINGWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    Photos?: StringWithAggregatesFilter;
}
