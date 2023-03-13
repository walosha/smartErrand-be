import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumRATINGFieldUpdateOperationsInput } from '../prisma/enum-rating-field-update-operations.input';
import { ServiceUpdateOneRequiredWithoutServiceReviewNestedInput } from '../service/service-update-one-required-without-service-review-nested.input';

@InputType()
export class ServiceReviewUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    User?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comments?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRATINGFieldUpdateOperationsInput, {nullable:true})
    Rating?: EnumRATINGFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Photos?: StringFieldUpdateOperationsInput;

    @Field(() => ServiceUpdateOneRequiredWithoutServiceReviewNestedInput, {nullable:true})
    service?: ServiceUpdateOneRequiredWithoutServiceReviewNestedInput;
}
