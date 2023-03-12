import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandCreateWithoutUserInput } from './errand-create-without-user.input';
import { Type } from 'class-transformer';
import { ErrandCreateOrConnectWithoutUserInput } from './errand-create-or-connect-without-user.input';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';

@InputType()
export class ErrandCreateNestedOneWithoutUserInput {

    @Field(() => ErrandCreateWithoutUserInput, {nullable:true})
    @Type(() => ErrandCreateWithoutUserInput)
    create?: ErrandCreateWithoutUserInput;

    @Field(() => ErrandCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ErrandCreateOrConnectWithoutUserInput)
    connectOrCreate?: ErrandCreateOrConnectWithoutUserInput;

    @Field(() => ErrandWhereUniqueInput, {nullable:true})
    @Type(() => ErrandWhereUniqueInput)
    connect?: ErrandWhereUniqueInput;
}
