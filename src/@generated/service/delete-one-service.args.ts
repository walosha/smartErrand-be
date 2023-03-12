import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneServiceArgs {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: ServiceWhereUniqueInput;
}
