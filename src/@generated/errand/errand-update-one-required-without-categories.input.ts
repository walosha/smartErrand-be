import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandCreateWithoutCategoriesInput } from './errand-create-without-categories.input';
import { Type } from 'class-transformer';
import { ErrandCreateOrConnectWithoutCategoriesInput } from './errand-create-or-connect-without-categories.input';
import { ErrandUpsertWithoutCategoriesInput } from './errand-upsert-without-categories.input';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';
import { ErrandUpdateWithoutCategoriesInput } from './errand-update-without-categories.input';

@InputType()
export class ErrandUpdateOneRequiredWithoutCategoriesInput {

    @Field(() => ErrandCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => ErrandCreateWithoutCategoriesInput)
    create?: ErrandCreateWithoutCategoriesInput;

    @Field(() => ErrandCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => ErrandCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: ErrandCreateOrConnectWithoutCategoriesInput;

    @Field(() => ErrandUpsertWithoutCategoriesInput, {nullable:true})
    @Type(() => ErrandUpsertWithoutCategoriesInput)
    upsert?: ErrandUpsertWithoutCategoriesInput;

    @Field(() => ErrandWhereUniqueInput, {nullable:true})
    @Type(() => ErrandWhereUniqueInput)
    connect?: ErrandWhereUniqueInput;

    @Field(() => ErrandUpdateWithoutCategoriesInput, {nullable:true})
    @Type(() => ErrandUpdateWithoutCategoriesInput)
    update?: ErrandUpdateWithoutCategoriesInput;
}
