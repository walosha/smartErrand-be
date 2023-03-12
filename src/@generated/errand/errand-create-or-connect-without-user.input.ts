import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';
import { Type } from 'class-transformer';
import { ErrandCreateWithoutUserInput } from './errand-create-without-user.input';

@InputType()
export class ErrandCreateOrConnectWithoutUserInput {

    @Field(() => ErrandWhereUniqueInput, {nullable:false})
    @Type(() => ErrandWhereUniqueInput)
    where!: ErrandWhereUniqueInput;

    @Field(() => ErrandCreateWithoutUserInput, {nullable:false})
    @Type(() => ErrandCreateWithoutUserInput)
    create!: ErrandCreateWithoutUserInput;
}
