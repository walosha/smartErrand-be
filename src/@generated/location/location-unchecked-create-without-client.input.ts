import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandUncheckedCreateNestedOneWithoutLocationInput } from '../errand/errand-unchecked-create-nested-one-without-location.input';

@InputType()
export class LocationUncheckedCreateWithoutClientInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => ErrandUncheckedCreateNestedOneWithoutLocationInput, {nullable:true})
    errand?: ErrandUncheckedCreateNestedOneWithoutLocationInput;
}