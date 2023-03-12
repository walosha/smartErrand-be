import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientWhereUniqueInput } from './client-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueClientArgs {

    @Field(() => ClientWhereUniqueInput, {nullable:false})
    @Type(() => ClientWhereUniqueInput)
    where!: ClientWhereUniqueInput;
}
