import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class UserProfileScalarWhereWithAggregatesInput {

    @Field(() => [UserProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserProfileScalarWhereWithAggregatesInput>;

    @Field(() => [UserProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserProfileScalarWhereWithAggregatesInput>;

    @Field(() => [UserProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserProfileScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;
}
