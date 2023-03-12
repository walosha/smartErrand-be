import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ErrandUpdateOneWithoutLocationInput } from '../errand/errand-update-one-without-location.input';
import { ClientUpdateOneWithoutLocationInput } from '../client/client-update-one-without-location.input';

@InputType()
export class LocationUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    location?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    address?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ErrandUpdateOneWithoutLocationInput, {nullable:true})
    errand?: ErrandUpdateOneWithoutLocationInput;

    @Field(() => ClientUpdateOneWithoutLocationInput, {nullable:true})
    client?: ClientUpdateOneWithoutLocationInput;
}
