import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { Type } from 'class-transformer';
import { ServiceUpdateWithoutClientInput } from './service-update-without-client.input';
import { ServiceCreateWithoutClientInput } from './service-create-without-client.input';

@InputType()
export class ServiceUpsertWithWhereUniqueWithoutClientInput {

    @Field(() => ServiceWhereUniqueInput, {nullable:false})
    @Type(() => ServiceWhereUniqueInput)
    where!: ServiceWhereUniqueInput;

    @Field(() => ServiceUpdateWithoutClientInput, {nullable:false})
    @Type(() => ServiceUpdateWithoutClientInput)
    update!: ServiceUpdateWithoutClientInput;

    @Field(() => ServiceCreateWithoutClientInput, {nullable:false})
    @Type(() => ServiceCreateWithoutClientInput)
    create!: ServiceCreateWithoutClientInput;
}
