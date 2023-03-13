import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ErrandRelationFilter } from '../errand/errand-relation-filter.input';
import { ClientRelationFilter } from '../client/client-relation-filter.input';
import { ServiceReviewRelationFilter } from '../service-review/service-review-relation-filter.input';

@InputType()
export class ServiceWhereInput {

    @Field(() => [ServiceWhereInput], {nullable:true})
    AND?: Array<ServiceWhereInput>;

    @Field(() => [ServiceWhereInput], {nullable:true})
    OR?: Array<ServiceWhereInput>;

    @Field(() => [ServiceWhereInput], {nullable:true})
    NOT?: Array<ServiceWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    errandId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    clientId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    startLocation?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    endLocation?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startTime?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endTime?: DateTimeFilter;

    @Field(() => ErrandRelationFilter, {nullable:true})
    errand?: ErrandRelationFilter;

    @Field(() => ClientRelationFilter, {nullable:true})
    client?: ClientRelationFilter;

    @Field(() => ServiceReviewRelationFilter, {nullable:true})
    serviceReview?: ServiceReviewRelationFilter;
}
