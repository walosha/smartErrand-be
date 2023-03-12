import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';
import { Type } from 'class-transformer';
import { ErrandCreateWithoutLocationInput } from './errand-create-without-location.input';

@InputType()
export class ErrandCreateOrConnectWithoutLocationInput {

    @Field(() => ErrandWhereUniqueInput, {nullable:false})
    @Type(() => ErrandWhereUniqueInput)
    where!: ErrandWhereUniqueInput;

    @Field(() => ErrandCreateWithoutLocationInput, {nullable:false})
    @Type(() => ErrandCreateWithoutLocationInput)
    create!: ErrandCreateWithoutLocationInput;
}
