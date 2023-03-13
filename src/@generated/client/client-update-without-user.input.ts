import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LocationUpdateOneRequiredWithoutClientNestedInput } from '../location/location-update-one-required-without-client-nested.input';
import { ServiceUpdateManyWithoutClientNestedInput } from '../service/service-update-many-without-client-nested.input';

@InputType()
export class ClientUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => LocationUpdateOneRequiredWithoutClientNestedInput, {nullable:true})
    location?: LocationUpdateOneRequiredWithoutClientNestedInput;

    @Field(() => ServiceUpdateManyWithoutClientNestedInput, {nullable:true})
    categories?: ServiceUpdateManyWithoutClientNestedInput;
}
