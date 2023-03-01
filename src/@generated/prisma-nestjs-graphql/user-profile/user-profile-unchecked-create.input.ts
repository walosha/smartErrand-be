import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class UserProfileUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;
}
