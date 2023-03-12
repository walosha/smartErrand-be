import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutErrandInput } from './service-update-without-errand.input';

@InputType()
export class ServiceUpdateWithWhereUniqueWithoutErrandInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: ServiceWhereUniqueInput;

    @Field(() => ServiceUpdateWithoutErrandInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutErrandInput)
    data!: ServiceUpdateWithoutErrandInput;
}
