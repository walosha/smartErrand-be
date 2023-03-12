import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClientWhereInput } from './client-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyClientArgs {

    @Field(() => ClientWhereInput, {nullable:true})
    @Type(() => ClientWhereInput)
    where?: ClientWhereInput;
}
