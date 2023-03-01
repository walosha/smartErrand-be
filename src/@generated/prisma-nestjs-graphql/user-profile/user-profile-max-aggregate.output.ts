import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserProfileMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;
}
