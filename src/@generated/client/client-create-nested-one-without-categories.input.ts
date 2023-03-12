import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutCategoriesInput } from './client-create-without-categories.input';
import { Type } from 'class-transformer';
import { ClientCreateOrConnectWithoutCategoriesInput } from './client-create-or-connect-without-categories.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';

@InputType()
export class ClientCreateNestedOneWithoutCategoriesInput {

    @Field(() => ClientCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => ClientCreateWithoutCategoriesInput)
    create?: ClientCreateWithoutCategoriesInput;

    @Field(() => ClientCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => ClientCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: ClientCreateOrConnectWithoutCategoriesInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    connect?: ClientWhereUniqueInput;
}
