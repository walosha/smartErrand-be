import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RATING } from './rating.enum';
import { NestedEnumRATINGWithAggregatesFilter } from './nested-enum-rating-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRATINGFilter } from './nested-enum-rating-filter.input';

@InputType()
export class EnumRATINGWithAggregatesFilter {

    @Field(() => RATING, {nullable:true})
    equals?: keyof typeof RATING;

    @Field(() => [RATING], {nullable:true})
    in?: Array<keyof typeof RATING>;

    @Field(() => [RATING], {nullable:true})
    notIn?: Array<keyof typeof RATING>;

    @Field(() => NestedEnumRATINGWithAggregatesFilter, {nullable:true})
    not?: NestedEnumRATINGWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumRATINGFilter, {nullable:true})
    _min?: NestedEnumRATINGFilter;

    @Field(() => NestedEnumRATINGFilter, {nullable:true})
    _max?: NestedEnumRATINGFilter;
}
