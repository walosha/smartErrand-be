import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutClientInput } from './user-create-without-client.input';

@InputType()
export class UserCreateOrConnectWithoutClientInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: UserWhereUniqueInput;

    @Field(() => UserCreateWithoutClientInput, {nullable:false})
    @Type(() => UserCreateWithoutClientInput)
    create!: UserCreateWithoutClientInput;
}
