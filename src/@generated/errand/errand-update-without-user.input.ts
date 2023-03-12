import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { LocationUpdateOneRequiredWithoutErrandInput } from '../location/location-update-one-required-without-errand.input';
import { ServiceUpdateManyWithoutErrandInput } from '../service/service-update-many-without-errand.input';

@InputType()
export class ErrandUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAvailable?: BoolFieldUpdateOperationsInput;

    @Field(() => LocationUpdateOneRequiredWithoutErrandInput, {nullable:true})
    location?: LocationUpdateOneRequiredWithoutErrandInput;

    @Field(() => ServiceUpdateManyWithoutErrandInput, {nullable:true})
    categories?: ServiceUpdateManyWithoutErrandInput;
}
