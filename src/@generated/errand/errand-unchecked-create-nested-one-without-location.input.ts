import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandCreateWithoutLocationInput } from './errand-create-without-location.input';
import { Type } from 'class-transformer';
import { ErrandCreateOrConnectWithoutLocationInput } from './errand-create-or-connect-without-location.input';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';

@InputType()
export class ErrandUncheckedCreateNestedOneWithoutLocationInput {

    @Field(() => ErrandCreateWithoutLocationInput, {nullable:true})
    @Type(() => ErrandCreateWithoutLocationInput)
    create?: ErrandCreateWithoutLocationInput;

    @Field(() => ErrandCreateOrConnectWithoutLocationInput, {nullable:true})
    @Type(() => ErrandCreateOrConnectWithoutLocationInput)
    connectOrCreate?: ErrandCreateOrConnectWithoutLocationInput;

    @Field(() => ErrandWhereUniqueInput, {nullable:true})
    @Type(() => ErrandWhereUniqueInput)
    connect?: ErrandWhereUniqueInput;
}
