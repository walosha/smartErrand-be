import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ErrandUpdateOneRequiredWithoutCategoriesNestedInput } from '../errand/errand-update-one-required-without-categories-nested.input';
import { ClientUpdateOneRequiredWithoutCategoriesNestedInput } from '../client/client-update-one-required-without-categories-nested.input';

@InputType()
export class ServiceUpdateWithoutServiceReviewInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    startLocation?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    endLocation?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startTime?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    endTime?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ErrandUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    errand?: ErrandUpdateOneRequiredWithoutCategoriesNestedInput;

    @Field(() => ClientUpdateOneRequiredWithoutCategoriesNestedInput, {nullable:true})
    client?: ClientUpdateOneRequiredWithoutCategoriesNestedInput;
}
