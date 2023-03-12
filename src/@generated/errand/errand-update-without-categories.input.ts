import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutErrandInput } from '../user/user-update-one-required-without-errand.input';
import { LocationUpdateOneRequiredWithoutErrandInput } from '../location/location-update-one-required-without-errand.input';

@InputType()
export class ErrandUpdateWithoutCategoriesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAvailable?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutErrandInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutErrandInput;

    @Field(() => LocationUpdateOneRequiredWithoutErrandInput, {nullable:true})
    location?: LocationUpdateOneRequiredWithoutErrandInput;
}
