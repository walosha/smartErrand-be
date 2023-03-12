import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutClientInput } from './service-create-without-client.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutClientInput } from './service-create-or-connect-without-client.input';
import { ServiceUpsertWithWhereUniqueWithoutClientInput } from './service-upsert-with-where-unique-without-client.input';
import { ServiceCreateManyClientInputEnvelope } from './service-create-many-client-input-envelope.input';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateWithWhereUniqueWithoutClientInput } from './service-update-with-where-unique-without-client.input';
import { ServiceUpdateManyWithWhereWithoutClientInput } from './service-update-many-with-where-without-client.input';
import { ServiceScalarWhereInput } from './service-scalar-where.input';

@InputType()
export class ServiceUpdateManyWithoutClientInput {

    @Field(() => [ServiceCreateWithoutClientInput], {nullable:true})
    @Type(() => ServiceCreateWithoutClientInput)
    create?: Array<ServiceCreateWithoutClientInput>;

    @Field(() => [ServiceCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutClientInput>;

    @Field(() => [ServiceUpsertWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => ServiceUpsertWithWhereUniqueWithoutClientInput)
    upsert?: Array<ServiceUpsertWithWhereUniqueWithoutClientInput>;

    @Field(() => ServiceCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyClientInputEnvelope)
    createMany?: ServiceCreateManyClientInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    set?: Array<ServiceWhereUniqueInput>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    disconnect?: Array<ServiceWhereUniqueInput>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    delete?: Array<ServiceWhereUniqueInput>;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: Array<ServiceWhereUniqueInput>;

    @Field(() => [ServiceUpdateWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => ServiceUpdateWithWhereUniqueWithoutClientInput)
    update?: Array<ServiceUpdateWithWhereUniqueWithoutClientInput>;

    @Field(() => [ServiceUpdateManyWithWhereWithoutClientInput], {nullable:true})
    @Type(() => ServiceUpdateManyWithWhereWithoutClientInput)
    updateMany?: Array<ServiceUpdateManyWithWhereWithoutClientInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    @Type(() => ServiceScalarWhereInput)
    deleteMany?: Array<ServiceScalarWhereInput>;
}
