import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateWithoutErrandInput } from './service-create-without-errand.input';
import { Type } from 'class-transformer';
import { ServiceCreateOrConnectWithoutErrandInput } from './service-create-or-connect-without-errand.input';
import { ServiceCreateManyErrandInputEnvelope } from './service-create-many-errand-input-envelope.input';
import { ServiceWhereUniqueInput } from './service-where-unique.input';

@InputType()
export class ServiceUncheckedCreateNestedManyWithoutErrandInput {

    @Field(() => [ServiceCreateWithoutErrandInput], {nullable:true})
    @Type(() => ServiceCreateWithoutErrandInput)
    create?: Array<ServiceCreateWithoutErrandInput>;

    @Field(() => [ServiceCreateOrConnectWithoutErrandInput], {nullable:true})
    @Type(() => ServiceCreateOrConnectWithoutErrandInput)
    connectOrCreate?: Array<ServiceCreateOrConnectWithoutErrandInput>;

    @Field(() => ServiceCreateManyErrandInputEnvelope, {nullable:true})
    @Type(() => ServiceCreateManyErrandInputEnvelope)
    createMany?: ServiceCreateManyErrandInputEnvelope;

    @Field(() => [ServiceWhereUniqueInput], {nullable:true})
    @Type(() => ServiceWhereUniqueInput)
    connect?: Array<ServiceWhereUniqueInput>;
}
