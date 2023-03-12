import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ErrandUncheckedUpdateOneWithoutLocationInput } from '../errand/errand-unchecked-update-one-without-location.input';
import { ClientUncheckedUpdateOneWithoutLocationInput } from '../client/client-unchecked-update-one-without-location.input';

@InputType()
export class LocationUncheckedUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    location?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ErrandUncheckedUpdateOneWithoutLocationInput, {nullable:true})
    errand?: ErrandUncheckedUpdateOneWithoutLocationInput;

    @Field(() => ClientUncheckedUpdateOneWithoutLocationInput, {nullable:true})
    client?: ClientUncheckedUpdateOneWithoutLocationInput;
}
