import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationCreateNestedOneWithoutClientInput } from '../location/location-create-nested-one-without-client.input';
import { ServiceCreateNestedManyWithoutClientInput } from '../service/service-create-nested-many-without-client.input';

@InputType()
export class ClientCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => LocationCreateNestedOneWithoutClientInput, {nullable:false})
    location!: LocationCreateNestedOneWithoutClientInput;

    @Field(() => ServiceCreateNestedManyWithoutClientInput, {nullable:true})
    categories?: ServiceCreateNestedManyWithoutClientInput;
}
