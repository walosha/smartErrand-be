import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RATING } from './rating.enum';

@InputType()
export class NestedEnumRATINGFilter {

    @Field(() => RATING, {nullable:true})
    equals?: keyof typeof RATING;

    @Field(() => [RATING], {nullable:true})
    in?: Array<keyof typeof RATING>;

    @Field(() => [RATING], {nullable:true})
    notIn?: Array<keyof typeof RATING>;

    @Field(() => NestedEnumRATINGFilter, {nullable:true})
    not?: NestedEnumRATINGFilter;
}
