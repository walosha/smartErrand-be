import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutErrandInput } from './service-update-without-errand.input';
import { ServiceCreateWithoutErrandInput } from './service-create-without-errand.input';

@InputType()
export class ServiceUpsertWithWhereUniqueWithoutErrandInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: ServiceWhereUniqueInput;

    @Field(() => ServiceUpdateWithoutErrandInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutErrandInput)
    update!: ServiceUpdateWithoutErrandInput;

    @Field(() => ServiceCreateWithoutErrandInput, {nullable:false})
    @Type(() => ServiceCreateWithoutErrandInput)
    create!: ServiceCreateWithoutErrandInput;
}
