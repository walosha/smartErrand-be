import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileWhereInput } from '../user-profile/user-profile-where.input';
import { Type } from 'class-transformer';
import { UserProfileOrderByWithRelationInput } from '../user-profile/user-profile-order-by-with-relation.input';
import { UserProfileWhereUniqueInput } from '../user-profile/user-profile-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregateUserProfileArgs {

    @Field(() => UserProfileWhereInput, {nullable:true})
    @Type(() => UserProfileWhereInput)
    where?: UserProfileWhereInput;

    @Field(() => [UserProfileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserProfileOrderByWithRelationInput>;

    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    cursor?: UserProfileWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}