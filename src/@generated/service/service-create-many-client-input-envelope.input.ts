import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServiceCreateManyClientInput } from './service-create-many-client.input';
import { Type } from 'class-transformer';

@InputType()
export class ServiceCreateManyClientInputEnvelope {

    @Field(() => [ServiceCreateManyClientInput], {nullable:false})
    @Type(() => ServiceCreateManyClientInput)
    data!: Array<ServiceCreateManyClientInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
