import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutClientNestedInput } from '../user/user-update-one-required-without-client-nested.input';
import { ServiceUpdateManyWithoutClientNestedInput } from '../service/service-update-many-without-client-nested.input';

@InputType()
export class ClientUpdateWithoutLocationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutClientNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutClientNestedInput;

    @Field(() => ServiceUpdateManyWithoutClientNestedInput, {nullable:true})
    categories?: ServiceUpdateManyWithoutClientNestedInput;
}
