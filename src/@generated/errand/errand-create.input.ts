import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutErrandInput } from '../user/user-create-nested-one-without-errand.input';
import { LocationCreateNestedOneWithoutErrandInput } from '../location/location-create-nested-one-without-errand.input';
import { ServiceCreateNestedManyWithoutErrandInput } from '../service/service-create-nested-many-without-errand.input';

@InputType()
export class ErrandCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Boolean, {nullable:true})
    isAvailable?: boolean;

    @Field(() => UserCreateNestedOneWithoutErrandInput, {nullable:false})
    user!: UserCreateNestedOneWithoutErrandInput;

    @Field(() => LocationCreateNestedOneWithoutErrandInput, {nullable:false})
    location!: LocationCreateNestedOneWithoutErrandInput;

    @Field(() => ServiceCreateNestedManyWithoutErrandInput, {nullable:true})
    categories?: ServiceCreateNestedManyWithoutErrandInput;
}
