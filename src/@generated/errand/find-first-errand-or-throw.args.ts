import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ErrandWhereInput } from './errand-where.input';
import { Type } from 'class-transformer';
import { ErrandOrderByWithRelationInput } from './errand-order-by-with-relation.input';
import { ErrandWhereUniqueInput } from './errand-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ErrandScalarFieldEnum } from './errand-scalar-field.enum';

@ArgsType()
export class FindFirstErrandOrThrowArgs {

    @Field(() => ErrandWhereInput, {nullable:true})
    @Type(() => ErrandWhereInput)
    where?: ErrandWhereInput;

    @Field(() => [ErrandOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ErrandOrderByWithRelationInput>;

    @Field(() => ErrandWhereUniqueInput, {nullable:true})
    cursor?: ErrandWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ErrandScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ErrandScalarFieldEnum>;
}
