import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutClientInput } from '../user/user-update-one-required-without-client.input';
import { ServiceUpdateManyWithoutClientInput } from '../service/service-update-many-without-client.input';

@InputType()
export class ClientUpdateWithoutLocationInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutClientInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutClientInput;

    @Field(() => ServiceUpdateManyWithoutClientInput, {nullable:true})
    categories?: ServiceUpdateManyWithoutClientInput;
}
