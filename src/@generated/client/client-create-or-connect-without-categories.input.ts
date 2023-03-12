import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Type } from 'class-transformer';
import { ClientCreateWithoutCategoriesInput } from './client-create-without-categories.input';

@InputType()
export class ClientCreateOrConnectWithoutCategoriesInput {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    @Type(() => ClientWhereUniqueInput)
    where!: ClientWhereUniqueInput;

    @Field(() => ClientCreateWithoutCategoriesInput, {nullable:false})
    @Type(() => ClientCreateWithoutCategoriesInput)
    create!: ClientCreateWithoutCategoriesInput;
}
