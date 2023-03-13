import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandCreateWithoutUserInput } from './errand-create-without-user.input';
import { Type } from 'class-transformer';
import { ErrandCreateOrConnectWithoutUserInput } from './errand-create-or-connect-without-user.input';
import { ErrandUpsertWithoutUserInput } from './errand-upsert-without-user.input';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';
import { ErrandUpdateWithoutUserInput } from './errand-update-without-user.input';

@InputType()
export class ErrandUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => ErrandCreateWithoutUserInput, {nullable:true})
    @Type(() => ErrandCreateWithoutUserInput)
    create?: ErrandCreateWithoutUserInput;

    @Field(() => ErrandCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => ErrandCreateOrConnectWithoutUserInput)
    connectOrCreate?: ErrandCreateOrConnectWithoutUserInput;

    @Field(() => ErrandUpsertWithoutUserInput, {nullable:true})
    @Type(() => ErrandUpsertWithoutUserInput)
    upsert?: ErrandUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ErrandWhereUniqueInput, {nullable:true})
    @Type(() => ErrandWhereUniqueInput)
    connect?: ErrandWhereUniqueInput;

    @Field(() => ErrandUpdateWithoutUserInput, {nullable:true})
    @Type(() => ErrandUpdateWithoutUserInput)
    update?: ErrandUpdateWithoutUserInput;
}
