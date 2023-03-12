import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ErrandCreateManyInput } from './errand-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyErrandArgs {

    @Field(() => [ErrandCreateManyInput], {nullable:false})
    @Type(() => ErrandCreateManyInput)
    data!: Array<ErrandCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
