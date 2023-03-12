import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class ServiceCreateManyClientInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    errandId!: string;

    @Field(() => Float, {nullable:false})
    startLocation!: number;

    @Field(() => Float, {nullable:false})
    endLocation!: number;

    @Field(() => Date, {nullable:false})
    startTime!: Date | string;

    @Field(() => Date, {nullable:false})
    endTime!: Date | string;
}
