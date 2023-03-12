import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutClientInput } from './service-create-without-client.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutClientInput } from './service-create-or-connect-without-client.input';
import { ServiceCreateManyClientInputEnvelope } from './service-create-many-client-input-envelope.input';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceCreateNestedManyWithoutClientInput {

    @Field(() => [ServiceCreateWithoutClientInput], {nullable:true})
    @Type(() => ServiceCreateWithoutClientInput)
    create?: Array<ServiceCreateWithoutClientInput>;

    @Field(() => [ServiceCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutClientInput>;

    @Field(() => ServiceCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyClientInputEnvelope)
    createMany?: ServiceCreateManyClientInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: Array<ServiceWhereUniqueInput>;
}
