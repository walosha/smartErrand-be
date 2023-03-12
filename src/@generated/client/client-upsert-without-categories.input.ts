import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientUpdateWithoutCategoriesInput } from './client-update-without-categories.input';
import { Type } from 'class-transformer';
import { ClientCreateWithoutCategoriesInput } from './client-create-without-categories.input';

@InputType()
export class ClientUpsertWithoutCategoriesInput {

    @Field(() => ClientUpdateWithoutCategoriesInput, {nullable:false})
    @Type(() => ClientUpdateWithoutCategoriesInput)
    update!: ClientUpdateWithoutCategoriesInput;

    @Field(() => ClientCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => ClientCreateWithoutCategoriesInput)
    create!: ClientCreateWithoutCategoriesInput;
}
