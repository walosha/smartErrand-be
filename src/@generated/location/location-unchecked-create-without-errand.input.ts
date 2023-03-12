import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientUncheckedCreateNestedOneWithoutLocationInput } from '../client/client-unchecked-create-nested-one-without-location.input';

@InputType()
export class LocationUncheckedCreateWithoutErrandInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => ClientUncheckedCreateNestedOneWithoutLocationInput, {nullable:true})
    client?: ClientUncheckedCreateNestedOneWithoutLocationInput;
}
