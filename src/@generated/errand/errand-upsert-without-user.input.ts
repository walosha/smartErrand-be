import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandUpdateWithoutUserInput } from './errand-update-without-user.input';
import { Type } from 'class-transformer';
import { ErrandCreateWithoutUserInput } from './errand-create-without-user.input';

@InputType()
export class ErrandUpsertWithoutUserInput {

    @Field(() => ErrandUpdateWithoutUserInput, {nullable:false})
    @Type(() => ErrandUpdateWithoutUserInput)
    update!: ErrandUpdateWithoutUserInput;

    @Field(() => ErrandCreateWithoutUserInput, {nullable:false})
    @Type(() => ErrandCreateWithoutUserInput)
    create!: ErrandCreateWithoutUserInput;
}
