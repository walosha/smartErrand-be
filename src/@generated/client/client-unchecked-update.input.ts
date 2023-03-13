import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ServiceUncheckedUpdateManyWithoutClientNestedInput } from '../service/service-unchecked-update-many-without-client-nested.input';

@InputType()
export class ClientUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    userId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    locationId?: StringFieldUpdateOperationsInput;

    @Field(() => ServiceUncheckedUpdateManyWithoutClientNestedInput, {nullable:true})
    categories?: ServiceUncheckedUpdateManyWithoutClientNestedInput;
}
