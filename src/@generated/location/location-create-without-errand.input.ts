import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientCreateNestedOneWithoutLocationInput } from '../client/client-create-nested-one-without-location.input';

@InputType()
export class LocationCreateWithoutErrandInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    location!: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => ClientCreateNestedOneWithoutLocationInput, {nullable:true})
    client?: ClientCreateNestedOneWithoutLocationInput;
}
