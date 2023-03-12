import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandUpdateWithoutLocationInput } from './errand-update-without-location.input';
import { Type } from 'class-transformer';
import { ErrandCreateWithoutLocationInput } from './errand-create-without-location.input';

@InputType()
export class ErrandUpsertWithoutLocationInput {

    @Field(() => ErrandUpdateWithoutLocationInput, {nullable:false})
    @Type(() => ErrandUpdateWithoutLocationInput)
    update!: ErrandUpdateWithoutLocationInput;

    @Field(() => ErrandCreateWithoutLocationInput, {nullable:false})
    @Type(() => ErrandCreateWithoutLocationInput)
    create!: ErrandCreateWithoutLocationInput;
}
