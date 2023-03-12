import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RATING } from './rating.enum';

@InputType()
export class EnumRATINGFieldUpdateOperationsInput {

    @Field(() => RATING, {nullable:true})
    set?: keyof typeof RATING;
}
