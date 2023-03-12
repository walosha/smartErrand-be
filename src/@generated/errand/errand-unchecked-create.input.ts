import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceUncheckedCreateNestedManyWithoutErrandInput } from '../service/service-unchecked-create-nested-many-without-errand.input';

@InputType()
export class ErrandUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    isAvailable?: boolean;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => String, {nullable:false})
    locationId!: string;

    @Field(() => ServiceUncheckedCreateNestedManyWithoutErrandInput, {nullable:true})
    categories?: ServiceUncheckedCreateNestedManyWithoutErrandInput;
}
