import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandUpdateWithoutCategoriesInput } from './errand-update-without-categories.input';
import { Type } from 'class-transformer';
import { ErrandCreateWithoutCategoriesInput } from './errand-create-without-categories.input';

@InputType()
export class ErrandUpsertWithoutCategoriesInput {

    @Field(() => ErrandUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => ErrandUpdateWithoutCategoriesInput)
    update!: ErrandUpdateWithoutCategoriesInput;

    @Field(() => ErrandCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => ErrandCreateWithoutCategoriesInput)
    create!: ErrandCreateWithoutCategoriesInput;
}
