import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ErrandCreateInput } from './errand-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneErrandArgs {

    @Field(() => ErrandCreateInput, {nullable:false})
    @Type(() => ErrandCreateInput)
    data!: ErrandCreateInput;
}
