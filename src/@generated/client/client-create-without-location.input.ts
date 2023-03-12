import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutClientInput } from '../user/user-create-nested-one-without-client.input';
import { ServiceCreateNestedManyWithoutClientInput } from '../service/service-create-nested-many-without-client.input';

@InputType()
export class ClientCreateWithoutLocationInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => UserCreateNestedOneWithoutClientInput, {nullable:false})
    user!: UserCreateNestedOneWithoutClientInput;

    @Field(() => ServiceCreateNestedManyWithoutClientInput, {nullable:true})
    categories?: ServiceCreateNestedManyWithoutClientInput;
}
