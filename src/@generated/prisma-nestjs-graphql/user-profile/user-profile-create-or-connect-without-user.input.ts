import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileWhereUniqueInput } from './user-profile-where-unique.input';
import { Type } from 'class-transformer';

@InputType()
export class UserProfileCreateOrConnectWithoutUserInput {

    @Field(() => UserProfileWhereUniqueInput, {nullable:false})
    @Type(() => UserProfileWhereUniqueInput)
    where!: UserProfileWhereUniqueInput;
}
