import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateManyErrandInput } from './service-create-many-errand.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceCreateManyErrandInputEnvelope {

    @Field(() => [ServiceCreateManyErrandInput], {nullable:false})
    @Type(() => ServiceCreateManyErrandInput)
    data!: Array<ServiceCreateManyErrandInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
