import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutClientInput } from './user-update-without-client.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutClientInput } from './user-create-without-client.input';

@InputType()
export class UserUpsertWithoutClientInput {

    @Field(() => UserUpdateWithoutClientInput, {nullable:false})
    @Type(() => UserUpdateWithoutClientInput)
    update!: UserUpdateWithoutClientInput;

    @Field(() => UserCreateWithoutClientInput, {nullable:false})
    @Type(() => UserCreateWithoutClientInput)
    create!: UserCreateWithoutClientInput;
}
