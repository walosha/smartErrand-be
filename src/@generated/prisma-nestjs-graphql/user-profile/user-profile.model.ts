import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { User } from '../user/user.model';

@ObjectType()
export class UserProfile {

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => String, {nullable:false})
    id!: string;
}
