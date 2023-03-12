import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RATING } from './rating.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumRATINGFilter } from './nested-enum-rating-filter.input';

@InputType()
export class NestedEnumRATINGWithAggregatesFilter {

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
