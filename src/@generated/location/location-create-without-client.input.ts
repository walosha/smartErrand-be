import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandCreateNestedOneWithoutLocationInput } from '../errand/errand-create-nested-one-without-location.input';

@InputType()
export class LocationCreateWithoutClientInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => ErrandCreateNestedOneWithoutLocationInput, {nullable:true})
    errand?: ErrandCreateNestedOneWithoutLocationInput;
}