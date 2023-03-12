import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { ServiceRelationFilter } from '../service/service-relation-filter.input';
import { EnumRATINGFilter } from '../prisma/enum-rating-filter.input';

@InputType()
export class ServiceReviewWhereInput {

    @Field(() => [ServiceReviewWhereInput], {nullable:true})
    AND?: Array<ServiceReviewWhereInput>;

    @Field(() => [ServiceReviewWhereInput], {nullable:true})
    OR?: Array<ServiceReviewWhereInput>;

    @Field(() => [ServiceReviewWhereInput], {nullable:true})
    NOT?: Array<ServiceReviewWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    User?: StringFilter;

    @Field(() => ServiceRelationFilter, {nullable:true})
    service?: ServiceRelationFilter;

    @Field(() => StringFilter, {nullable:true})
    serviceId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    comments?: StringFilter;

    @Field(() => EnumRATINGFilter, {nullable:true})
    Rating?: EnumRATINGFilter;

    @Field(() => StringFilter, {nullable:true})
    Photos?: StringFilter;
}
