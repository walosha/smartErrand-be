import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ErrandWhereInput } from './errand-where.input';

@InputType()
export class ErrandRelationFilter {

    @Field(() => ErrandWhereInput, {nullable:true})
    is?: ErrandWhereInput;

    @Field(() => ErrandWhereInput, {nullable:true})
    isNot?: ErrandWhereInput;
}
