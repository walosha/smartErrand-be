import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUpdateInput } from '../user-profile/user-profile-update.input';
import { Type } from 'class-transformer';
import { UserProfileWhereUniqueInput } from '../user-profile/user-profile-where-unique.input';

@ArgsType()
export class UpdateOneUserProfileArgs {

    @Field(() => UserProfileUpdateInput, {nullable:false})
    @Type(() => UserProfileUpdateInput)
    data!: UserProfileUpdateInput;

    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    @Type(() => UserProfileWhereUniqueInput)
    where!: UserProfileWhereUniqueInput;
}
