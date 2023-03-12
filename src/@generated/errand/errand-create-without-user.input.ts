import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LocationCreateNestedOneWithoutErrandInput } from '../location/location-create-nested-one-without-errand.input';
import { ServiceCreateNestedManyWithoutErrandInput } from '../service/service-create-nested-many-without-errand.input';

@InputType()
export class ErrandCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    isAvailable?: boolean;

    @Field(() => LocationCreateNestedOneWithoutErrandInput, {nullable:false})
    location!: LocationCreateNestedOneWithoutErrandInput;

    @Field(() => ServiceCreateNestedManyWithoutErrandInput, {nullable:true})
    categories?: ServiceCreateNestedManyWithoutErrandInput;
}
