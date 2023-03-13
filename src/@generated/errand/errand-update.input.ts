import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutErrandNestedInput } from '../user/user-update-one-required-without-errand-nested.input';
import { LocationUpdateOneRequiredWithoutErrandNestedInput } from '../location/location-update-one-required-without-errand-nested.input';
import { ServiceUpdateManyWithoutErrandNestedInput } from '../service/service-update-many-without-errand-nested.input';

@InputType()
export class ErrandUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAvailable?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutErrandNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutErrandNestedInput;

    @Field(() => LocationUpdateOneRequiredWithoutErrandNestedInput, {nullable:true})
    location?: LocationUpdateOneRequiredWithoutErrandNestedInput;

    @Field(() => ServiceUpdateManyWithoutErrandNestedInput, {nullable:true})
    categories?: ServiceUpdateManyWithoutErrandNestedInput;
}
