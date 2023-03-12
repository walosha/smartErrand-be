import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RATING } from './rating.enum';
import { NestedEnumRATINGFilter } from './nested-enum-rating-filter.input';

@InputType()
export class EnumRATINGFilter {

    @Field(() => RATING, {nullable:true})
    equals?: keyof typeof RATING;

    @Field(() => [RATING], {nullable:true})
    in?: Array<keyof typeof RATING>;

    @Field(() => [RATING], {nullable:true})
    notIn?: Array<keyof typeof RATING>;

    @Field(() => NestedEnumRATINGFilter, {nullable:true})
    not?: NestedEnumRATINGFilter;
}
