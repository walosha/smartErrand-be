import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceUncheckedCreateNestedManyWithoutClientInput } from '../service/service-unchecked-create-nested-many-without-client.input';

@InputType()
export class ClientUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    locationId!: string;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutClientInput, {nullable:true})
    categories?: ServiceUncheckedCreateNestedManyWithoutClientInput;
}
