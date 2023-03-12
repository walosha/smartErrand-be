import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandCreateWithoutCategoriesInput } from './errand-create-without-categories.input';
import { Type } from 'class-transformer';
import { ErrandCreateOrConnectWithoutCategoriesInput } from './errand-create-or-connect-without-categories.input';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';

@InputType()
export class ErrandCreateNestedOneWithoutCategoriesInput {

    @Field(() => ErrandCreateWithoutCategoriesInput, {nullable:true})
    @Type(() => ErrandCreateWithoutCategoriesInput)
    create?: ErrandCreateWithoutCategoriesInput;

    @Field(() => ErrandCreateOrConnectWithoutCategoriesInput, {nullable:true})
    @Type(() => ErrandCreateOrConnectWithoutCategoriesInput)
    connectOrCreate?: ErrandCreateOrConnectWithoutCategoriesInput;

    @Field(() => ErrandWhereUniqueInput, {nullable:true})
    @Type(() => ErrandWhereUniqueInput)
    connect?: ErrandWhereUniqueInput;
}
