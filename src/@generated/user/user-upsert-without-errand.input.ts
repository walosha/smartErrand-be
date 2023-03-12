import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutErrandInput } from './user-update-without-errand.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutErrandInput } from './user-create-without-errand.input';

@InputType()
export class UserUpsertWithoutErrandInput {

    @Field(() => UserUpdateWithoutErrandInput, {nullable:false})
    @Type(() => UserUpdateWithoutErrandInput)
    update!: UserUpdateWithoutErrandInput;

    @Field(() => UserCreateWithoutErrandInput, {nullable:false})
    @Type(() => UserCreateWithoutErrandInput)
    create!: UserCreateWithoutErrandInput;
}
