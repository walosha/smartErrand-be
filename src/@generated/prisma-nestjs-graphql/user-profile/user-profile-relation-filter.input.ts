import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileWhereInput } from './user-profile-where.input';

@InputType()
export class UserProfileRelationFilter {

    @Field(() => UserProfileWhereInput, {nullable:true})
    is?: UserProfileWhereInput;

    @Field(() => UserProfileWhereInput, {nullable:true})
    isNot?: UserProfileWhereInput;
}
