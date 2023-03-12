import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LocationWhereInput } from './location-where.input';
import { Type } from 'class-transformer';
import { LocationOrderByWithRelationInput } from './location-order-by-with-relation.input';
import { LocationWhereUniqueInput } from './location-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LocationScalarFieldEnum } from './location-scalar-field.enum';

@ArgsType()
export class FindFirstLocationArgs {

    @Field(() => LocationWhereInput, {nullable:true})
    @Type(() => LocationWhereInput)
    where?: LocationWhereInput;

    @Field(() => [LocationOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LocationOrderByWithRelationInput>;

    @Field(() => LocationWhereUniqueInput, {nullable:true})
    cursor?: LocationWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LocationScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LocationScalarFieldEnum>;
}
