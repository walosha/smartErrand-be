import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class UserProfileWhereInput {

    @Field(() => [UserProfileWhereInput], {nullable:true})
    AND?: Array<UserProfileWhereInput>;

    @Field(() => [UserProfileWhereInput], {nullable:true})
    OR?: Array<UserProfileWhereInput>;

    @Field(() => [UserProfileWhereInput], {nullable:true})
    NOT?: Array<UserProfileWhereInput>;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;
}
