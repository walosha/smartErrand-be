import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandCreateNestedOneWithoutLocationInput } from '../errand/errand-create-nested-one-without-location.input';
import { ClientCreateNestedOneWithoutLocationInput } from '../client/client-create-nested-one-without-location.input';

@InputType()
export class LocationCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => ErrandCreateNestedOneWithoutLocationInput, {nullable:true})
    errand?: ErrandCreateNestedOneWithoutLocationInput;

    @Field(() => ClientCreateNestedOneWithoutLocationInput, {nullable:true})
    client?: ClientCreateNestedOneWithoutLocationInput;
}
