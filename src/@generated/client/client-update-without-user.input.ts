import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { LocationUpdateOneRequiredWithoutClientInput } from '../location/location-update-one-required-without-client.input';
import { ServiceUpdateManyWithoutClientInput } from '../service/service-update-many-without-client.input';

@InputType()
export class ClientUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => LocationUpdateOneRequiredWithoutClientInput, {nullable:true})
    location?: LocationUpdateOneRequiredWithoutClientInput;

    @Field(() => ServiceUpdateManyWithoutClientInput, {nullable:true})
    categories?: ServiceUpdateManyWithoutClientInput;
}
