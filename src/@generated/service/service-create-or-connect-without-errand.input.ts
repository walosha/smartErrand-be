import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutErrandInput } from './service-create-without-errand.input';

@InputType()
export class ServiceCreateOrConnectWithoutErrandInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: ServiceWhereUniqueInput;

    @Field(() => ServiceCreateWithoutErrandInput, {nullable:false})
    @Type(() => ServiceCreateWithoutErrandInput)
    create!: ServiceCreateWithoutErrandInput;
}
