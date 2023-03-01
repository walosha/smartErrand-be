import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileCreateManyInput } from '../user-profile/user-profile-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUserProfileArgs {

    @Field(() => [UserProfileCreateManyInput], {nullable:false})
    @Type(() => UserProfileCreateManyInput)
    data!: Array<UserProfileCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
