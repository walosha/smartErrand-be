import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';
import { Type } from 'class-transformer';
import { ErrandCreateWithoutCategoriesInput } from './errand-create-without-categories.input';

@InputType()
export class ErrandCreateOrConnectWithoutCategoriesInput {

    @Field(() => ErrandWhereUniqueInput, {nullable:false})
    @Type(() => ErrandWhereUniqueInput)
    where!: ErrandWhereUniqueInput;

    @Field(() => ErrandCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => ErrandCreateWithoutCategoriesInput)
    create!: ErrandCreateWithoutCategoriesInput;
}
