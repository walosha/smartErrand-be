import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserProfileCreateWithoutUserInput } from './user-profile-create-without-user.input';
import { Type } from 'class-transformer';
import { UserProfileCreateOrConnectWithoutUserInput } from './user-profile-create-or-connect-without-user.input';
import { UserProfileWhereUniqueInput } from './user-profile-where-unique.input';

@InputType()
export class UserProfileUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => UserProfileCreateWithoutUserInput, {nullable:true})
    @Type(() => UserProfileCreateWithoutUserInput)
    create?: UserProfileCreateWithoutUserInput;

    @Field(() => UserProfileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => UserProfileCreateOrConnectWithoutUserInput)
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput;

    @Field(() => UserProfileWhereUniqueInput, {nullable:true})
    @Type(() => UserProfileWhereUniqueInput)
    connect?: UserProfileWhereUniqueInput;
}
