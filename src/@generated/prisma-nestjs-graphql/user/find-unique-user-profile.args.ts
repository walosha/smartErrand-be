import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileWhereUniqueInput } from '../user-profile/user-profile-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserProfileArgs {

    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    @Type(() => UserProfileWhereUniqueInput)
    where!: UserProfileWhereUniqueInput;
}
