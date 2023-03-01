import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserProfileCreateManyInput {

    @Field(() => String, {nullable:false})
    id!: string;
}
