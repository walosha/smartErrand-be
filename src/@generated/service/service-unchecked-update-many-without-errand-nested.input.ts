import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutErrandInput } from './service-create-without-errand.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutErrandInput } from './service-create-or-connect-without-errand.input';
import { ServiceUpsertWithWhereUniqueWithoutErrandInput } from './service-upsert-with-where-unique-without-errand.input';
import { ServiceCreateManyErrandInputEnvelope } from './service-create-many-errand-input-envelope.input';
import { ServiceWhereUniqueInput } from './service-where-unique.input';
import { ServiceUpdateWithWhereUniqueWithoutErrandInput } from './service-update-with-where-unique-without-errand.input';
import { ServiceUpdateManyWithWhereWithoutErrandInput } from './service-update-many-with-where-without-errand.input';
import { ServiceScalarWhereInput } from './service-scalar-where.input';

@InputType()
export class ServiceUncheckedUpdateManyWithoutErrandNestedInput {

    @Field(() => [ServiceCreateWithoutErrandInput], {nullable:true})
    @Type(() => ServiceCreateWithoutErrandInput)
    create?: Array<ServiceCreateWithoutErrandInput>;

    @Field(() => [ServiceCreateOrConnectWithoutErrandInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutErrandInput)
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutErrandInput>;

    @Field(() => [ServiceUpsertWithWhereUniqueWithoutErrandInput], {nullable:true})
    @Type(() => ServiceUpsertWithWhereUniqueWithoutErrandInput)
    upsert?: Array<ServiceUpsertWithWhereUniqueWithoutErrandInput>;

    @Field(() => ServiceCreateManyErrandInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyErrandInputEnvelope)
    createMany?: ServiceCreateManyErrandInputEnvelope;

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

    @Field(() => [ServiceUpdateWithWhereUniqueWithoutErrandInput], {nullable:true})
    @Type(() => ServiceUpdateWithWhereUniqueWithoutErrandInput)
    update?: Array<ServiceUpdateWithWhereUniqueWithoutErrandInput>;

    @Field(() => [ServiceUpdateManyWithWhereWithoutErrandInput], {nullable:true})
    @Type(() => ServiceUpdateManyWithWhereWithoutErrandInput)
    updateMany?: Array<ServiceUpdateManyWithWhereWithoutErrandInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    @Type(() => ServiceScalarWhereInput)
    deleteMany?: Array<ServiceScalarWhereInput>;
}
