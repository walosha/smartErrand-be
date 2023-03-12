import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientWhereInput } from './client-where.input';
import { Type } from 'class-transformer';
import { ClientOrderByWithAggregationInput } from './client-order-by-with-aggregation.input';
import { ClientScalarFieldEnum } from './client-scalar-field.enum';
import { ClientScalarWhereWithAggregatesInput } from './client-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { ClientCountAggregateInput } from './client-count-aggregate.input';
import { ClientMinAggregateInput } from './client-min-aggregate.input';
import { ClientMaxAggregateInput } from './client-max-aggregate.input';

@ArgsType()
export class ClientGroupByArgs {

    @Field(() => ClientWhereInput, {nullable:true})
    @Type(() => ClientWhereInput)
    where?: ClientWhereInput;

    @Field(() => [ClientOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ClientOrderByWithAggregationInput>;

    @Field(() => [ClientScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ClientScalarFieldEnum>;

    @Field(() => ClientScalarWhereWithAggregatesInput, {nullable:true})
    having?: ClientScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => ClientCountAggregateInput, {nullable:true})
    _count?: ClientCountAggregateInput;

    @Field(() => ClientMinAggregateInput, {nullable:true})
    _min?: ClientMinAggregateInput;

    @Field(() => ClientMaxAggregateInput, {nullable:true})
    _max?: ClientMaxAggregateInput;
}
