import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientWhereInput } from './client-where.input';
import { Type } from 'class-transformer';
import { ClientOrderByWithRelationInput } from './client-order-by-with-relation.input';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClientCountAggregateInput } from './client-count-aggregate.input';
import { ClientMinAggregateInput } from './client-min-aggregate.input';
import { ClientMaxAggregateInput } from './client-max-aggregate.input';

@ArgsType()
export class ClientAggregateArgs {

    @Field(() => ClientWhereInput, {nullable:true})
    @Type(() => ClientWhereInput)
    where?: ClientWhereInput;

    @Field(() => [ClientOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClientOrderByWithRelationInput>;

    @Field(() => ClientWhereUniqueInput, {nullable:true})
    cursor?: ClientWhereUniqueInput;

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
