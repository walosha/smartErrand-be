import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ServiceUpdateOneRequiredWithoutServiceReviewInput } from '../service/service-update-one-required-without-service-review.input';
import { EnumRATINGFieldUpdateOperationsInput } from '../prisma/enum-rating-field-update-operations.input';

@InputType()
export class ServiceReviewUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    User?: StringFieldUpdateOperationsInput;

    @Field(() => ServiceUpdateOneRequiredWithoutServiceReviewInput, {nullable:true})
    service?: ServiceUpdateOneRequiredWithoutServiceReviewInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comments?: StringFieldUpdateOperationsInput;

    @Field(() => EnumRATINGFieldUpdateOperationsInput, {nullable:true})
    Rating?: EnumRATINGFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    Photos?: StringFieldUpdateOperationsInput;
}
