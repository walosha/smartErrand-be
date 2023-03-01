import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileWhereUniqueInput } from '../user-profile/user-profile-where-unique.input';
import { Type } from 'class-transformer';
import { UserProfileCreateInput } from '../user-profile/user-profile-create.input';
import { UserProfileUpdateInput } from '../user-profile/user-profile-update.input';

@ArgsType()
export class UpsertOneUserProfileArgs {

    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    @Type(() => UserProfileWhereUniqueInput)
    where!: UserProfileWhereUniqueInput;

    @Field(() => UserProfileCreateInput, {nullable:false})
    @Type(() => UserProfileCreateInput)
    create!: UserProfileCreateInput;

    @Field(() => UserProfileUpdateInput, {nullable:false})
    @Type(() => UserProfileUpdateInput)
    update!: UserProfileUpdateInput;
}
