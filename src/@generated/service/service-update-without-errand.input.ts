import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ClientUpdateOneRequiredWithoutCategoriesInput } from '../client/client-update-one-required-without-categories.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { ServiceReviewUpdateOneWithoutServiceInput } from '../service-review/service-review-update-one-without-service.input';

@InputType()
export class ServiceUpdateWithoutErrandInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => ClientUpdateOneRequiredWithoutCategoriesInput, {nullable:true})
    client?: ClientUpdateOneRequiredWithoutCategoriesInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    startLocation?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    endLocation?: FloatFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    startTime?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    endTime?: DateTimeFieldUpdateOperationsInput;

    @Field(() => ServiceReviewUpdateOneWithoutServiceInput, {nullable:true})
    serviceReview?: ServiceReviewUpdateOneWithoutServiceInput;
}
