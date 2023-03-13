import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateWithoutCategoriesInput } from './client-create-without-categories.input';
import { Type } from 'class-transformer';
import { ClientCreateOrConnectWithoutCategoriesInput } from './client-create-or-connect-without-categories.input';
import { ClientUpsertWithoutCategoriesInput } from './client-upsert-without-categories.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { ClientUpdateWithoutCategoriesInput } from './client-update-without-categories.input';

@InputType()
export class ClientUpdateOneRequiredWithoutCategoriesNestedInput {

    @Field(() => ClientCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => ClientCreateWithoutCategoriesInput)
    create?: ClientCreateWithoutCategoriesInput;

    @Field(() => ClientCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => ClientCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: ClientCreateOrConnectWithoutCategoriesInput;

    @Field(() => ClientUpsertWithoutCategoriesInput, {nullable:true})
    @Type(() => ClientUpsertWithoutCategoriesInput)
    upsert?: ClientUpsertWithoutCategoriesInput;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    @Type(() => ClientWhereUniqueInput)
    connect?: ClientWhereUniqueInput;

    @Field(() => ClientUpdateWithoutCategoriesInput, {nullable:true})
    @Type(() => ClientUpdateWithoutCategoriesInput)
    update?: ClientUpdateWithoutCategoriesInput;
}
