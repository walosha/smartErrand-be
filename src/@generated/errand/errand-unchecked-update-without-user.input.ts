import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { ServiceUncheckedUpdateManyWithoutErrandInput } from '../service/service-unchecked-update-many-without-errand.input';

@InputType()
export class ErrandUncheckedUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAvailable?: BoolFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    locationId?: StringFieldUpdateOperationsInput;

    @Field(() => ServiceUncheckedUpdateManyWithoutErrandInput, {nullable:true})
    categories?: ServiceUncheckedUpdateManyWithoutErrandInput;
}