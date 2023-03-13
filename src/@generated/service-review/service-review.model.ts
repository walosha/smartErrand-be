import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { RATING } from '../prisma/rating.enum';
import { Service } from '../service/service.model';

@ObjectType()
export class ServiceReview {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    User!: string;

    @Field(() => String, {nullable:false})
    serviceId!: string;

    @Field(() => String, {nullable:false})
    comments!: string;

    @Field(() => RATING, {nullable:false,defaultValue:'ZERO'})
    Rating!: keyof typeof RATING;

    @Field(() => String, {nullable:false})
    Photos!: string;

    @Field(() => Service, {nullable:false})
    service?: Service;
}
