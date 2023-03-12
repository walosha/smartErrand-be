import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceCreateWithoutClientInput } from './service-create-without-client.input';

@InputType()
export class ServiceCreateOrConnectWithoutClientInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: ServiceWhereUniqueInput;

    @Field(() => ServiceCreateWithoutClientInput, {nullable:false})
    @Type(() => ServiceCreateWithoutClientInput)
    create!: ServiceCreateWithoutClientInput;
}
