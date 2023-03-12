import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandCreateWithoutLocationInput } from './errand-create-without-location.input';
import { Type } from 'class-transformer';
import { ErrandCreateOrConnectWithoutLocationInput } from './errand-create-or-connect-without-location.input';
import { ErrandUpsertWithoutLocationInput } from './errand-upsert-without-location.input';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';
import { ErrandUpdateWithoutLocationInput } from './errand-update-without-location.input';

@InputType()
export class ErrandUpdateOneWithoutLocationInput {

    @Field(() => ErrandCreateWithoutLocationInput, {nullable:true})
    @Type(() => ErrandCreateWithoutLocationInput)
    create?: ErrandCreateWithoutLocationInput;

    @Field(() => ErrandCreateOrConnectWithoutLocationInput, {nullable:true})
    @Type(() => ErrandCreateOrConnectWithoutLocationInput)
    connectOrCreate?: ErrandCreateOrConnectWithoutLocationInput;

    @Field(() => ErrandUpsertWithoutLocationInput, {nullable:true})
    @Type(() => ErrandUpsertWithoutLocationInput)
    upsert?: ErrandUpsertWithoutLocationInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => ErrandWhereUniqueInput, {nullable:true})
    @Type(() => ErrandWhereUniqueInput)
    connect?: ErrandWhereUniqueInput;

    @Field(() => ErrandUpdateWithoutLocationInput, {nullable:true})
    @Type(() => ErrandUpdateWithoutLocationInput)
    update?: ErrandUpdateWithoutLocationInput;
}
