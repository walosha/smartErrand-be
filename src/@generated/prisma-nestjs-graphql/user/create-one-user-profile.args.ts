import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileCreateInput } from '../user-profile/user-profile-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserProfileArgs {

    @Field(() => UserProfileCreateInput, {nullable:false})
    @Type(() => UserProfileCreateInput)
    data!: UserProfileCreateInput;
}
