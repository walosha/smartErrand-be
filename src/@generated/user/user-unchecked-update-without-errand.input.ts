import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateroleInput } from './user-updaterole.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ClientUncheckedUpdateOneWithoutUserNestedInput } from '../client/client-unchecked-update-one-without-user-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutErrandInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    phone?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    referralCode?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    firstname?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    lastname?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateroleInput, {nullable:true})
    role?: UserUpdateroleInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdmin?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    emailConfirmed?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    phoneConfirmed?: BoolFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ClientUncheckedUpdateOneWithoutUserNestedInput, {nullable:true})
    client?: ClientUncheckedUpdateOneWithoutUserNestedInput;
}
