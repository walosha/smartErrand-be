import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserProfileWhereInput } from '../user-profile/user-profile-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserProfileArgs {

    @Field(() => UserProfileWhereInput, {nullable:true})
    @Type(() => UserProfileWhereInput)
    where?: UserProfileWhereInput;
}
