import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutClientInput } from '../user/user-create-nested-one-without-client.input';
import { LocationCreateNestedOneWithoutClientInput } from '../location/location-create-nested-one-without-client.input';
import { ServiceCreateNestedManyWithoutClientInput } from '../service/service-create-nested-many-without-client.input';

@InputType()
export class ClientCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutClientInput, {nullable:false})
    user!: UserCreateNestedOneWithoutClientInput;

    @Field(() => LocationCreateNestedOneWithoutClientInput, {nullable:false})
    location!: LocationCreateNestedOneWithoutClientInput;

    @Field(() => ServiceCreateNestedManyWithoutClientInput, {nullable:true})
    categories?: ServiceCreateNestedManyWithoutClientInput;
}
