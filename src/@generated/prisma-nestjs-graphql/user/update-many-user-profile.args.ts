import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileUncheckedUpdateManyInput } from '../user-profile/user-profile-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { UserProfileWhereInput } from '../user-profile/user-profile-where.input';

@ArgsType()
export class UpdateManyUserProfileArgs {

    @Field(() => UserProfileUncheckedUpdateManyInput, {nullable:false})
    @Type(() => UserProfileUncheckedUpdateManyInput)
    data!: UserProfileUncheckedUpdateManyInput;

    @Field(() => UserProfileWhereInput, {nullable:true})
    @Type(() => UserProfileWhereInput)
    where?: UserProfileWhereInput;
}
